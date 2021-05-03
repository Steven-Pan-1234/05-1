number=0
document.getElementById('button').addEventListener('click', calculate)
function calculate () {
  number=document.getElementById('input').value
  number=parseInt(number)
  number=number*document.getElementById('input').value
  alert(number) }