import Header from "./Header";
import Navbar from "./Navbar";
import Choice from './Choice';
import Skin from "./Skin";
import Footer from "./Footer";
import { useState } from "react";
import './App.css';

function App() {

  const [menu, setMenu] = useState<string>("Base");

  const [baseLayer, setBaseLayer] = useState<string | null>("/base/1.png");
  const [hairLayer, setHairLayer] = useState<string | null>(null);
  const [eyesLayer, setEyesLayer] = useState<string | null>(null);
  const [hatLayer, setHatLayer] = useState<string | null>(null);
  const [bodyLayer, setBodyLayer] = useState<string | null>(null);
  const [pantsLayer, setPantsLayer] = useState<string | null>(null);
  const [bootsLayer, setBootsLayer] = useState<string | null>(null);

  return (
    <div>
      <Header />
      <div className="center-app">
        <Navbar setMenu={setMenu}/>
        <Choice 
          menu={menu} setBaseLayer={setBaseLayer} setHairLayer={setHairLayer} setEyesLayer={setEyesLayer} setHatLayer={setHatLayer} setBodyLayer={setBodyLayer} setPantsLayer={setPantsLayer} setBootsLayer={setBootsLayer} 
          baseLayer={baseLayer} hairLayer={hairLayer} eyesLayer={eyesLayer} hatLayer={hatLayer} bodyLayer={bodyLayer} pantsLayer={pantsLayer} bootsLayer={bootsLayer}
          />
        <Skin baseLayer={baseLayer} hairLayer={hairLayer} eyesLayer={eyesLayer} hatLayer={hatLayer} bodyLayer={bodyLayer} pantsLayer={pantsLayer} bootsLayer={bootsLayer} />
      </div>
      <Footer />
    </div>
  )
}

export default App