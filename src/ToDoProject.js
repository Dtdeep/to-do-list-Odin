import ToDo from "./ToDo.js";
import Project from "./Project.js";

let projectArray = [];
let toDoArray = [];

const addNewTask = (title,description,dueDate,priority,status,projectIdReference) =>{
    const newTask = new ToDo(title,description,dueDate,priority,status,projectIdReference);
    toDoArray.push(newTask);
}

const addNewProject = (projectTitle) =>{
    const newProject = new Project(projectTitle);
    projectArray.push(newProject);
}

// const getAllCompleted = () =>{
//     const completedArray = toDoArray.filter((item,index)=>{
//         if(item.getStatus == true){
//             indexToBeDeleted.push(index);
//             return item;
//         }
//     })
//     for(let i = 0; i < indexToBeDeleted.length; i++){
//         toDoArray.splice(indexToBeDeleted[i], 1);
//     }
//     return completedArray;
// }

// const deleteAllCompletedTask = () =>{
//     toDoArray.forEach((item) =>{
//         if(item.getStatus == true){

//         }
//     })
// }

const getAllProjects = () =>{
    return projectArray;
}

const getAllToDo = () =>{
    return toDoArray;
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

// const deleteProject = (projectId) =>{
//     const allProjects = ToDoProject.getAllProjects();
//     const deleteIndex = allProjects.findIndex((item)=>{
//         return item.getProjectId == projectId;
//     });
//     allProjects.splice(deleteIndex,1);
// }

// addNewProject("Mikay Project");
// addNewProject("Baho Project");

// addNewTask("Feed Pets", "IDK some random descriptions", "march 2025","1","Completed", projectArray[0].getProjectId);
// addNewTask("randomTask", "IDK some random descriptions", "april 2026","2","Ongoing", projectArray[0].getProjectId);
// addNewTask("randomTaskDawg", "CATIDK some random descriptions", "april 2026","2","Ongoing");


// const indexOfProject = getSpecificProjectIndex(projectArray[0].getProjectId);
// const project = getAllProjects()[indexOfProject];
// project.setProjectTitle = "Letchon Project";
// getAllProjects()[indexOfProject].incrementNumberOfToDo();
// getAllProjects()[indexOfProject].incrementNumberOfToDo();

// const indexOfToDo = getSpecificToDoIndex(toDoArray[0].getId);
// const getTheTodo = getAllToDo()[indexOfToDo];
// getTheTodo.setTitle = "Letchon Mikay";
// getTheTodo.setDescription ="Time to letchon";
// getTheTodo.setDueDate = "Ugma na";
// getTheTodo.setPriority = "100";
// getTheTodo.setStatus = "Ongoing";
// getTheTodo.setProjectIdReference = "NONE";

// console.log(toDoArray, "ALL TO DO!");

// console.log(projectArray, "All projects!");



// console.log(getSpecificToDoIndex(toDoArray[0].getId),"found!!");
// console.log(getAllToDoInProject(projectArray[0].getProjectId), "printing everythiung")
// console.log(getSpecificProjectIndex(projectArray[0].getProjectId), "should return 0", projectArray[0].getProjectId);

export {addNewTask, addNewProject, getAllProjects, getAllToDo, getSpecificProjectIndex, getSpecificToDoIndex, deleteSpecificToDo, deleteSpecificProject};