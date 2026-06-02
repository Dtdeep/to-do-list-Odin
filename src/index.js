import reset from "./comeauReset.css"
import styles from "./styles.css";
import * as ToDoProject from "./ToDoProject.js";
import {renderAllProjects, deleteAllChild, renderAllToDosInProject, renderAllProjectsToSelectInput} from "./RenderUi.js";

const content = document.querySelector(".content");
const selectProjectInput = document.querySelector("#select-project-input");
renderAllProjectsToSelectInput(selectProjectInput);


content.addEventListener('click',(event)=>{
    const target = event.target;
    switch(target.id){
        case "submit-create-project":
            const inputProjectName = document.querySelector("#project-name");
            const projectDialog = document.querySelector("#add-project-dialog")
            const projectListDiv = document.querySelector("#list-of-projects")
            const projectName = inputProjectName.value;
            ToDoProject.addNewProject(projectName);
            projectDialog.close();
            deleteAllChild(projectListDiv);
            renderAllProjects(projectListDiv);
            inputProjectName.value = "";
            deleteAllChild(selectProjectInput);
            renderAllProjectsToSelectInput(selectProjectInput);
            event.preventDefault();
            break;
        case "submit-create-task":
            const titleInput = document.querySelector("#task-name");
            const descriptionInput = document.querySelector("#task-description");
            const dueDateInput = document.querySelector("#task-due-date");
            const priorityInput = document.querySelector("#task-priority");
            const projectIdReferenceInput = document.querySelector("#select-project-input");

            const taskTitle = titleInput.value;
            const taskDescription = descriptionInput.value;
            const taskDueDate = dueDateInput.value;
            const taskPriority = priorityInput.value;
            const taskProjectIdReference = projectIdReferenceInput.value;

            ToDoProject.addNewTask(taskTitle,taskDescription,taskDueDate,taskPriority,taskProjectIdReference);

            console.log(ToDoProject.getAllToDo());
            event.preventDefault();
            break;
    }
    
    if(target.closest(".project-item-div")){
        const ulTasks = document.querySelector(".ul-tasks");
        console.log(target.closest(".project-item-div").dataset.id);
        deleteAllChild(ulTasks);
        renderAllToDosInProject(target.closest(".project-item-div").dataset.id,ulTasks);
    }

    // if(target.closest("#add-task-menu")){
    //     console.log("Add NEW TASKK!!!");
    // }else if(target.closest("#add-project-btn")){
    //     console.log("Add NEW PROJECT!!!");
    // }
})