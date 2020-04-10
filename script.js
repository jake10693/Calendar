$(".saveBtn").click(function(event){

  event.preventDefault()
  var input = $(this).siblings('input').val()
  var label = $(this).siblings('p').text()
  localStorage.setItem(label, input)
})

$(document).ready(function(){
  $('#9').val(localStorage.getItem('  9AM'))
  console.log(localStorage.getItem('  9AM'));
})
$(document).ready(function(){
  $('#10').val(localStorage.getItem('10AM'))
  console.log(localStorage.getItem('10AM'));
})
$(document).ready(function(){
  $('#11').val(localStorage.getItem('11AM'))
  console.log(localStorage.getItem('11AM'));
})
$(document).ready(function(){
  $('#12').val(localStorage.getItem('12PM'))
  console.log(localStorage.getItem('12PM'));
})
$(document).ready(function(){
  $('#1').val(localStorage.getItem('  1PM'))
  console.log(localStorage.getItem('  1PM'));
})
$(document).ready(function(){
  $('#2').val(localStorage.getItem('  2PM'))
  console.log(localStorage.getItem('  2PM'));
})
$(document).ready(function(){
  $('#3').val(localStorage.getItem('  3PM'))
  console.log(localStorage.getItem('  3PM'));
})
$(document).ready(function(){
  $('#4').val(localStorage.getItem('  4PM'))
  console.log(localStorage.getItem('  4PM'));
}) 