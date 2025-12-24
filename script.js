const input=document.querySelector(".user-input");
const enter=document.querySelector(".enter");
const select=document.querySelector(".select")
const photos=document.querySelector(".photo-container")
function dogset() {
    if (input.value=="holycannoli") {
        select.innerHTML=`<select class=\"selector\"><option class=\"all\">all</option><option class=\"hershey\">Hershey</option><option class=\"cannoli\">Cannoli</option><option class=\"kuma\">Kuma</option></select>`;
        selected=document.querySelector(".selector");
        selected.addEventListener("change",() => which(selected.value));
        photos.innerHTML=`<img src=\"Cano1.jpeg\" class=\"cano\"><img src=\"Cano2.jpeg\" class=\"cano1\"><img src=\"Cano3.jpeg\"\
 class=\"cano\"><img src=\"Cano4.jpeg\" class=\"cano\"><img src=\"Cano5.jpeg\" class=\"cano\">
 <img src=\"Kuma1.jpeg\" class=\"Kuma\">
 <img src=\"Kuma2.jpeg\" class=\"Kuma\">
 <img src=\"Kuma3.jpeg\" class=\"Kuma\">
 <img src=\"Kuma4.jpeg\" class=\"Kuma1\">
 <img src=\"Kuma5.jpeg\" class=\"Kuma1\">`}else{input.value=""}
};

enter.addEventListener("click",() => dogset());
function which(n) {
    if (n=="Cannoli") {
        photos.innerHTML=`<img src=\"Cano1.jpeg\" class=\"cano\"><img src=\"Cano2.jpeg\" class=\"cano1\"><img src=\"Cano3.jpeg\"\
 class=\"cano\"><img src=\"Cano4.jpeg\" class=\"cano\"><img src=\"Cano5.jpeg\" class=\"cano\">`
    } else if(n=="Kuma") {
        photos.innerHTML=`<img src=\"Kuma1.jpeg\" class=\"Kuma\">
 <img src=\"Kuma2.jpeg\" class=\"Kuma\">
 <img src=\"Kuma3.jpeg\" class=\"Kuma\">
 <img src=\"Kuma4.jpeg\" class=\"Kuma1\">
 <img src=\"Kuma5.jpeg\" class=\"Kuma1\">`
    }}
