const form = document.getElementById(`form-contact`)
const nomes = [];
const numeros = [];
const inputBUSCA = document.getElementById('input-busca');
const tabelaCONTACT = document.getElementById('tableContact');

linhas = ` `;

form.addEventListener(`submit`, function(e){
    e.preventDefault();
    
    
    adicionaLinha();
    atualizaTabela();
    removeLinha();
})



function adicionaLinha(){
    const inputNomePessoa = document.getElementById(`name`);
    const inputNumeroPessoa = document.getElementById(`phoneNumber`);

    if(nomes.includes(inputNomePessoa.value)){
        alert (`O nome: ${inputNomePessoa.value} já foi adicionado! Tente outra vez`)
    }else{

        nomes.push(inputNomePessoa.value);
        numeros.push(parseFloat(inputNumeroPessoa.value));

    let linha = `<tr>`;
    linha += `<td>${inputNomePessoa.value}</td>`
    linha += `<td>${inputNumeroPessoa.value}</td>`;
    linha += `<td> <button class="excluir">X</button></td>`;

    linhas += linha

    inputNomePessoa.value =``;
    inputNumeroPessoa.value =``;
    }
}

function atualizaTabela(){
    const corpoTabela = document.querySelector(`tbody`);
    corpoTabela.innerHTML = linhas;

}

document.addEventListener("click",(e) =>{
    const removeLinha = e.target;
    const parentEl = removeLinha.closest(`tr`);

    parentEl.remove();
})



inputBUSCA.addEventListener('keyup', () => {
    let expressao = inputBUSCA.value.toLowerCase();

    if (expressao.length === 1) {
        return;
    }

    let linhas = tabelaCONTACT.getElementsByTagName('tr');

    for (let posicao in linhas) {
        if (true === isNaN(posicao)) {
            continue;
        }

        let conteudoDaLinha = linhas[posicao].innerHTML.toLowerCase();

        if (true === conteudoDaLinha.includes(expressao)) {
            linhas[posicao].style.display = '';
        } else {
            linhas[posicao].style.display = 'none';
        }
    }
});
