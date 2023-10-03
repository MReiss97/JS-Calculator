let preVal = ''
let newVal = ''
let resultVal= ''
let mathOperator= ''
// store wether or not decimal was clicked
// (only allow one decimal per Val)
let decimalClicked =  false
// hold values we want stored in memory
let valMemStored = ''


function numButPress(num) {


}
function mathButPress(operator) {


}
function equalButPress() {


}
// clears everything except memory
function clearButPress() {
let preVal = ''
let newVal = ''
let resultVal= ''
let mathOperator= ''
let decimalClicked =  false
document.getElementsById('entry').value= '0'
}
// store the current value in #entry into valMemStored
function copyButPress() {
valMemStored = document.getElementsById('entry').value
}
function pasteButPress() {
if (valMemStored) {
   document.getElementById('entry').value = valMemStored
   newVal = valMemStored
}
}
