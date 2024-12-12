/**
 * common shared  function here
 */

// console.log('utilies loaded')
// function getInputFieldValueById(){
//     console.log('will get value by id');
//     const addMoney =document.getElementById('add-money').value;
//     return addMoney;
// }
function getInputFieldValueById(id){
const inputValue =document.getElementById(id).value;
return inputValue;   
}