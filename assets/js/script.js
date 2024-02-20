/*ROMAN CONVERTER*/
function roman() {
    var romanNumber = document.getElementById("inp1").value.toUpperCase();
    let result = document.getElementById("result");
    
    var values = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    var arabNumber = 0;
    
    for (var i = 0; i < romanNumber.length; i++) {
        var actualValue = values[romanNumber[i]];
        var nextValue = values[romanNumber[i + 1]];
        
        if (nextValue && nextValue > actualValue) {
            arabNumber += nextValue - actualValue;
            i++;
        } else {
            arabNumber += actualValue;
        }
    }
    
    result.innerHTML = `${arabNumber}`;
}




/*FACTORING*/
function factoring() {
  let inp1 = Number(document.getElementById("inp1").value);
  let result = document.getElementById("result");
  let factors = [];

  for (var i = 2; i <= inp1; i++) {
    while (inp1 % i === 0) {
      factors.push(i);
      inp1 /= i;
    }
  }
  result.innerHTML = "Factors: " + factors.join(", ");
}

/*GCD*/
function findGCD() {
    let result = document.getElementById("result");
    var numbers = [];

    for (var i = 1; i <= 6; i++) {
        var input = document.getElementById("inp" + i);
        if (input.value !== "") {
            numbers.push(parseInt(input.value));
        }
    }
    
    if (numbers.length < 2) {
        result.innerHTML = "Please, insert at least 2 values";
        return;
    }
    
    function calcGCD(a, b) {
        while (b !== 0) {
            var temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    var gcd = numbers[0];
    for (var j = 1; j < numbers.length; j++) {
        gcd = calcGCD(gcd, numbers[j]);
    }
    var inpValues = numbers.join(", ");
    result.innerHTML = `The GCD of (${inpValues}) is: ${gcd}`;
}



function findLCM() {
    let result = document.getElementById("result");
    var numbers = [];

    for (var i = 1; i <= 6; i++) {
        var input = document.getElementById("inp" + i);
        if (input.value !== "") {
            numbers.push(parseInt(input.value));
        }
    }

    if (numbers.length < 2) {
        result.innerText = "Please, insert at least 2 values";
        return;
    }
    
    function calcLCM(a, b) {
        function calcMDC(x, y) {
            while (y !== 0) {
                var temp = y;
                y = x % y;
                x = temp;
            }
            return x;
        }
        return (a * b) / calcMDC(a, b);
    }
    
    // Calcular o MMC de todos os pares de números
    var lcm = numbers[0];
    for (var j = 1; j < numbers.length; j++) {
        lcm = calcLCM(lcm, numbers[j]);
    }
    
    // Construir a mensagem de result
    var inpValues = numbers.join(", ");
    result.innerHTML = `The LCM of (${inpValues}) is: ${lcm}`;
}



/*PERCENTAGEs*/
/*PERCENTAGE 1*/
function percentage1() {
  let box1__inp1 = Number(document.getElementById("box1__inp1").value);
  let box1__inp2 = Number(document.getElementById("box1__inp2").value);
  let result1 = document.getElementById("result1");
  let sum = (box1__inp1 * box1__inp2) / 100;

  box1__inp1 == "" || box1__inp2 == ""
    ? (result1.innerHTML = `Please, fulfill al the field!`)
    : (result1.innerHTML = `${sum.toFixed(2)}`);
}
/*PERCENTAGE 2*/
function percentage2() {
  let box2__inp1 = Number(document.getElementById("box2__inp1").value);
  let box2__inp2 = Number(document.getElementById("box2__inp2").value);
  let result2 = document.getElementById("result2");
  let sum = (box2__inp1 * 100) / box2__inp2;

  box2__inp1 == "" || box2__inp2 == ""
    ? (result2.innerHTML = `Please, fulfill al the field!`)
    : (result2.innerHTML = `${sum.toFixed(2)}%`);
}
/*PERCENTAGE 3*/
function percentage3() {
  let box3__inp1 = Number(document.getElementById("box3__inp1").value);
  let box3__inp2 = Number(document.getElementById("box3__inp2").value);
  let result3 = document.getElementById("result3");
  let sum = ((box3__inp2 - box3__inp1) / box3__inp1) * 100;

  box3__inp1 == "" || box3__inp2 == ""
    ? (result3.innerHTML = `Please, fulfill al the field!`)
    : (result3.innerHTML = `${sum.toFixed(2)}%`);
}
/*PERCENTAGE 4*/
function percentage4() {
  let box4__inp1 = Number(document.getElementById("box4__inp1").value);
  let box4__inp2 = Number(document.getElementById("box4__inp2").value);
  let result4 = document.getElementById("result4");
  let sum = ((box4__inp1 - box4__inp2) / box4__inp1) * 100;

  box4__inp1 == "" || box4__inp2 == ""
    ? (result4.innerHTML = `Please, fulfill al the field!`)
    : (result4.innerHTML = `${sum.toFixed(2)}%`);
}
/*PERCENTAGE 5*/
function percentage5() {
  let box5__inp1 = Number(document.getElementById("box5__inp1").value);
  let box5__inp2 = Number(document.getElementById("box5__inp2").value);
  let result5 = document.getElementById("result5");
  let sum = box5__inp1 * (1 + box5__inp2 / 100);

  box5__inp1 == "" || box5__inp2 == ""
    ? (result5.innerHTML = `Please, fulfill al the field!`)
    : (result5.innerHTML = `${sum.toFixed(2)}`);
}
/*PERCENTAGE 6*/
function percentage6() {
  let box6__inp1 = Number(document.getElementById("box6__inp1").value);
  let box6__inp2 = Number(document.getElementById("box6__inp2").value);
  let result6 = document.getElementById("result6");
  let sum = box6__inp1 * (1 - box6__inp2 / 100);

  box6__inp1 == "" || box6__inp2 == ""
    ? (result6.innerHTML = `Please, fulfill al the field!`)
    : (result6.innerHTML = `${sum.toFixed(2)}`);
}

/*SIMPLE RULE OF 3*/
function ruleOf3() {
  let inp1 = Number(document.getElementById("inp1").value);
  let inp2 = Number(document.getElementById("inp2").value);
  let inp3 = Number(document.getElementById("inp3").value);
  let result = document.getElementById("result");
  let sum = (inp2 * inp3) / inp1;

  inp1 == "" || inp2 == "" || inp3 == ""
    ? (result.innerHTML = `?`)
    : (result.innerHTML = `${sum.toFixed(2)}`);
}



/*SIMPLE RULE OF 3*/
function remainder() {
    let inp1 = Number(document.getElementById("inp1").value);
    let inp2 = Number(document.getElementById("inp2").value);
    let result = document.getElementById("result");
    let remainder = inp1 % inp2;
  
    inp1 == "" || inp2 == ""
      ? (result.innerHTML = `Please, fulfill al the field!`)
      : (result.innerHTML = `The remainder of dividing ${inp1} by ${inp2}, is: ${remainder}`);
  }
