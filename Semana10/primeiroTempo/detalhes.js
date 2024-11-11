const params = new URLSearchParams(window.location.search) // window.location é a URL da sua janela;

const ids = params.get("id")

const container = document.getElementById('container3');

const pega_json = async (caminho) => {
    const resposta = await fetch(caminho + ids);
    console.log(resposta)
    const dados = await resposta.json(); // transformando a string em json 
    return dados
}

const acha_cookie = (chave) => {
    const lista_de_cookies = document.cookie.split("; ")
    const procurando = lista_de_cookies.find(
        (e) => e.startsWith(`${chave}=`)
    )
    return procurando.split('=')[1]
}

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

if (sessionStorage.getItem('logado')) {
    pega_json(`https://botafogo-atletas.mange.li/2024-1/`).then(
        (atleta) => montarCard(atleta)
    )

} else {
    document.body.innerHTML = `<h1>Você precisa estar loagado</h1>`
}



console.log(acha_cookie("id"))

console.log(localStorage.getItem('id'))

const dadosss = JSON.parse(localStorage.getItem('atleta'))
console.log(dadosss.nome)