let findWord = () => {

    document.getElementById("display-area").innerHTML = "TEST! FIND CLICKED";
    
    // fetch('http://example.com/movies.json')
    // .then(function(response) {
    //     return response.json();
    // })
    // .then(function(myJson) {
    //     console.log(JSON.stringify(myJson));
    //     console.log("fetched something")
    // });

}

// some more stuff on fetch() from the internets
var url = 'localhost:8888/api/word';
var data = {username: 'example'};

let addWord = () => {

    document.getElementById("display-area").innerHTML = "TEST! ADD CLICKED";
    
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

let learnOsla = () => {
    document.getElementById("display-area").innerHTML = "TEST! LEARN CLICKED";
}

let contactUs = () => {
    document.getElementById("display-area").innerHTML = "TEST! CONTACT CLICKED";
}