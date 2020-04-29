var searchPlayer = function(){
    var id = Math.random() * 3000;
    var request = new XMLHttpRequest();
    request.open("GET", `https://www.balldontlie.io/api/v1/players/` + id, true);
    request.onload = function(){
        var data = JSON.parse(this.response);
        var firstName = data.first_name;
        var lastName = data.last_name;
        var position = data.position;
        var heightFeet = data.height_feet;
        var heightInches = data.height_inches;
        var weight = data.weight_pounds;
        var team = data.team.name;
        document.getElementById("name").innerHTML = `${firstName} ${lastName}`;
        document.getElementById("position").innerHTML = `Position: ${position}`;
        if(data.position == ""){
            document.getElementById("position").innerHTML = 'Position: Unknown';;
        }
        document.getElementById("height").innerHTML = `Height: ${heightFeet} feet and ${heightInches} inches`;
        if(data.height_feet == null){
            document.getElementById("height").innerHTML = 'Height: Unknown';;
        }
        document.getElementById("weight").innerHTML = `Weight: ${weight} pounds`;
        if(data.weight == null){
            document.getElementById("weight").innerHTML = 'Weight: Unknown';;
        }
        document.getElementById("team").innerHTML = `Team: ${team}`;
    }
    request.send();
}
