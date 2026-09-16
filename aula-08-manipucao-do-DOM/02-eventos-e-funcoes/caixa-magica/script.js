//JAVASCRIPT 

const caixaMagica = document.getElementById('caixaMagica')

//"Escutando" os eventos realizados com o elemento da DOM 
caixaMagica.addEventListener('mouseenter', entradaMouse );
caixaMagica.addEventListener('mouseleave', saidaMouse );
caixaMagica.addEventListener('click', cliqueMouse );

//Criando uma função
function entradaMouse() {
    caixaMagica.innerText = "Olá, Anna! ;)";
    caixaMagica.style.backgroundColor = 'blue';
}

function saidaMouse() {
    caixaMagica.innerText = "Tchau,até breve! ;( "; 
    caixaMagica.style.backgroundColor = 'red';
}

function cliqueMouse() {
    caixaMagica.innerText = "Você clicou! :) "; 
    caixaMagica.style.backgroundColor = 'darkgreen';
}

