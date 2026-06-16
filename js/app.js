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
function showTab(i){
  const tabs = document.querySelectorAll('.tab');
  const sections = document.querySelectorAll('.section');

  tabs.forEach((tab,index)=>{
    tab.classList.toggle('active', index === i);
  });

  sections.forEach((section,index)=>{
    section.classList.toggle('active', index === i);
  });
}

/* Open Apps */
function openApp(url){
  window.open(url, "_blank", "noopener,noreferrer");
}

/* Photos */
const photoBox = document.getElementById("photoBox");
let photoCount = 0;
let loading = false;

function loadPhotos(){
  for(let i=0; i<12; i++){

    photoCount++;

    const img = document.createElement("img");
    img.src = `https://picsum.photos/400?random=${photoCount}`;
    img.loading = "lazy";
    img.alt = "Photo";

    photoBox.appendChild(img);
  }
}

loadPhotos();

/* Infinite Scroll */
window.addEventListener("scroll", ()=>{

  if(loading) return;

  if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 200){

    loading = true;

    loadPhotos();

    setTimeout(()=>{
      loading = false;
    },500);
  }
});
const newsBox = document.getElementById("newsBox");

const trendingNews = [
  {
    title: "📰 Eenadu",
    url: "https://www.eenadu.net"
  },
  {
    title: "📰 Sakshi",
    url: "https://www.sakshi.com"
  },
  {
    title: "📰 Andhra Jyothy",
    url: "https://www.andhrajyothy.com"
  },
  {
    title: "📰 TV9 Telugu",
    url: "https://tv9telugu.com"
  },
  {
    title: "📰 NTV Telugu",
    url: "https://www.ntvtelugu.com"
  },
  {
    title: "📰 V6 News",
    url: "https://www.v6velugu.com"
  },
  {
    title: "📰 10TV",
    url: "https://10tv.in"
  },
  {
    title: "📰 ABN Andhra Jyothy",
    url: "https://www.andhrajyothy.com/abn"
  }
];

trendingNews.forEach(news => {

  const a = document.createElement("a");

  a.innerText = news.title;
  a.href = news.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";

  newsBox.appendChild(a);

});

/* Search Suggestions */
const suggestions = document.getElementById("suggestions");
const searchInput = document.getElementById("searchInput");

function getSuggestions(query){

  if(query.length < 2){
    suggestions.style.display = "none";
    return;
  }

  const oldScript = document.getElementById("googleSuggest");
  if(oldScript) oldScript.remove();

  const script = document.createElement("script");

  script.id = "googleSuggest";

  script.src =
    "https://suggestqueries.google.com/complete/search?client=firefox&q="
    + encodeURIComponent(query)
    + "&callback=showSuggestions";

  document.body.appendChild(script);
}

window.showSuggestions = function(data){

  suggestions.innerHTML = "";

  data[1].forEach(item=>{

    const div = document.createElement("div");

    div.innerText = item;
    div.className = "suggestion-item";

    div.onclick = ()=>{
      searchNow(item);
    };

    suggestions.appendChild(div);
  });

  suggestions.style.display =
    data[1].length ? "block" : "none";
};

function searchNow(query){

  if(!query.trim()) return;

  window.open(
    "https://www.google.com/search?q=" +
    encodeURIComponent(query),
    "_blank"
  );

  suggestions.style.display = "none";
}

/* Enter Key Search */
if(searchInput){

  searchInput.addEventListener("keypress",(e)=>{

    if(e.key === "Enter"){
      searchNow(searchInput.value);
    }
  });
}

/* Hide Suggestions Outside Click */
document.addEventListener("click",(e)=>{

  if(
    !e.target.closest(".search") &&
    !e.target.closest("#suggestions")
  ){
    suggestions.style.display = "none";
  }
});
