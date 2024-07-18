const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container3");
const container4 = document.querySelector(".container4");
const dice = document.querySelector(".body1");
let result = document.querySelector(".result");
let hscore = document.querySelector(".hscore");
let exp = document.querySelector(".exp");
let rand;
let arr = [];
let a = 0, b = 0, c = 0, d = 0;
let condition = false;
let beforetime;
let repeat = false;
let o = true;

function resetCircles() {
    const allCircles = document.querySelectorAll(".circle");
    allCircles.forEach(circle => {
        circle.style.backgroundColor = "black";
    });
    a = 0;
    b = 0;
    c = 0;
    d = 0;
    condition = false;
}

function fn1() {
    const circles = container1.getElementsByClassName("circle");
    if (a === 0) {
        for (let i = 0; i < circles.length; i++) {
            circles[i].style.backgroundColor = "red";
        }
        a = 1;
        console.log("All circles in container 1 changed to red!");
    } else if (a === 1) {
        for (let i = 0; i < circles.length; i++) {
            circles[i].style.backgroundColor = "black";
        }
        condition = true;
        startTimer();
    }
}

function fn2() {
    const circles = container2.getElementsByClassName("circle");
    if (b === 0) {
        for (let i = 0; i < circles.length; i++) {
            circles[i].style.backgroundColor = "red";
        }
        b = 1;
        console.log("All circles in container 2 changed to red!");
    } else if (b === 1) {
        for (let i = 0; i < circles.length; i++) {
            circles[i].style.backgroundColor = "black";
        }
    }
}

function fn3() {
    const circles = container3.getElementsByClassName("circle");
    if (c === 0) {
        for (let i = 0; i < circles.length; i++) {
            circles[i].style.backgroundColor = "red";
        }
        c = 1;
        console.log("All circles in container 3 changed to red!");
    } else if (c === 1) {
        for (let i = 0; i < circles.length; i++) {
            circles[i].style.backgroundColor = "black";
        }
    }
}

function fn4() {
    const circles = container4.getElementsByClassName("circle");
    if (d === 0) {
        for (let i = 0; i < circles.length; i++) {
            circles[i].style.backgroundColor = "red";
        }
        d = 1;
        console.log("All circles in container 4 changed to red!");
    } else if (d === 1) {
        for (let i = 0; i < circles.length; i++) {
            circles[i].style.backgroundColor = "black";
        }
    }
}

function one() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!o) return reject("Early stop");
            resolve(fn1());
        }, 700);
    });
}

function two() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!o) return reject("Early stop");
            resolve(fn2());
        }, 1100);
    });
}

function three() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!o) return reject("Early stop");
            resolve(fn3());
        }, 1100);
    });
}

function four() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!o) return reject("Early stop");
            resolve(fn4());
        }, 1100);
    });
}

function randint(){
    let randomNumber1 = Math.floor(Math.random() * 60);
    rand = randomNumber1 * 100;
    return rand
}

function nw2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!o) return reject("Early stop");
            fn1();
            fn2();
            fn3();
            fn4();
        },randint() ,
                 );
    });
}

async function nw() {
    repeat = false;
    try {
        o && await one();
        o && await two();
        o && await three();
        o && await four();
        o && await nw2();
    } catch (error) {
        console.log(error);  // Handle early stop gracefully
    }
}

function startTimer() {
    let beforedate = new Date();
    beforetime = beforedate.getTime();
}

function main() {
    dice.addEventListener("click", onDiceClick);
}

function onDiceClick() {
    if (condition) {
        console.log("true");
        let afterdate = new Date();
        let aftertime = afterdate.getTime();
        console.log(aftertime)
        console.log(beforetime)
        let time = (aftertime - beforetime);
        time = time / 1000;
        console.log("Time Taken:", time, " seconds");
        result.innerHTML = "Time Taken: " + time + " seconds";
        let g = arr.push(time)
        console.log(arr)
        let f1 = Math.min(...arr)
        console.log(f1)
        hscore.innerHTML = `highest score: ${f1}`
        aftertime = 0;
        beforetime = 0;
        condition = false;
        a = 0;
        b = 0;
        c = 0;
        d = 0;
        repeat = true;
        y();
    } else {
        result.innerHTML = "Early Start!"
        
        o = false;
        y();
    }
}

function y() {
    dice.removeEventListener("click", onDiceClick);
    dice.addEventListener("click", startNewGame);
}

function startNewGame() {
  result.innerHTML = "Result"
    o = true;
    resetCircles();
    dice.removeEventListener("click", startNewGame);
    nw();
    dice.addEventListener("click", onDiceClick);
}

nw();
main();

dice.addEventListener("dblclick", (e) => {
    e.preventDefault();
}, { passive: false });
