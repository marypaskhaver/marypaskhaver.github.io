$(function () {
    const words = ["programmer", "writer", "go-getter", "teacher"];
    var index = 0;

    setInterval(function() {
        $("#thing-i-am").fadeOut(500, function() {
            $(this).text(words[index] + ".").fadeIn(500);
            index += 1;
        });

        if (index == words.length) {
            index = 0;
        }

        console.log(index);
    }, 2000);
});