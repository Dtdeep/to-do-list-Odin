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
            renderAllProjectsToSelectInput(selectProjectInput);
            event.preventDefault();
            break;
        case "submit-create-task":
            const titleInput = "";
            const descriptionInput = "";
            const dueDateInput = "";
            const priorityInput = "";
            const statusInput = "";
            const projectIdReferenceDataset = "";

            const taskTitle = "";
            const taskDescription = "";
            const taskDueDate = "";
            const taskPriority = "";
            const taskStatus = "";
            const taskProjectIdReference = "";
            console.log("baho is mikay");
            event.preventDefault();
            break;
    }
    
    if(target.closest(".project-item-div")){
        console.log(target.closest(".project-item-div").dataset.id);
        renderAllToDosInProject(target.closest(".project-item-div").dataset.id);
    }

    // if(target.closest("#add-task-menu")){
    //     console.log("Add NEW TASKK!!!");
    // }else if(target.closest("#add-project-btn")){
    //     console.log("Add NEW PROJECT!!!");
    // }
})