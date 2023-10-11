// Script para Copiar o Conteudo da Celula com o Clique, necessario acrescentar
//o codigo: onclick="copiarConteudo(this) 

function copiarConteudo(elemento) {
  if (!navigator.clipboard) {
    console.error('O recurso de Clipboard não está disponível.');
    return;
  }

  navigator.clipboard.writeText(elemento.innerText).then(function() {
    console.log('Conteúdo copiado com sucesso!');
  }, function(erro) {
    console.error('Erro ao copiar o conteúdo: ', erro);
  });
}