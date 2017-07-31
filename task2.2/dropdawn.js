function stateList() {
    var dropdown = document.getElementById("dropdown");
    var states = [];
    for (var i = 0; i < member.length; i++) {

        var state = member[i].state;
        if (states.indexOf(state) == -1) {
            states.push(state);
        }
    }

    states.sort();

    for (var i = 0; i < states.length; i++) {

        var option = document.createElement('option');
        option.innerHTML = states[i];
        dropdown.append(option);
    }

}

stateList();



function myFunction() {
    
    var y = document.getElementById('dropdown').value;
    tableBody.innerHTML = "";
    for (var i = 0; i < member.length; i++) {
        if (isVisible(member[i])){
            var row = document.createElement('tr');
            row.insertCell().innerHTML = member[i].first_name + " " + member[i].middle_name + " " + member[i].last_name;
            row.insertCell().innerHTML = member[i].party;
            row.insertCell().innerHTML = member[i].state ;
            row.insertCell().innerHTML = member[i].seniority;
            row.insertCell().innerHTML = member[i].votes_with_party_pct + "%";
            tableBody.append(row);
        }
    }
}

