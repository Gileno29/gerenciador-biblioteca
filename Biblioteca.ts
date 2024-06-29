import Livro from "./Livro";
import Membro from "./Membro";

class Biblioteca{
    public livros : Array<Livro> =[];
    public membros : Array<Membro> = [];

    adicionarLivro(livro:Livro){
        this.livros.push(livro)


    }

    removerLivro(livroId:number) {

        for (let i = 0; i < this.livros.length; i++) {
            if (this.livros[i].id==livroId){
                this.livros.splice(i,1);

            }
        }

    
    }


    registrarMembro(membro:Membro){

        this.membros.push(membro)
    }


    emprestarLivro(membroId:number, livroId:number){
        for (let i = 0; i < this.livros.length; i++) {
            if (this.livros[i].id==livroId && this.livros[i].disponivel==true){
               
                for (let j = 0; j < this.membros.length; j++) {
                    if (this.membros[j].id==membroId){
                        this.membros[j].emprestarLivro(this.livros[i])
                    }

                }
            }
       }
    }
    devolverLivro(membroId:number, livroId:number){
        for (let i = 0; i < this.livros.length; i++) {
            if (this.livros[i].id==livroId && this.livros[i].disponivel==true){
               
                for (let j = 0; j < this.membros.length; j++) {
                    if (this.membros[j].id==membroId){
                        this.membros[j].devolverLivro(this.livros[i].id)
                    }

                }
            }
       }
    }

}

export default Biblioteca