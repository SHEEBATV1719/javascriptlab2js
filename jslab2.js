function validateForm(e)
{
    e.preventDefault();
    
    var regName = /^[A-Za-z]\w{2,}$/;
    var regEmail = /^\S+@\S+$/;
    var regPassword = /^[A-Za-z]\w{5,}$/;
    var regPhone = /^\d{10}$/;
    
    var name = document.getElementById('name').value.trim();
    var e_mail = document.getElementById('email').value.toLowerCase().trim();
    var pass = document.getElementById('password').value.trim();
    var confirm_pass = document.getElementById('confirm-password').value.trim();
    var phone = document.getElementById('phone').value.trim();

    if(name=="")
    {
        document.getElementById('nameErr').innerHTML = '*required';
        
    }
    else if(!regName.test(name))
    {
    document.getElementById('nameErr').innerHTML = 'Please enter a valid name';
    document.getElementById('name').focus();
    }
   
    else if(e_mail=="")
    {
        document.getElementById('emailErr').innerHTML = '*required';
    }
    else if(!regEmail.test(e_mail))
    {
        document.getElementById('emailErr').innerHTML = 'Please enter a valid email address.';
        document.getElementById('email').focus();
    }
    else if(pass=="")
    {
        document.getElementById('passErr').innerHTML = '*required';
    }
    else if(!regPassword.test(pass))
    {
        document.getElementById('passErr').innerHTML = 'Please enter a valid Password';
        document.getElementById('password').focus();
    }
    else if(confirm_pass=="")
    {
        document.getElementById('confirmPassErr').innerHTML = '*required';
    }
    else if(pass !== confirm_pass)
    {
        document.getElementById('confirmPassErr').innerHTML = 'Please recheck your confirmed password';
        document.getElementById('password').focus();   
    }
    else if(pass !== confirm_pass)
    {
        document.getElementById('confirmPassErr').innerHTML = 'Please recheck your confirmed password';
        document.getElementById('password').focus();   
    }
    else if(phone=="")
    {
        document.getElementById('phoneErr').innerHTML = '*required';
    }
    else if(!regPhone.test(phone))
    {
        document.getElementById('phoneErr').innerHTML = 'Please enter valid number';
        document.getElementById('phone').focus();
    }
    else
     {
        alert('success');
    }
}