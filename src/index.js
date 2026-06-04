import reset from "./comeauReset.css"
import styles from "./styles.css";
import * as ToDoProject from "./ToDoProject.js";
import {renderAllProjects, deleteAllChild, renderAllToDosInProject, renderAllProjectsToSelectInput, renderProjectTitleToTaskMain} from "./RenderUi.js";

const content = document.querySelector(".content");
const selectProjectInput = document.querySelector("#select-project-input");
const inputProjectName = document.querySelector("#project-name");
const projectDialog = document.querySelector("#add-project-dialog")
const projectListDiv = document.querySelector("#list-of-projects")
const titleInput = document.querySelector("#task-name");
const descriptionInput = document.querySelector("#task-description");
const dueDateInput = document.querySelector("#task-due-date");
const priorityInput = document.querySelector("#task-priority");
const projectIdReferenceInput = document.querySelector("#select-project-input");
ToDoProject.addNewProject("Default Project");
renderAllProjectsToSelectInput(selectProjectInput);
deleteAllChild(projectListDiv);
renderAllProjects(projectListDiv);

content.addEventListener('click',(event)=>{
    const target = event.target;
    switch(target.id){
        case "submit-create-project":

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
        const taskProjectTitle = document.querySelector(".task-project-title");
        deleteAllChild(ulTasks);
        renderProjectTitleToTaskMain(target.closest(".project-item-div").dataset.id,taskProjectTitle);
        renderAllToDosInProject(target.closest(".project-item-div").dataset.id,ulTasks, taskProjectTitle);
    }

    if(target.closest(".delete-project-button")){
        const idToDelete = target.closest(".delete-project-button").dataset.id;
        const deleteIndex = ToDoProject.getSpecificProjectIndex(idToDelete);
        ToDoProject.deleteSpecificProject(deleteIndex);
        deleteAllChild(projectListDiv);
        renderAllProjects(projectListDiv);
        deleteAllChild(selectProjectInput);
        renderAllProjectsToSelectInput(selectProjectInput);
    }

    if(target.closest(".task-button")){
        console.log("Successfully Completed the task: ", target.closest(".task-button").dataset.id);
        const toDoIndex = ToDoProject.getSpecificToDoIndex(target.closest(".task-button").dataset.id);
        const allToDo = ToDoProject.getAllToDo();
        allToDo[toDoIndex].reverseStatus();
        console.log(allToDo[toDoIndex]);
    }

    if(target.closest(".delete-task-button")){
        console.log("Successfully deleted this task!", target.closest(".delete-task-button").dataset.id);
        ToDoProject.deleteSpecificToDo(target.closest(".delete-task-button").dataset.id);
    }

    // if(target.closest("#add-task-menu")){
    //     console.log("Add NEW TASKK!!!");
    // }else if(target.closest("#add-project-btn")){
    //     console.log("Add NEW PROJECT!!!");
    // }
})