// create the Link with html
let form = document.getElementById("form");
let input = document.getElementById("input"); // Textarea
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");


// Construisez un écouteur d'événements et une validation du Forulaire
form.addEventListener("submit" , (e) => {
    e.preventDefault();
    console.log("button clicked");

    formValidation();

});

// Maintenant, nous allons faire une instruction IF Else dans notre fonction FormValidation.Cela nous aidera à empêcher les utilisateurs de soumettre des champs d'entrée vierges.
function formValidation  () {
    if (input.value === "") {
        msg.innerHTML = "Post cannot be blank";
        console.log("failure");
    } else {
        console.log("successs");
        msg.innerHTML = "";
        acceptData();
    }
};

let data = {};

let acceptData = () => {
    data ["text"] = input.value;
    console.log(data);
    createPost();
};

let createPost = () => {
    posts.innerHTML += `
    <div>
    <p>${data.text}</p>
    <span class="options">
        <i class="fas fa-edit"></i>
        <i class="fas fa-trash-alt"></i>
    </span>
</div>
    `;
    input.value = "";
};