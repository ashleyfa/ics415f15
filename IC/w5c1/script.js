/**
 * Created by asfagaragan on 9/14/15.
 */


$(function(){
    $("p").mouseenter(function(){
        $("#text1").css('color', 'red');
    });

    $("p").mouseleave(function(){
        $("#text1").css('color', 'black');
    });
    $("p").click(function(){
        $(this).html('hello!');
    });
    $("button").click(function(){
        $("#text1").css('color', 'red');
    });
});
