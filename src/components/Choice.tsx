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
        {name: "base_1", path: "/base/1.png", preview_path: "/previews/base/1.jpg", category: "Base", id: 1},
        {name: "base_2", path: "/base/2.png", preview_path: "/previews/base/2.jpg", category: "Base", id: 2},
        {name: "base_3", path: "/base/3.png", preview_path: "/previews/base/3.jpg", category: "Base", id: 3},
        {name: "base_4", path: "/base/4.png", preview_path: "/previews/base/4.jpg", category: "Base", id: 4},
        {name: "base_5", path: "/base/5.png", preview_path: "/previews/base/5.jpg", category: "Base", id: 5},
        {name: "base_6", path: "/base/6.png", preview_path: "/previews/base/6.jpg", category: "Base", id: 6},
        {name: "base_7", path: "/base/7.png", preview_path: "/previews/base/7.jpg", category: "Base", id: 7},
        {name: "base_8", path: "/base/8.png", preview_path: "/previews/base/8.jpg", category: "Base", id: 8},
        {name: "base_9", path: "/base/9.png", preview_path: "/previews/base/9.jpg", category: "Base", id: 9},
        {name: "base_10", path: "/base/10.png", preview_path: "/previews/base/10.jpg", category: "Base", id: 10},
        {name: "base_11", path: "/base/11.png", preview_path: "/previews/base/11.jpg", category: "Base", id: 11},
        {name: "base_12", path: "/base/12.png", preview_path: "/previews/base/12.jpg", category: "Base", id: 12},

        {name: "hair_1", path: "/hair/1.png", preview_path: "/previews/hair/1.jpg", category: "Hair", id: 13},
        {name: "hair_2", path: "/hair/2.png", preview_path: "/previews/hair/2.jpg", category: "Hair", id: 14},
        {name: "hair_3", path: "/hair/3.png", preview_path: "/previews/hair/3.jpg", category: "Hair", id: 15},
        {name: "hair_4", path: "/hair/4.png", preview_path: "/previews/hair/4.jpg", category: "Hair", id: 16},
        {name: "hair_5", path: "/hair/5.png", preview_path: "/previews/hair/5.jpg", category: "Hair", id: 17},
        {name: "hair_6", path: "/hair/6.png", preview_path: "/previews/hair/6.jpg", category: "Hair", id: 18},
        {name: "hair_7", path: "/hair/7.png", preview_path: "/previews/hair/7.jpg", category: "Hair", id: 19},
        {name: "hair_8", path: "/hair/8.png", preview_path: "/previews/hair/8.jpg", category: "Hair", id: 20},
        {name: "hair_9", path: "/hair/9.png", preview_path: "/previews/hair/9.jpg", category: "Hair", id: 21},
        {name: "hair_10", path: "/hair/10.png", preview_path: "/previews/hair/10.jpg", category: "Hair", id: 22},
        {name: "hair_11", path: "/hair/11.png", preview_path: "/previews/hair/11.jpg", category: "Hair", id: 23},
        {name: "hair_12", path: "/hair/12.png", preview_path: "/previews/hair/12.jpg", category: "Hair", id: 24},
        {name: "hair_13", path: "/hair/13.png", preview_path: "/previews/hair/13.jpg", category: "Hair", id: 25},

        {name: "eyes_1", path: "/eyes/1.png", preview_path: "/previews/eyes/1.jpg", category: "Eyes", id: 26},
        {name: "eyes_2", path: "/eyes/2.png", preview_path: "/previews/eyes/2.jpg", category: "Eyes", id: 27},
        {name: "eyes_3", path: "/eyes/3.png", preview_path: "/previews/eyes/3.jpg", category: "Eyes", id: 28},
        {name: "eyes_4", path: "/eyes/4.png", preview_path: "/previews/eyes/4.jpg", category: "Eyes", id: 29},
        {name: "eyes_5", path: "/eyes/5.png", preview_path: "/previews/eyes/5.jpg", category: "Eyes", id: 30},
        {name: "eyes_6", path: "/eyes/6.png", preview_path: "/previews/eyes/6.jpg", category: "Eyes", id: 31},
        {name: "eyes_7", path: "/eyes/7.png", preview_path: "/previews/eyes/7.jpg", category: "Eyes", id: 32},
        {name: "eyes_8", path: "/eyes/8.png", preview_path: "/previews/eyes/8.jpg", category: "Eyes", id: 33},
        {name: "eyes_9", path: "/eyes/9.png", preview_path: "/previews/eyes/9.jpg", category: "Eyes", id: 34},
        {name: "eyes_10", path: "/eyes/10.png", preview_path: "/previews/eyes/10.jpg", category: "Eyes", id: 35},
        {name: "eyes_11", path: "/eyes/11.png", preview_path: "/previews/eyes/11.jpg", category: "Eyes", id: 36},
        {name: "eyes_12", path: "/eyes/12.png", preview_path: "/previews/eyes/12.jpg", category: "Eyes", id: 37},

        {name: "hat_1", path: "/hat/1.png", preview_path: "/previews/hat/1.jpg", category: "Hat", id: 38},
        {name: "hat_2", path: "/hat/2.png", preview_path: "/previews/hat/2.jpg", category: "Hat", id: 39},
        {name: "hat_3", path: "/hat/3.png", preview_path: "/previews/hat/3.jpg", category: "Hat", id: 40},
        {name: "hat_4", path: "/hat/4.png", preview_path: "/previews/hat/4.jpg", category: "Hat", id: 41},
        {name: "hat_5", path: "/hat/5.png", preview_path: "/previews/hat/5.jpg", category: "Hat", id: 42},
        {name: "hat_6", path: "/hat/6.png", preview_path: "/previews/hat/6.jpg", category: "Hat", id: 43},
        {name: "hat_7", path: "/hat/7.png", preview_path: "/previews/hat/7.jpg", category: "Hat", id: 44},
        {name: "hat_8", path: "/hat/8.png", preview_path: "/previews/hat/8.jpg", category: "Hat", id: 45},
        {name: "hat_9", path: "/hat/9.png", preview_path: "/previews/hat/9.jpg", category: "Hat", id: 46},
        {name: "hat_10", path: "/hat/10.png", preview_path: "/previews/hat/10.jpg", category: "Hat", id: 47},
        {name: "hat_11", path: "/hat/11.png", preview_path: "/previews/hat/11.jpg", category: "Hat", id: 48},
        {name: "hat_12", path: "/hat/12.png", preview_path: "/previews/hat/12.jpg", category: "Hat", id: 49},
        {name: "hat_13", path: "/hat/13.png", preview_path: "/previews/hat/13.jpg", category: "Hat", id: 50},
        {name: "hat_14", path: "/hat/14.png", preview_path: "/previews/hat/14.jpg", category: "Hat", id: 51},
        {name: "hat_15", path: "/hat/15.png", preview_path: "/previews/hat/15.jpg", category: "Hat", id: 52},

        {name: "body_1", path: "/body/1.png", preview_path: "/previews/body/1.jpg", category: "Body", id: 53},
        {name: "body_2", path: "/body/2.png", preview_path: "/previews/body/2.jpg", category: "Body", id: 54},
        {name: "body_3", path: "/body/3.png", preview_path: "/previews/body/3.jpg", category: "Body", id: 55},
        {name: "body_4", path: "/body/4.png", preview_path: "/previews/body/4.jpg", category: "Body", id: 56},
        {name: "body_5", path: "/body/5.png", preview_path: "/previews/body/5.jpg", category: "Body", id: 57},
        {name: "body_6", path: "/body/6.png", preview_path: "/previews/body/6.jpg", category: "Body", id: 58},
        {name: "body_7", path: "/body/7.png", preview_path: "/previews/body/7.jpg", category: "Body", id: 59},
        {name: "body_8", path: "/body/8.png", preview_path: "/previews/body/8.jpg", category: "Body", id: 60},
        {name: "body_9", path: "/body/9.png", preview_path: "/previews/body/9.jpg", category: "Body", id: 61},
        {name: "body_10", path: "/body/10.png", preview_path: "/previews/body/10.jpg", category: "Body", id: 62},
        {name: "body_11", path: "/body/11.png", preview_path: "/previews/body/11.jpg", category: "Body", id: 63},
        {name: "body_12", path: "/body/12.png", preview_path: "/previews/body/12.jpg", category: "Body", id: 64},
        {name: "body_13", path: "/body/13.png", preview_path: "/previews/body/13.jpg", category: "Body", id: 65},
        {name: "body_14", path: "/body/14.png", preview_path: "/previews/body/14.jpg", category: "Body", id: 66},
        {name: "body_15", path: "/body/15.png", preview_path: "/previews/body/15.jpg", category: "Body", id: 67},
        {name: "body_16", path: "/body/16.png", preview_path: "/previews/body/16.jpg", category: "Body", id: 68},
        {name: "body_17", path: "/body/17.png", preview_path: "/previews/body/17.jpg", category: "Body", id: 69},
        {name: "body_18", path: "/body/18.png", preview_path: "/previews/body/18.jpg", category: "Body", id: 70},
        {name: "body_19", path: "/body/19.png", preview_path: "/previews/body/19.jpg", category: "Body", id: 71},
        {name: "body_20", path: "/body/20.png", preview_path: "/previews/body/20.jpg", category: "Body", id: 72},

        {name: "pants_1", path: "/pants/1.png", preview_path: "/previews/pants/1.jpg", category: "Pants", id: 73},
        {name: "pants_2", path: "/pants/2.png", preview_path: "/previews/pants/2.jpg", category: "Pants", id: 74},
        {name: "pants_3", path: "/pants/3.png", preview_path: "/previews/pants/3.jpg", category: "Pants", id: 75},
        {name: "pants_4", path: "/pants/4.png", preview_path: "/previews/pants/4.jpg", category: "Pants", id: 76},
        {name: "pants_5", path: "/pants/5.png", preview_path: "/previews/pants/5.jpg", category: "Pants", id: 77},
        {name: "pants_6", path: "/pants/6.png", preview_path: "/previews/pants/6.jpg", category: "Pants", id: 78},
        {name: "pants_7", path: "/pants/7.png", preview_path: "/previews/pants/7.jpg", category: "Pants", id: 79},
        {name: "pants_8", path: "/pants/8.png", preview_path: "/previews/pants/8.jpg", category: "Pants", id: 80},
        {name: "pants_9", path: "/pants/9.png", preview_path: "/previews/pants/9.jpg", category: "Pants", id: 81},
        {name: "pants_10", path: "/pants/10.png", preview_path: "/previews/pants/10.jpg", category: "Pants", id: 82},
        {name: "pants_11", path: "/pants/11.png", preview_path: "/previews/pants/11.jpg", category: "Pants", id: 83},
        {name: "pants_12", path: "/pants/12.png", preview_path: "/previews/pants/12.jpg", category: "Pants", id: 84},
        {name: "pants_13", path: "/pants/13.png", preview_path: "/previews/pants/13.jpg", category: "Pants", id: 85},
        {name: "pants_14", path: "/pants/14.png", preview_path: "/previews/pants/14.jpg", category: "Pants", id: 86},

        {name: "boots_1", path: "/boots/1.png", preview_path: "/previews/boots/1.jpg", category: "Boots", id: 87},
        {name: "boots_2", path: "/boots/2.png", preview_path: "/previews/boots/2.jpg", category: "Boots", id: 88},
        {name: "boots_3", path: "/boots/3.png", preview_path: "/previews/boots/3.jpg", category: "Boots", id: 89},
        {name: "boots_4", path: "/boots/4.png", preview_path: "/previews/boots/4.jpg", category: "Boots", id: 90},
        {name: "boots_5", path: "/boots/5.png", preview_path: "/previews/boots/5.jpg", category: "Boots", id: 91},
        {name: "boots_6", path: "/boots/6.png", preview_path: "/previews/boots/6.jpg", category: "Boots", id: 92},
        {name: "boots_7", path: "/boots/7.png", preview_path: "/previews/boots/7.jpg", category: "Boots", id: 93},
        {name: "boots_8", path: "/boots/8.png", preview_path: "/previews/boots/8.jpg", category: "Boots", id: 94},
        {name: "boots_9", path: "/boots/9.png", preview_path: "/previews/boots/9.jpg", category: "Boots", id: 95},
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