
    
let conteudo = document.getElementById('artigo')
function mudarArtigo() {
    conteudo.innerHTML = 'dois'
    
}
function voltarArtigo() {
    conteudo.innerHTML = 'um'
    
}

let nomeJogador = document.getElementById('nome')
let descricaoJogador = document.getElementById('descricao')
let imgagem = document.getElementById("imagem")

function gerarDados(nome, descricao, src) {
    nomeJogador.innerHTML = nome
    descricaoJogador.innerHTML = descricao
    imgagem.src = src
}


//2
let nomeJogador2 = document.getElementById('nome2')
let descricaoJogador2 = document.getElementById('descricao2')
let imgagem2 = document.getElementById("imagem2")

atleta = dados.filter( (elementos) => elementos.id ===36)[0]

nomeJogador2.innerHTML = atleta.nome
descricaoJogador2.innerHTML = atleta.detalhes
imgagem2.src = atleta.imagem



//3

/*function gerar() {


    const container = document.getElementById('container3');
    
    for (let i=0; i < dados.length; i++) {
        let atleta = dados[i]
        container.innerHTML += `
        <div id="container-pequeno">
        <h1>${atleta.nome}</h1>
        <img src=${atleta.imagem}>
        <p>${atleta.detalhes}</p>
        
        </div>
        `
        }
        }
        function dgerar() {
            
        
        const container = document.getElementById('container3');
    container.innerHTML = ``
    }*/
   
   // atleta = dados.filter( (elementos) => elementos.id ===36)[0]
   
   let conteudo1 = ''
   const container = document.getElementById('container3');
   
   const montarCard = (atleta) => `
                <div id="container-pequeno">
                <h1>${atleta.nome}</h1>
                <img src=${atleta.imagem}>
                <p>${atleta.detalhes}</p>
    
            </div>
`

dados.forEach((atleta) => conteudo1 += montarCard(atleta))
container.innerHTML = conteudo1



