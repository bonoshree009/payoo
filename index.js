//console.log("connected")
document.getElementById("login-btn").addEventListener("click",function(){
    console.log("button clickd")
    const fixednum = 01761541988
    const fixeddigit = 1234
    let getnum =document.getElementById("input-number").value
    let getdigit = document.getElementById("input-digit").value
    if( fixednum == getnum && fixeddigit == getdigit){
        window.location.href ="./home.html"
    }
    else{
        alert("Invalid details")
    }

})