// Step 1: How am I going to keep track of the skills?
// Array of value to be put on the skillBoard
let devSkills = ["Cascading Style Sheets (CSS)", "Hypertext Markup Language (HTML)"];

// Step 2: What are going to be the areas I need to access?
// A Javascript Object, that holds jQuery key/object selectors
const $accessPoints = {
    formArea: $("form"),
    skillBoard: $(".skillList"),
    textBox: $("input[type=text]")
};

// Step 3: How do I put the skill Array on the board
// Loops through the Array and appends a new element
function updateBoard() {
    $accessPoints.skillBoard.empty(); // Clears out board
    for (skill of devSkills){ 
        const nodeToAdd = `<div class="bulletItem"><input type="button" value="X">${skill}</div>`;
        $accessPoints.skillBoard.append(nodeToAdd);
    }
    // Step 7: Getting browser to remember skill list
    // First turned array into json string
    let skillString = JSON.stringify(devSkills);
    localStorage.setItem('devSkills', skillString ); // Saved into localStorage as 'devSkills'


    // Step 6: How to delete item by clicking on red X
    // If not in updateBoard, will be canceled out when updateBoard used
    $("input[type='button']").on("click", function (event) {
    const $target = $(event.target).parent(); // set to parent
    const skillToCompare = $target.text();
    let indexToRemove = devSkills.indexOf(skillToCompare);
    devSkills.splice(indexToRemove, 1)
    
    updateBoard();
    })
    
}

// Step 4: How to grab info from textbox and put it in array
// Store text then clears the box
function addToList() {
    let boxValue = $accessPoints.textBox.val();
    devSkills.push(boxValue);
    $accessPoints.textBox.val("");
    // Getting browser to remember skill list
    // First turned array into json string
    let skillString = JSON.stringify(devSkills);
    localStorage.setItem('devSkills', skillString ); // Saved into localStorage as 'devSkills'
}

// Step 5: How to get it to add and update when the button is clicked
$accessPoints.formArea.on("submit", function(event){
    event.preventDefault(); // Prevent page refresh
    addToList();
    updateBoard();
})





let storageString = localStorage.getItem("devSkills") // Retrieving local JSON and saving it in storageString)
const fetchedArray = JSON.parse(storageString); // Converting back to array
devSkills = fetchedArray; // Setting skill array to whatever is saved in local storage. 


// Get board to correct state initially
updateBoard(); 
