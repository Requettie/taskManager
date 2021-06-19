var important = false;
var serverUrl = "https://fsdiapi.azurewebsites.net";

function toggleImportant(){
    if(!important){
        important=true;
        $("#iImportant").removeClass("far").addClass("fas");
    }
    else{
        important=false;
        $("#iImportant").removeClass("fas").addClass("far");
    }
}

function saveTask(){
    let title = $("#txtTitle").val();
    let category = $("#selCategory").val();
    let description = $("#txtDescription").val();
    let location = $("#txtLocation").val();
    let dueDate = $("#txtDueDate").val();
    let color = $("#txtColor").val();

    let task = new Task(title, important, category, description, location, dueDate, color);
    console.log(task);
    console.log(JSON.stringify(task));

    //send object to a backend

    $.ajax({
url:serverUrl+"api/tasks",
type:'POST',
data:JSON.stringify(task),
contentType:"application/json",
success:function(res){
    console.log("Server says:",res);
},
error:function(eDetails){
    console.error("Error saving", eDetails);
}

    })

    //display the task
    displayTask(task);    
}

function displayTask(task){
    let syntax = `<div class="task>
        <i class='important fas fa-star'></i>
        <div class="description">
            <h5>${task.title}</h5>
            <p>${task.description}</p>
        </div>
        <label class="due-date">${task.dueDate}</label>
        <label class="location">${task.location}</label>
    </div>
    `;

    $("#pendingList").append(syntax);
}

function init(){
    console.log("My Task Manager");

    // load data

    // hook events
    $("#iImportant").click(toggleImportant);
    $("#btnSave").click(saveTask);
}

window.onload = init;