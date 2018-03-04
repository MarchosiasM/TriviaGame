// Initialize everything, going to need an array to store the questions and answers. 
// Perhaps an array to store daughter arrays, and the first entry will be the question, 
// second will be the answer, and trailing will be guesses.

// One master array to store the others for reference later.

var arrayMaster = []

// Child arrays will encapsulate the data we need for the questions

var q1 = [
    "What about the one guy", //0th entry is question
    "/assets/image.jpg", //1st is image associated with the entry
    "He's cool I guess", //2nd is correct answer
    "He is cool I guess", // Begin listing 4 possible answers
    "What a nerd",
    "That guy loves apples",
    "That's not a real answer"
]





// Now you're gonna need some code what makes the game do a thing.


$(document).ready(function () {

    // This function starts and displays a timer. Should be fairly flexible in how much time it can
    // accept, I'd like to use it for both the trivia question times (30 sec) and the answer portions
    // vars for sWatch
    var intervalId;
    var clockRunning = false;
    // Create a stopwatch object, borrowed from completed class assignment. Don't need the record lap
    // function nor do we need the stop function. We'll make it stop on it's own and call another
    // function when t = 0
    var timer = {
        time: 0,
        timeConverter: function (t) {
            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);

            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            if (minutes === 0) {
                minutes = "00";
            }
            else if (minutes < 10) {
                minutes = "0" + minutes;
            }

            return minutes + ":" + seconds;
        },
        start: function (t) {
            if (!clockRunning) {
                intervalId = setInterval(this.count, 1000);
                clockRunning = true;
                time = t;
            }
        },
        count: function () {
            this.time--;
            console.log(this)
            var converted = this.timeConverter(this.time)
            console.log(converted);
            $("#display").text(converted);
            if (this.time === 0) {
                loss();
            }
        }

    }

    // Something should listen to see what was clicked, then respond appropriately.
    $(document).on("click","#start", loadNextQuestion)

    // Run something to check and see if it was a right or wrong answer. It takes the selected answer,
    // the array, and then checks to see if the selection matches the [1] item in the array. If so, 
    // return true (win), if not return false (loss)
    function answerCheck(selection, currArray) {

    }

    // A function that will check the questions that have already run, and run a new one. It should pull
    // from the array, that way we won't ever load multiples
    function loadNextQuestion() {
        console.log("Loadnextquestion called")

    }

    // A function that runs in the event of a victory, and iterates points. It will show the victory screen
    // and associated picture, and load the next question after 5 seconds or them clicking continue
    function victory() {

    }

    // A function that runs in the event of a loss, and iterates losses. 
    function loss() {

    }

    // If all the 

    // This will generate the board, and start everything anew when the game is done.
    function loadPage() {
        // Load up a start button
        $("#main").html("<button id='start' class='buttons'>Start</button>")
    }

    loadPage()
});