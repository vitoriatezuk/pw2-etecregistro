const limite = 80;
function calcularVelocidade(){
    const inputVelo = document.querySelector('input#velocidade');
    const velocidade = Number(inputVelo.value);
    const resultado = document.querySelector('div#resultado');
    
    resultado.innerHTML = `Sua velocidade atual é de <strong>${velocidade} km/h </strong>. O limite da via é de <strong>${limite} km/h</strong>.`;
    if (velocidade > limite) {
        resultado.innerHTML += `<p> Você está <strong>multado</strong> por exceder o limite de velocidade.</p>`;

    }
    else {
        resultado.innerHTML += `<p> Você está <strong>dentro</strong> do limite de velocidade.Dirija com cuidado!</p>`;
    }

} 