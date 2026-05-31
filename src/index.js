import reset from "./comeauReset.css"
import styles from "./styles.css";
import ToDoProject from "./ToDoProject.js";

const content = document.querySelector(".content");
const projectDialog = document.querySelector("#add-project-dialog")

content.addEventListener('click',(event)=>{
    const target = event.target;
    if(target.id == "submit-create-project"){
        projectDialog.close();
        event.preventDefault();
    }
    if(target.closest("#add-task-menu")){
        console.log("Add NEW TASKK!!!");
    }else if(target.closest("#add-project-btn")){
        console.log("Add NEW PROJECT!!!");
    }
})