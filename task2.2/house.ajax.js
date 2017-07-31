var house = "https://nytimes-ubiqum.herokuapp.com/congress/113/house";


$.getJSON(house, function(data){
    console.log(data);
    var member = data.results[0].members
    
    calculate(data)
});