
$(document).ready(function() {

    $(".saveBtn").on("click", function() {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    
    localStorage.setItem(value, time);
    });
    
    function hourUpdate() {
    var currentHour = moment().hours();
    
    //for each loop
    $(".time-block").each(function () {
    
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
    
        if(blockHour < currentHour) {
            $(this).addClass("past");
        }
        else if(blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        };
    });
    
    };
    hourUpdate();
    
    var interval = setInterval(hourUpdate, 15000);
    
    $("#row-1 .description").val(localStorage.getItem("row-1"));
    $("#row-2 .description").val(localStorage.getItem("row-2"));
    $("#row-3 .description").val(localStorage.getItem("row-3"));
    $("#row-4 .description").val(localStorage.getItem("row-4"));
    $("#row-5 .description").val(localStorage.getItem("row-5"));
    $("#row-6 .description").val(localStorage.getItem("row-6"));
    $("#row-7 .description").val(localStorage.getItem("row-7"));
    $("#row-8 .description").val(localStorage.getItem("row-8"));
    $("#row-9 .description").val(localStorage.getItem("row-9"));
    
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    
    });
    