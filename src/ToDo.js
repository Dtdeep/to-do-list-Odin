export default class ToDo{
    #id;
    #title;
    #description;
    #dueDate;
    #priority;
    #status;
    #projectIdReference;

    constructor(title,description,dueDate,priority,projectIdReference,taskId = null){
        this.#id = taskId || crypto.randomUUID();
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#status = false;
        this.#projectIdReference = projectIdReference;
    }

    get getId(){
        return this.#id;
    }
    
    get getTitle(){
        return this.#title;
    }

    get getDescription(){
        return this.#description;
    }

    get getDueDate(){
        return this.#dueDate;
    }

    get getPriority(){
        return this.#priority;
    }

    get getStatus(){
        return this.#status;
    }

    get getProjectIdReference(){
        return this.#projectIdReference;
    }
    //setter
    set setTitle(newTitle){
        this.#title = newTitle;
    }

    set setDescription(newDescription){
        this.#description = newDescription;
    }

    set setDueDate(newDueDate){
        this.#dueDate = newDueDate;
    }

    set setPriority(newPriority){
        this.#priority = newPriority;
    }

    reverseStatus(){
        this.#status = !this.#status;
    }

    set setProjectIdReference(newProjectIdReference){
        this.#projectIdReference = newProjectIdReference;
    }
}

