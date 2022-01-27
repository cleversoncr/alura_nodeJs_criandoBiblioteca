const pegaArquivo = require('../index');
const arrayResult = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
]


describe('pegaArquivo::', () => {
  it('Deve ser uma função', () => {
    expect(typeof pegaArquivo).toBe('function');
  });
  it('Deve retornar um array com resultados', async () => {
    const resultado = await pegaArquivo('/home/cleverson.rocha/Workspace/cursos/alura_nodeJs_criandoBiblioteca/lib-markdown/test/arquivos/texto1.md')
    expect(resultado).toEqual(arrayResult)
  });
  it('Deve retornar uma mensagem que "não há links"', async () => {
    const resultado = await pegaArquivo('/home/cleverson.rocha/Workspace/cursos/alura_nodeJs_criandoBiblioteca/lib-markdown/test/arquivos/texto1_semLinks.md')
    expect(resultado).toBe('não há links')
  });
});