let form = document.querySelector('#form');
let input = document.querySelector('#input');
let msg = document.querySelector('#msg');
let posts = document.querySelector('#posts');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("button clicked");
    formValidation();
});

let formValidation = ()=> {
    if(input.value === ""){
        msg.innerHTML = "Post cannot be blank";
        console.log("Failure");
    } else {
        console.log("Success");
        msg.innerHTML = "";
        acceptData();
    }
};

let data = {}

let acceptData = ()=> {
    data["text"] = input.value;
    console.log(data);
    createPost();
};

let createPost = () => {
    posts.innerHTML +=
    `<div>
    <p>${data.text}</p>
    <span class="options">
        <img onClick="editPost(this)" class="images" src="img/pen-to-square-regular.svg" alt="">
        <img onClick="deletePost(this)" class="images" src="img/trash-can-regular.svg" alt="">
    </span>
</div>`;
input.value = "";
};

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;

}