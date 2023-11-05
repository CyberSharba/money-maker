
function totalIncome (parameter){
  
  let item = document.getElementById(parameter)
  const itemtotal = parseFloat(item.value)
  if(itemtotal > 0){
  return itemtotal;
  }
  else{
    alert('GIVE A POSATIVE NUMBER')
  }

}
document.getElementById('Calculate').addEventListener('click',function(){
  // //income\\\\\\\\\\
  const incomet = totalIncome('Income')
                      // const income = document.getElementById('Income')
                      // const incomet = parseFloat(income.value)
                      // console.log(incomet)

  // ///Food\\\\\\\
  const foodt = totalIncome('Food')
                      // const food = document.getElementById('Food')
                      // const foodt = parseFloat(food.value)
                      // console.log(foodt)
  
  // /////Rent\\\\\\\
  const rentt = totalIncome('Rent')
                        // const rent = document.getElementById('Rent')
                        // const rentt = parseFloat(rent.value)
                        // console.log(rentt)
  
  // /////clothes\\\\\\\\\\\
  const clothest = totalIncome('Clothes')
                          // const clothes = document.getElementById('Clothes')
                          // const clothest = parseFloat(clothes.value) 

  // /////Expenses\\\\\\\\\
  const expenses = document.getElementById('Expenses')
  const expensest = foodt + rentt +clothest;
  expenses.innerText=expensest;
  
  // //balance\\\\\\\\
  let balance = document.getElementById('Balance')
  if(expensest < incomet){
  const balancet = incomet - expensest;
  balance.innerText = balancet;
  }
  else{
    alert('insuficent balance')
  }
})

document.getElementById('Saveb').addEventListener('click',function(){
  const savet = totalIncome('Save')
                      // const save = document.getElementById('Save')
                      // const savet = parseFloat(save.value)
                      // console.log(savet)

  const incomet = totalIncome('Income')
                      // const income = document.getElementById('Income')
                      // const incomet = parseFloat(income.value)
                      // console.log(incomet)

  let balance = document.getElementById('Balance')
  let balancet = parseFloat(balance.innerText)

  const savingAmount = document.getElementById('SavingAmount')
  if(savet >0 && savet <= 100){
  const totalSaving = (incomet * savet)/100 ;
    if(totalSaving < balancet){
    savingAmount.innerText= totalSaving
    }
    else{
      alert('do not have enap money to save')
    }
  }
  else{
    alert('please give the value 0 to 100')
  }

 
  let savingt = parseFloat(savingAmount.innerText)
  const remainingBalance = document.getElementById('RemainingBalance')
  // if ()
  const remainingBalancet = balancet - savingt; 
  remainingBalance.innerText = remainingBalancet




})




