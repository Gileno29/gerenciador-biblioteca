import Livro  from "./Livro";
class Membro  {
    public id: number;
    public nome: string;
    public livrosEmprestados: Array<Livro>=[];

    constructor(id: number, nome: string) {
        this.id= id;
        this.nome=nome;
    }

    emprestarLivro(livro:Livro){
        console.log("Livro a ser emprestado", livro)
        this.livrosEmprestados.push(livro)   
        
        return
    }

    devolverLivro(id:number){
        for (let i = 0; i < this.livrosEmprestados.length; i++) {
            if (this.livrosEmprestados[i].id==id){
                this.livrosEmprestados.splice(i,1);

            }


        }
        console.log("Livros emprestados: ", this.livrosEmprestados)
        return
    }
}

export default Membro