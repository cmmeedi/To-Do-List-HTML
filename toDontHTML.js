let toDont = [
    `First Task`,
    `Second Task`,
];

//This function adds a task to the array
function addTask(){
    //Starting by getting the input the user entered in and creating a variable out of it
    let task = document.getElementById(`thisTask`).value;

    //Then adding that variable to the array
    toDont.push(task);
    //Logging it in the console for testing purposes
    console.log(toDont);

    //Calling the clear list method will prevent duplicate tasks from populating the screen.  The list gets cleared and then displayList() repopulates the screen with the array once again
    clearList();
    //Then calling the displayList() function
    displayList();

    //Return false so the page doesn't refresh on the button push.  Only the list will refresh
    return false;
}

        //Create a variable of the div the contents will be displayed in
        let display = document.getElementById(`display`);
        //Set an id to it
        display.setAttribute(`id`, `listOfTasks`);

//The display list function
function displayList(){
   
        //create an element of the ordered list
        let taskList = document.createElement(`ol`);
        //add an id to it
        taskList.setAttribute(`id`, `taskList`);
        //and the bootstrap class
        taskList.setAttribute(`class`, `list-group`);
        //then add the list to the div
        display.append(taskList);

    //A loop to iterate through all of the elements within the toDont[] array
    for(let i = 0; i < toDont.length; i++){
        //Here is all the list item stuff
        //The li item gets created
        let task1 = document.createElement(`li`);
        //li item id is set to the index of the array
        task1.setAttribute(`id`, `${toDont[i] + [i]}`)
        //A bootstrap class gets assigned to the li element
        task1.setAttribute(`class`, `list-group-item display-6`);
        //Then gets the array index string added to it
        task1.append(`${toDont[i]}`);
        //then appeded to the ol
        taskList.append(task1);

        //Here is all the button Stuff
        //This is the creation of the button element
        let delBtn = document.createElement(`button`);
        //Then the button gets the text `Delete`
        delBtn.append(`Delete`);
        //The button gets a type of button
        delBtn.setAttribute(`type`, `button`);
        //The bootstrap class
        delBtn.setAttribute(`class`, `btn btn-primary btn-sm mb-2 ms-2`);
        delBtn.setAttribute(`onClick`, `deleteTask()`);
        //id of button is set to the index of the array
        delBtn.setAttribute(`id`, `${[i]}`)
        //And then it's appended to the li element
        delBtn.setAttribute(`value`, `item-${i}`)
        task1.append(delBtn);
    }
}

function clearList(){

    //By using jQueries .remove() function the app is able to clear the HTML ol element with the id #taskList
    $(`ol#taskList`).remove();
    
}

function deleteTask(){

}