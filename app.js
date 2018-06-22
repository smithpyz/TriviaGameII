$(document).ready(function(){
    $("button.CORRECT").click(function(){
        alert("nice job");
    });
    $("button.WRONG").click(function(){
        alert("better luck next time!");
    });
    $("button").click(function(){
        $("#qBox1")
        .slideUp(2000);
    });
//next create a function that adds ++ to tally score //

})