export default class Project{
    #projectId;
    #projectTitle;
    #numberOfToDo;
    constructor(projectTitle, projectId = null, getNumberOfToDo = null){
        this.#projectId = projectId || crypto.randomUUID();
        this.#projectTitle = projectTitle;
        this.#numberOfToDo = getNumberOfToDo || 0 ;
    }

    get getProjectId(){
        return this.#projectId;
    }

    get getProjectTitle(){
        return this.#projectTitle;
    }

    get getNumberOfToDo(){
        return this.#numberOfToDo;
    }

    set setProjectTitle(newProjectTitle){
        this.#projectTitle = newProjectTitle;
    }

    incrementNumberOfToDo(){
        this.#numberOfToDo = this.#numberOfToDo + 1;
    }

}