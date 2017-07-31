 
var senate = "https://nytimes-ubiqum.herokuapp.com/congress/113/senate";
var member;

$.getJSON(senate, function (data) {
    console.log(data);
    member = data.results[0].members;
    
    filter();
    
});



var tableBody = document.getElementById('table-body');




// var member = data.results[0].members;

 function filter() {
     

     tableBody.innerHTML = "";

     for (var i = 0; i < member.length; i++) {

         if (isVisible(member[i])) {
             var row = getRow(member[i]);
             tableBody.append(row);
         }

     }

 }

function getRow(member) {
    if (member.middle_name == null) {
         member.middle_name = '';
     }
     var row = document.createElement('tr');
     row.insertCell().innerHTML = member.first_name + ' ' + member.middle_name + ' ' + member.last_name;
     row.insertCell().innerHTML = member.party;
     row.insertCell().innerHTML = member.state;
     row.insertCell().innerHTML = member.seniority;
     row.insertCell().innerHTML = member.votes_with_party_pct + "%";
    
    return row;
}


 function isVisible(x) {
     var Array = [];
     var demArray = document.getElementById('dem').checked;
     var repArray = document.getElementById('rep').checked;
     var indArray = document.getElementById('ind').checked;

     if (demArray) {
         Array.push("D")
     }
     if (repArray) {
         Array.push("R")
     }
     if (indArray) {
         Array.push("I")
     }
     if (!demArray && !repArray && !indArray) {
         Array.push("D", "R", "I")
     }
     if (Array.indexOf(x.party) != -1) {
        var y = document.getElementById('dropdown').value;
        if(y == x.state || y == 'All' )
         {
             return true;
         }
         else{
             return false;
         }
     } else {
         return false;
     }
 }



 var demArray = document.getElementById("dem");
 demArray.addEventListener("click", filter);

 var repArray = document.getElementById("rep");
 repArray.addEventListener("click", filter);

 var indArray = document.getElementById("ind");
 indArray.addEventListener("click", filter);

