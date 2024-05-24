document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldText = parseFloat(withdrawField.value);
    // clear the field
    withdrawField.value='';

    if(isNaN(withdrawFieldText)){
        alert('Give Valid Input');
        return;
    }
    

    const displayBalance = document.getElementById('display-balance');
    const displayBalanceValue = parseFloat(displayBalance.innerText);
    if(withdrawFieldText>displayBalanceValue){
        alert("Insufficient Balance");
        
        return;
    }
    // adding the withdraw value on the withdraw display
    const displayWithdraw = document.getElementById('display-withdraw');
    const displayWithdrawValue = parseFloat(displayWithdraw.innerText);
    const temp = displayWithdrawValue + withdrawFieldText;
    displayWithdraw.innerText = temp;

    // substraction the withdraw value from the balance display
    
    const temp2 = displayBalanceValue - withdrawFieldText;
    displayBalance.innerText = temp2;

})