// console.log('add money')
document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();
    console.log('add money button clicked');
    // getInputFieldValueById();
    // const addMoney =getInputFieldValueById();
    // console.log('add money value is:', addMoney)


    const addMoney = getInputFieldValueById('add-money');
    const pinNumber = getInputFieldValueById('btn-pin-number');
    
    console.log('add money parameter:', addMoney, pinNumber)
    
});
// console.log('add money loaded')