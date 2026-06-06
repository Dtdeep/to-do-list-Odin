import ToDo from "./ToDo.js";
import Project from "./Project.js";

let projectArray = [];
let toDoArray = [];
let completedArray = []; 
let tasksToBeMoved = [];

const saveProjectArrayToLocalStorage = () =>{
    const projectsToSave = projectArray.map((item)=>{
        return {
            projectId: item.getProjectId,
            projectTitle: item.getProjectTitle,
            numberOfToDo : item.getNumberOfToDo
        }
    })
    const projectArrayString = JSON.stringify(projectsToSave);
    localStorage.setItem("projectArray",projectArrayString);
}

const getProjectArrayFromLocalStorage = () =>{
    const projectLocalArray = localStorage.getItem("projectArray");
    const projectLocalArrayObject = JSON.parse(projectLocalArray);
    projectLocalArrayObject.forEach((item)=>{
        addNewProject(item.projectTitle,item.projectId,item.numberOfToDo);
    })
    console.log("current projects: ",projectArray);
}

const addNewTask = (title,description,dueDate,priority,status,projectIdReference) =>{
    const newTask = new ToDo(title,description,dueDate,priority,status,projectIdReference);
    toDoArray.push(newTask);
}

const addNewProject = (projectTitle) =>{
    const newProject = new Project(projectTitle);
    projectArray.push(newProject);
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

export {addNewTask, addNewProject, getAllProjects, getAllToDo, getSpecificProjectIndex, getSpecificToDoIndex, deleteSpecificToDo, deleteSpecificProject, moveAllCompletedToCompleteArray, getAllCompletedArray, getSpecificCompletedIndex, moveCompletedArrayToDoArray, saveProjectArrayToLocalStorage, getProjectArrayFromLocalStorage};