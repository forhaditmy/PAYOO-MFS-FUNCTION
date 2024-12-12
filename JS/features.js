document.getElementById('show-add-money-form').addEventListener('click', function(event){
    event.preventDefault();
    console.log('add money')
    showSectionById('add-money-form')
});
document.getElementById('show-cash-out-form').addEventListener('click', function(){
    showSectionById('cash-out-form')
})
document.getElementById('show-transaction-form').addEventListener('click', function(){
    showSectionById('transaction-section')
})