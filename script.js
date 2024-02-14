//Step 1: Create a new list item when clicking on the "Add" button
function addData(){
    let input = document.getElementById("myInput").value;
    let li = document.createElement("li");
    let task = document.createTextNode(input);
    li.appendChild(task);
    
    if (input === '') {
      alert("You must write something!");
    } else {
      document.getElementById("ul").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    let delBtn = document.createElement("button");
    let txt = document.createTextNode("\u00D7");
    delBtn.className = "close";
    delBtn.appendChild(txt);
    li.appendChild(delBtn);
    
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}

//Step 2: Create a "close" button and append it to each list item
function addRemoveBtn(){
    let taskList = document.getElementsByTagName("LI");
    for (i = 0; i < taskList.length; i++) {
      let delBtn = document.createElement("button");
      let txt = document.createTextNode("\u00D7");
      delBtn.className = "close";
      delBtn.appendChild(txt);
      taskList[i].appendChild(delBtn);
    } 
}    

//Step 3: Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function removeData(){
    let div = this.parentElement;
    div.style.display = "none";
  }
}

//Step 4: Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
