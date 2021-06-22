function getHelloMessage(name){
    //do the magic
    return "hello" + name + ",how is it going?";
}

function sum(num1, num2){
    return num1+num2;
}

//classes
class Car{
    constructor(make,model,year){
        this.make=make;
        this.model=model;
        this.year=year;
        this.owner="student";
    }
}

function testClass(){
    let c1 = new Car("Form","A","1934");
    console.log(c1);
}

// this is an object contructor

function Dog(name,age,color){
    this.name=name;
    this.age=age;
    this.color=color;
    this.owner="Sergio";
}

function createObjects(){
    // object literal
    let data = {
        name:'Test1',
        speed:111,
        color:"Red",
        size:12
    };

    console.log(data);

    // object contructor
    let fido = new Dog("Fido",2,'white');
    console.log(fido);

    let lola = new Dog("Lola",4,'pink');
    console.log(lola);

}

    function divide(num1, num2){
        if(num2==0){
            console.log("Error: Division by zero its not allowed!");
            return 0;
        }
        return num1/num2;
    }

    function runTests(){
        console.log("Starting the tests");

        let message=getHelloMessage("Reese");
        console.log(message);

        let result = sum(12,49);
        console.log("The result is: "+result);
    }
function testArrays(){
let nums = [1,123,543,3,3456,5678,234,4567,789,234];

    let total = 0;
    for(let i=0; i <nums.length;i++){
        let total = 0;
        total += nums[i];
    }
    console.log("Total:",total);
    }

function doneTask(id){
    // get the object
    for(let i = 0; i< myTasks.length; i++){
        let task = myTasks[i];
        if(task._id == id){
            task.status = 2;

            $.ajax({
                url:serverUrl+"api/tasks",
                type:"PUT",
                data: JSON.stringify(task),
                contentType: 'application/json',
            });
        }
    }
}

function fetchTasks(){
    $.ajax({
        type:'GET',
        url: serverUrl + "api/tasks",
        success:function(res){
            let data=JSON.parse(res);

            for(let i=0;i<data.length;i++){
                let task=data[i];
                // filter array to get only your tasks
                if(task.name ==="Reese"){
                    myTasks.push(task);
                    displayTask(task);
                }
            }
        },
        error:function(err){
            console.log("Error getting data, err");
        }
    });
}