
class Livro {
    public id: number;
    public titulo: string;
    public autor: string;
    public anoPublicacao: number;
    public disponivel: boolean = true;
    
    constructor(id:number, titulo:string, autor:string, ano:number) {
        this.id=id;
        this.titulo=titulo;
        this.autor=autor;
        this.disponivel=true;
        this.anoPublicacao=ano;
    }

    getDetalhes(): void {
       
            console.log(`Titulo: "${this.titulo}" autor: "${this.autor}" disponivel "${this.disponivel}"`);
    }
}

export default Livro;
