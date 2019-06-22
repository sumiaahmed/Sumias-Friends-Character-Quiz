
$("#button1").click(function(){
    var age=$("#age").val();
    var icecream=$("#ice").val();
    if ( icecream==="cookies and cream" && age<=18){$(".joey").show();
    $("p").text("You Are Joey!");}
    else if ( icecream==="cookies and cream" && age>=18){$(".racheal").show();
    $("p").text("You Are Racheal!");}
    else if (icecream==="vanilla" && age<=18){$(".phoebe").show();
    $("p").text("You Are Phoebe!");}
    else if (icecream==="vanilla" && age>=18){$(".chandeler").show();
    $("p").text("You Are Chandeler!");
}
});
        