console.log("it works!")

let buttClick = () => {
    let userInput = document.getElementById("userInput").value;

    alert(userInput);
}

// some stuff on fetch() from the internets
let getIt = () => {

    fetch('http://example.com/movies.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(JSON.stringify(myJson));
    });
}

// some more stuff on fetch() from the internets
var url = 'https://example.com/profile';
var data = {username: 'example'};

let postIt = () => {
    
    fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
        'Content-Type': 'application/json'
    }
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
}