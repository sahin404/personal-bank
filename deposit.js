document.getElementById('deposit-button').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const depositFieldText = parseFloat(depositField.value);
    // clear the field
    depositField.value='';

    if(isNaN(depositFieldText)){
        alert('Give Valid Input');
        return;
    }
    
    // adding the deposit value on the deposit display
    const displayDiposit = document.getElementById('display-deposit');
    const displayDipositValue = parseFloat(displayDiposit.innerText);
    const temp = displayDipositValue + depositFieldText;
    displayDiposit.innerText = temp;

    // adding the deposit value on the balance display
    const displayBalance = document.getElementById('display-balance');
    const displayBalanceValue = parseFloat(displayBalance.innerText);
    const temp2 = displayBalanceValue + depositFieldText;
    displayBalance.innerText = temp2;

})