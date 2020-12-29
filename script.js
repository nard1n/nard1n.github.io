$(".portfolioBtn").on("click", function (){
    $(".portfolio").show();
    $(".about-me").hide();
    $(".mainprofile").hide();
});

$(".aboutBtn").on("click", function (){
    $(".portfolio").hide();
    $(".about-me").show();
    $(".mainprofile").hide();
});

$(".contactBtn").on("click", function (){
    $(".portfolio").hide();
    $(".about-me").hide();
    $(".mainprofile").show();
});