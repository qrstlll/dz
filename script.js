

// let span = document.querySelector('.sp')
// let span1 = document.querySelector('.sp1')
// let span2 = document.querySelector('.sp2')
// let span3 = document.querySelector('.sp3')

// let scrollEvent = 0
// document.addEventListener('scroll',  _.throttle (() => {
//     scrollEvent += 1
//     span.textContent = scrollEvent
    
// }, 200),)
// let scrollEvent1 = 0
// document.addEventListener('scroll',  _.throttle (() => {
//     scrollEvent1 += 2
//     span1.textContent = scrollEvent1
    
// }, 600),)
// let scrollEvent2 = 0
// document.addEventListener('scroll',  _.throttle (() => {
//     scrollEvent2 += 4
//     span2.textContent = scrollEvent2
    
// }, 500),)
// let scrollEvent3 = 0
// document.addEventListener('scroll',  _.throttle (() => {
//     scrollEvent3 += 8
//     span3.textContent = scrollEvent3
    
// }, 100,{ trailing: false, leading: true } ),)
// const input = document.querySelector('.txt')

// function inputCheck (){
//     console.log(input.value)
// }

// let slowM = _.debounce(inputCheck, 2000)
//     input.addEventListener('input', slowM)

// const object = document.getElementById("box")

// let mouseX = 0;
// let mouseY = 0;
// let prevMouseX = 0;
// let prevMouseY = 0;

// document.addEventListener('mousemove', function(event) {
//     prevMouseX = mouseX;
//     prevMouseY = mouseY;
//     mouseX = event.clientX;
//     mouseY = event.clientY;
// });
// const moveB = _.debounce(function() {
//     const lastX = mouseX - prevMouseX;
//     const lastY = mouseY - prevMouseY;
//     object.style.left = (object.offsetLeft + lastX) + 'px';
//     object.style.top = (object.offsetTop + lastY) + 'px';
// }, 100);

// document.addEventListener("mousemove", moveB)
const liImgs = document.querySelectorAll('.frlist li')

const settings = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 }

    function intercept (is, o) {
        is.forEach(i => {
            if(i.isIntersecting){
                i.target.querySelector('img').src = "https://via.placeholder.com/300x300"
            }
        });
    }