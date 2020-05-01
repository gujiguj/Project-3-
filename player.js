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
        if(data.weight_pounds == null){
            document.getElementById("weight").innerHTML = 'Weight: Unknown';;
        }
        document.getElementById("team").innerHTML = `Team: ${team}`;
    }
    request.send();
}

var displayPlayer = function(id){
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
        if(data.weight_pounds == null){
            document.getElementById("weight").innerHTML = 'Weight: Unknown';;
        }
        document.getElementById("team").innerHTML = `Team: ${team}`;
    }
    request.send();
}

var generateTable = function(per_page){
    document.write('<table><thead><tr><th>Name</th><th>Team</th></tr></thead><tbody>');
    for(var i = 0; i < per_page; i++){
        document.write('<tr id = "r' + i + '"></tr>');
    }
    document.write('</tbody></table>');
    document.write('<a href = "random.html"><button>Get a Random Player</button></a><br>');
}

var listPlayers = function(page, per_page){
    var request = new XMLHttpRequest();
    request.open("GET", 'https://www.balldontlie.io/api/v1/players?page=' + page + '?per_page=' + per_page, true);
    request.onload = function(){
        var dataArray = JSON.parse(this.response);
        var data = dataArray.data;
        //document.getElementById("a").innerHTML = `${firstName} ${lastName} ${team}`;
        //document.write('<p>' + firstName + ' ' + lastName + ' ' + team + '</p>');
        //document.write('<tr><td>' + firstName + ' ' + lastName + '</td><td>' + team + '</td></tr>');
        for(var i = 0; i < data.length; i++) {
            if(per_page > data.length){
                for(var j = per_page-1; j > data.length-1; j--){
                    document.getElementById("r" + j).innerHTML = '<td></td><td></td>';
                }
            }
            var player = data[i];
            var id = player.id;
            var firstName = player.first_name;
            var lastName = player.last_name;
            var team = player.team.name;
            document.getElementById("r" + i).innerHTML = '<td><a href = "index.php?id=' + id + '">' + firstName + ' ' + lastName + '</a></td><td>' + team + '</td>';
        }

        //document.write('</tbody></table>')
    }
    request.send();
}

var listButtons = function(per_page){
    
    var request = new XMLHttpRequest();
    request.open("GET", 'https://www.balldontlie.io/api/v1/players?page=1?per_page=' + per_page, true);
    request.onload = function(){
        var dataArray = JSON.parse(this.response);
        var meta = dataArray.meta;
        for(var i = 1; i <= meta.total_pages; i++){
            document.write('<button onclick = "listPlayers(' + i + ',' + per_page + ')">' + i + '</button>');
        }
    }
    request.send();
}
