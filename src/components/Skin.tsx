import { useEffect, useRef, useState } from "react";
import { ReactSkinview3d } from "react-skinview3d";
import type { ChangeEvent, FC } from "react";
import './Skin.css';

interface SkinProps {
    baseLayer: (string | null);
    hairLayer: (string | null);
    eyesLayer: (string | null);
    hatLayer: (string | null);
    bodyLayer: (string | null);
    pantsLayer: (string | null);
    bootsLayer: (string | null);
}

const Skin:FC<SkinProps> = ({ baseLayer, hairLayer, eyesLayer, hatLayer, bodyLayer, pantsLayer, bootsLayer }) => {

    const [skin, setSkin] = useState<string>("/base/1.png");
    const inputRef = useRef<null | HTMLInputElement>(null);
    const downloadRef = useRef<null | HTMLAnchorElement>(null);

    useEffect(() => {
        updateSkin();
    }, [baseLayer, hairLayer, eyesLayer, hatLayer, bodyLayer, pantsLayer, bootsLayer]);

    const updateSkin = async () => {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const context = canvas.getContext('2d');

        if(!context) return;
        
        const drawImage: (path: string) => Promise<HTMLImageElement> = (path: string) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = path;
                img.onload = () => resolve(img);
                img.onerror = reject;
            });
        }

        context.clearRect(0, 0, canvas.width, canvas.height);

        const layers = [
            baseLayer,
            eyesLayer,
            hairLayer,
            hatLayer,
            bodyLayer,
            pantsLayer,
            bootsLayer,
        ];

        for (const layer of layers) {
            if (layer) {
                const img = await drawImage(layer);
                context.drawImage(img, 0, 0);
            }
        }

        setSkin(canvas.toDataURL());

    };

    const importFile = () => {
        if (inputRef.current == null) return;
        inputRef.current.click();
    };

    const uploadSkin = (e:ChangeEvent<HTMLInputElement>): void => {
        if (!e.target || !e.target.files) return;
        setSkin(URL.createObjectURL(e.target.files[0]));
    };

    const downloadSkin = (): void => {
        if (downloadRef.current == null) return;

        downloadRef.current.href = skin;
        downloadRef.current.download = 'skin.png';
        downloadRef.current?.click();
    }

    return(
        <div className="skin">
              <ReactSkinview3d
                skinUrl={skin}
                height={500}
                width={500}
              />
              <a ref={downloadRef} className="download-a"></a>
              <button className="upload-but" onClick={importFile}>Upload your skin
                <input type="file" onChange={(e) => uploadSkin(e)} ref={inputRef}/>
              </button>
              <button className="download-but" onClick={downloadSkin}>Download</button>
        </div>
    );
}

export default Skin;