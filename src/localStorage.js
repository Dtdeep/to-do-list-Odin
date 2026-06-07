import {getAllProjects, getAllToDo,addNewProject,addNewTask} from "./ToDoProject.js";

let projectArray = getAllProjects();
let taskArray = getAllToDo();

const saveProjectArrayToLocalStorage = () =>{
    projectArray = getAllProjects();
    const projectsToSave = projectArray.map((item)=>{
        return {
            projectTitle: item.getProjectTitle,
            projectId: item.getProjectId,
            numberOfToDo : item.getNumberOfToDo
        }
    })
    const projectsToSaveString = JSON.stringify(projectsToSave);
    localStorage.setItem("projectArray",projectsToSaveString);
}

const saveTaskArrayToLocalStorage = () =>{
    taskArray = getAllToDo();
    console.log("tasks to save", taskArray)// for some reason this is late updated?
    const tasksToSave = taskArray.map((item)=>{
        return {
            taskTitle: item.getTitle,
            taskDescription: item.getDescription,
            taskDueDate: item.getDueDate,
            taskPriority: item.getPriority,
            taskProjectIdReference: item.getProjectIdReference,
            taskId: item.getId,
        }
    })
    const tasksToSaveString = JSON.stringify(tasksToSave);
    console.log("Successfully saved: ", tasksToSaveString);
    localStorage.setItem("taskArray", tasksToSaveString);
}

const getProjectArrayFromLocalStorage = () =>{
    const projectLocalArray = localStorage.getItem("projectArray");
    const projectLocalArrayObject = JSON.parse(projectLocalArray);
    if(projectLocalArrayObject){
        projectLocalArrayObject.forEach((item)=>{
            addNewProject(item.projectTitle,item.projectId,item.numberOfToDo);
            console.log("This is the projectId",item.projectId);
        })
    }
}

const getTaskArrayFromLocalStorage = () =>{
    const taskLocalArray = localStorage.getItem("taskArray");
    const taskLocalArrayObject = JSON.parse(taskLocalArray);
    if(taskLocalArrayObject){
            taskLocalArrayObject.forEach((item, index) =>{
            addNewTask(item.taskTitle, item.taskDescription, item.taskDueDate,item.taskPriority,item.taskProjectIdReference,item.taskId);
            console.log("successfully added", index);
        })
    }
    console.log("all Projectss! " ,projectArray)
    console.log("all current tasks! ",taskArray);
}

// create a function to save and get the completed task array;
export {saveProjectArrayToLocalStorage, getProjectArrayFromLocalStorage,saveTaskArrayToLocalStorage, getTaskArrayFromLocalStorage};