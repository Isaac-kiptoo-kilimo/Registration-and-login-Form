function loginStatus(){
    const l=localStorage.getItem("loggedIn")
    if(l){
        window.location.href="index.html"

    }
    else{
        window.location.href="login.html"
    }
}

window.addEventListener("load",()=>{
    const l=localStorage.getItem("loggedIn")
    if(l){
        window.location.href="index.html"

    }
    e
})