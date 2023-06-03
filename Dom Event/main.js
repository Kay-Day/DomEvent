// Dom events
// 1. Attribute events
// 2. Assign events using the element node
var h1Element = document.querySelectorAll('h1'); 

for(var i = 0; i < h1Element.length; i++) {
    //  console.log(h1Element[i]);
    h1Element[i].onclick = function(e) {
        console.log(e.target);
    }
}

// console.log(h1Element);
// h1Element.onclick = function(e) {
//     //code here
//     console.log(e);
// }


