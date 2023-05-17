const form = document.getElementById('quiz-form');
const answersArray = Array.from(document.querySelectorAll('.answer'));
const questionContainer = document.querySelectorAll('.question-container');
const answers = document.querySelectorAll('.answer')
const punctuation = document.querySelector('#punctuation')

//Cosas a conseguir

//resultado de cuantas preguntas han sido acertadas al hcer click en el boton
//  Necesito el numero de preguntas, y el numero de preguntas acertadas
//    El numero de preguntas acertadas es el numero de inputs checkeados que tienen valor true

//si la pregunta es correcta que aparezca en verde cuando haga click en el boton

//si la pregunta es incorrecta que aparezca en rojo cuando haga click en el boton

//numero de preguntas:
console.log(questionContainer.length)

//answers
console.log(answers[1].checked)



form.addEventListener('submit', e => {
    e.preventDefault();
    //preguntas acertadas
    let correctAnswers = []
    for (let i = 0; i < answers.length; i++) {

        if (answers[i].value === 'true' && answers[i].checked === true) {
            correctAnswers.push('correct')
        }
    }
    //Numero de Respuestas acertadas
    console.log(correctAnswers.length)
    let nOfCorrectAnswers = correctAnswers.length
    let nOfTotalQuestions = questionContainer.length

    let p = document.createElement('p');
    p.innerHTML = `Tu puntuación es de ${nOfCorrectAnswers} preguntas acertadas de ${nOfTotalQuestions}`
    punctuation.appendChild(p)

})