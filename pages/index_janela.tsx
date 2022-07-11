import { useState } from "react";
import Janela from "../components/Janela";
import JanelaModel from "../model/janela";

export default function Home() {
  
   const [j1,setJ1] = useState(new JanelaModel())

   return (
    <div style={{display: "flex"}}>
       <Janela value={j1} onChange={novaJanela =>setJ1(novaJanela)}/> 
     
    </div>
  )
}