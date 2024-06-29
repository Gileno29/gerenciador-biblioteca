import Livro from './Livro';
import Membro from './Membro';
import Biblioteca from './Biblioteca';
import EmailNotificacao from './EmailNotificacao';
import SmsNotificacao from './SmsNotificacao';


// Criar livros
const livro1 = new Livro(1, '1984', 'George Orwell', 1949);
const livro2 = new Livro(2, 'Brave New World', 'Aldous Huxley', 1932);
const livro3 = new Livro(3, 'Fahrenheit 451', 'Ray Bradbury', 1953);
// Criar membros
const membro1 = new Membro(1, 'João');
const membro2 = new Membro(2, 'Maria');

console.log(membro1)


// Criar biblioteca
const biblioteca = new Biblioteca();
// Adicionar livros à biblioteca
biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);
biblioteca.adicionarLivro(livro3);
// Registrar membros na biblioteca
biblioteca.registrarMembro(membro1);
biblioteca.registrarMembro(membro2);
// Emprestar livros
biblioteca.emprestarLivro(membro1.id, livro1.id);
biblioteca.emprestarLivro(membro2.id, livro2.id);
// Visualizar detalhes dos empréstimos
console.log(membro1);
console.log(membro2);
// Devolver livros
biblioteca.devolverLivro(membro1.id, livro1.id);
biblioteca.devolverLivro(membro2.id, livro2.id);
// Visualizar status da biblioteca
console.log(biblioteca);
// Notificações
const emailNotificacao = new EmailNotificacao();
const smsNotificacao = new SmsNotificacao();
emailNotificacao.notificar('Livro emprestado com sucesso!');
smsNotificacao.notificar('Livro devolvido com sucesso!');