import type { FC } from "react";

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
        {name: "3", path: "../public/3.png", category: "Base", id: 3}
    ];

    return(
        <div>
            {skins.filter((cat) => cat.category === menu).map((skin, index) => (
                <button key={index} onClick={() => setNewLayer(skin.path)}>
                    <h1>{skin.name}</h1>
                </button>
            ))}
            <h1>{menu}</h1>
        </div>
    );
}

export default Choice;