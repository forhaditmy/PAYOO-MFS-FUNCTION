document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addMoney = getInputFieldValueById('add-money');
        const pinNumber = getInputFieldValueById('btn-pin-number');
        if(isNaN(addMoney)){
            alert('failed to add money')
            return;
        }
        
        
        // wrong way use
        if (pinNumber === 1234) {  
            const balance = getTextFieldValueById('account-balance');
            const newBalance = balance + addMoney;
            
            document.getElementById('account-balance').innerText = newBalance;

            // add to transation history
            const p = document.createElement('p');
            
            p.innerText = `Added: ${addMoney} Tk. NewBalance: ${newBalance} `
           console.log(p)
       
    //    should be a common function
    document.getElementById('transaction-container').appendChild(p);
        } else {
            alert('Failed to add money: Incorrect PIN');
        }
    });
