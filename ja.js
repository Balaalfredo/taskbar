
const tick1 = document.querySelector('#tick1');
const tick2 = document.querySelector('#tick2');
const tick3 = document.querySelector('#tick3');
const tick4 = document.querySelector('#tick4');
const line1 = document.querySelector('#line1');
const line2 = document.querySelector('#line2');
const line3 = document.querySelector('#line3');
const line4 = document.querySelector('#line4');

const close1 = document.querySelector('#close1');
const close2 = document.querySelector('#close2');
const close3 = document.querySelector('#close3');
const close4 = document.querySelector('#close4');

const l1 = document.querySelector('#l1');
const l2 = document.querySelector('#l2');
const l3 = document.querySelector('#l3');
const l4 = document.querySelector('#l4');
const line = document.querySelector('.line')

const clear = document.querySelector('#clear')

clear.addEventListener('click', () => {
    l1.style.transform = 'scaleX(0)'; l1.style.transition = '1.2s'; l2.style.transform = 'scaleX(0)'; l2.style.transition = '1.2s'; l3.style.transform = 'scaleX(0)'; l3.style.transition = '1.2s';
    l4.style.transform = 'scaleX(0)'; l4.style.transition = '1.2s'
})

close1.addEventListener('click', () => { l1.style.transform = 'translateX(500px)'; l1.style.transition = '1.2s'; })

close2.addEventListener('click', () => { l2.style.transform = 'translateX(-400px)'; l2.style.transition = '1.2s'; })

close3.addEventListener('click', () => { l3.style.transform = 'translateX(400px)'; l3.style.transition = '1.2s'; })

close4.addEventListener('click', () => { l4.style.transform = 'translateX(-400px)'; l4.style.transition = '1.2s'; })

tick1.addEventListener('click', () => {
    line1.style.textDecoration = 'line-through';
})

tick2.addEventListener('click', () => {
    line2.style.textDecoration = 'line-through';
})

tick3.addEventListener('click', () => {
    line3.style.textDecoration = 'line-through';
})
tick4.addEventListener('click', () => {
    line4.style.textDecoration = 'line-through';
})


const add = document.querySelector('#add');
const box3 = document.getElementById('box3');


// add.addEventListener('click', () => {
//     box3.innerHTML = '<div style="width:80%;height:10%;border-bottom:2px solid black"></div>';
// })

add.addEventListener('click', () => {
    box3.innerHTML = '<div style="width:80%;height:10%;border-bottom:2px solid black"></div>';
})




