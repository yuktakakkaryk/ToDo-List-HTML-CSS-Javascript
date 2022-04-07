window.addEventListener('load', (event) => {
    event.preventDefault();
    
    let addTaskBtn = document.getElementById("input_button");
    let inputText = document.getElementById("input_text");
    let list = document.getElementById("list");
    
    addTaskBtn.addEventListener('click', () => {
        let inputTask = inputText.value;

        let task = document.createElement("div");
        task.classList.add("task");

        let content = document.createElement("div");
        content.classList.add("content");

        let list_text = document.createElement("input");
        list_text.classList.add("list_text");
        list_text.style.color = "grey";

        let actions = document.createElement("div");
        actions.classList.add("actions");

        let editButton = document.createElement("button");
        editButton.classList.add("edit");

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");

        list_text.value = inputTask;
        list_text.setAttribute('readonly', true);

        content.appendChild(list_text);
        
        editButton.innerHTML = "Edit";
        deleteButton.innerHTML = "Delete";

        actions.appendChild(editButton);
        actions.appendChild(deleteButton);

        task.appendChild(list_text);
        task.appendChild(actions);

        list.appendChild(task);

        editButton.addEventListener('click', () =>{
            if(editButton.innerHTML.toLowerCase() == "edit"){
                list_text.style.color = "black";
                list_text.removeAttribute("readonly");
                list_text.focus();
                editButton.innerHTML = "Save";
            }
            else{
                list_text.setAttribute("readonly", true);
                list_text.style.color = "grey";
                editButton.innerHTML = "Edit";
            }
        })

        deleteButton.addEventListener('click', () =>{
            task.remove();
        })
    })
})
