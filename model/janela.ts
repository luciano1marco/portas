export default class JanelaModel{
   
    #selecionada1 : boolean 
    #selecionada2 : boolean 
    #aberta : boolean


    constructor( selecionada1 = false, selecionada2 = false, aberta = false){
        this.#selecionada1 = selecionada1
        this.#selecionada2 = selecionada2
        this.#aberta = aberta
    }
    get selecionada1(){
        return this.#selecionada1
    }
    get selecionada2(){
        return this.#selecionada2
    }

    get aberta(){
        return this.#aberta
    }

    alternarSelecao1(){
        const selecionada1 = !this.selecionada1
        const selecionada2 = this.selecionada2
        return new JanelaModel( selecionada1, selecionada2, this.aberta )
    }
    alternarSelecao2(){
        const selecionada1 = this.selecionada1
        const selecionada2 = !this.selecionada2

        return new JanelaModel( selecionada1, selecionada2,this.aberta )
    }
   
    abrir(){
        const aberta = true
        return new JanelaModel(this.selecionada1, aberta )
    }

    desselecionar(){
      const selecionada1 = false
      const selecionada2 = false
      return new JanelaModel( selecionada1, this.aberta)  
    }
}