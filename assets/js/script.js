/*PERCENTAGEs*/
/*PERCENTAGE 1*/
function percentage1() {
    let box1__inp1 = Number(document.getElementById('box1__inp1').value);
    let box1__inp2 = Number(document.getElementById('box1__inp2').value);
    let result1 = document.getElementById('result1');
    let sum = (box1__inp1 * box1__inp2) / 100;

    box1__inp1 == "" || box1__inp2 == ""
    ? result1.innerHTML = `Please, fulfill al the field!`
    : result1.innerHTML = `${sum.toFixed(2)}`
}
/*PERCENTAGE 2*/
function percentage2() {
    let box2__inp1 = Number(document.getElementById('box2__inp1').value);
    let box2__inp2 = Number(document.getElementById('box2__inp2').value);
    let result2 = document.getElementById('result2');
    let sum = (box2__inp1 * 100) / box2__inp2;

    box2__inp1 == "" || box2__inp2 == ""
    ? result2.innerHTML = `Please, fulfill al the field!`
    : result2.innerHTML = `${sum.toFixed(2)}%`
}
/*PERCENTAGE 3*/
function percentage3() {
    let box3__inp1 = Number(document.getElementById('box3__inp1').value);
    let box3__inp2 = Number(document.getElementById('box3__inp2').value);
    let result3 = document.getElementById('result3');
    let sum = ((box3__inp2 - box3__inp1) / box3__inp1) * 100;

    box3__inp1 == "" || box3__inp2 == ""
    ? result3.innerHTML = `Please, fulfill al the field!`
    : result3.innerHTML = `${sum.toFixed(2)}%`
}
/*PERCENTAGE 4*/
function percentage4() {
    let box4__inp1 = Number(document.getElementById('box4__inp1').value);
    let box4__inp2 = Number(document.getElementById('box4__inp2').value);
    let result4 = document.getElementById('result4');
    let sum = ((box4__inp1 - box4__inp2) / box4__inp1) * 100;

    box4__inp1 == "" || box4__inp2 == ""
    ? result4.innerHTML = `Please, fulfill al the field!`
    : result4.innerHTML = `${sum.toFixed(2)}%`
}
/*PERCENTAGE 5*/
function percentage5() {
    let box5__inp1 = Number(document.getElementById('box5__inp1').value);
    let box5__inp2 = Number(document.getElementById('box5__inp2').value);
    let result5 = document.getElementById('result5');
    let sum = box5__inp1 * (1 + box5__inp2 / 100);

    box5__inp1 == "" || box5__inp2 == ""
    ? result5.innerHTML = `Please, fulfill al the field!`
    : result5.innerHTML = `${sum.toFixed(2)}`
}
/*PERCENTAGE 6*/
function percentage6() {
    let box6__inp1 = Number(document.getElementById('box6__inp1').value);
    let box6__inp2 = Number(document.getElementById('box6__inp2').value);
    let result6 = document.getElementById('result6');
    let sum = box6__inp1 * (1 - box6__inp2 / 100);

    box6__inp1 == "" || box6__inp2 == ""
    ? result6.innerHTML = `Please, fulfill al the field!`
    : result6.innerHTML = `${sum.toFixed(2)}`
}



/*SIMPLE RULE OF 3*/
function ruleOf3() {
    let inp1 = Number(document.getElementById('inp1').value);
    let inp2 = Number(document.getElementById('inp2').value);
    let inp3 = Number(document.getElementById('inp3').value);
    let result = document.getElementById('result');
    let sum = (inp2 * inp3) / inp1;

    inp1 == "" || inp2 == "" || inp3 == ""
    ? result.innerHTML = `Please, fulfill al the field!`
    : result.innerHTML = `${sum.toFixed(2)}`
}