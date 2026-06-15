// let liked = false;

// function toggleRose(){

//     const flower = document.querySelector("#roseFlower path:first-child");
//     const icon = document.getElementById("roseIcon");
//     const count = document.getElementById("roseCount");

//     icon.classList.remove("pop");
//     void icon.offsetWidth;

//     if(!liked){

//         flower.setAttribute("fill","#e53935");

//         icon.classList.add("pop");
//         count.classList.add("green");

//         liked = true;

//     }else{

//         flower.setAttribute("fill","#ffffff");

//         count.classList.remove("green");
        
//         liked = false;
//     }
// }
// function toggleComments(btn){

//     const section = btn.parentElement.nextElementSibling;

//     if(section.style.display === "none"){
//         section.style.display = "block";
//     }else{
//         section.style.display = "none";
//     }
// }
// function toggleComments(btn){

//     const post = btn.closest(".post");
//     const commentBox = post.querySelector(".comments-section");

//     if(commentBox.style.display === "block"){
//         commentBox.style.display = "none";
//     }else{
//         commentBox.style.display = "block";
//     }
// }

// function sharePost(){

//     if(navigator.share){

//         navigator.share({
//             title:"GOGLOBAL",
//             text:"Check this post",
//             url:window.location.href
//         });

//     }else{

//         navigator.clipboard.writeText(window.location.href);

//         alert("Link copied!");
//     }
// }

// function toggleSave(btn){

//     if(btn.classList.contains("saved")){

//         btn.classList.remove("saved");
//         btn.innerHTML = "🔖 Save";

//     }else{

//         btn.classList.add("saved");
//         btn.innerHTML = "✅ Saved";

//     }
// }



// Rose Button

// function toggleRose() {

//     let count = document.getElementById("roseCount");

//     let current = parseInt(count.innerText);

//     count.innerText = current + 1;

// }

// // Comment Button

// function toggleComments(btn) {

//     let post = btn.closest(".post");

//     let comments = post.querySelector(".comments-section");

//     if(comments.style.display === "block"){

//         comments.style.display = "none";

//     }else{

//         comments.style.display = "block";

//     }

// }

// // Save Button

// function toggleSave(btn){

//     if(btn.innerHTML.includes("Save")){

//         btn.innerHTML = "✅ Saved";

//     }else{

//         btn.innerHTML = "🔖 Save";

//     }

// }

// // Share Button

// function sharePost(){

//     if(navigator.share){

//         navigator.share({

//             title:"GOGLOBAL",

//             text:"Check this post",

//             url:window.location.href

//         });

//     }else{

//         navigator.clipboard.writeText(window.location.href);

//         alert("Link Copied!");

//     }

// }

// let roseCount = 120;

// function toggleRose() {
//     roseCount++;
//     document.getElementById("roseCount").innerText = roseCount;
// }

// function toggleComments() {

//     let box = document.getElementById("commentsBox");

//     if(box.style.display === "block"){
//         box.style.display = "none";
//     }else{
//         box.style.display = "block";
//     }

// }


function toggleRose(btn){

    const flower = btn.querySelector(".roseFlower path:first-child");
    const count = btn.querySelector(".roseCount");

    if(!btn.classList.contains("liked")){

        flower.setAttribute("fill","#e53935");
        count.innerHTML ="" ;
        btn.classList.add("liked");

    }else{

        flower.setAttribute("fill","#ffffff");
        count.innerHTML = "";
        btn.classList.remove("liked");
    }
}



function toggleComments(btn){

    const section =
        btn.parentElement.nextElementSibling;

    if(section.style.display === "none"){
        section.style.display = "block";
    }else{
        section.style.display = "none";
    }
}

function postComment(btn){

    const section = btn.parentElement;

    const input =
        section.querySelector(".comment-input");

    const list =
        section.querySelector(".comments-list");

    if(input.value.trim() !== ""){

        const p = document.createElement("p");

        p.innerHTML = "👤 " + input.value;

        list.appendChild(p);

        input.value = "";
    }
}

function sharePost(){

    if(navigator.share){

        navigator.share({
            title:"GOGLOBAL",
            text:"Check this video",
            url:window.location.href
        });

    }else{

        navigator.clipboard.writeText(
            window.location.href
        );

        alert("Link copied!");
    }
}


function toggleSave(btn){

    const icon = btn.querySelector("i");

    if(icon.classList.contains("fa-regular")){
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
    }else{
        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");
    }
}
