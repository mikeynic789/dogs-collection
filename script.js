const input=document.querySelector(".user-input");
const enter=document.querySelector(".enter");
const select=document.querySelector(".select")
const photos=document.querySelector(".photo-container")
function dogset() {
    if (input.value=="holycannoli") {
        select.innerHTML=`<select class=\"selector\"><option class=\"all\">all</option>><option class=\"hershey\">Hershey</option><option class=\"cannoli\">Cannoli</option><option class=\"kuma\">Kuma</option>`;
        photos.innerHTML=`<img src=\"Cano1.jpeg\" class=\"cano\"><img src=\"Cano2.jpeg\" class=\"cano1\"><img src=\"Cano3.jpeg\"\
 class=\"cano\"><img src=\"Cano4.jpeg\" class=\"cano\"><img src=\"Cano5.jpeg\" class=\"cano\">
 <img src=\"Kuma1.jpeg\" class=\"kuma\">
 <img src=\"Kuma2.jpeg\" class=\"kuma\">
 <img src=\"Kuma3.jpeg\" class=\"kuma\">
 <img src=\"Kuma4.jpeg\" class=\"kuma1\">
 <img src=\"Kuma5.jpeg\" class=\"kuma1\">`}else{input.value=""}
};

enter.addEventListener("click",() => dogset());
