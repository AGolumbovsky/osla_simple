console.log("it works!")

let buttClick = () => {
    let userInput = document.getElementById("userInput").value;

    alert(userInput);
}

let getIt = () => {

    fetch('http://example.com/movies.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(JSON.stringify(myJson));
    });
}