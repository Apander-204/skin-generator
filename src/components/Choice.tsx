import type { FC } from "react";
import './Choice.css';

interface ChoiceProps {
    menu: string;
    setNewLayer: (value: string | null) => void;
}

const Choice:FC<ChoiceProps> = ({ menu, setNewLayer }) =>  {

    type Skins = {
        name: string;
        path: string;
        category: string;
        id: number;
    }

    const skins: Skins[] = [
        {name: "1", path: "../public/1.png", category: "Base", id: 1},
        {name: "2", path: "../public/2.png", category: "Base", id: 2},
        {name: "3", path: "../public/3.png", category: "Base", id: 3},
    ];

    return(
        <div className="choice-menu">
            {/* <h1>{menu}</h1> */}
            {skins.filter((cat) => cat.category === menu).map((skin, index) => (
                <div key={index} onClick={() => setNewLayer(skin.path)} className="choice-item">
                    {/* <h1>{skin.name}</h1> */}
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Choice;