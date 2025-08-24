console.log("connected")
const pin = 1234

//function

function convertnum (id){
    return parseInt(document.getElementById(id).value)
}

document.getElementById("add-money-btn").addEventListener("click",function(){
    //console.log("cliced")
   const addamount = convertnum("input-addamount")
    const preamount = parseInt(document.getElementById("pre-amount").innerText)
    const accountnum = document.getElementById("actnum").value
    console.log(addamount,preamount)
   const bankpin = convertnum("bank-pin")
//   console.log(bankpin)
   if(pin == bankpin && (accountnum.length === 11)){
    //const total = addamount + preamount
   document.getElementById("pre-amount").innerText = total
   console.log("add the money")
   }
   else{
    alert("Your pin number is wrong")
   }
})


 //cash out section
document.getElementById("cashout-btn").addEventListener("click",function(){
    //console.log("cliced")
    const withdraw_amount = convertnum("amount")
    const preamount = parseInt(document.getElementById("pre-amount").innerText)
    const agentnum = document.getElementById("agent-number").value
     console.log(withdraw_amount,preamount)
   const bankpin = parseInt(document.getElementById("bank-pin").value)
 console.log(bankpin)
   if(pin == bankpin && (agentnum.length === 1)){
    const after_withdraw = preamount - withdraw_amount
   document.getElementById("pre-amount").innerText = after_withdraw
   console.log("withdraw money")
   }
   else{
    alert("Your pin number is wrong")
   }
})

//toggol section
  document.getElementById("addMoney").addEventListener("click",function(){
           document.getElementById("cashout-div ").style.display = "none"
           document.getElementById("addmoney-div").style.display = "block"
           console.log("add money button clicked")
           document.getElementById("addMoney").style.backgroundColor = "green"
            document.getElementById("cashOut").style.backgroundColor = "white"

  })
   document.getElementById("cashOut").addEventListener("click",function(){
           document.getElementById("cashout-div ").style.display = "block"
           document.getElementById("addmoney-div").style.display = "none"
           console.log("cash out button clicked")
            document.getElementById("addMoney").style.backgroundColor = "white"
            document.getElementById("cashOut").style.backgroundColor = "green"


  })