 var tableBody = document.getElementById('table-body');
 var member = data.results[0].members;
 for (var i = 0; i < member.length; i++) {
     
     
     if (member[i].middle_name == null) {
         member[i].middle_name = '';
     }
     var row = document.createElement('tr');
     row.insertCell().innerHTML = member[i].first_name;
     row.insertCell().innerHTML = member[i].middle_name;
     row.insertCell().innerHTML = member[i].last_name;
     row.insertCell().innerHTML = member[i].party;
     row.insertCell().innerHTML = member[i].votes_with_party_pct + "%";
     tableBody.append(row);

 }
