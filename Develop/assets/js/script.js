
var formatDate = moment().format('MMM Do YYYY');
$('#currentDay').text(formatDate);

//document.getElementById("currentDay").textContent = formatDate; 
//

console.log("loading JS ")
//Save button event listener 
$(".saveBtn").on("click", function () {
    console.log($(this));
    //
    var description = $(this).siblings('.description').val();
    console.log(description);
    var time = $(this).siblings('.hour').text();

    console.log(time);

    //save it in LS 
    localStorage.setItem(time, description);
})//

//
var currentHR = moment().hours();
console.log(currentHR); 

//FOR LOOP through all timebloacks 

//1. /LOAD back the information from loca storage 

//localStorage.getItem("9:0 AMM")



//2.change background color 
//based o nthe current time 

