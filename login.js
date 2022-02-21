$("#form").submit(e=>{
    e.preventDefault()
    const user=JSON.parse(localStorage.getItem("user"))
    if($("#uname_").val()===user.uname){
        if($("#password_").val()===user.password){
            const loggedIn={
                uname:user.umame,
                status:true,
                token:"anything"
            }
            localStorage.setItem("loggedIn",JSON.stringify(loggedIn))
            window.location.href="index.html"
        }
        else {
            alert("you have entered a wrong password")
        }

    }
    else{
        alert("username not found")
    }
})