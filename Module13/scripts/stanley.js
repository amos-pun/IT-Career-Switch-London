function equivalentCheck(){ //This allows the last value to remain in view until   other buttons are pressed.
    console.log("equivalentCheck()");
    if 
    (parseInt(document.getElementById('equivalent').value)){
        document.getElementById('equivalent').value = 0;
        document.getElementById('result').value = 0;
    }
}

function input(x) {

    equivalentCheck();

    let y = parseFloat(document.getElementById('result').value);

    if(document.getElementById('decimalVar').value == 0){
         x += y * 10; //multiply the text input by 10 and add the value of x.

        document.getElementById('result').value = x; //Return x to the text output.
        
    }
    else { // If decimal is true

        let decimalCount = parseInt(document.getElementById('decimalVar').value);

        if(decimalCount == 1) {
            x *= 1/10; //We are using math to place the decimal point.
            y += x;
            document.getElementById('result').value = y;
        }
        else{
            document.getElementById('result').value += x;
        }
         

        //the lines below are unnecessary
        //decimalCount++;
        //document.getElementById('decimalVar').value = decimalCount;
    }


   /* if (document.getElementById("result").value == 0){ //This check the zero and gets rid of it when we enter number fo the first time.
    
        document.getElementById('result').value = x;
    }   */
}

function decimalPoint(){
    if(document.getElementById('decimalVar').value == 0) { //This prevents multiple decimals
        document.getElementById('decimalVar').value = 1;
    }
    /*
    if(parseInt(document.getElementById('operation').value)){ //If this is an empty string it will return false.
        document.getElementById('result').value = "";
    }
    */
}

function operandCheck() {
    //check if there is the first number and store it in memory
    if(document.getElementById('operand').value == "") {
        //if we did not save it save what is on the screen as th first number
        document.getElementById('operand').value = document.getElementById('result').value;
        //document.getElementById('result').value = 0; //this is temporary.
        document.getElementById('equivalent').value = 1;
    }
    else{
        //if we have the first number in memory then check the operation to be done 
        operatorCheck();
    }
}

function operatorCheck(){
    let a = parseFloat(document.getElementById('operand').value);
    let b = parseFloat(document.getElementById('result').value);

    switch (parseInt(document.getElementById('operation').value)) {
        case 1: //addition
        console.log(a);
        console.log(b);
        console.log(a+b);
        a += b;
        break;

        case 2: //subtraction
        a -= b;
        break;
    
        case 3: //multiplication
        a *= b;
        break;
    
        case 4: //division
        a /= b;
        
    }

    document.getElementById('operand').value = a;
    document.getElementById('result').value = a;
    document.getElementById('equivalent').value = 1;
}


function operators(x){

    switch (x) {
        case 1:
            document.getElementById('operation').value = 1; //addition
            break;
        case 2:
            document.getElementById('operation').value = 2; //subtraction
            break;
        case 3:
            document.getElementById('operation').value = 3; //multipication
            break;
        case 4:
            document.getElementById('operation').value = 4; //division
            break;
        default:
    }

    document.getElementById('decimalVar').value=0; //added this line
    operandCheck();
    
}

function equals() {

    operators(parseInt(document.getElementById('operation').value));
    document.getElementById('result').value = document.getElementById('operand').value;
    document.getElementById('operand').value = "";
    document.getElementById('equivalent').value = 1;
    document.getElementById('decimalVar').value=0;  //added this line
    
}

function allclear() {
   //perfect
    document.getElementById('result').value = 0;
    document.getElementById('operand').value = "";
    document.getElementById('operation').value = 0;
    document.getElementById('equivalent').value = 0;
    document.getElementById('decimalVar').value=0; //added this line
}

function plusminus() {
    //perfect
    let x = parseFloat(document.getElementById('result').value)

    x *= -1; //make it negative or positive

    document.getElementById('result').value = x;
}

function percent() {
    //perfect
    let x = parseFloat(document.getElementById('result').value)

    x *= 0.01;  // this is the same as x/100

    document.getElementById('result').value = x;
}

function square() {
    //perfect
    let x = parseFloat(document.getElementById('result').value)

    x *= x;   // thisa is x times x

    document.getElementById('result').value = x;
}