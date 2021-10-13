
/*
function listado(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response){
        return response.json()
    })
    .then((response) => {
        console.log(response)
        var result = document.getElementById('result')
        result.innerHTML = response.userName
    })
}
*/

function ceo() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(json => {
        const name = json.name;
        const email = json.email;
        const phone = json.phone
        document.getElementById("ceoName").innerHTML = name;
        document.getElementById("ceoEmail").innerHTML = email;
        document.getElementById("ceoPhone").innerHTML = phone;
      });
}


