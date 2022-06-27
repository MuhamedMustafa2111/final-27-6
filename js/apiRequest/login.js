const api = "http://127.0.0.1:8000/api/login"
let loginBtn = document.getElementById('loginBtn');
let emailInp = document.getElementById('email');
let passwordInp = document.getElementById('password');



async function login(){

    let loginData = {
        "email": emailInp.value,
        "password": passwordInp.value
    }

    let response = await fetch (api,{
        method : 'POST',
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(loginData)
    });
    let finalRespone = await response.json();

    if (finalRespone.message != 'Success'){
        document.querySelector('.alert-danger').classList.replace('d-none','d-block')
        document.querySelector('.alert-danger').innerHTML =finalRespone.message


    } else {
        localStorage.setItem("token", finalRespone.token );
        localStorage.setItem("user", finalRespone.user.name );


       
        console.log(localStorage)
          window.location.replace('home.html')
        //   window.localStorage.clear(); //clear all localstorage
     
    }
    
    console.log(finalRespone.token);
    //    window.localStorage.clear(); //clear all localstorage


    
}

loginBtn.addEventListener('click',login)




