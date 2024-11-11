const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json(); // transformando a string em json
    return dados
}
   
const manipulaClick = (e) => {
    const id = e.target.closest('article').dataset.id
    const nome = e.currentTarget.dataset.nome
    //cookie
    document.cookie = `id=${id}`
    document.cookie = `nome=${nome}`

    sessionStorage.setItem('id', id)
    sessionStorage.setItem('atleta', JSON.stringify(e.currentTarget.dataset))

    localStorage.setItem('id', id)
    localStorage.setItem('atleta', JSON.stringify(e.currentTarget.dataset))

    window.location = `detalhes.html?id=${id}`
}



// let conteudo = ''
const container = document.getElementById('container3');

const montarCard = (atleta) => {
    const cartao = document.createElement("article");
    const nome = document.createElement("h1");
    const imagem = document.createElement("img");
    const descricao = document.createElement("p");
    const link = document.createElement("a")
    const span_id = document.createElement('span');

    nome.innerHTML = atleta.nome;
    cartao.appendChild(nome);

    imagem.src = atleta.imagem;
    cartao.appendChild(imagem);
    
    descricao.innerHTML = atleta.detalhes;
    cartao.appendChild(descricao);

    // link.innerHTML = "Saiba mais...";
    // link.href = `detalhes.html?id=${atleta.id}`
    // cartao.appendChild(link);

    cartao.dataset.id = atleta.id;
    cartao.dataset.nome = atleta.nome

    span_id.innerHTML = atleta.id
    cartao.appendChild(span_id)

    cartao.onclick = manipulaClick



    container.appendChild(cartao)
}


pega_json('https://botafogo-atletas.mange.li/2024-1/all').then(
    ( retorno ) => {
        retorno.forEach((atleta) => montarCard(atleta));
        console.log("Isso imprime depois");
    }
        
)


const verificaSenha = () => {
    const entrada = document.getElementById('senha').value;
    const entradaHash = CryptoJS.MD5(entrada).toString()
    const senhaHash = CryptoJS.MD5("casa").toString()

    if (senhaHash === entradaHash) {
        sessionStorage.setItem('logado', 'sim')
        alert("Logado")
    } else {
        alert('Senha Incoreta')
    }
}


document.getElementById('logout').onclick = () => {sessionStorage.removeItem('logado'); alert('saiu')}
