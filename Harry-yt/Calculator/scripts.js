let string = "";

let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string+s)
            document.querySelector('input').value = string;
        }
        //eval is --> equal to in JS and in python also
        else if(e.target.innerHTML == 'AC'){
            string = ''
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('.currentOperand').value = string;
        }
    })
})