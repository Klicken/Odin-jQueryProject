$(document).ready(function () {
    for (var i = 1; i < 17; i++) {
        for (var x = 1; x < 17; x++) {
            $("#main").append("<div class='box' ></div>");
        }
    }
    
    $("#clear").click(function () {
        var width = prompt("Choose width");
        var height = prompt("Choose height");
        $("#main").empty();
        for (var i = 0; i < width; i++) {
            for (var x = 0; x < height; x++) {
                $("#main").append("<div class='box'></div>");
            }         
        }
    });
});

$(document).ready(function () {
    $(".box").mouseenter(function () {
            $(this).css("background-color", "white");
    });
    
});
