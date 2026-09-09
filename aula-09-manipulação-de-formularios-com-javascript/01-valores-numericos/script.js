// Funções Calculadora

        //Capturando as os campos
    const inputN1 = window.document.querySelector('input#n1');
    const inputN2 = window.document.querySelector('input#n2');
     const resultado = window.document.querySelector('div#resultado');

function somar() {

    //Capturando os valores das inputs
    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);
    //Somando os valores 
    const soma = n1 + n2
    //Exibindo o resultado 
   
    resultado.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${soma}</strong>`;
}