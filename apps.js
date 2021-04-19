
//SETS UP PLAYER ONES BUTTONS
const p1Button1 = document.querySelector('#p1Button1');
const p1Button2 = document.querySelector('#p1Button2');
const p1Button3 = document.querySelector('#p1Button3');

//SETS UP PLAYER TWOS BUTTONS
const p2Button1 = document.querySelector('#p2Button1');
const p2Button2 = document.querySelector('#p2Button2');
const p2Button3 = document.querySelector('#p2Button3');

const resetButton = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const scoreSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let winningScore = 11;
let gameOver = false;

//PLAYER ONE BUTTONS:

//+1 POINT
p1Button1.addEventListener('click', function () {
    if (!gameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            gameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');

            p1Button1.disabled = true;
            p1Button2.disabled = true;
            p1Button3.disabled = true;

            p2Button1.disabled = true;
            p2Button2.disabled = true;
            p2Button3.disabled = true;
        }
        p1Display.textContent = p1Score;
    }
})

//+2 POINTS
p1Button2.addEventListener('click', function () {
    if (!gameOver) {
        p1Score += 2;
        if (p1Score > winningScore) { p1Score = p1Score / 2; } //Makes it so player cannot go over score. 
        if (p1Score === winningScore) {
            gameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');

            p1Button1.disabled = true;
            p1Button2.disabled = true;
            p1Button3.disabled = true;

            p2Button1.disabled = true;
            p2Button2.disabled = true;
            p2Button3.disabled = true;
        }
        p1Display.textContent = p1Score;
    }
})

//+3 POINTS
p1Button3.addEventListener('click', function () {
    if (!gameOver) {
        p1Score += 3;
        if (p1Score > winningScore) { p1Score = p1Score / 2; } //Makes it so player cannot go over score. 
        if (p1Score === winningScore) {
            gameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');

            p1Button1.disabled = true;
            p1Button2.disabled = true;
            p1Button3.disabled = true;

            p2Button1.disabled = true;
            p2Button2.disabled = true;
            p2Button3.disabled = true;
        }
        p1Display.textContent = p1Score;
    }
})

//PLAYER TWO BUTTONS

//+1 POINT
p2Button1.addEventListener('click', function () {
    if (!gameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            gameOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');

            p1Button1.disabled = true;
            p1Button2.disabled = true;
            p1Button3.disabled = true;

            p2Button1.disabled = true;
            p2Button2.disabled = true;
            p2Button3.disabled = true;
        }
        p2Display.textContent = p2Score;
    }
})

//+2 POINTS
p2Button2.addEventListener('click', function () {
    if (!gameOver) {
        p2Score += 2;
        if (p2Score > winningScore) { p2Score = p2Score / 2; } //Makes it so player cannot go over score. 
        if (p2Score === winningScore) {
            gameOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');

            p1Button1.disabled = true;
            p1Button2.disabled = true;
            p1Button3.disabled = true;

            p2Button1.disabled = true;
            p2Button2.disabled = true;
            p2Button3.disabled = true;
        }
        p2Display.textContent = p2Score;
    }
})

//+3 POINTS
p2Button3.addEventListener('click', function () {
    if (!gameOver) {
        p2Score += 3;
        if (p2Score > winningScore) { p2Score = p2Score / 2; } //Makes it so player cannot go over score. 
        if (p2Score === winningScore) {
            gameOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');

            p1Button1.disabled = true;
            p1Button2.disabled = true;
            p1Button3.disabled = true;

            p2Button1.disabled = true;
            p2Button2.disabled = true;
            p2Button3.disabled = true;
        }
        p2Display.textContent = p2Score;
    }
})

scoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();

})

resetButton.addEventListener('click', reset)

function reset() {
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');

    p1Button1.disabled = false;
    p1Button2.disabled = false;
    p1Button3.disabled = false;

    p2Button1.disabled = false;
    p2Button2.disabled = false;
    p2Button3.disabled = false;
}