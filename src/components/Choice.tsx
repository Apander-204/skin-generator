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
        category: string;
        id: number;
    }

    const skins: Skins[] = [
        {name: "1", path: "/base/1.png", category: "Base", id: 1},
        {name: "2", path: "/base/2.png", category: "Base", id: 2},
        {name: "3", path: "/base/3.png", category: "Base", id: 3},
        {name: "4", path: "/base/4.png", category: "Base", id: 4},
        {name: "5", path: "/base/5.png", category: "Base", id: 5},
        {name: "6", path: "/base/6.png", category: "Base", id: 6},
        {name: "7", path: "/base/7.png", category: "Base", id: 7},

        {name: "7", path: "/hair/1.png", category: "Hair", id: 7},
        {name: "7", path: "/hair/2.png", category: "Hair", id: 7},
        {name: "7", path: "/hair/3.png", category: "Hair", id: 7},
        {name: "7", path: "/hair/4.png", category: "Hair", id: 7},
        {name: "7", path: "/hair/5.png", category: "Hair", id: 7},
        {name: "7", path: "/hair/6.png", category: "Hair", id: 7},
        {name: "7", path: "/hair/7.png", category: "Hair", id: 7},
        {name: "7", path: "/hair/8.png", category: "Hair", id: 7},
        {name: "7", path: "/hair/9.png", category: "Hair", id: 7},
        {name: "7", path: "/hair/10.png", category: "Hair", id: 7},
        {name: "7", path: "/hair/11.png", category: "Hair", id: 7},
        {name: "7", path: "/hair/12.png", category: "Hair", id: 7},
        {name: "7", path: "/hair/13.png", category: "Hair", id: 7},

        {name: "7", path: "/eyes/1.png", category: "Eyes", id: 7},
        {name: "7", path: "/eyes/2.png", category: "Eyes", id: 7},
        {name: "7", path: "/eyes/3.png", category: "Eyes", id: 7},
        {name: "7", path: "/eyes/4.png", category: "Eyes", id: 7},
        {name: "7", path: "/eyes/5.png", category: "Eyes", id: 7},
        {name: "7", path: "/eyes/6.png", category: "Eyes", id: 7},
        {name: "7", path: "/eyes/7.png", category: "Eyes", id: 7},
        {name: "7", path: "/eyes/8.png", category: "Eyes", id: 7},
        {name: "7", path: "/eyes/9.png", category: "Eyes", id: 7},
        {name: "7", path: "/eyes/10.png", category: "Eyes", id: 7},
        {name: "7", path: "/eyes/11.png", category: "Eyes", id: 7},
        {name: "7", path: "/eyes/12.png", category: "Eyes", id: 7},

        {name: "1", path: "/hat/1.png", category: "Hat", id: 8},
        {name: "2", path: "/hat/2.png", category: "Hat", id: 9},
        {name: "3", path: "/hat/3.png", category: "Hat", id: 10},
        {name: "3", path: "/hat/4.png", category: "Hat", id: 10},
        {name: "3", path: "/hat/5.png", category: "Hat", id: 10},
        {name: "3", path: "/hat/6.png", category: "Hat", id: 10},
        {name: "3", path: "/hat/7.png", category: "Hat", id: 10},
        {name: "3", path: "/hat/8.png", category: "Hat", id: 10},
        {name: "3", path: "/hat/9.png", category: "Hat", id: 10},
        {name: "3", path: "/hat/10.png", category: "Hat", id: 10},
        {name: "3", path: "/hat/11.png", category: "Hat", id: 10},
        {name: "3", path: "/hat/12.png", category: "Hat", id: 10},
        {name: "3", path: "/hat/13.png", category: "Hat", id: 10},
        {name: "3", path: "/hat/14.png", category: "Hat", id: 10},
        {name: "3", path: "/hat/15.png", category: "Hat", id: 10},

        {name: "1", path: "/body/1.png", category: "Body", id: 11},
        {name: "2", path: "/body/2.png", category: "Body", id: 11},
        {name: "3", path: "/body/3.png", category: "Body", id: 11},
        {name: "4", path: "/body/4.png", category: "Body", id: 11},
        {name: "1", path: "/body/5.png", category: "Body", id: 11},
        {name: "1", path: "/body/6.png", category: "Body", id: 11},
        {name: "1", path: "/body/7.png", category: "Body", id: 11},
        {name: "1", path: "/body/8.png", category: "Body", id: 11},
        {name: "1", path: "/body/9.png", category: "Body", id: 11},
        {name: "1", path: "/body/10.png", category: "Body", id: 11},
        {name: "1", path: "/body/11.png", category: "Body", id: 11},
        {name: "1", path: "/body/12.png", category: "Body", id: 11},
        {name: "1", path: "/body/13.png", category: "Body", id: 11},
        {name: "1", path: "/body/14.png", category: "Body", id: 11},
        {name: "1", path: "/body/15.png", category: "Body", id: 11},
        {name: "1", path: "/body/16.png", category: "Body", id: 11},
        {name: "1", path: "/body/17.png", category: "Body", id: 11},
        {name: "1", path: "/body/18.png", category: "Body", id: 11},
        {name: "1", path: "/body/19.png", category: "Body", id: 11},
        {name: "1", path: "/body/20.png", category: "Body", id: 11},

        {name: "1", path: "/pants/1.png", category: "Pants", id: 11},
        {name: "1", path: "/pants/2.png", category: "Pants", id: 11},
        {name: "1", path: "/pants/3.png", category: "Pants", id: 11},
        {name: "1", path: "/pants/4.png", category: "Pants", id: 11},
        {name: "1", path: "/pants/5.png", category: "Pants", id: 11},
        {name: "1", path: "/pants/6.png", category: "Pants", id: 11},
        {name: "1", path: "/pants/7.png", category: "Pants", id: 11},
        {name: "1", path: "/pants/8.png", category: "Pants", id: 11},
        {name: "1", path: "/pants/9.png", category: "Pants", id: 11},
        {name: "1", path: "/pants/10.png", category: "Pants", id: 11},
        {name: "1", path: "/pants/11.png", category: "Pants", id: 11},
        {name: "1", path: "/pants/12.png", category: "Pants", id: 11},
        {name: "1", path: "/pants/13.png", category: "Pants", id: 11},
        {name: "1", path: "/pants/14.png", category: "Pants", id: 11},

        {name: "1", path: "/boots/1.png", category: "Boots", id: 11},
        {name: "1", path: "/boots/2.png", category: "Boots", id: 11},
        {name: "1", path: "/boots/3.png", category: "Boots", id: 11},
        {name: "1", path: "/boots/4.png", category: "Boots", id: 11},
        {name: "1", path: "/boots/5.png", category: "Boots", id: 11},
        {name: "1", path: "/boots/6.png", category: "Boots", id: 11},
        {name: "1", path: "/boots/7.png", category: "Boots", id: 11},
        {name: "1", path: "/boots/8.png", category: "Boots", id: 11},
        {name: "1", path: "/boots/9.png", category: "Boots", id: 11},
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
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Choice;