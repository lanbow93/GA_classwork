/*
<body class="centered">
    <div class="test">
    <h1>MY DEVELOPER SKILLS</h1>
    <div class="skillList">
        <div><input type="button" value="X"> Javascript</div>
        <div><input type="button" value="X"> HTML</br></div>
    </div>
    <form>
        <input type="text" placeholder="(Developer Skill Here)">
        <input type="submit" value="Add Skill">
    </form>
    </div>*/
const skillBlock = {
    devSkills: ["Javascript", "HTML"]
}

const $skillInputs = {
    textBox: $("input[type='text']"),
    formField: $("form"),
    formButton: $("input[type='button']")
};

function skillUpdate(){
    $(".skillList").empty();
    for (let skill of skillBlock.devSkills) {
        $(".skillList").append($(`<div><input type="button" value="X"> ${skill}</div>`))
    }
}

$skillInputs.formField.on("submit", function(event){
    event.preventDefault();
    const text = $("input[type='text']")
    skillBlock.devSkills.push(text.val());
    text.val("");
    skillUpdate()
});

$skillInputs.formButton.on('click', function(event){
    const $closestText = $(event.target).text()
    console.log($closestText)
;})