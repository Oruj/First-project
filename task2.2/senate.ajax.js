var senate = "https://nytimes-ubiqum.herokuapp.com/congress/113/senate";


$.getJSON(senate, function (data) {
    console.log(data);
    var member = data.results[0].members
    
    calculate(data)
    
});
