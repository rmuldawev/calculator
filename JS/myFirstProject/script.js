let a = "";
let b = "";
let sign = "";

console.log('test')

let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

const out = document.querySelector('.calc-screen p');

function clearAll () {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.calc').onclick = (event) => {
    if(!event.target.classList.contains('.btn')) return;
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';

    const key = event.target.textContent;

    if (digit.includes(key)) {
        a += key;
        console.log(a, b, sign);
        out.textContent = a;
    }
     
}