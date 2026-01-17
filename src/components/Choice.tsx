import type { FC } from "react";
import './Choice.css';

interface ChoiceProps {
    menu: string;
    setBaseLayer: (value: string | null) => void;
    setHairLayer: (value: string | null) => void;
    setEyesLayer: (value: string | null) => void;
    setHatLayer: (value: string | null) => void;
    setBodyLayer: (value: string | null) => void;
    setPantsLayer: (value: string | null) => void;
    setBootsLayer: (value: string | null) => void;

    baseLayer: (string | null);
    hairLayer: (string | null);
    eyesLayer: (string | null);
    hatLayer: (string | null);
    bodyLayer: (string | null);
    pantsLayer: (string | null);
    bootsLayer: (string | null);
}

const Choice:FC<ChoiceProps> = ({ menu, setBaseLayer, setHairLayer, setEyesLayer, setHatLayer, setBodyLayer, setPantsLayer, setBootsLayer,
    baseLayer, hairLayer, eyesLayer, hatLayer, bodyLayer, pantsLayer, bootsLayer
 }) =>  {

    type Skins = {
        name: string;
        path: string;
        preview_path: string;
        category: string;
        id: number;
    }

    const skins: Skins[] = [
        {name: "1", path: "/base/1.png", preview_path: "/previews/base/1.jpg", category: "Base", id: 1},
        {name: "2", path: "/base/2.png", preview_path: "/previews/base/2.jpg", category: "Base", id: 2},
        {name: "3", path: "/base/3.png", preview_path: "/previews/base/3.jpg", category: "Base", id: 3},
        {name: "4", path: "/base/4.png", preview_path: "/previews/base/4.jpg", category: "Base", id: 4},
        {name: "5", path: "/base/5.png", preview_path: "/previews/base/5.jpg", category: "Base", id: 5},
        {name: "6", path: "/base/6.png", preview_path: "/previews/base/6.jpg", category: "Base", id: 6},
        {name: "7", path: "/base/7.png", preview_path: "/previews/base/7.jpg", category: "Base", id: 7},

        {name: "7", path: "/hair/1.png", preview_path: "/previews/hair/1.jpg", category: "Hair", id: 7},
        {name: "7", path: "/hair/2.png", preview_path: "/previews/hair/2.jpg", category: "Hair", id: 7},
        {name: "7", path: "/hair/3.png", preview_path: "/previews/hair/3.jpg", category: "Hair", id: 7},
        {name: "7", path: "/hair/4.png", preview_path: "/previews/hair/4.jpg", category: "Hair", id: 7},
        {name: "7", path: "/hair/5.png", preview_path: "/previews/hair/5.jpg", category: "Hair", id: 7},
        {name: "7", path: "/hair/6.png", preview_path: "/previews/hair/6.jpg", category: "Hair", id: 7},
        {name: "7", path: "/hair/7.png", preview_path: "/previews/hair/7.jpg", category: "Hair", id: 7},
        {name: "7", path: "/hair/8.png", preview_path: "/previews/hair/8.jpg", category: "Hair", id: 7},
        {name: "7", path: "/hair/9.png", preview_path: "/previews/hair/9.jpg", category: "Hair", id: 7},
        {name: "7", path: "/hair/10.png", preview_path: "/previews/hair/10.jpg", category: "Hair", id: 7},
        {name: "7", path: "/hair/11.png", preview_path: "/previews/hair/11.jpg", category: "Hair", id: 7},
        {name: "7", path: "/hair/12.png", preview_path: "/previews/hair/12.jpg", category: "Hair", id: 7},
        {name: "7", path: "/hair/13.png", preview_path: "/previews/hair/13.jpg", category: "Hair", id: 7},

        {name: "7", path: "/eyes/1.png", preview_path: "/previews/eyes/1.jpg", category: "Eyes", id: 7},
        {name: "7", path: "/eyes/2.png", preview_path: "/previews/eyes/2.jpg", category: "Eyes", id: 7},
        {name: "7", path: "/eyes/3.png", preview_path: "/previews/eyes/3.jpg", category: "Eyes", id: 7},
        {name: "7", path: "/eyes/4.png", preview_path: "/previews/eyes/4.jpg", category: "Eyes", id: 7},
        {name: "7", path: "/eyes/5.png", preview_path: "/previews/eyes/5.jpg", category: "Eyes", id: 7},
        {name: "7", path: "/eyes/6.png", preview_path: "/previews/eyes/6.jpg", category: "Eyes", id: 7},
        {name: "7", path: "/eyes/7.png", preview_path: "/previews/eyes/7.jpg", category: "Eyes", id: 7},
        {name: "7", path: "/eyes/8.png", preview_path: "/previews/eyes/8.jpg", category: "Eyes", id: 7},
        {name: "7", path: "/eyes/9.png", preview_path: "/previews/eyes/9.jpg", category: "Eyes", id: 7},
        {name: "7", path: "/eyes/10.png", preview_path: "/previews/eyes/10.jpg", category: "Eyes", id: 7},
        {name: "7", path: "/eyes/11.png", preview_path: "/previews/eyes/11.jpg", category: "Eyes", id: 7},
        {name: "7", path: "/eyes/12.png", preview_path: "/previews/eyes/12.jpg", category: "Eyes", id: 7},

        {name: "1", path: "/hat/1.png", preview_path: "/previews/hat/1.jpg", category: "Hat", id: 8},
        {name: "2", path: "/hat/2.png", preview_path: "/previews/hat/2.jpg", category: "Hat", id: 9},
        {name: "3", path: "/hat/3.png", preview_path: "/previews/hat/3.jpg", category: "Hat", id: 10},
        {name: "3", path: "/hat/4.png", preview_path: "/previews/hat/4.jpg", category: "Hat", id: 10},
        {name: "3", path: "/hat/5.png", preview_path: "/previews/hat/5.jpg", category: "Hat", id: 10},
        {name: "3", path: "/hat/6.png", preview_path: "/previews/hat/6.jpg", category: "Hat", id: 10},
        {name: "3", path: "/hat/7.png", preview_path: "/previews/hat/7.jpg", category: "Hat", id: 10},
        {name: "3", path: "/hat/8.png", preview_path: "/previews/hat/8.jpg", category: "Hat", id: 10},
        {name: "3", path: "/hat/9.png", preview_path: "/previews/hat/9.jpg", category: "Hat", id: 10},
        {name: "3", path: "/hat/10.png", preview_path: "/previews/hat/10.jpg", category: "Hat", id: 10},
        {name: "3", path: "/hat/11.png", preview_path: "/previews/hat/11.jpg", category: "Hat", id: 10},
        {name: "3", path: "/hat/12.png", preview_path: "/previews/hat/12.jpg", category: "Hat", id: 10},
        {name: "3", path: "/hat/13.png", preview_path: "/previews/hat/13.jpg", category: "Hat", id: 10},
        {name: "3", path: "/hat/14.png", preview_path: "/previews/hat/14.jpg", category: "Hat", id: 10},
        {name: "3", path: "/hat/15.png", preview_path: "/previews/hat/15.jpg", category: "Hat", id: 10},

        {name: "1", path: "/body/1.png", preview_path: "/previews/body/1.jpg", category: "Body", id: 11},
        {name: "2", path: "/body/2.png", preview_path: "/previews/body/2.jpg", category: "Body", id: 11},
        {name: "3", path: "/body/3.png", preview_path: "/previews/body/3.jpg", category: "Body", id: 11},
        {name: "4", path: "/body/4.png", preview_path: "/previews/body/4.jpg", category: "Body", id: 11},
        {name: "1", path: "/body/5.png", preview_path: "/previews/body/5.jpg", category: "Body", id: 11},
        {name: "1", path: "/body/6.png", preview_path: "/previews/body/6.jpg", category: "Body", id: 11},
        {name: "1", path: "/body/7.png", preview_path: "/previews/body/7.jpg", category: "Body", id: 11},
        {name: "1", path: "/body/8.png", preview_path: "/previews/body/8.jpg", category: "Body", id: 11},
        {name: "1", path: "/body/9.png", preview_path: "/previews/body/9.jpg", category: "Body", id: 11},
        {name: "1", path: "/body/10.png", preview_path: "/previews/body/10.jpg", category: "Body", id: 11},
        {name: "1", path: "/body/11.png", preview_path: "/previews/body/11.jpg", category: "Body", id: 11},
        {name: "1", path: "/body/12.png", preview_path: "/previews/body/12.jpg", category: "Body", id: 11},
        {name: "1", path: "/body/13.png", preview_path: "/previews/body/13.jpg", category: "Body", id: 11},
        {name: "1", path: "/body/14.png", preview_path: "/previews/body/14.jpg", category: "Body", id: 11},
        {name: "1", path: "/body/15.png", preview_path: "/previews/body/15.jpg", category: "Body", id: 11},
        {name: "1", path: "/body/16.png", preview_path: "/previews/body/16.jpg", category: "Body", id: 11},
        {name: "1", path: "/body/17.png", preview_path: "/previews/body/17.jpg", category: "Body", id: 11},
        {name: "1", path: "/body/18.png", preview_path: "/previews/body/18.jpg", category: "Body", id: 11},
        {name: "1", path: "/body/19.png", preview_path: "/previews/body/19.jpg", category: "Body", id: 11},
        {name: "1", path: "/body/20.png", preview_path: "/previews/body/20.jpg", category: "Body", id: 11},

        {name: "1", path: "/pants/1.png", preview_path: "/previews/pants/1.jpg", category: "Pants", id: 11},
        {name: "1", path: "/pants/2.png", preview_path: "/previews/pants/2.jpg", category: "Pants", id: 11},
        {name: "1", path: "/pants/3.png", preview_path: "/previews/pants/3.jpg", category: "Pants", id: 11},
        {name: "1", path: "/pants/4.png", preview_path: "/previews/pants/4.jpg", category: "Pants", id: 11},
        {name: "1", path: "/pants/5.png", preview_path: "/previews/pants/5.jpg", category: "Pants", id: 11},
        {name: "1", path: "/pants/6.png", preview_path: "/previews/pants/6.jpg", category: "Pants", id: 11},
        {name: "1", path: "/pants/7.png", preview_path: "/previews/pants/7.jpg", category: "Pants", id: 11},
        {name: "1", path: "/pants/8.png", preview_path: "/previews/pants/8.jpg", category: "Pants", id: 11},
        {name: "1", path: "/pants/9.png", preview_path: "/previews/pants/9.jpg", category: "Pants", id: 11},
        {name: "1", path: "/pants/10.png", preview_path: "/previews/pants/10.jpg", category: "Pants", id: 11},
        {name: "1", path: "/pants/11.png", preview_path: "/previews/pants/11.jpg", category: "Pants", id: 11},
        {name: "1", path: "/pants/12.png", preview_path: "/previews/pants/12.jpg", category: "Pants", id: 11},
        {name: "1", path: "/pants/13.png", preview_path: "/previews/pants/13.jpg", category: "Pants", id: 11},
        {name: "1", path: "/pants/14.png", preview_path: "/previews/pants/14.jpg", category: "Pants", id: 11},

        {name: "1", path: "/boots/1.png", preview_path: "/previews/boots/1.jpg", category: "Boots", id: 11},
        {name: "1", path: "/boots/2.png", preview_path: "/previews/boots/2.jpg", category: "Boots", id: 11},
        {name: "1", path: "/boots/3.png", preview_path: "/previews/boots/3.jpg", category: "Boots", id: 11},
        {name: "1", path: "/boots/4.png", preview_path: "/previews/boots/4.jpg", category: "Boots", id: 11},
        {name: "1", path: "/boots/5.png", preview_path: "/previews/boots/5.jpg", category: "Boots", id: 11},
        {name: "1", path: "/boots/6.png", preview_path: "/previews/boots/6.jpg", category: "Boots", id: 11},
        {name: "1", path: "/boots/7.png", preview_path: "/previews/boots/7.jpg", category: "Boots", id: 11},
        {name: "1", path: "/boots/8.png", preview_path: "/previews/boots/8.jpg", category: "Boots", id: 11},
        {name: "1", path: "/boots/9.png", preview_path: "/previews/boots/9.jpg", category: "Boots", id: 11},
    ];

    const layersSelect = (path: string) => {
        switch(menu) {
            case "Base":
                setBaseLayer(path);
                break;
            case "Hair":
                setHairLayer(path);
                break;
            case "Eyes":
                setEyesLayer(path);
                break;
            case "Hat":
                setHatLayer(path);
                break;
            case "Body":
                setBodyLayer(path);
                break;
            case "Pants":
                setPantsLayer(path);
                break;
            case "Boots":
                setBootsLayer(path);
                break;
            default:
                break;
        }
    }

    const checkActiveLayer = (skin: Skins) => {
        if(skin.path === baseLayer || skin.path === hairLayer || skin.path === eyesLayer || skin.path === hatLayer || skin.path === bodyLayer || skin.path === pantsLayer || skin.path === bootsLayer) return "active-choice-item";
        else return "choice-item";
    }

    return(
        <div className="choice-menu">
            {skins.filter((skin) => skin.category === menu).map((skin, index) => (
                <div key={index} onClick={() => layersSelect(skin.path)} className={checkActiveLayer(skin)}>
                    <div className="skin-item-preview">
                        <img src={skin.preview_path} alt="" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Choice;