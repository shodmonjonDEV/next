var elInput = document.querySelector('#number');
var elButton = document.querySelector('#btn');

var inputNumbers = [];
var numberCounter = 0;

elButton.addEventListener('click', function(){
    if (elInput.value) {
        if(numberCounter < 5) {  
           numberCounter++;   
            // console.log(elInput.value);
            inputNumbers.push(elInput.value);
            elInput.value = '';
            elInput.focus();
            console.log(inputNumbers); 

            if (numberCounter === 5) {
                elButton.disabled = true;
                elInput.disabled = true;
            }    
         } //else {
        //      alert('Yetadi!');
        // }  
          
     } else{
        alert('Enter a number!');
    }
    console.log(numberCounter);
});