let movieData; // state variable to store our movie data in
let userInput; // Used to store the user's information

const $title = $('#title');
const $year = $('#year');
const $rated = $('#rated');
const $input = $('input[type="text"]');

// When form is submitted, run handleGetData
$("form").on("submit", handleGetData);

// Moving in a function due to best practice

function handleGetData(event){
    event.preventDefault(); // Prevents page from being refreshed
    // Use jQuery to do an ajax request to omdbapi
    userInput = $input.val(); // Taking in the value in the text input field

    const promise = $.ajax({
        url: `https://www.omdbapi.com/?apikey=5b15c5d3&t=${userInput}` // Inputs user input in url for ajax request
    });
    
    // When the data is returned then.....
    promise.then(
        // If the request succeeds
        (data) => {
            //Set movieData to the information return 
            movieData = data;
            // Run fuction render, to put it on the screen
            render();
        },
        // If request fails
        (error) => {
            // Log Bad Request and the error
            console.log("bad request: ", error);
        }
    )
}

// puts information gathered on the window
function render() {
    $title.text(movieData.Title);
    $year.text(movieData.Year);
    $rated.text(movieData.Rated);
}
