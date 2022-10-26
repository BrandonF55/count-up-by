function handleCount(event) {
    event.preventDefault();

    //grab values from textboxes
    const countTo = document.querySelector("#countTo").value;
    const countBy = document.querySelector("#countBy").value;

    





}

function counter(count) {
    let countTotal = [];
    for (let index = 0; index <= 30; index += 5) {
        countTotal.push(i);
    }
    return countTotal;
}


function multiple(count2) {
    let countTotal2 = [];
    for (let index = 0; index <= 50; index += 7) {
        countTotal2.push(i);
    }
    return countTotal2;
}


window.addEventListener("load", function () {
    const form = document.getElementById("counter");
    form.addEventListener("submit", handleCount);
});