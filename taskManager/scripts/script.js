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
    let task = JSON.parse(res);
    myTasks.push(task);


    // display the task
    displayTask(res);
},
    error:function(eDetails){
    console.error("Error saving", eDetails);
}

    });

   
    displayTask(task);    
}

function displayTask(task) {

    let syntax = 
    `<div id="${task._id}" class="task"> 
        <i class='important fas fa-star'></i>
        <div class="description">
            <h5>${task.title}</h5>
            <p>${task.description}</p>
        </div> 
        <label class="due-date">${task.dueDate}</label>
        <label class="location">${task.location}</label>`;

    if(task.status == 1) {
        syntax += `<button onclick="doneTask('${task._id}')" class="btn btn-sm btn-primary">Done</button></div>`;
        $("#pendingList").append(syntax);
    }
    else if(task.status == 2) {
        syntax += `<button onclick="removeTask('${task._id}')" class="btn btn-sm btn-danger">Remove</button></div>`;
        $("#doneList").append(syntax);
    }
}
    if(task.status == 1) {
        $("#pendingList").append(syntax);
    }
    else if (task.status == 2) {
        $("#doneList").append(syntax);
    }
}

    function deleteTask(id){
        console.log("Deleting task",id);
    }

function fetchTasks(){
    $.ajax({
        type: 'GET',
        url:serverUrl + "api/tasks",
        success:function(res){
            let data = JSON.parse(res);
            var data = JSON.parse(res);
            
            for(let i=0; i<data.length; i++){
                let task = data[i];
                // Filter array to get only your tasks
                if(task.name === "Reese"){
                displayTask(task);
            }

        }
    }     
    });
}

function init(){
    console.log("My Task Manager");

    // load data
    fetchTasks();

    // hook events
    $("#iImportant").click(toggleImportant);
    $("#btnSave").click(saveTask);
}

function deleteTask(task){
    let syntax
}

function doneTask(id){
    //get the object
    console.log("Marking done task", id);

    for(let id = 0; i< myTasks.length; i++){
        let task = myTasks[i];
        if(myTasks[i]._id == id){
            console.log(task.title);

            task.status = 2;

            $.ajax({
                url:serverUrl + "api/tasks",
                type: "PUT",
                data: JSON.stringify(task),
                contentType:'application/json',
                success: function
            })
        }
    }
}

for(let i=0; i<data.length;i++){
    let task =data[i];
    //Filter array to get only your tasks
    if(task.name === "Reese"){

    }
}


window.onload = init;

