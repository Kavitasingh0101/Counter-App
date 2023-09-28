const countValue = document.querySelector('#counter');
//  function to increment the value
function increment()  {
    let value = parseInt(countValue.innerText); 
     value = value + 1;
     countValue.innerText = value;
}
// function to decrement the value
function decrement() {
    let value = parseInt(countValue.innerText); 
    value = value - 1;
    countValue.innerText = value;
}