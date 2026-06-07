import reset from "./comeauReset.css"
import styles from "./styles.css";
import * as ToDoProject from "./ToDoProject.js";
import {renderAllProjects, deleteAllChild, renderAllToDosInProject, renderAllProjectsToSelectInput, renderProjectTitleToTaskMain,createTaskToEditTask,editTaskToCreateTask, projectEditorElement} from "./RenderUi.js";
import {saveProjectArrayToLocalStorage, getProjectArrayFromLocalStorage,saveTaskArrayToLocalStorage, getTaskArrayFromLocalStorage, saveCompletedArrayToLocalStorage,getCompletedArrayFromLocalStorage} from "./localStorage.js";

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
const addTaskDialog = document.querySelector("#add-task-dialog");
const submitCreateTask = document.querySelector("#submit-create-task");
const ulTasks = document.querySelector(".ul-tasks");
const taskProjectTitle = document.querySelector(".task-project-title");

getProjectArrayFromLocalStorage();
getTaskArrayFromLocalStorage();
getCompletedArrayFromLocalStorage();
if(ToDoProject.getAllProjects().length < 1){
    ToDoProject.addNewProject("Default Project");
    console.log("No projects exists, add default project")
}
let CURRENTPROJECTID = ToDoProject.getAllProjects()[0].getProjectId;
renderProjectTitleToTaskMain(CURRENTPROJECTID,taskProjectTitle)
renderAllProjectsToSelectInput(selectProjectInput);
deleteAllChild(projectListDiv);
renderAllProjects(projectListDiv);
deleteAllChild(ulTasks);
renderAllToDosInProject(CURRENTPROJECTID,ulTasks, taskProjectTitle);

content.addEventListener('click',(event)=>{
    const target = event.target;
    switch(target.id){
        case "submit-create-project":
            const projectName = inputProjectName.value;
            if (!projectName) {
                break;
            }
            ToDoProject.addNewProject(projectName);
            projectDialog.close();
            deleteAllChild(projectListDiv);
            renderAllProjects(projectListDiv);
            inputProjectName.value = "";
            deleteAllChild(selectProjectInput);
            renderAllProjectsToSelectInput(selectProjectInput);
            saveProjectArrayToLocalStorage();
            event.preventDefault();
            break;
        case "submit-create-task":
            const taskTitle = titleInput.value;
            const taskDescription = descriptionInput.value;
            const taskDueDate = dueDateInput.value;
            const taskPriority = priorityInput.value;
            const taskProjectIdReference = projectIdReferenceInput.value;
            if (!taskTitle) {
                break;
            }
            ToDoProject.addNewTask(taskTitle,taskDescription,taskDueDate,taskPriority,taskProjectIdReference);
            deleteAllChild(ulTasks);
            renderAllToDosInProject(CURRENTPROJECTID,ulTasks, taskProjectTitle);
            saveTaskArrayToLocalStorage();
            event.preventDefault();
            break;
        case "submit-edit-task":
            console.log("Successfully Edited");
            const toDoId = target.dataset.id;
            const allToDo = ToDoProject.getAllToDo();
            const editIndex = ToDoProject.getSpecificToDoIndex(toDoId);
            const taskObject = allToDo[editIndex];
            console.log(taskObject);
            taskObject.setTitle = titleInput.value;
            taskObject.setDescription = descriptionInput.value;
            taskObject.setDueDate = dueDateInput.value;
            taskObject.setPriority = priorityInput.value;
            taskObject.setProjectIdReference = projectIdReferenceInput.value;
            deleteAllChild(ulTasks);
            renderAllToDosInProject(CURRENTPROJECTID,ulTasks, taskProjectTitle);
            saveTaskArrayToLocalStorage();
            event.preventDefault();
            break;
    }
    
    if(target.closest(".project-item-div")){
        CURRENTPROJECTID = target.closest(".project-item-div").parentElement.dataset.id;
        deleteAllChild(ulTasks);
        renderProjectTitleToTaskMain(target.closest(".project-item-div").parentElement.dataset.id,taskProjectTitle);
        renderAllToDosInProject(target.closest(".project-item-div").parentElement.dataset.id,ulTasks, taskProjectTitle);
    }

    if(target.closest(".delete-project-button")){
        const idToDelete = target.closest(".delete-project-button").parentElement.dataset.id;
        const deleteIndex = ToDoProject.getSpecificProjectIndex(idToDelete);
        ToDoProject.deleteSpecificProject(deleteIndex);
        deleteAllChild(projectListDiv);
        renderAllProjects(projectListDiv);
        deleteAllChild(selectProjectInput);
        renderAllProjectsToSelectInput(selectProjectInput);
        saveProjectArrayToLocalStorage();
    }

    if(target.closest(".task-button")){
        const allToDo = ToDoProject.getAllToDo();
        const toDoIndex = ToDoProject.getSpecificToDoIndex(target.closest(".task-button").parentElement.dataset.id);

        const allCompleted = ToDoProject.getAllCompletedArray();
        const completedIndex = ToDoProject.getSpecificCompletedIndex(target.closest(".task-button").parentElement.dataset.id);
        if(toDoIndex != -1){
            console.log("Successfully Completed the task");
            allToDo[toDoIndex].reverseStatus();
            console.log("before ",allToDo);
            ToDoProject.moveAllCompletedToCompleteArray();
            console.log("after2: ", allToDo);
        }

        if(completedIndex != -1){
            console.log("Successfully reverted the task")
            allCompleted[completedIndex].reverseStatus();
            ToDoProject.moveCompletedArrayToDoArray();
        }
        deleteAllChild(ulTasks);
        renderAllToDosInProject(CURRENTPROJECTID,ulTasks, taskProjectTitle);
        saveTaskArrayToLocalStorage();
        saveCompletedArrayToLocalStorage();
    }

    if(target.closest(".delete-task-button")){
        console.log("Successfully deleted this task!", target.closest(".delete-task-button").dataset.id);
        ToDoProject.deleteSpecificToDo(target.closest(".delete-task-button").parentElement.dataset.id);
        deleteAllChild(ulTasks);
        renderAllToDosInProject(CURRENTPROJECTID,ulTasks, taskProjectTitle);
        saveTaskArrayToLocalStorage();
    }

    if(target.closest(".edit-project-button")){
       const parentElement = target.closest(".edit-project-button").parentElement;
       const projectId = parentElement.dataset.id;
       const allProjects = ToDoProject.getAllProjects();
       const index = ToDoProject.getSpecificProjectIndex(projectId);
       projectEditorElement(parentElement, allProjects[index].getProjectTitle);
       //just rerender all projects once the user chooses to click the save project edit button
    }
    
    if(target.closest(".task-content")){
        const taskId = target.closest(".task-content").parentElement.dataset.id;
        console.log("edit!");
        createTaskToEditTask(submitCreateTask);
        submitCreateTask.dataset.id = taskId;

        const allToDo = ToDoProject.getAllToDo();
        const editIndex = ToDoProject.getSpecificToDoIndex(taskId);
        const taskObject = allToDo[editIndex];

        titleInput.value = taskObject.getTitle;
        descriptionInput.value = taskObject.getDescription;
        dueDateInput.value = taskObject.getDueDate;
        priorityInput.value = taskObject.getPriority;
        projectIdReferenceInput.value = taskObject.getProjectIdReference;
        addTaskDialog.showModal();
    }

    if(target.closest(".save-edit-project-button")){
        const parentElement = target.closest(".save-edit-project-button").parentElement;
        const editInputProjectElement = parentElement.querySelector(".edit-project-title-input");

        const projectId = parentElement.dataset.id;
        const allProjects = ToDoProject.getAllProjects();
        const index = ToDoProject.getSpecificProjectIndex(projectId);
        allProjects[index].setProjectTitle = editInputProjectElement.value;
        deleteAllChild(projectListDiv);
        renderAllProjects(projectListDiv);
        deleteAllChild(selectProjectInput);
        renderAllProjectsToSelectInput(selectProjectInput);
        renderProjectTitleToTaskMain(CURRENTPROJECTID,taskProjectTitle);
        saveProjectArrayToLocalStorage();
    }

    if(target.closest("#completed-tasks-div")){
        console.log("Completed Tasks!");
        CURRENTPROJECTID = "Completed Task";
        deleteAllChild(ulTasks);
        renderProjectTitleToTaskMain(CURRENTPROJECTID,taskProjectTitle);
        renderAllToDosInProject(CURRENTPROJECTID, ulTasks);
    }

    if(target.closest("#add-task-menu")){
         editTaskToCreateTask(submitCreateTask);
    }
})