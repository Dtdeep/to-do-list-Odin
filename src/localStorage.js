import {getAllProjects, getAllToDo,getAllCompletedArray,addNewProject,addNewTask,addNewCompletedTask} from "./ToDoProject.js";

const saveProjectArrayToLocalStorage = () =>{
    const projectArray = getAllProjects();
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
    const taskArray = getAllToDo();
    console.log("tasks to save", taskArray)// for some reason this is late updated?
    const tasksToSave = taskArray.map((item)=>{
        return {
            taskTitle: item.getTitle,
            taskDescription: item.getDescription,
            taskDueDate: item.getDueDate,
            taskPriority: item.getPriority,
            taskProjectIdReference: item.getProjectIdReference,
        }
    });
    const tasksToSaveString = JSON.stringify(tasksToSave);
    console.log("Successfully saved: ", tasksToSaveString);
    localStorage.setItem("taskArray", tasksToSaveString);
}

const saveCompletedArrayToLocalStorage = () =>{
    const completedArray = getAllCompletedArray();
    const completedTasksToSave = completedArray.map((item)=>{
        return {
            taskTitle: item.getTitle,
            taskDescription: item.getDescription,
            taskDueDate: item.getDueDate,
            taskPriority: item.getPriority,
            taskProjectIdReference: item.getProjectIdReference,
            taskStatus: item.getStatus,
        }
    });
    // console.log("Completed Array: ", completedArray);
    const completedTasksToSaveString = JSON.stringify(completedTasksToSave);
    // console.log("completed to save", completedTasksToSaveString);
    localStorage.setItem("completedTasksArray", completedTasksToSaveString);
};

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
            taskLocalArrayObject.forEach((item) =>{
            addNewTask(item.taskTitle, item.taskDescription, item.taskDueDate,item.taskPriority,item.taskProjectIdReference);
        })
    }
}

const getCompletedArrayFromLocalStorage = () =>{
    const completedLocalArray = localStorage.getItem("completedTasksArray");
    const completedLocalArrayObject = JSON.parse(completedLocalArray);
    if(completedLocalArrayObject){
        completedLocalArrayObject.forEach((item)=>{
            addNewCompletedTask(item.taskTitle, item.taskDescription, item.taskDueDate,item.taskPriority,item.taskProjectIdReference,item.taskStatus);
        })
    }
}


// create a function to save and get the completed task array;
export {saveProjectArrayToLocalStorage, getProjectArrayFromLocalStorage,saveTaskArrayToLocalStorage, getTaskArrayFromLocalStorage, saveCompletedArrayToLocalStorage,getCompletedArrayFromLocalStorage};