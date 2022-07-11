import styles from "../styles/Janela.module.css"
import JanelaModel from '../model/janela'

interface JanelaProps {
    value: JanelaModel
    onChange: (novaJanela: JanelaModel) => void
}

export default function Janela(props: JanelaProps){
    const  janela  = props.value
    const selecionada1 = janela.selecionada1 && !janela.aberta ? styles.selecionada1 : ''
    const selecionada2 = janela.selecionada2 && !janela.aberta ? styles.selecionada2 : ''
    
    const alternarSelecao1 = e => props.onChange(janela.alternarSelecao1())
    const alternarSelecao2 = e => props.onChange(janela.alternarSelecao2())
     

    return(
        <div className={styles.area} >
            <div className={styles.portal} >
                
                <div className = {selecionada1} onClick={alternarSelecao1}>
                    <div className= {styles.janela1}  >
                        <div className={styles.macaneta1}  ></div>
                    </div>
                </div> 

                <div className = {selecionada2} onClick={alternarSelecao2}>
                    <div className= {styles.janela2}  >
                        <div className={styles.macaneta2}  ></div>
                    </div>
                </div> 

            </div>
           
        </div>    
    )
}