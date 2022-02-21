const username_=document.getElementById("username_");
const email_=document.getElementById("email_");
const form=document.getElementById("form")

function validate(){
    if(!username_.value){
        alert("write you username please")
        return false
    }
    else if(email_.value==="" || email_.value===null ){
        alert("write your email please")
        return false
    }
    return true
}
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const validation=validate();
})