import { useEffect, useState } from "react";
import { ReactSkinview3d } from "react-skinview3d";
import type { FC } from "react";

interface SkinProps {
    newLayer: (string | null);
}

const Skin:FC<SkinProps> = ({ newLayer }) => {

    const [skin, setSkin] = useState("../public/default.png");

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
    }

    return(
        <div style={{ width: '500px', height: '500px' }}>
              <ReactSkinview3d
                skinUrl={skin}
                height={500}
                width={500}
              />
        </div>
    );
}

export default Skin;