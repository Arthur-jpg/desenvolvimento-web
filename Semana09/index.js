const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json(); // transformando a string em json
    return dados
}
   
// let conteudo = ''
const container = document.getElementById('container3');

const montarCard = (atleta) => {
    const cartao = document.createElement("article");
    const nome = document.createElement("h1");
    const imagem = document.createElement("img");
    const descricao = document.createElement("p");
    const link = document.createElement("a")

    nome.innerHTML = atleta.nome;
    cartao.appendChild(nome);

    imagem.src = atleta.imagem;
    cartao.appendChild(imagem);
    
    descricao.innerHTML = atleta.detalhes;
    cartao.appendChild(descricao);

    link.innerHTML = "Saiba mais...";
    link.href = `detalhes.html?id=${atleta.id}`
    cartao.appendChild(link);

    container.appendChild(cartao)
}


pega_json('https://botafogo-atletas.mange.li/2024-1/all').then(
    ( retorno ) => {
        retorno.forEach((atleta) => montarCard(atleta));
        console.log("Isso imprime depois");
    }
        
)

console.log('isso imprime antes');



