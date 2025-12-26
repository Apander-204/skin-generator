import { useEffect, useRef, useState } from "react";
import { ReactSkinview3d } from "react-skinview3d";
import type { ChangeEvent, FC } from "react";
import './Skin.css';

interface SkinProps {
    newLayer: (string | null);
}

const Skin:FC<SkinProps> = ({ newLayer }) => {

    const [skin, setSkin] = useState<string>("/default.png");
    const inputRef = useRef<null | HTMLInputElement>(null);
    const downloadRef = useRef<null | HTMLAnchorElement>(null);

    useEffect(() => {
        updateSkin();
    }, [newLayer]);

    const updateSkin = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const context = canvas.getContext('2d');

        if(!context) return;
        if(!newLayer) return;

        const baseImg = new Image();
        baseImg.src = skin;

        baseImg.onload = () => {
            context.drawImage(baseImg, 0, 0);
            const layerImg = new Image();
            layerImg.src = newLayer;

            layerImg.onload = () => {
                context.drawImage(layerImg, 0, 0);
                setSkin(canvas.toDataURL());
            };
        };
    };

    const importFile = () => {
        if (inputRef.current == null) return;
        inputRef.current.click();
    };

    const uploadSkin = (e:ChangeEvent<HTMLInputElement>):void => {

        if (!e.target || !e.target.files) return;
        console.log(e.target.files);
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