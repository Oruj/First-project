var senate = "https://nytimes-ubiqum.herokuapp.com/congress/113/senate";
var member;

$.getJSON(senate, function (data) {
    console.log(data);
    var member = data.results[0].members
    
    filter(member)
    stateList()
    
});
