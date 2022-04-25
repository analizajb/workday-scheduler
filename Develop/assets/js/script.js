
var hours = [
    moment("9:00 AM"),
    moment("10:00 AM"),
    moment("11:00 AM"),
    moment("12:00 PM"),
    moment("1:00 PM"),
    moment("2:00 PM"),
    moment("3:00 PM"),
    moment("4:00 PM"),
    moment("5:00 PM")
];
$(hours).each(function(_value){
    for(i = 0; i < hours.length; i++)
    
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
})




//FOR LOOP through all timeblocks 
// localStorage.getItem(".time-block") 


//1. LOAD back the information from local storage 

//localStorage.getItem("9:0 AMM")



// 2.change background color based on nthe current time

