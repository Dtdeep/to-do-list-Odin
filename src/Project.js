export default class Project{
    #projectId;
    #projectTitle;
    #numberOfToDo = 0;
    constructor(projectTitle){
        this.#projectId = crypto.randomUUID();
        this.#projectTitle = projectTitle;
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