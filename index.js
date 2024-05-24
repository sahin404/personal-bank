document.getElementById('login-button').addEventListener('click',function(){
    const email_text = document.getElementById('email');
    const email_text_final = email_text.value;
    const password_text = document.getElementById('password');
    const password_text_final = password_text.value;
    // console.log(email_text_final, password_text_final);
    if(email_text_final==="admin@gmail.com" && password_text_final==="secret"){
        window.location.href='bank.html';
    }
    else{
       alert('try again');
    }
})