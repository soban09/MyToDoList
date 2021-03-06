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

        //li children :- span, cross, check
        var span = document.createElement("span");
        var inputText = document.createTextNode(input.value);
        var cross = document.createElement("button");
        var check = document.createElement("input");
        check.type = "checkbox";

        //add crossing and checking style to button:-
        cross.classList.add("close");
        check.classList.add("check");
        
        cross.addEventListener("click", function(){
            item.classList.add("removed");
        });
        check.addEventListener("click", function(){
            item.classList.toggle("checked");
            span.classList.toggle("checked");
        });

        //for animation
        item.addEventListener("transitionend", function(){
            item.remove();
        });
        
        //append to list item and its styling:-
        //appending in order check span and then cross
        span.appendChild(inputText);
        item.appendChild(check);
        item.appendChild(span);
        item.appendChild(cross);
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



