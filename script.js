$(".saveBtn").click(function(event){

  event.preventDefault()
  var input = $(this).siblings('input').val()
  var label = $(this).siblings('p').text()
  localStorage.setItem(label, input)
})

$(document).ready(function(){
  $('#9a').val(localStorage.getItem('  9AM'))
  console.log(localStorage.getItem('  9AM'));
})
$(document).ready(function(){
  $('#10a').val(localStorage.getItem('10AM'))
  console.log(localStorage.getItem('10AM'));
})
$(document).ready(function(){
  $('#11a').val(localStorage.getItem('11AM'))
  console.log(localStorage.getItem('11AM'));
})
$(document).ready(function(){
  $('#12p').val(localStorage.getItem('12PM'))
  console.log(localStorage.getItem('12PM'));
})
$(document).ready(function(){
  $('#1p').val(localStorage.getItem('  1PM'))
  console.log(localStorage.getItem('  1PM'));
})
$(document).ready(function(){
  $('#2p').val(localStorage.getItem('  2PM'))
  console.log(localStorage.getItem('  2PM'));
})
$(document).ready(function(){
  $('#3p').val(localStorage.getItem('  3PM'))
  console.log(localStorage.getItem('  3PM'));
})
$(document).ready(function(){
  $('#4p').val(localStorage.getItem('  4PM'))
  console.log(localStorage.getItem('  4PM'));
}) 

document.getElementById('currentDay').innerText=moment().format('MMMM Do YYYY, h:mm:ss a');

$(document).ready(function(){
  for (i = 9; i <= 16; i++) {
    var timeBlock = parseInt($('#'+i).attr('id'))
    var currentTime = parseInt(moment().format('H'));
  
// var timeBlock = parseInt($('#10').text());
// var timeBlock = parseInt($('#11').text());
// var timeBlock = parseInt($('#12').text());
// var timeBlock = parseInt($('#1').text());
// var timeBlock = parseInt($('#2').text());
// var timeBlock = parseInt($('#3').text());
// var timeBlock = parseInt($('#4').text());
console.log(timeBlock)
console.log(currentTime)
if (timeBlock < currentTime) {
  // console.log('class = past')
  $('#'+i).siblings('input').addClass('past')
}
else if (timeBlock > currentTime) {
  // console.log('class = future')
  $('#'+i).siblings('input').addClass('future')
}
else if (timeBlock = currentTime) {
  // console.log('class = present')
  $('#'+i).siblings('input').addClass('present')
}
}
});