import * as ToDoProject from "./ToDoProject.js";
import { formatDistanceToNowStrict } from "date-fns";

const deleteAllChild = (parentElement) =>{
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    };
}

const renderAllProjects = (parentElement)=> {
    const allProjects = ToDoProject.getAllProjects();
    allProjects.forEach((item)=>{
       const projectDivDelContainer = document.createElement("div");
       projectDivDelContainer.dataset.id = item.getProjectId;
       const projectItemDiv =  document.createElement("div");
       projectItemDiv.classList.add("project-item-div");
       const projectTitleP = document.createElement("p");
       projectTitleP.classList.add("project-title");
       projectTitleP.textContent = item.getProjectTitle;

       const hashTagSvgElement = document.createElement("div");
       projectItemDiv.appendChild(hashTagSvgElement);
       const hashtagSvg = `<svg viewBox="-4.56 -4.56 33.12 33.12" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#999999" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7784 1C10.3231 1 9.92838 1.31506 9.82748 1.75902L8.63635 7H5C4.44772 7 4 7.44772 4 8C4 8.55228 4.44772 9 5 9H8.1818L6.81817 15H3C2.44772 15 2 15.4477 2 16C2 16.5523 2.44772 17 3 17H6.36362L5.27072 21.8088C5.13204 22.419 5.59584 23 6.22161 23C6.6769 23 7.07159 22.6849 7.17249 22.241L8.36362 17H13.3636L12.2707 21.8088C12.132 22.419 12.5958 23 13.2216 23C13.6769 23 14.0716 22.6849 14.1725 22.241L15.3636 17H19C19.5523 17 20 16.5523 20 16C20 15.4477 19.5523 15 19 15H15.8182L17.1818 9H21C21.5523 9 22 8.55228 22 8C22 7.44772 21.5523 7 21 7H17.6364L18.7292 2.19124C18.8679 1.58104 18.4041 1 17.7784 1C17.3231 1 16.9284 1.31506 16.8275 1.75902L15.6364 7H10.6363L11.7292 2.19124C11.8679 1.58104 11.4041 1 10.7784 1ZM13.8182 15L15.1818 9H10.1818L8.81817 15H13.8182Z" fill="#0F0F0F"></path></g></svg>`
       hashTagSvgElement.outerHTML = hashtagSvg;

       const deleteButton = document.createElement("button");
       deleteButton.classList.add("delete-project-button")
       const trashCanSvg = `<svg fill="#ff0000" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60.167 60.167" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M54.5,11.667H39.88V3.91c0-2.156-1.754-3.91-3.91-3.91H24.196c-2.156,0-3.91,1.754-3.91,3.91v7.756H5.667 c-0.552,0-1,0.448-1,1s0.448,1,1,1h2.042v40.5c0,3.309,2.691,6,6,6h32.75c3.309,0,6-2.691,6-6v-40.5H54.5c0.552,0,1-0.448,1-1 S55.052,11.667,54.5,11.667z M22.286,3.91c0-1.053,0.857-1.91,1.91-1.91H35.97c1.053,0,1.91,0.857,1.91,1.91v7.756H22.286V3.91z M50.458,54.167c0,2.206-1.794,4-4,4h-32.75c-2.206,0-4-1.794-4-4v-40.5h40.75V54.167z M38.255,46.153V22.847c0-0.552,0.448-1,1-1 s1,0.448,1,1v23.306c0,0.552-0.448,1-1,1S38.255,46.706,38.255,46.153z M29.083,46.153V22.847c0-0.552,0.448-1,1-1s1,0.448,1,1 v23.306c0,0.552-0.448,1-1,1S29.083,46.706,29.083,46.153z M19.911,46.153V22.847c0-0.552,0.448-1,1-1s1,0.448,1,1v23.306 c0,0.552-0.448,1-1,1S19.911,46.706,19.911,46.153z"></path> </g></svg>`
       const trashCanSvgElement = document.createElement("div");
       deleteButton.appendChild(trashCanSvgElement);
       trashCanSvgElement.outerHTML = trashCanSvg;

       const editButton = document.createElement("button");
       editButton.classList.add("edit-project-button");
       const editSvgElement = document.createElement("div");
       const editSvg = `<svg width="190px" height="190px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.8400000000000001" d="M3.8 12.963L2 18l4.8-.63L18.11 6.58a2.612 2.612 0 00-3.601-3.785L3.8 12.963z"></path> </g></svg>`
       editButton.appendChild(editSvgElement);
       editSvgElement.outerHTML = editSvg;
       

       projectItemDiv.appendChild(projectTitleP);
       projectDivDelContainer.appendChild(projectItemDiv);
       projectDivDelContainer.appendChild(editButton);
       projectDivDelContainer.appendChild(deleteButton);
       parentElement.appendChild(projectDivDelContainer);
    })
    console.log("Successfully rendered all projects!")
}

const renderAllProjectsToSelectInput = (parentElement) =>{
    const allProjects = ToDoProject.getAllProjects();
    allProjects.forEach((item)=>{
        const projectOption = document.createElement("option");
        projectOption.text = item.getProjectTitle;
        projectOption.value = item.getProjectId;
        parentElement.appendChild(projectOption);
    });
}


const renderAllToDosInProject = (projectReferenceId, parentElement) =>{
    const allToDos = ToDoProject.getAllToDo();
    allToDos.forEach((item)=>{
      if(item.getProjectIdReference == projectReferenceId){
            const toDoLi = document.createElement("li");
            toDoLi.dataset.id = item.getId;
            
            const taskButtonElement = document.createElement("button");
            taskButtonElement.classList.add("task-button")
            const circleSvg = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g><path fill="none" d="M0 0h24v24H0"></path><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"></path></g></g></svg>`
            const circleSvgElement = document.createElement("div");
            taskButtonElement.appendChild(circleSvgElement);
            circleSvgElement.outerHTML = circleSvg;
            toDoLi.appendChild(taskButtonElement);

            const toDoContentDiv = document.createElement("div");
            toDoContentDiv.classList.add("task-content");
            const taskTitleElement = document.createElement("p");
            taskTitleElement.classList.add("task-title");
            taskTitleElement.textContent = item.getTitle;
            toDoContentDiv.appendChild(taskTitleElement);
            const taskDescriptionElement = document.createElement("p");
            taskDescriptionElement.classList.add("task-description");
            taskDescriptionElement.textContent = item.getDescription;
            toDoContentDiv.appendChild(taskDescriptionElement);

            if(item.getDueDate != ""){
                const dueDateDiv = document.createElement("div");
                dueDateDiv.classList.add("due-date-div");
                const calendarSvg = `<svg class="calendar-date-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 10H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#9564DF" stroke-width="1.32" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`
                const calendarSvgElement = document.createElement("div");
                dueDateDiv.appendChild(calendarSvgElement);
                calendarSvgElement.outerHTML = calendarSvg;
                calendarSvgElement.classList.add("calendar-date-svg");
                const calendarDateElement = document.createElement("p");
                calendarDateElement.classList.add("date-text") ;
                calendarDateElement.textContent = formatDistanceToNowStrict(item.getDueDate);
                dueDateDiv.appendChild(calendarDateElement);
                toDoContentDiv.appendChild(dueDateDiv);
            }
            toDoLi.appendChild(toDoContentDiv);

            const deleteButton = document.createElement("button");
            deleteButton.classList.add("delete-task-button")
            const trashCanSvg = `<svg fill="#ff0000" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60.167 60.167" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M54.5,11.667H39.88V3.91c0-2.156-1.754-3.91-3.91-3.91H24.196c-2.156,0-3.91,1.754-3.91,3.91v7.756H5.667 c-0.552,0-1,0.448-1,1s0.448,1,1,1h2.042v40.5c0,3.309,2.691,6,6,6h32.75c3.309,0,6-2.691,6-6v-40.5H54.5c0.552,0,1-0.448,1-1 S55.052,11.667,54.5,11.667z M22.286,3.91c0-1.053,0.857-1.91,1.91-1.91H35.97c1.053,0,1.91,0.857,1.91,1.91v7.756H22.286V3.91z M50.458,54.167c0,2.206-1.794,4-4,4h-32.75c-2.206,0-4-1.794-4-4v-40.5h40.75V54.167z M38.255,46.153V22.847c0-0.552,0.448-1,1-1 s1,0.448,1,1v23.306c0,0.552-0.448,1-1,1S38.255,46.706,38.255,46.153z M29.083,46.153V22.847c0-0.552,0.448-1,1-1s1,0.448,1,1 v23.306c0,0.552-0.448,1-1,1S29.083,46.706,29.083,46.153z M19.911,46.153V22.847c0-0.552,0.448-1,1-1s1,0.448,1,1v23.306 c0,0.552-0.448,1-1,1S19.911,46.706,19.911,46.153z"></path> </g></svg>`
            const trashCanSvgElement = document.createElement("div");
            deleteButton.appendChild(trashCanSvgElement);
            trashCanSvgElement.outerHTML = trashCanSvg;
            toDoLi.appendChild(deleteButton);

            parentElement.appendChild(toDoLi);
        }
    })
}

const renderProjectTitleToTaskMain = (projectId,element) =>{
    const allProjects = ToDoProject.getAllProjects();
    allProjects.forEach((item)=>{
        if(item.getProjectId == projectId){
            element.textContent = item.getProjectTitle;
        }
    })
}

const createTaskToEditTask = (element) =>{
    element.removeAttribute('id');
    element.setAttribute("id", "submit-edit-task");
    element.textContent = "Edit Task";
}

const editTaskToCreateTask = (element) =>{
    element.removeAttribute('id');
    element.setAttribute("id","submit-create-task");
    element.textContent = "Create Task";
}

const projectEditorElement = (parentElement, value) => {
    deleteAllChild(parentElement);
    const saveButton = document.createElement("button");
    saveButton.classList.add("save-edit-project-button");
    const saveSvgElement = document.createElement("div");
    const saveSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 20V15H9V20M18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H14.1716C14.702 4 15.2107 4.21071 15.5858 4.58579L19.4142 8.41421C19.7893 8.78929 20 9.29799 20 9.82843V18C20 19.1046 19.1046 20 18 20Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
    saveButton.appendChild(saveSvgElement);
    saveSvgElement.outerHTML = saveSvg;

    const inputElement = document.createElement("input");
    inputElement.classList.add("edit-project-title-input");
    inputElement.type = "text";
    inputElement.value = value;


    parentElement.appendChild(inputElement);
    parentElement.appendChild(saveButton);
}


export {renderAllProjects,deleteAllChild, renderAllToDosInProject, renderAllProjectsToSelectInput, renderProjectTitleToTaskMain,createTaskToEditTask,editTaskToCreateTask, projectEditorElement};