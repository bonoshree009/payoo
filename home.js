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
    //console.log(addamount,preamount)
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

   const data = {
      name : "Add Money",
      date : new Date().toLocaleTimeString()
   }

   transactiondata.push(data)
   //console.log(transactiondata)
})


 //cash out section
document.getElementById("cashout-btn").addEventListener("click",function(){
    //console.log("cliced")
    const withdraw_amount = convertnum("amount")
    const preamount = innertextnum("pre-amount")
    const agentnum = onlyValueToNum("agent-number")
   //console.log(withdraw_amount,preamount)
   const bankpin = convertnum("bank-pin")
   //console.log(bankpin)
   if(pin == bankpin && (agentnum.length === 11) && (withdraw_amount <= preamount) ){
    const after_withdraw = preamount - withdraw_amount
   document.getElementById("pre-amount").innerText = after_withdraw
   console.log("withdraw money")
   }
   else{
    alert("Your pin or amount is wrong")
   }

   const data = {
      name : "cash out",
      date : new Date().toLocaleTimeString()
   }

   transactiondata.push(data)
})

const transactiondata = []
// transaction btn
document.getElementById("transaction").addEventListener("click",function(){
         
    const transactionContainer = document.getElementById("cart-cotainer")
    transactiondata.innerText = ""
    for(const data of transactiondata){
      const div = document.createElement("div")
      div.innerHTML = `
                  <div class=" w-lg mx-auto  my-4 flex items-center justify-between bg-white p-4 rounded-2xl" >
                       <div class="flex items-center gap-2">
                             <div class="rounded-full p-2 bg-[#d4d4d4c1]"><img src="assets/wallet1.png" alt=""></div>
                             <div>
                              <h1 class="font-bold text-[#080808c1]">${data.name}</h1>
                              <h3 class="text-[#6f6a6ac1]">${data.date}</h3>
                             </div>
                       </div>
                       <div><i class="fa-solid fa-ellipsis-vertical"></i></div>
                 </div>
      `
      transactionContainer.appendChild(div)
    }
})


// transaction korar jonno prothome transaction er vitore akta cart design kore nia .Asbe
// akta array nilam . protita button a akta Object
//  create kore sei array te rakhlam.akhon transaction btn k get elelmentById dia event
//  add korte hobe . transaction cart a akta outer div nibo ..sob new div tar moddhe Asbe .
//  akhon add addEventListener er moddhe sei div er id k access kori getelementBtId dia,
// akhon for loop dibo sei arrayr opr. vitore kaj hobe akta div create kora and sei div er innerhtml
//  hisebe sei prothome banano cart er html ta templete literels er moddhe dia. just name ar time k dynamic kora.
// sei div k puro transaction outer div a append kora . lastly sei outer div ar innertext a akta empty 
// string rakha



//toggol function
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
      
       toggol("addmoney-div")
       hoberButton("addMoney")

  })
   document.getElementById("cashOut").addEventListener("click",function(){

        toggol("cashout-div")
        console.log("cash out button clicked")
         hoberButton("cashOut")
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
       toggol("transaction-div")
       hoberButton("transaction")

  })
   
   


   