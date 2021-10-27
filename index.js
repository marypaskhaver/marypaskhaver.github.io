$(function () {
    const words = ["a programmer", "a writer", "a go-getter", "a teacher"];
    var index = 0;

    setInterval(function() {
        $("#thing-i-am").fadeOut(500, function() {
            $(this).text(words[index] + ".").fadeIn(500);
            index += 1;
        });

        // The index goes out of bounds only when on GH Pages...?
        // Attempt to fix by checking when index >= words.length.
        if (index >= words.length) {
            index = 0;
        }

        console.log(index);
    }, 2000);
});