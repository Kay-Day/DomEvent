//DOM attributes
var headingElement = document.querySelector('h1');

// console.log(headingElement);
// headingElement.title = 'heading';
// headingElement.className = 'heading';
// headingElement.href = 'heading';
headingElement.setAttribute('data-1', 'heading');
console.log(headingElement.getAttribute('class'));
headingElement.title = 'Title test';
console.log(headingElement.getAttribute('title'));
// alert(headingElement.getAttribute('data-1'));
// alert(headingElement.title);

