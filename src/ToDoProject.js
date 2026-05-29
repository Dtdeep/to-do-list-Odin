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

const getAllToDoInProject = (projectId) => {
    //for some reason this does not work as intended for now
    return toDoArray.filter((toDoItem)=>{
        toDoItem.getProjectIdReference == projectId;
    })
}
addNewProject("Mikay Project");
console.log(projectArray);
addNewTask("Feed Pets", "IDK some random descriptions", "march 2025","1","Completed", "29bd8a4b-f0ae-4a6c-a561-ba7b66244eca");
addNewTask("randomTask", "IDK some random descriptions", "april 2026","2","Ongoing", "29bd8a4b-f0ae-4a6c-a561-ba7b66244eca");
addNewTask("randomTask", "IDK some random descriptions", "april 2026","2","Ongoing",);

console.log(toDoArray[0]);
console.log(getAllToDoInProject("29bd8a4b-f0ae-4a6c-a561-ba7b66244eca"), "hotd");


