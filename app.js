let nome_lista = [];
let entrada_nome;
function apresentar_nomes(){
    entrada_nome = document.querySelector('input');
    let texto_valor = entrada_nome.value;
    if(entrada_nome == ''){
    alert("Escreva no campo, por favor");
 }  else {
        nome_lista.push(texto_valor);
        console.log(nome_lista)

        let container_lista = document.createElement("div");
        let lista_desordenada = document.createElement('ol');
        let linhas = document.createElement('li');
        container_lista.append(lista_desordenada);
        lista_desordenada.append(linhas);
        document.body.append(container_lista, lista_desordenada,linhas);
        let texto_lista = nome_lista.pop();
        linhas.append(texto_lista);
        //let sortear_elemento = Math.random() * nome_lista.length;
 }
 limparCampo();
 sortear_amigos();
}
function limparCampo(){
    entrada_nome = document.querySelector('input');
    entrada_nome.value = '';
} 
function sortear_amigos(){
    document.getElementById("botao_sortear").removeAttribute('disabled')
    //let sortear_elemento = nome_lista[Math.floor(Math.random() * nome_lista.length)]
   // console.log(sortear_elemento);
}