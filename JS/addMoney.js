document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney =document.getElementById('add-money').value;
    const addMoneyNumber = parseFloat(addMoney);
    const PinNumber = document.getElementById('btn-pin-number').value;
   
if(PinNumber === '0000'){
    const balance =document.getElementById('account-balance').innerText
    const balanceNumber = parseFloat(balance)
   
    const newBalance = addMoneyNumber + balanceNumber ;
    console.log( newBalance );
    document.getElementById('account-balance').innerText = newBalance;
  

}
else{
    alert('Please try Again')
}
   
});

