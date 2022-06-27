 
    document.getElementById("nameUser").innerHTML +=localStorage.getItem("user");
    let logoutBtn = document.getElementById("logout").addEventListener("click",function(){
        window.localStorage.clear(); //clear all localstorage
        window.location.href="index.html"

    })

    console.log(localStorage)

