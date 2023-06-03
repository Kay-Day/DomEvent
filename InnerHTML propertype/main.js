//innerHTML , outerHTML

// var boxElement = document.querySelector('.box');

// boxElement.innerHTML = '<h1 title="Heading">Heading</h1>';

// boxElement.innerText = '<h1>Heading</h1>';

// console.log(document.querySelector('h1').innerHTML);
// console.log(boxElement.innerHTML);
// console.log(boxElement);


//outerHTML
var outerHTML1 = document.querySelector('.box1');
console.log(outerHTML1.outerHTML);// lay class
// console.log(outerHTML1.innerHTML);// k lay class
// console.log(outerHtml1);
outerHTML1.outerHTML = '<span>Test</span>';
console.log(outerHTML1);
