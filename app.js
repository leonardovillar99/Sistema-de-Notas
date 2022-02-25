const btn = document.querySelector('#btn-sub');

btn.addEventListener('click', function(e){
    e.preventDefault();

    var name = document.querySelector('#name');
    var value = name.value;

    var age = document.querySelector('#age');
    var value1 = age.value;

    var firstGrade = document.querySelector('#first-grade')
    var value2 = firstGrade.value;

    var secondGrade = document.querySelector('#second-grade')
    var value3 = secondGrade.value;

    var thirdGrade = document.querySelector('#third-grade')
    var value4 = thirdGrade.value;

    var fourthGrade = document.querySelector('#fourth-grade')
    var value5 = fourthGrade.value;

    const media = firstGrade + secondGrade + thirdGrade + fourthGrade;
    const mediaFinal = media / 4;

    if(mediaFinal > 7){
        alert('Parabéns você foi aprovado!')
    } else if(mediaFinal <7 && mediaFinal >= 6){
        alert('Você está de recuperação!')
    } else if(mediaFinal < 6 && mediaFinal == 0){
        alert('Você foi reprovado!')
    }

    alert(`Nome: ${value} \nIdade: ${value1} anos \nNota do primeiro bimestre: ${value2} \nNota do segundo bimestre: ${value3} \nNota do terceiro bimestre: ${value4} \nNota do quarto bimestre: ${value5} \nSituação: ${mediaFinal}`)
})