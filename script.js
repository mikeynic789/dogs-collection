const input=document.querySelector(".user-input");
const enter=document.querySelector(".enter");
const select=document.querySelector(".select")
const photos=document.querySelector(".photo-container")
function dogset() {
    if (input.value=="holycannoli") {
        select.innerHTML=`<select class=\"selector\"><option class=\"all\">all</option>><option class=\"hershey\">Hershey</option><option class=\"cannoli\">Cannoli</option><option class=\"kuma\">Kuma</option>`;
        photos.innerHTML=`<img src=\"cano1.jpeg\" class=\"cano\"><img src=\"cano2.jpeg\" class=\"cano1\"><img src=\"cano3.jpeg\"\
 class=\"cano\"><img src=\"cano4.jpeg\" class=\"cano\"><img src=\"cano5.jpeg\" class=\"cano\">
 <img src=\"Kuma1.jpeg\" class=\"kuma\">
 <img src=\"Kuma2.jpeg\" class=\"kuma\">
 <img src=\"Kuma3.jpeg\" class=\"kuma\">
 <img src=\"Kuma4.jpeg\" class=\"kuma\">
 <img src=\"Kuma5.jpeg\" class=\"kuma\">`}else{input.value=""}
};

enter.addEventListener("click",() => dogset());
