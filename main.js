var username=document.getElementById("username")
var email_input2=document.getElementById("email_input2")
var email_input=document.getElementById("email_input")
var password_input=document.getElementById("password_input")
var btn=document.getElementById("btn")
var btn2=document.getElementById("btn2")
var content=document.getElementById("content")
var div_singin=document.getElementById("div_singin")
var div_login=document.getElementById("div_login")
var singin_btn=document.getElementById("singin_btn")
btn.addEventListener("click",function(){
    const correctusername="joe_123"
    const correctpassword=123456
const correctemail="joe@gmail.com"

    if(username.value==correctusername&&password_input.value==correctpassword){
        content.innerHTML="Correct Username and password"
        content.style.color="green"

    }
    else{
                content.innerHTML="UNCorrect Username and password"
        content.style.color="red"
    }
    if(username.value==""&&password_input.value=="")
    {
        content.innerHTML="fill out filed"
                content.style.color="yellow"

    }

})
btn2.addEventListener("click",function(){
    div_singin.style.display="block"
    div_login.style.display="none"
    
})
singin_btn.addEventListener("click",function(){
        div_login.style.display="block"
    div_singin.style.display="none"

})

