//for date
function greet(dayOfWeek){
    var greetings = "";

    console.log(dayOfWeek);

    if(dayOfWeek==1){
        greetings = "Whoops, it's Monday!";
    }
    else if(dayOfWeek==2){
        greetings = "Tuesday says Grind";
    }
    else if(dayOfWeek==3){
        greetings = "Cheerful Wednesday";
    }
    else if(dayOfWeek==4){
        greetings = "Awesome Thursday";
    }
    else if(dayOfWeek==5){
        greetings = "Fantastic Friday";
    }
    else if(dayOfWeek==6){
        greetings = "Woohoo it's Saturday!";
    }
    else{
        greetings = "Damn it's SUNDAY!";
    }
    
    return greetings;

}

var date = new Date();
var dayOfWeek = date.getDay();
document.querySelector("h1").innerText = greet(dayOfWeek);

//for appending the list item into bootstrap ul:- 
var listContainer = document.querySelector(".list-group");

//for input Text
var input = document.querySelector("#input");

//to check if input is there or not:-
function getinput(){
    if(input.value!=''){
        return 1;
    }
    else{
        return 0;
    }
}

//to add a new list:-
function createListItem(){

    //if only input is there then only add in list
    if(getinput()){
        var item = document.createElement("li");
        var cross = document.createElement("button");
        var check = document.createElement("input");
        check.type = "checkbox";
        var inputText = document.createTextNode(input.value);

        //add crossing and checking style to button:-
        cross.classList.add("close");
        check.classList.add("check");
        
        cross.addEventListener("click", function(){
            item.style.display = "none";
        });
        check.addEventListener("click", function(){
            item.classList.toggle("checked");
        });
        
        //append to list item and its styling:-
        item.appendChild(inputText);
        item.appendChild(cross);
        item.appendChild(check);
        item.classList.add("list-group-item");

        //append this list item to ul:-
        listContainer.appendChild(item);
    }
}

//adding js to the add button so that it calls function createListItem:-
document.querySelector(".add-btn").addEventListener("click", function(){
    createListItem();
    input.value="";
});

//adding event listener to enter button
document.addEventListener("keypress", function(event){
    if(event.which===13){
        createListItem();
        input.value="";
    }
});



