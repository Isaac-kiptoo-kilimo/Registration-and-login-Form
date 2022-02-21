const fname=$("#fname").val();
const lname=$("#lname").val();
const email=$("#email").val();
const uname=$("#uname").val();
const pnumber=$("#pnumber").val();
const password=$("#password").val();
const cpassword=$("#cpassword").val();

const form=$("#form")

function addError(node){
    node.previousElementSibling.children[0].classList.add("text-danger")
    // node.previousElementSibling.getElementsByClassName("star")[0].classList.add("text-danger")
}
function removeError(node){
    node.previousElementSibling.children[0].classList.remove("text-danger")
}
function matchString(str){
    if(str.match(/^[a-zA-Z]+\s+[a-zA-Z]$/)){
        return true;
    }
    return false
}
function validate(){
    // if(fname.value==="" || fname.value===null){
        if(!matchString($("#fname").val())){
        
        // alert("Enter your first name") 
        // fname.classList.add("input-error")
        addError(fname)
        return false
    }
    else if (!lname.value){
        // alert("Enter your last name")
        return false
    }
    else if(!uname.value){
        // alert("Enter your username")
        return false
    }
    else if(!email.value){
        // alert("Enter your email")
        return false
    }
    else if(!pnumber.value){
        // alert("Enter your phone number")
        return false
    }
    else if(!password.value){
        // alert("Enter your password")
        return false
    }
    else if(!cpassword.value){
        // alert("you have not confirmed your password")
        return false
    }
    else if(password.value !==cpassword.value){
        // alert("passwords do not match")
        return false
    }
        return true
}

form.submit((e)=>{
    e.preventDefault()
   if($("#password").val()===$("#cpassword").val()){
       const user={
           fname:$("#fname").val(),
           email:$("#email").val(),
           lname:$("#lname").val(),
           uname:$("#uname").val(),
 pnumber:$("#pnumber").val(),
password:$("#password").val()

   }
   const user_=JSON.stringify(user)
   localStorage.setItem("user",user_)

  
$("#form").trigger("reset")
   
}
else{
    alert("password do not match")
}
   
})
