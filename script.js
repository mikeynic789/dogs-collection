const input=document.querySelector(".user-input");
const enter=document.querySelector(".enter");
const select=document.querySelector(".select")
const photos=document.querySelector(".photo-container")
function dogset() {
    if (input.value=="holycannoli") {
	select.innerHTML="<select class=\"selector\"><option class=\"all\">all</option>><option class=\"hershey\">Hershey</option>><option class=\"cannoli\">Cannoli</option>><option class=\"kuma\">Kuma</option>";
	photos.innerHTML="<img src=\"cano1.jpeg\" class=\"cano\">"}else{input.value=""}
};

enter.addEventListener("click",() => dogset());
