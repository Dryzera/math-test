const body = document.body

function generateNumbers() {
    let leftNumber = Math.floor(Math.random() * 11); 
    let rightNumber = Math.floor(Math.random() * 11);

    let resultMultiplicate = leftNumber * rightNumber;

    return [leftNumber, rightNumber, resultMultiplicate];
}

function sendToHTML(left, right) {
    document.getElementById('left-number').textContent = left;
    document.getElementById('right-number').textContent = right;
}

function checkToAnswer(answer, resultMultiplicate) {
    if (answer != resultMultiplicate) {
        body.style.backgroundColor = '#f53131' // se incorreto
    } else {
        body.style.backgroundColor = '#72cb26' // se correto
    }

    document.getElementById('correct-answer').textContent = resultMultiplicate;

    setTimeout(() => {
        location.reload();
    }, 900);
}

let [leftNumber, rightNumber, resultMultiplicate] = generateNumbers();

sendToHTML(leftNumber, rightNumber);

document.getElementById('submit-btn').addEventListener('click', function() {
    let answer = parseInt(document.getElementById('answer-input').value);
    checkToAnswer(answer, resultMultiplicate);
});

document.getElementById('skip-btn').addEventListener('click', function() {
    location.reload()
})
