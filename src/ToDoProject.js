import ToDo from "./ToDo.js";
import Project from "./Project.js";

let projectArray = [];
let toDoArray = [];
let completedArray = []; 
let tasksToBeMoved = [];

const addNewTask = (title,description,dueDate,priority,projectIdReference) =>{
    const newTask = new ToDo(title,description,dueDate,priority,projectIdReference,status);
    toDoArray.push(newTask);
}

const addNewProject = (projectTitle, projectId, numberOfToDo) =>{
    const newProject = new Project(projectTitle,projectId,numberOfToDo);
    projectArray.push(newProject);
}

const addNewCompletedTask = (title,description,dueDate,priority,projectIdReference,status) =>{
    const newCompletedTask = new ToDo(title,description,dueDate,priority,projectIdReference,status);
    completedArray.push(newCompletedTask);
}

const getAllProjects = () =>{
    return projectArray;
}

const getAllToDo = () =>{
    return toDoArray;
}

const getAllCompletedArray = () =>{
    return completedArray;
}

const getSpecificProjectIndex = (projectId) =>{
    return projectArray.findIndex((projectItem)=>{
        return projectItem.getProjectId == projectId;
    });
}

const getSpecificToDoIndex = (toDoId) =>{
    return toDoArray.findIndex((toDoItem)=>{
        return toDoItem.getId == toDoId;
    })
}

const getSpecificCompletedIndex = (toDoId) =>{
    return completedArray.findIndex((toDoItem)=>{
        return toDoItem.getId == toDoId;
    })
}

const deleteSpecificToDo = (toDoId) =>{
    const toDoIndex = getSpecificToDoIndex(toDoId);
    toDoArray.splice(toDoIndex, 1);
}

const deleteSpecificProject = (projectIndex) =>{
    if(projectArray.length <= 1){
        console.log("There should always be one Project at all times");
    }else{
        projectArray.splice(projectIndex,1);
    }
}

const moveAllCompletedToCompleteArray = () =>{
    tasksToBeMoved = [];
    const newToDo = toDoArray.filter((item, index)=>{
        if(item.getStatus == true){
            tasksToBeMoved.push(item);
        }else{
            return item;
        }
    });
    completedArray = completedArray.concat(tasksToBeMoved);
    toDoArray = newToDo;
    console.log("after ",toDoArray);
}

const moveCompletedArrayToDoArray = () =>{
    tasksToBeMoved = [];
    const newCompletedToDo = completedArray.filter((item, index)=>{
        if(item.getStatus == false){
            tasksToBeMoved.push(item);
        }else{
            return item;
        }
    });
    toDoArray = toDoArray.concat(tasksToBeMoved);
    completedArray = newCompletedToDo;
    console.log("needs to be moved: ",tasksToBeMoved);
    console.log("The new completed: ", completedArray);
    console.log("The whole tasks",toDoArray);
}

export {addNewTask, addNewProject, addNewCompletedTask,getAllProjects, getAllToDo, getSpecificProjectIndex, getSpecificToDoIndex, deleteSpecificToDo, deleteSpecificProject, moveAllCompletedToCompleteArray, getAllCompletedArray, getSpecificCompletedIndex, moveCompletedArrayToDoArray};