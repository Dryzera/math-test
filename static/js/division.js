const body = document.body

function decimalDivision() {
    let leftNumber = Math.round((Math.random() * (10 - 0.5) + 0.5) * 10) / 10;
    let rightNumber = Math.round((Math.random() * (10 - 0.5) + 0.5) * 10) / 10;
    return [leftNumber, rightNumber];
}

function normalDivision() {
    let leftNumber = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
    let rightNumber = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    return [leftNumber, rightNumber];
}

function calcDivision(left, right) {
    result_division = Math.round(left / right);
    console.log(result_division)
    return result_division;
}

function checkAnswer(answer, result) {
    if (answer === result) {
        body.style.backgroundColor = '#72cb26' // se correto
    } else {
        body.style.backgroundColor = '#f53131'
    }

    document.getElementById('correct-answer').textContent = result;

    setTimeout(() => {
        location.reload();
    }, 900);
}

let [leftNumber, rightNumber] = normalDivision();
let result = calcDivision(leftNumber, rightNumber);

document.getElementById("left-number").textContent = leftNumber;
document.getElementById("right-number").textContent = rightNumber;

document.getElementById('submit-btn').addEventListener('click', function() {
    let answer = parseInt(document.getElementById('answer-input').value);
    checkAnswer(answer, result);
});

document.getElementById('skip-btn').addEventListener('click', function() {
    location.reload()
})