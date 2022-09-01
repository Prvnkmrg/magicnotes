console.log("hello God");
shownote();
let addbtn=document.getElementById("addbtn");
addbtn.addEventListener("click",function(e){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        noteobj=[];
    }else{
        noteobj=JSON.parse(notes);

    }
    noteobj.push(addtxt.value);
    localStorage.setItem("notes",JSON.stringify(noteobj));
    addtxt.value="";
    shownote();
});

function shownote() {
    
    let notes=localStorage.getItem("notes");
    if(notes==null){
        noteobj=[];
    }else{
        noteobj=JSON.parse(notes);
    }
    let html="";
    noteobj.forEach(function(element,index){
     html+=`<div class="max my-3 mx-3" id="pavan">
     <h3 class="manu">your note ${index} </h3><hr>
     <p class="my-1 mx-2 " style="color:rgb(11, 11, 150);">${element}</p>
     <button type="submit"  id="${index}"  onclick="deleter(this.id)"  class="btn-primary guru">delete </button>
  </div>`
  
 });
//  console.log(html);
 let nn=document.getElementById("row");
//  console.log(nn);
 if(noteobj.length!=0){
    nn.innerHTML=html;
 }else{
    nn.innerHTML="<p>Oops! you did not anything</p>"
 }
}

function deleter(index) {
    console.log(index,"ur are do id");
    let notes=localStorage.getItem("notes");
    if(notes==null){
        noteobj=[];
    }else{
        noteobj=JSON.parse(notes);
    }
    noteobj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(noteobj));
    shownote();
}

let searchtxt=document.getElementById('searchtxt');
searchtxt.addEventListener("input",function(){
let pavan=document.getElementsByClassName("max");
Array.from(pavan).forEach(function(element){
   elementaa=element.getElementsByTagName('p')[0].innerText;
    console.log(elementaa);

    if(elementaa.includes(searchtxt.value)){
        element.style.display="block";
    }else{
        element.style.display="none";
    }
})
// console.log(pavan);
})