let clicked = false;
let start = 0;
let clicks = 0;
let results = [];

const calculate_average = (array) => {
    let total = 0;
    let count = 0;

    array.forEach(function(item, index) {
        total += item;
        count++;
    });

    return total / count;
}

async function run_test() {
    let style_main = document.querySelector(".main").style;
    let style_text = document.getElementById("text");

    await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * (3000 - 1000) + 3000)));

    start = Date.now();

    style_main.backgroundColor = "rgb(75, 175, 255)";
    style_text.style.color = "rgb(30, 30, 30)";
    style_text.innerText = "Kliknij!";

    clicked = true;
    clicks++;
}

const run_pause = () => {
    if (clicks == 5) {
        return;
    }

    let style_main = document.querySelector(".main").style;
    let style_text = document.getElementById("text");

    results.unshift(Date.now() - start);

    style_main.backgroundColor = "rgb(30, 30, 30)";
    style_text.style.color = "rgb(75, 175, 255)";
    style_text.innerText = Date.now() - start + " ms";

    clicked = false;
}

const run_result = () => {
    let style_main = document.querySelector(".main").style;
    let style_text = document.getElementById("text");
    let style_back = document.getElementById("back");

    style_main.backgroundColor = "rgb(30, 30, 30)";
    style_text.style.color = "rgb(75, 175, 255)";
    style_text.innerText = "Średnia: " + calculate_average(results) + " ms";
    style_back.style.display = "block";
}

document.onclick = () => {
    let style_main = document.querySelector(".main").style;
    let style_text = document.getElementById("text");

    style_main.backgroundColor = "rgb(30, 30, 30)";
    style_text.style.color = "rgb(75, 175, 255)";
    style_text.innerText = "...";

    if (!clicked) {
        run_test();
    }
    else {
        run_pause();
    }

    if (clicks == 5) {
        run_result()
    }
}