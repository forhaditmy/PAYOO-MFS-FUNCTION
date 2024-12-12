document.getElementById('btn-cash-out')
.addEventListener('click', function(event){
    event.preventDefault();
    const cashOut = getInputFieldValueById('input-cashout');

   const pinNumber = getInputFieldValueById('input-cashout-pin');
   console.log('inside the click handler', cashOut, pinNumber)
     if(isNaN(cashOut)){
        alert('failed to cash out')
        return;
     }
   
   
   if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance')
       if(cashOut > balance){
        alert('You Do Not have sufficent Balance');
        return;
       }
    const newBalance = balance - cashOut;
    document.getElementById('account-balance').innerText = newBalance
    // add to the transaction history
    const div = document.createElement('div')
    div.classList.add('bg-yellow-300');
    div.innerHTML = `
    <h4 class="text-2xl font-bold text-center">Cash Out</h4>
    <p>${cashOut} withdraw. New Balance ${newBalance}<p>
    `
    document.getElementById('transaction-container').appendChild(div);

}    
    else{
        alert('cash out failed')
    }


})