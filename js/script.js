$(document).ready(function () {
    for (var i = 1; i < 17; i++) {
        for (var x = 1; x < 17; x++) {
            $("#main").append("<div class='box' ></div>");
        }
    }
    var res;

    $("#clear").click(function () {
        var resQ = prompt("Choose resolution");
        var res = 960/ parseInt(resQ);

        $("#main").empty();
        for (var i = 0; i < resQ; i++) {
            for (var x = 0; x < resQ; x++) {
                $("#main").append("<div class='box'></div>");

                console.log(res);
            }
        }
        i = 0;
        x = 0;
        $(".box").height(res).width(res);
    });

    $(".box").mouseenter(function () {
        $(this).css("background-color", "white");
    });
    
});

