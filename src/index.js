import reset from "./comeauReset.css"
import styles from "./styles.css";
import * as ToDoProject from "./ToDoProject.js";
import {renderAllProjects, deleteAllChild} from "./RenderUi.js";

const content = document.querySelector(".content");
const projectDialog = document.querySelector("#add-project-dialog")
const inputProjectName = document.querySelector("#project-name");
const projectListDiv = document.querySelector("#list-of-projects")

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
            event.preventDefault();
            break;
    }
})