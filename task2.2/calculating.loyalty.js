var rep = 0;
var dem = 0;
var ind = 0;
var member = data.results[0].members;

for (var i = 0; i < member.length; i++) {
    if (member[i].party == "R") {
        rep++;
    }
    if (member[i].party == "D") {
        dem++;
    }
    if (member[i].party == "I") {
        ind++;
    }
}


statistics.Republicants = rep;
statistics.Democrats = dem;
statistics.Independents = ind;

var tableCell = document.getElementById('rtCell');
tableCell.innerHTML = statistics.Republicants;

var tableCell = document.getElementById('dtCell');
tableCell.innerHTML = statistics.Democrats;

var tableCell = document.getElementById('itCell');
tableCell.innerHTML = statistics.Independents;
//---------------------------------------------------------------------
var totalRepParytVote = 0;
var totalDemPartyVote = 0;
var totalIndPartyVote = 0;
for (var i = 0; i < member.length; i++) {
    if (member[i].party == "R") {
        totalRepParytVote += parseFloat(member[i].votes_with_party_pct);
    }
    if (member[i].party == "D") {
        totalDemPartyVote += parseFloat(member[i].votes_with_party_pct);
    }
    if (member[i].party == "I") {
        totalIndPartyVote += parseFloat(member[i].votes_with_party_pct);
    }
}
var avarageRep = totalRepParytVote / rep;
var avarageDem = totalDemPartyVote / dem;
var avarageInd = totalIndPartyVote / ind;
var aRep = avarageRep.toFixed(2);
var aDem = avarageDem.toFixed(2);
var aInd = avarageInd.toFixed(2);
document.getElementById("raCell").innerHTML = aRep;
document.getElementById("daCell").innerHTML = aDem;
document.getElementById("iaCell").innerHTML = aInd;
//-----------------------------------------------------------------------




var tablemissing = document.getElementById('tablem-body');
var member = data.results[0].members;



function avarageFiltering(a,b) {
  if (parseFloat(a.missed_votes_pct) < parseFloat(b.missed_votes_pct))
    return -1;
  if (parseFloat(a.missed_votes_pct) > parseFloat(b.missed_votes_pct))
    return 1;
  return 0;
    
}

var sortedArray = member.sort(avarageFiltering);
tablemissing.innerHTML = '';
for (var i = 0; i < 10; i++) {
    if (sortedArray[i].middle_name == null) {
        sortedArray[i].middle_name = '';
    }
    
        var row = document.createElement('tr');
        row.insertCell().innerHTML = sortedArray[i].first_name + ' ' + sortedArray[i].middle_name + ' ' + sortedArray[i].last_name;
        row.insertCell().innerHTML = sortedArray[i].missed_votes;
        row.insertCell().innerHTML = sortedArray[i].missed_votes_pct + "%";
        tablemissing.append(row);

    
}
//--------------------------------------------------------------------------

var tablemissingt = document.getElementById('tablemt-body');
var sortedArrayt = sortedArray.reverse();
tablemissingt.innerHTML = '';
for (var i = 0; i < 10; i++) {
    if (sortedArrayt[i].middle_name == null) {
        sortedArrayt[i].middle_name = '';
    }
    
        var row = document.createElement('tr');
        row.insertCell().innerHTML = sortedArrayt[i].first_name + ' ' + sortedArrayt[i].middle_name + ' ' + sortedArrayt[i].last_name;
        row.insertCell().innerHTML = sortedArrayt[i].missed_votes;
        row.insertCell().innerHTML = sortedArrayt[i].missed_votes_pct + "%";
        tablemissingt.append(row);

    
}
console.log(sortedArrayt);