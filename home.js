console.log("connected")
const pin = 1234

//function

function convertnum (id){
  return  parseInt(document.getElementById(id).value)
}
function innertextnum (idinner){
    return parseInt(document.getElementById(idinner).innerText)
}
function onlyValueToNum (valueid){
    return document.getElementById(valueid).value
}
  
// addmoney btn

document.getElementById("add-money-btn").addEventListener("click",function(){
    //console.log("cliced")
   const addamount = convertnum("input-addamount")
    const preamount = innertextnum("pre-amount")
    const accountnum = onlyValueToNum("actnum")
    console.log(addamount,preamount)
   const bankpin = convertnum("bank-pin")
      //console.log(bankpin)
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
    const withdraw_amount = convertnum("amount")
    const preamount = innertextnum("pre-amount")
    const agentnum = onlyValueToNum("agent-number")
   console.log(withdraw_amount,preamount)
   const bankpin = convertnum("bank-pin")
  // console.log(bankpin)
   if(pin == bankpin && (agentnum.length === 1)){
    const after_withdraw = preamount - withdraw_amount
   document.getElementById("pre-amount").innerText = after_withdraw
   console.log("withdraw money")
   }
   else{
    alert("Your pin number is wrong")
   }
})


// transfer btn

//toggol section
       function toggol(id){
         const forms = document.getElementsByClassName("form-parent")
            for(const form of forms){
              form.style.display = "none"
             }
          document.getElementById(id).style.display = "block"
 
              }

//function of hover
      function hoberButton(id){
       const hovers = document.getElementsByClassName("btn-hover")
      for(const hover of hovers){
    // hover.style.backgroundColor = "white"
        hover.classList.remove("border-[#2081F2]","bg-[#F4F9FE]")
         hover.classList.add("border-[#b4b1b180]")
      }
     document.getElementById(id).classList.add("border-[#2081F2]","bg-[#F4F9FE]")
        document.getElementById(id).classList.remove("border-[#b4b1b180]")
         //document.getElementById(id).style.backgroundColor = "#F4F9FE"
   //   document.getElementById(id).style.border = "5px"
   //   document.getElementById(id).style.borderBlockColor = "#2081F2"

      }


  document.getElementById("addMoney").addEventListener("click",function(){
      //    const forms = document.getElementsByClassName("form-parent")
      // for(const form of forms){
      //   form.style.display = "none"
      // }
      // document.getElementById("addmoney-div").style.display = "block"
       toggol("addmoney-div")
       hoberButton("addMoney")
       // console.log("add money button clicked")
         //   document.getElementById("addMoney").style.backgroundColor = "green"
         //    document.getElementById("cashOut").style.backgroundColor = "white"

  })
   document.getElementById("cashOut").addEventListener("click",function(){

        toggol("cashout-div")
        console.log("cash out button clicked")
         hoberButton("cashOut")


          // console.log("cash out button clicked")
            // document.getElementById("addMoney").style.backgroundColor = "white"
            // document.getElementById("cashOut").style.backgroundColor = "green"


  })

  document.getElementById("transferMoney").addEventListener("click",function(){
       toggol("transfer-div")
       hoberButton("transferMoney")

  })

  document.getElementById("getBonus").addEventListener("click",function(){
       toggol("bonus-div")
       hoberButton("getBonus")

  })
   
  document.getElementById("payBill").addEventListener("click",function(){
       toggol("payBill-div")
       hoberButton("payBill")

  })
   
  document.getElementById("transaction").addEventListener("click",function(){
       toggol("transfer-div")
       hoberButton("transaction")

  })
   
   


   