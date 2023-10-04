let preVal = ''
let newVal = ''
let resultVal = ''
let mathOperator = ''
// store wether or not decimal was clicked
// (only allow one decimal per Val)
let decimalClicked = false
// hold values we want stored in memory
let valMemStored = ''


function numButPress(num) {
   // Check if a number has already been clicked
   if(resultVal) {
      //start a new number
      newVal= num
      //reset to create a new result
      resultVal = ''
   } else {
      // used to block multiple decimals
      if (num === '.') {
         if (decimalClicked != true){
            //Take the current value of newVal
            // and add the character pressed
            newVal += num
            //Sets decimal check var to true, wont allow more
            decimalClicked = true
         
         }
      } else {
         newVal += num
         console.log(newVal)
      }
   }
//update the display
document.getElementById('entry').value = newVal;
}

function mathButPress(operator) {


}

function equalButPress() {


}

// clears everything except memory
function clearButPress() {
   preVal = ''
   newVal = ''
   resultVal = ''
   mathOperator = ''
   decimalClicked = false
   document.getElementById('entry').value = '0'
}

// store the current value in #entry into valMemStored

function copyButPress() {
   valMemStored = document.getElementById('entry').value
}


function pasteButPress() {
   if (valMemStored) {
      document.getElementById('entry').value = valMemStored
      newVal = valMemStored
   }
}

