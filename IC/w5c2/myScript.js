/**
 * Created by asfagaragan on 9/23/15.
 */


$(function(){
    $("#button1").click(function () {
        $("#text1").hide();
    });
    $("#button2").click(function(){
        $("#text1").show();
    });

    $("#button3").click(function(){
        $("#main_content").load("demo_test.txt");
    });

    $("#button4").click(function(){
        $.get("demo_test.asp", function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        });
    });

    $("#button5").click(function(){
        $("#text1").toggle();
    });



});