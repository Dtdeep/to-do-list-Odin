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

const getAllProjects = () =>{
    return projectArray;
}

const getAllToDo = () =>{
    return toDoArray;
}

const getSpecificProject = (projectId) =>{
    return projectArray.findIndex((projectItem)=>{
        return projectItem.getProjectId == projectId;
    });
}

const getAllToDoInProject = (projectId) => {
    const newArray = toDoArray.filter((toDoItem)=>{
        return toDoItem.getProjectIdReference == projectId;
    })
    return newArray;
}

const getSpecificToDo = (toDoId) =>{
    return toDoArray.findIndex((toDoItem)=>{
        return toDoItem.getId == toDoId;
    })
}

// addNewProject("Mikay Project");
// addNewTask("Feed Pets", "IDK some random descriptions", "march 2025","1","Completed", projectArray[0].getProjectId);
// addNewTask("randomTask", "IDK some random descriptions", "april 2026","2","Ongoing", projectArray[0].getProjectId);
// addNewTask("randomTask", "CATIDK some random descriptions", "april 2026","2","Ongoing");

// console.log(projectArray, "All projects!");
// console.log(toDoArray, "ALL TO DO!");

// const indexOfProject = getSpecificProject(projectArray[0].getProjectId);
// const project = getAllProjects()[indexOfProject];
// project.setProjectTitle = "Letchon Project";
// getAllProjects()[indexOfProject].incrementNumberOfToDo();
// getAllProjects()[indexOfProject].incrementNumberOfToDo();

// const indexOfToDo = getSpecificToDo(toDoArray[0].getId);
// const getTheTodo = getAllToDo()[indexOfToDo];
// getTheTodo.setTitle = "Letchon Mikay";
// getTheTodo.setDescription ="Time to letchon";
// getTheTodo.setDueDate = "Ugma na";
// getTheTodo.setPriority = "100";
// getTheTodo.setStatus = "Ongoing";
// getTheTodo.setProjectIdReference = "NONE";

// console.log(toDoArray, "ALL TO DO!");

// console.log(projectArray, "All projects!");



// console.log(getSpecificToDo(toDoArray[0].getId),"found!!");
// console.log(getAllToDoInProject(projectArray[0].getProjectId), "printing everythiung")
// console.log(getSpecificProject(projectArray[0].getProjectId), "should return 0", projectArray[0].getProjectId);

