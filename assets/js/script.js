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



/*REMAINDER*/
function remainder() {
    let inp1 = Number(document.getElementById("inp1").value);
    let inp2 = Number(document.getElementById("inp2").value);
    let result = document.getElementById("result");
    let remainder = inp1 % inp2;
  
    inp1 == "" || inp2 == ""
      ? (result.innerHTML = `Please, fulfill al the field!`)
      : (result.innerHTML = `The remainder of dividing ${inp1} by ${inp2}, is: ${remainder}`);
}





/*AREAS*/
/*CIRCLE AREA*/
function circle() {
    let radius = document.getElementById("radius");
    let diameter = document.getElementById("diameter");
    let inp1 = Number(document.getElementById("inp1").value);
    let result = document.getElementById("result");

    let radiusFormula =  Math.PI * inp1 ** 2;
    let diameterFormula = (Math.PI * inp1 ** 2)  / 4;
  
    if (inp1 == "") {
        result.innerHTML = `Please, put a number!`;
    } else if (radius.checked) {
        result.innerHTML = `The area of this circle is: ${radiusFormula.toFixed(2)}`;
    } else if (diameter.checked) {
        result.innerHTML = `The area of this circle is: ${diameterFormula.toFixed(2)}`;
    }
}
/*SQUARE AREA*/
function square() {
    let inp1 = Number(document.getElementById("inp1").value);
    let result = document.getElementById("result");

    let squareFormula = inp1 * inp1;

    inp1 == ""
    ? result.innerHTML = `Please, the side value!`
    : result.innerHTML = `The area of this square is: ${squareFormula.toFixed(2)}`;
}
/*RECTANGLE AREA*/
function rectangle() {
    let inp1 = Number(document.getElementById("inp1").value);
    let inp2 = Number(document.getElementById("inp2").value);
    let result = document.getElementById("result");

    let rectangleFormula = inp1 * inp2;
  
    inp1 == "" || inp2 == ""
    ? result.innerHTML = `Please, fulfill al the field!`
    : result.innerHTML = `The area of this rectangle is: ${rectangleFormula.toFixed(2)}`;
}
/*TRIANGLE AREA*/
function triangle() {
    let inp1 = Number(document.getElementById("inp1").value);
    let inp2 = Number(document.getElementById("inp2").value);
    let result = document.getElementById("result");

    let triangleFormula = (inp1 * inp2) / 2;
  
    inp1 == "" || inp2 == ""
    ? result.innerHTML = `Please, fulfill al the field!`
    : result.innerHTML = `The area of this triangle is: ${triangleFormula.toFixed(2)}`;
}
/*PENTAGON AREA*/
function pentagon() {
    let inp1 = Number(document.getElementById("inp1").value);
    let result = document.getElementById("result");

    let pentagonFormula = (5 * (inp1**2)) / (4 * 0.7265);

    inp1 == ""
    ? result.innerHTML = `Please, put the side value!`
    : result.innerHTML = `The area of this pentagon is: ${pentagonFormula.toFixed(2)}`;
}
/*HEXAGON AREA*/
function hexagon() {
    let inp1 = Number(document.getElementById("inp1").value);
    let result = document.getElementById("result");

    let hexagonFormula = (6 * (inp1**2)) / (4 * 0.5774);

    inp1 == ""
    ? result.innerHTML = `Please, put the side value!`
    : result.innerHTML = `The area of this hexagon is: ${hexagonFormula.toFixed(2)}`;
}
/*REGULAR POLYGON AREA*/
function regularPolygon() {
    let inp1 = Number(document.getElementById("inp1").value);
    let inp2 = Number(document.getElementById("inp2").value);
    let result = document.getElementById("result");

    let regularFormula = (inp2 ** 2 * inp1) / (4 * Math.tan(Math.PI / inp1));
  
    inp1 == "" || inp2 == ""
    ? result.innerHTML = `Please, fulfill al the field!`
    : result.innerHTML = `The area of this regular polygon is: ${regularFormula.toFixed(2)}`;
}
/*LOSANGO AREA*/
function losango() {
    let inp1 = Number(document.getElementById("inp1").value);
    let inp2 = Number(document.getElementById("inp2").value);
    let result = document.getElementById("result");

    let losangoFormula = (inp1 * inp2) / 2;
  
    inp1 == "" || inp2 == ""
    ? result.innerHTML = `Please, fulfill al the field!`
    : result.innerHTML = `The area of this losango is: ${losangoFormula.toFixed(2)}`;
}
/*TRAPEZIUM AREA*/
function trapezium() {
    let inp1 = Number(document.getElementById("inp1").value);
    let inp2 = Number(document.getElementById("inp2").value);
    let inp3 = Number(document.getElementById("inp3").value);
    let result = document.getElementById("result");

    let trapeziumFormula = (inp1 + inp2) * inp3 / 2;
  
    inp1 == "" || inp2 == "" || inp3 == ""
    ? result.innerHTML = `Please, fulfill al the field!`
    : result.innerHTML = `The area of this trapezium is: ${trapeziumFormula.toFixed(2)}`;
}
/*PARALLELOGRAM AREA*/
function parallelogram() {
    let inp1 = Number(document.getElementById("inp1").value);
    let inp2 = Number(document.getElementById("inp2").value);
    let result = document.getElementById("result");

    let parallelogramFormula = inp1 * inp2;
  
    inp1 == "" || inp2 == ""
    ? result.innerHTML = `Please, fulfill al the field!`
    : result.innerHTML = `The area of this parallelogram is: ${parallelogramFormula.toFixed(2)}`;
}
/*ELLIPSE AREA*/
function parallelogram() {
    let inp1 = Number(document.getElementById("inp1").value);
    let inp2 = Number(document.getElementById("inp2").value);
    let result = document.getElementById("result");

    let ellipseFormula = Math.PI * inp1 * inp2;
  
    inp1 == "" || inp2 == ""
    ? result.innerHTML = `Please, fulfill al the field!`
    : result.innerHTML = `The area of this ellipse is: ${ellipseFormula.toFixed(2)}`;
}
/*CIRCULAR CROWN AREA*/
function crown() {
    let inp1 = Number(document.getElementById("inp1").value);
    let inp2 = Number(document.getElementById("inp2").value);
    let result = document.getElementById("result");

    let circularCrownFormula = Math.PI * (inp1 ** 2 - inp2 ** 2);
  
    inp1 == "" || inp2 == ""
    ? result.innerHTML = `Please, fulfill al the field!`
    : result.innerHTML = `The area of this circular crown is: ${circularCrownFormula.toFixed(2)}`;
}
function sector() {
    let inp1 = Number(document.getElementById("inp1").value);
    let inp2 = Number(document.getElementById("inp2").value);
    let result = document.getElementById("result");

    let circularSectorFormula = Math.PI * (inp1 ** 2 * inp2) / 360;
  
    inp1 == "" || inp2 == ""
    ? result.innerHTML = `Please, fulfill al the field!`
    : result.innerHTML = `The area of this circular sector is: ${circularSectorFormula.toFixed(2)}`;
}


