import Cartao from "../components/Cartao";
import styles from "../styles/Formulario.module.css"
import Link from "next/link";
import EntradaNumerica from "../components/EntradaNumerica";
import { useState } from "react";

export default function Formulario() {
    
    const [qtdePortas, setQtdePortas] = useState(3)
    const [comPresente, setcomPresente] = useState(1)

    return (
      <div className={styles.formulario}>
    
        <div style={{backgroundColor: "green", padding: "2px"}}>
          <Cartao bgcolor="#c0392c">
             <h1>Monty Hall</h1>
          </Cartao>

          <Cartao>
             <EntradaNumerica text="Qtde Portas?"
                              value={qtdePortas} 
                              onChange = {novaQtde => setQtdePortas(novaQtde)} />
          </Cartao>
        </div>
    
        <div style={{backgroundColor: "blue", padding: "2px"}}>
          <Cartao>
          <EntradaNumerica text="Porta com Presente?"
                              value={comPresente} 
                              onChange = {novaPortaComPresente => setcomPresente(novaPortaComPresente)} />
          </Cartao>
 
          <Cartao bgcolor="#2fda93">
            <Link href={`/jogo/${qtdePortas}/${comPresente}`}>
              <a>
              <h2 className={styles.link} >Iniciar</h2>
              </a>
            </Link>
          </Cartao>
          
        </div>
    

      </div>
    )
}
