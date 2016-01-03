$(document).ready(function () {
    for (var i = 0; i < 16; i++) {
        for (var x = 0; x < 16; x++) {
            $("#main").append("<div class='box' ></div>");
        }
    }
    var res;

    $("#clear").click(function () {
        var resQ = prompt("Choose the length of the sides, leaving the prompt blank will make them 16");
        var res = 960/ parseInt(resQ);
        var count = 0;
    
        if (resQ != "") {
            $("#main").empty();
            for (var i = 0; i < resQ; i++) {
                for (var x = 0; x < resQ; x++) {
                    $("#main").append("<div class='box'></div>");
                    count++;
                }
            } 
        }
        else {
            $("#main").empty();
            for (var i = 0; i < 16; i++) {
                for (var x = 0; x < 16; x++) {
                    $("#main").append("<div class='box'></div>");
                    count++;
                }
            }
        }
        console.log(count);
        count = 0;
        i = 0;
        x = 0;
        $(".box").height(res).width(res);
    });
    var color = "white";
    $(".colors").click(function () {
        color = this.id;
    });
    $(document).on("mouseenter", ".box", function () {
        $(".box").mouseenter(function () {
            $(this).css("background-color", color);
        });
    });
});



