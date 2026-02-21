
        let random = Math.random();
        console.log(random);
        let a = Number(prompt('enter any number1 :'));
        let b = Number(prompt('enter any number2 :'));
        let operator = prompt('enter any operator *,/,<,+,-');
        let result;


        if (random > 0.1) {
            if (operator === "+") {
                result = a + b;
            }
            else if (operator === "-") {
                result = a - b;
            }
            else if (operator === "/") {
                result = a / b;
            }
            else if (operator === "*") {
                result = a * b;
            }
            else {
                console.log('invalid operator');
            }

            console.log(result);
        }

        else {

            if (operator === "+") {
                result = a - b;
            }
            else if (operator === "-") {
                result = a + b;
            }
            else if (operator === "/") {
                result = a * b;
            }
            else if (operator === "*") {
                result = a / b;
            }
            else {
                console.log('invalid operator');
            }

            console.log(result);

        }
