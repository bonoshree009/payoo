console.log("connected")
 const pin = 1234
document.getElementById("add-money-btn").addEventListener("click",function(){
    //console.log("cliced")
    const addamount = parseInt(document.getElementById("input-addamount").value)
    const preamount = parseInt(document.getElementById("pre-amount").innerText)
    const accountnum = document.getElementById("actnum").value
    // console.log(addamount,preamount)
   const bankpin = parseInt( document.getElementById("bank-pin").value  )
//   console.log(bankpin)
   if(pin == bankpin && (accountnum.length === 11)){
    const total = addamount + preamount
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
    const withdraw_amount = parseInt(document.getElementById("amount").value)
    const preamount = parseInt(document.getElementById("pre-amount").innerText)
    const agentnum = document.getElementById("agent-number").value
    // console.log(addamount,preamount)
   const bankpin = parseInt( document.getElementById("bank-pin").value  )
//   console.log(bankpin)
   if(pin == bankpin && (agentnum.length === 11)){
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
           console.log("yep")
           document.getElementById("addMoney").style.backgroundColor = "green"
            document.getElementById("cashOut").style.backgroundColor = "white"

  })
   document.getElementById("cashOut").addEventListener("click",function(){
           document.getElementById("cashout-div ").style.display = "block"
           document.getElementById("addmoney-div").style.display = "none"
           console.log("out")
            document.getElementById("addMoney").style.backgroundColor = "white"
            document.getElementById("cashOut").style.backgroundColor = "greengit"


  })