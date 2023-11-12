
//using the DOM to get class elemnts
const inputbox = document.getElementById("input-box")
const ulel = document.getElementById("ul-el")

const todobtn = document.getElementById("btn")

//add function to the add button
todobtn.addEventListener("click", function(){
    if(inputbox.value === ''){
        alert("You must write something!");
    }else{
        let li = document.createElement("li")
        li.textContent = inputbox.value;
        ulel.appendChild(li);
        let span = document.createElement("span")

// the X button for cancelling out a task
        span.textContent = "\u00d7";
        li.appendChild(span);
    }
   
     inputbox.value ="";
     savedtask()

})

// to get a task checked and crossed out then delete
ulel.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedtask()

    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedtask()
    }
},false)


function savedtask(){
    localStorage.setItem("savedtask", ulel.innerHTML);
}



function showtask(){
    ulel.innerHTML  = localStorage.getItem("savedtask")
}

showtask()