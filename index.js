let form = document.getElementById('quiz-form');
const answers = Array.from(document.querySelectorAll('.answer'));

form.addEventListener('submit', e => {
    e.preventDefault()
    const checkedAnswers = answers.filter(answer => answer.checked)

    checkedAnswers.forEach(answer => {
        const isCorrect = answer.value === 'true'
        const questionItem = answers.closest('.question-container')
        if (isCorrect) {

        } else {

        }
    })
}) 