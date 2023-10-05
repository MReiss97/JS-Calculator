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
   if (resultVal) {
      //start a new number
      newVal = num
      //reset to create a new result
      resultVal = ''
   } else {
      // used to block multiple decimals
      if (num === '.') {
         if (decimalClicked != true) {
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
   // Check if there was a previous calculation 
   // by seeing if resultVal has a value
   // if result doesn't have a value then store
   // the current val as a previous for the
   // calculation
   if (!resultVal) {
      preVal = newVal
   } else {
      //If there is a current result store that as
      // the previous value entered
      preVal = resultVal
   }
   //Restart creation of new number
   newVal = ''
   // Reset decimalClicked
   decimalClicked = false
   // Store operator clicked
   mathOperator = operator
   // Prepare entry for receiving new numbers
   resultVal = ''
   document.getElementById('entry').value = ''
}

function equalButPress() {
   // Reset decimalClicked
   decimalClicked = false
   //Convert string numbers to floats
   preVal = parseFloat(preVal)
   newVal = parseFloat(newVal)
   // Perform calculations based on the operator
   switch(mathOperator){
      case '+': 
         resultVal = preVal + newVal
         break
         case '-':
            resultVal = preVal - newVal
            break
            case '*':
            resultVal = preVal * newVal
            break
            case '/':
            resultVal = preVal / newVal
            break
            //If equals is hit without an operator
            // leave everything as is
            default:
               preVal = newVal
   }
   // Store the current value as the previous so that
   // I can except to next value in the calculation

   preVal = newVal

   document.getElementById('entry').value = resultVal

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

