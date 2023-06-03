// Dom Style
var boxElement = document.querySelector('.box');

// console.log(boxElement.style);
// console.log(boxElement.innerHTML);

// Background-position
// CameCase
// boxElement.style.width = '100px';
// boxElement.style.height = '200px';
// boxElement.style.backgroundColor = 'orange';

// Object.assign(boxElement.style, {
//     width: '200px',
//     height: '100px',
//     backgroundColor: 'red',
// });

// console.log(boxElement.style.width);


// ClassList propertype
// add
// contains
// remove
// toggle
// console.log(boxElement.classList.value);
//boxElement.classList.add('red' ); // dung class
console.log(boxElement.classList.contains('red')); /// ktra co class k ?
// boxElement.classList.remove('red') // xoa class
// setTimeout(() => {
//     boxElement.classList.remove('red')
// },3000);
// toggle
// setTimeout(() => {
//     boxElement.classList.toggle('red')// co thi bo , k co thi them vao
// },3000);
/// hoac
setInterval(() => {
    boxElement.classList.toggle('red')// co thi bo , k co thi them vao
},100);

