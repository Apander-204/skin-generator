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
        {name: "base_1", path: "/skin-generator/base/1.png", preview_path: "/skin-generator/previews/base/1.jpg", category: "Base", id: 1},
        {name: "base_2", path: "/skin-generator/base/2.png", preview_path: "/skin-generator/previews/base/2.jpg", category: "Base", id: 2},
        {name: "base_3", path: "/skin-generator/base/3.png", preview_path: "/skin-generator/previews/base/3.jpg", category: "Base", id: 3},
        {name: "base_4", path: "/skin-generator/base/4.png", preview_path: "/skin-generator/previews/base/4.jpg", category: "Base", id: 4},
        {name: "base_5", path: "/skin-generator/base/5.png", preview_path: "/skin-generator/previews/base/5.jpg", category: "Base", id: 5},
        {name: "base_6", path: "/skin-generator/base/6.png", preview_path: "/skin-generator/previews/base/6.jpg", category: "Base", id: 6},
        {name: "base_7", path: "/skin-generator/base/7.png", preview_path: "/skin-generator/previews/base/7.jpg", category: "Base", id: 7},
        {name: "base_8", path: "/skin-generator/base/8.png", preview_path: "/skin-generator/previews/base/8.jpg", category: "Base", id: 8},
        {name: "base_9", path: "/skin-generator/base/9.png", preview_path: "/skin-generator/previews/base/9.jpg", category: "Base", id: 9},
        {name: "base_10", path: "/skin-generator/base/10.png", preview_path: "/skin-generator/previews/base/10.jpg", category: "Base", id: 10},
        {name: "base_11", path: "/skin-generator/base/11.png", preview_path: "/skin-generator/previews/base/11.jpg", category: "Base", id: 11},
        {name: "base_12", path: "/skin-generator/base/12.png", preview_path: "/skin-generator/previews/base/12.jpg", category: "Base", id: 12},

        {name: "hair_1", path: "/skin-generator/hair/1.png", preview_path: "/skin-generator/previews/hair/1.jpg", category: "Hair", id: 13},
        {name: "hair_2", path: "/skin-generator/hair/2.png", preview_path: "/skin-generator/previews/hair/2.jpg", category: "Hair", id: 14},
        {name: "hair_3", path: "/skin-generator/hair/3.png", preview_path: "/skin-generator/previews/hair/3.jpg", category: "Hair", id: 15},
        {name: "hair_4", path: "/skin-generator/hair/4.png", preview_path: "/skin-generator/previews/hair/4.jpg", category: "Hair", id: 16},
        {name: "hair_5", path: "/skin-generator/hair/5.png", preview_path: "/skin-generator/previews/hair/5.jpg", category: "Hair", id: 17},
        {name: "hair_6", path: "/skin-generator/hair/6.png", preview_path: "/skin-generator/previews/hair/6.jpg", category: "Hair", id: 18},
        {name: "hair_7", path: "/skin-generator/hair/7.png", preview_path: "/skin-generator/previews/hair/7.jpg", category: "Hair", id: 19},
        {name: "hair_8", path: "/skin-generator/hair/8.png", preview_path: "/skin-generator/previews/hair/8.jpg", category: "Hair", id: 20},
        {name: "hair_9", path: "/skin-generator/hair/9.png", preview_path: "/skin-generator/previews/hair/9.jpg", category: "Hair", id: 21},
        {name: "hair_10", path: "/skin-generator/hair/10.png", preview_path: "/skin-generator/previews/hair/10.jpg", category: "Hair", id: 22},
        {name: "hair_11", path: "/skin-generator/hair/11.png", preview_path: "/skin-generator/previews/hair/11.jpg", category: "Hair", id: 23},
        {name: "hair_12", path: "/skin-generator/hair/12.png", preview_path: "/skin-generator/previews/hair/12.jpg", category: "Hair", id: 24},
        {name: "hair_13", path: "/skin-generator/hair/13.png", preview_path: "/skin-generator/previews/hair/13.jpg", category: "Hair", id: 25},

        {name: "eyes_1", path: "/skin-generator/eyes/1.png", preview_path: "/skin-generator/previews/eyes/1.jpg", category: "Eyes", id: 26},
        {name: "eyes_2", path: "/skin-generator/eyes/2.png", preview_path: "/skin-generator/previews/eyes/2.jpg", category: "Eyes", id: 27},
        {name: "eyes_3", path: "/skin-generator/eyes/3.png", preview_path: "/skin-generator/previews/eyes/3.jpg", category: "Eyes", id: 28},
        {name: "eyes_4", path: "/skin-generator/eyes/4.png", preview_path: "/skin-generator/previews/eyes/4.jpg", category: "Eyes", id: 29},
        {name: "eyes_5", path: "/skin-generator/eyes/5.png", preview_path: "/skin-generator/previews/eyes/5.jpg", category: "Eyes", id: 30},
        {name: "eyes_6", path: "/skin-generator/eyes/6.png", preview_path: "/skin-generator/previews/eyes/6.jpg", category: "Eyes", id: 31},
        {name: "eyes_7", path: "/skin-generator/eyes/7.png", preview_path: "/skin-generator/previews/eyes/7.jpg", category: "Eyes", id: 32},
        {name: "eyes_8", path: "/skin-generator/eyes/8.png", preview_path: "/skin-generator/previews/eyes/8.jpg", category: "Eyes", id: 33},
        {name: "eyes_9", path: "/skin-generator/eyes/9.png", preview_path: "/skin-generator/previews/eyes/9.jpg", category: "Eyes", id: 34},
        {name: "eyes_10", path: "/skin-generator/eyes/10.png", preview_path: "/skin-generator/previews/eyes/10.jpg", category: "Eyes", id: 35},
        {name: "eyes_11", path: "/skin-generator/eyes/11.png", preview_path: "/skin-generator/previews/eyes/11.jpg", category: "Eyes", id: 36},
        {name: "eyes_12", path: "/skin-generator/eyes/12.png", preview_path: "/skin-generator/previews/eyes/12.jpg", category: "Eyes", id: 37},

        {name: "hat_1", path: "/skin-generator/hat/1.png", preview_path: "/skin-generator/previews/hat/1.jpg", category: "Hat", id: 38},
        {name: "hat_2", path: "/skin-generator/hat/2.png", preview_path: "/skin-generator/previews/hat/2.jpg", category: "Hat", id: 39},
        {name: "hat_3", path: "/skin-generator/hat/3.png", preview_path: "/skin-generator/previews/hat/3.jpg", category: "Hat", id: 40},
        {name: "hat_4", path: "/skin-generator/hat/4.png", preview_path: "/skin-generator/previews/hat/4.jpg", category: "Hat", id: 41},
        {name: "hat_5", path: "/skin-generator/hat/5.png", preview_path: "/skin-generator/previews/hat/5.jpg", category: "Hat", id: 42},
        {name: "hat_6", path: "/skin-generator/hat/6.png", preview_path: "/skin-generator/previews/hat/6.jpg", category: "Hat", id: 43},
        {name: "hat_7", path: "/skin-generator/hat/7.png", preview_path: "/skin-generator/previews/hat/7.jpg", category: "Hat", id: 44},
        {name: "hat_8", path: "/skin-generator/hat/8.png", preview_path: "/skin-generator/previews/hat/8.jpg", category: "Hat", id: 45},
        {name: "hat_9", path: "/skin-generator/hat/9.png", preview_path: "/skin-generator/previews/hat/9.jpg", category: "Hat", id: 46},
        {name: "hat_10", path: "/skin-generator/hat/10.png", preview_path: "/skin-generator/previews/hat/10.jpg", category: "Hat", id: 47},
        {name: "hat_11", path: "/skin-generator/hat/11.png", preview_path: "/skin-generator/previews/hat/11.jpg", category: "Hat", id: 48},
        {name: "hat_12", path: "/skin-generator/hat/12.png", preview_path: "/skin-generator/previews/hat/12.jpg", category: "Hat", id: 49},
        {name: "hat_13", path: "/skin-generator/hat/13.png", preview_path: "/skin-generator/previews/hat/13.jpg", category: "Hat", id: 50},
        {name: "hat_14", path: "/skin-generator/hat/14.png", preview_path: "/skin-generator/previews/hat/14.jpg", category: "Hat", id: 51},
        {name: "hat_15", path: "/skin-generator/hat/15.png", preview_path: "/skin-generator/previews/hat/15.jpg", category: "Hat", id: 52},

        {name: "body_1", path: "/skin-generator/body/1.png", preview_path: "/skin-generator/previews/body/1.jpg", category: "Body", id: 53},
        {name: "body_2", path: "/skin-generator/body/2.png", preview_path: "/skin-generator/previews/body/2.jpg", category: "Body", id: 54},
        {name: "body_3", path: "/skin-generator/body/3.png", preview_path: "/skin-generator/previews/body/3.jpg", category: "Body", id: 55},
        {name: "body_4", path: "/skin-generator/body/4.png", preview_path: "/skin-generator/previews/body/4.jpg", category: "Body", id: 56},
        {name: "body_5", path: "/skin-generator/body/5.png", preview_path: "/skin-generator/previews/body/5.jpg", category: "Body", id: 57},
        {name: "body_6", path: "/skin-generator/body/6.png", preview_path: "/skin-generator/previews/body/6.jpg", category: "Body", id: 58},
        {name: "body_7", path: "/skin-generator/body/7.png", preview_path: "/skin-generator/previews/body/7.jpg", category: "Body", id: 59},
        {name: "body_8", path: "/skin-generator/body/8.png", preview_path: "/skin-generator/previews/body/8.jpg", category: "Body", id: 60},
        {name: "body_9", path: "/skin-generator/body/9.png", preview_path: "/skin-generator/previews/body/9.jpg", category: "Body", id: 61},
        {name: "body_10", path: "/skin-generator/body/10.png", preview_path: "/skin-generator/previews/body/10.jpg", category: "Body", id: 62},
        {name: "body_11", path: "/skin-generator/body/11.png", preview_path: "/skin-generator/previews/body/11.jpg", category: "Body", id: 63},
        {name: "body_12", path: "/skin-generator/body/12.png", preview_path: "/skin-generator/previews/body/12.jpg", category: "Body", id: 64},
        {name: "body_13", path: "/skin-generator/body/13.png", preview_path: "/skin-generator/previews/body/13.jpg", category: "Body", id: 65},
        {name: "body_14", path: "/skin-generator/body/14.png", preview_path: "/skin-generator/previews/body/14.jpg", category: "Body", id: 66},
        {name: "body_15", path: "/skin-generator/body/15.png", preview_path: "/skin-generator/previews/body/15.jpg", category: "Body", id: 67},
        {name: "body_16", path: "/skin-generator/body/16.png", preview_path: "/skin-generator/previews/body/16.jpg", category: "Body", id: 68},
        {name: "body_17", path: "/skin-generator/body/17.png", preview_path: "/skin-generator/previews/body/17.jpg", category: "Body", id: 69},
        {name: "body_18", path: "/skin-generator/body/18.png", preview_path: "/skin-generator/previews/body/18.jpg", category: "Body", id: 70},
        {name: "body_19", path: "/skin-generator/body/19.png", preview_path: "/skin-generator/previews/body/19.jpg", category: "Body", id: 71},
        {name: "body_20", path: "/skin-generator/body/20.png", preview_path: "/skin-generator/previews/body/20.jpg", category: "Body", id: 72},

        {name: "pants_1", path: "/skin-generator/pants/1.png", preview_path: "/skin-generator/previews/pants/1.jpg", category: "Pants", id: 73},
        {name: "pants_2", path: "/skin-generator/pants/2.png", preview_path: "/skin-generator/previews/pants/2.jpg", category: "Pants", id: 74},
        {name: "pants_3", path: "/skin-generator/pants/3.png", preview_path: "/skin-generator/previews/pants/3.jpg", category: "Pants", id: 75},
        {name: "pants_4", path: "/skin-generator/pants/4.png", preview_path: "/skin-generator/previews/pants/4.jpg", category: "Pants", id: 76},
        {name: "pants_5", path: "/skin-generator/pants/5.png", preview_path: "/skin-generator/previews/pants/5.jpg", category: "Pants", id: 77},
        {name: "pants_6", path: "/skin-generator/pants/6.png", preview_path: "/skin-generator/previews/pants/6.jpg", category: "Pants", id: 78},
        {name: "pants_7", path: "/skin-generator/pants/7.png", preview_path: "/skin-generator/previews/pants/7.jpg", category: "Pants", id: 79},
        {name: "pants_8", path: "/skin-generator/pants/8.png", preview_path: "/skin-generator/previews/pants/8.jpg", category: "Pants", id: 80},
        {name: "pants_9", path: "/skin-generator/pants/9.png", preview_path: "/skin-generator/previews/pants/9.jpg", category: "Pants", id: 81},
        {name: "pants_10", path: "/skin-generator/pants/10.png", preview_path: "/skin-generator/previews/pants/10.jpg", category: "Pants", id: 82},
        {name: "pants_11", path: "/skin-generator/pants/11.png", preview_path: "/skin-generator/previews/pants/11.jpg", category: "Pants", id: 83},
        {name: "pants_12", path: "/skin-generator/pants/12.png", preview_path: "/skin-generator/previews/pants/12.jpg", category: "Pants", id: 84},
        {name: "pants_13", path: "/skin-generator/pants/13.png", preview_path: "/skin-generator/previews/pants/13.jpg", category: "Pants", id: 85},
        {name: "pants_14", path: "/skin-generator/pants/14.png", preview_path: "/skin-generator/previews/pants/14.jpg", category: "Pants", id: 86},

        {name: "boots_1", path: "/skin-generator/boots/1.png", preview_path: "/skin-generator/previews/boots/1.jpg", category: "Boots", id: 87},
        {name: "boots_2", path: "/skin-generator/boots/2.png", preview_path: "/skin-generator/previews/boots/2.jpg", category: "Boots", id: 88},
        {name: "boots_3", path: "/skin-generator/boots/3.png", preview_path: "/skin-generator/previews/boots/3.jpg", category: "Boots", id: 89},
        {name: "boots_4", path: "/skin-generator/boots/4.png", preview_path: "/skin-generator/previews/boots/4.jpg", category: "Boots", id: 90},
        {name: "boots_5", path: "/skin-generator/boots/5.png", preview_path: "/skin-generator/previews/boots/5.jpg", category: "Boots", id: 91},
        {name: "boots_6", path: "/skin-generator/boots/6.png", preview_path: "/skin-generator/previews/boots/6.jpg", category: "Boots", id: 92},
        {name: "boots_7", path: "/skin-generator/boots/7.png", preview_path: "/skin-generator/previews/boots/7.jpg", category: "Boots", id: 93},
        {name: "boots_8", path: "/skin-generator/boots/8.png", preview_path: "/skin-generator/previews/boots/8.jpg", category: "Boots", id: 94},
        {name: "boots_9", path: "/skin-generator/boots/9.png", preview_path: "/skin-generator/previews/boots/9.jpg", category: "Boots", id: 95},
    ];

    const layersSelect = (path: string) => {
        switch(menu) {
            case "Base":
                setBaseLayer(path);
                break;
            case "Hair":
                path===hairLayer ? setHairLayer(null) : setHairLayer(path);
                break;
            case "Eyes":
                path===eyesLayer ? setEyesLayer(null) : setEyesLayer(path);
                break;
            case "Hat":
                path===hatLayer ? setHatLayer(null) : setHatLayer(path);
                break;
            case "Body":
                path===bodyLayer ? setBodyLayer(null) : setBodyLayer(path);
                break;
            case "Pants":
                path===pantsLayer ? setPantsLayer(null) : setPantsLayer(path);
                break;
            case "Boots":
                path===bootsLayer ? setBootsLayer(null) : setBootsLayer(path);
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