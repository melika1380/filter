const btnAll=document.querySelector(".btn-all");
const btnMenue=document.querySelector(".accordion");
function sweetClick(catg){
  document.querySelectorAll("#store-item > div").forEach((div)=>{
    if(div.classList.contains(catg) ||  typeof catg==="undefined"){
      div.classList.add("show");
    }else{
      div.classList.remove("show");
    }
  })
}

function searchType(event){
  const text=event.target.value.toLowerCase();
   document.querySelectorAll("#store-item > div").forEach((div)=>{
    let title=div.querySelector(".store-item-name").textContent.trim().toLowerCase();
    let searchText=title.search(text);
    console.log(searchText);
   if(searchText==-1){
    div.classList.remove("show");
   }else{
    div.classList.add("show");
   }
  })
}
btnMenue.onclick=function(){
  document.querySelector(".second-menue").classList.toggle("second-menue-show");
  document.querySelector(".second-menue-show").style.transition = "all 2s";
}