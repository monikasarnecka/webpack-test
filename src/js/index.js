import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

let isDark=false;

const button = document.querySelector('.action--js');
console.log(button)

button.addEventListener('click', () => {
    if (isDark)
    {document.documentElement.style.setProperty('--background-color','black');
    document.documentElement.style.setProperty('--text-color','white');
    isDark=false;}

    else 
    {
        document.documentElement.style.setProperty('--background-color','white');
        document.documentElement.style.setProperty('--text-color','black');
        isDark=true;
    }

})







