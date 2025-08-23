console.log("connected")
document.getElementById("add-money-btn").addEventListener("click",function(){
    //console.log("cliced")
    const addamount = parseInt(document.getElementById("input-addamount").value)
    const preamount = parseInt(document.getElementById("pre-amount").innerText)
    const accountnum = document.getElementById("actnum").value
    // console.log(addamount,preamount)

   const pin = 1234
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