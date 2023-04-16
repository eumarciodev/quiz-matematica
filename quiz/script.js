function verificarRespostas() {
	let resposta1 = document.querySelector('input[name="pergunta1"]:checked').value;
	let resposta2 = document.querySelector('input[name="pergunta2"]:checked').value;
  let resposta3 = document.querySelector('input[name="pergunta3"]:checked').value;
  let resposta4 = document.querySelector('input[name="pergunta4"]:checked').value;
	let resultado = document.getElementById('resultado');
	
	if (resposta1 === 'a') {
		resultado.innerHTML = 'Parabéns, você acertou todas as respostas!';
    resultado.style.color = 'black';
    resultado.style.display = 'block';
    resultado.style.background = 'limegreen';
    document.getElementById('certa').style.background = 'white';
	} else {
		resultado.innerHTML = 'Ops, você errou alguma resposta, tente novamente.';
    resultado.style.background = 'red';
    resultado.style.display = 'block';
    document.getElementById('certa').style.background = 'red';
    return
	}

  if (resposta2 === 'b') {
    resultado.innerHTML = 'Parabéns, você acertou todas as respostas!';
    resultado.style.color = 'black';
    resultado.style.display = 'block';
    resultado.style.background = 'limegreen';
    document.getElementById('certa1').style.background = 'white';
  } else {
		resultado.innerHTML = 'Ops, você errou alguma resposta, tente novamente.';
    resultado.style.background = 'red';
    resultado.style.display = 'block';
    document.getElementById('certa1').style.background = 'red';
    return
	}

  if (resposta3 === 'a') {
    resultado.innerHTML = 'Parabéns, você acertou todas as respostas!'
    resultado.style.color = 'black';
    resultado.style.display = 'block';
    resultado.style.background = 'limegreen';
    document.getElementById('certa2').style.background = 'white';
  }else {
		resultado.innerHTML = 'Ops, você errou alguma resposta, tente novamente.';
    resultado.style.background = 'red';
    resultado.style.display = 'block';
    document.getElementById('certa2').style.background = 'red';
    return
	}

  if (resposta4 === 'c') {
    resultado.innerHTML = 'Parabéns, você acertou todas as respostas!'
    resultado.style.color = 'black';
    resultado.style.display = 'block';
    resultado.style.background = 'limegreen';
    document.getElementById('certa3').style.background = 'white';
  }else {
		resultado.innerHTML = 'Ops, você errou alguma resposta, tente novamente.';
    resultado.style.background = 'red';
    resultado.style.display = 'block';
    document.getElementById('certa3').style.background = 'red';
    return
	}
}
