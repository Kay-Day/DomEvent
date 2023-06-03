// Dom events

// 1. Input / select
// 2. Key up / nhan len
//down : nhan xuong
// var inputValue;

// var inputElement = document.querySelector('input[type="text"]');
// // console.log(inputElement);
// inputElement.oninput = function(e) {
//     // console.log(e.target.value);
//     inputValue = e.target.value;
// }

//----------------------------------------------------------------
// var inputValue;

// var inputElement = document.querySelector('input[type="checkbox"]');
// // console.log(inputElement);
// inputElement.oninput = function(e) {
//     console.log(e.target.checked);
//     // inputValue = e.target.value;
// }

//----------------------------------------------------------------
// var inputValue;

// var inputElement = document.querySelector('select');
// // console.log(inputElement);
// inputElement.oninput = function(e) {
//     console.log(e.target.value);
//     // inputValue = e.target.value;
// }

//----------------------------------------------------------------
// var inputValue;

// var inputElement = document.querySelector('input[type="text"]');
// // console.log(inputElement);
// inputElement.onkeydown = function(e) {
//    // console.log(e.target.value);
//     // inputValue = e.target.value;
//     console.log(e.which);
//     switch(e.which){
//         case 49:
//             console.log('exit');
//             break;
//     }
// }

document.onkeypress = function(e) {
    console.log(e.which);
    switch(e.which){
        case 49:
            console.log('exit');
            break;
        case 32:
            console.log('Send chat');
            break;
    }
}