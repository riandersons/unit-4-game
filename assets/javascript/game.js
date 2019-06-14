let counter = 0;
let win = 0;
let loss = 0;
game();

function game() {
    $("#crystals").html('');
    $("#crystals").html('');
    $("#crystals").html('');
    $("#crystals").html('');
    $('#runningTotal').html('');


    // Creating 4 crystals each with their own unique random number value.
    const a = (Math.floor(Math.random() * 11) + 1);
    const b = (Math.floor(Math.random() * 11) + 1);
    const c = (Math.floor(Math.random() * 11) + 1);
    const d = (Math.floor(Math.random() * 11) + 1);
    counter = 0;
    console.log('Random values  ' + a, b, c, d);

    const imageCrystalA = $("<img>");
    imageCrystalA.addClass("crystal-image");
    imageCrystalA.attr("data-crystalvalue", a);
    $("#crystals").append(imageCrystalA);

    const imageCrystalB = $("<img>");
    imageCrystalB.addClass("crystal-image");
    imageCrystalB.attr("data-crystalvalue", b);
    $("#crystals").append(imageCrystalB);

    const imageCrystalC = $("<img>");
    imageCrystalC.addClass("crystal-image");
    imageCrystalC.attr("data-crystalvalue", c);
    $("#crystals").append(imageCrystalC);

    const imageCrystalD = $("<img>");
    imageCrystalD.addClass("crystal-image");
    imageCrystalD.attr("data-crystalvalue", d);
    $("#crystals").append(imageCrystalD);

    imageCrystalA.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
    imageCrystalB.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
    imageCrystalC.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
    imageCrystalD.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

    evaluate();

};
// End of game building sequence

function evaluate() {
    const targetNumber = (Math.floor(Math.random() * 101) + 19);
    $("#number-to-guess").text(targetNumber);


    // This time, our click event applies to every single crystal on the page. Not just one.
    $(".crystal-image").on("click", function () {

        // Determining the crystal's value requires us to extract the value from the data attribute.
        // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
        // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
        // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

        let crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        // We then add the crystalValue to the user's "counter" which is a global variable.
        // Every click, from every crystal adds to the global counter.

        counter += crystalValue;

        console.log('counter  ' + counter);
        console.log('crystal value  ' + crystalValue);

        $("#runningTotal").text(counter);

        if (counter === targetNumber) {
            win++;
            $("#wins").text(win);
            $("#youWinOrLose").html('You win!!!   Click again to start new game');
            counter = 0;
            a = 0;
            b = 0;
            c = 0;
            d = 0;
            $(".crystal-image").on("click", function () {
                $("#youWinOrLose").html('');
                game()
            });

        }

        else if (counter >= targetNumber) {
            loss++;
            $("#losses").text(loss);
            $("#youWinOrLose").html('You lose!!!   Click again to start new game');
            counter = 0;
            a = 0;
            b = 0;
            c = 0;
            d = 0;
            $(".crystal-image").on("click", function () {
                $("#youWinOrLose").html('');
                game()
            });

        }
    });

}