## To Do object
- #id get/set should be generated randomly and is unique. should only have getter.
- #Title get/set
- #Description get/set
- #dueDate get/set
- #Priority get/set. lahi lahi color per priority
- #status get/set
- #POSSIBLY checklist?? future feature
## Project Object
- SUB/PUB
- #ProjectTitle get/set
- #id get/set should be generated randomly and is unique
- #toDo Array of object get/set
## Middleman toProject Module
- a projectArray that contains an array of Project Object
- create a #Default project object here. 
- create a fresh ToDo object put it into your selected Project Object via Project.id. Its weird to do all the logic in one function so create this into a separate function then call this in the main function. so basically a function that accepts an object ToDo and an id of the selected Project object

- findToDo object inside the projectArray > Project.toDo. a function that accepts id of Project and id of ToDo. so basically what this should do is search for projectArray with the selected Project.id, once it finds it that Project object's toDo array will be searched for an object that has the same id as the provided id in the argument, once that todo object is located we use the appropriate setter. this should return the projectArray index, Project.ToDo index.

- using the provided index of findToDo. we use the proper setter of the ToDo object to change its field's values.

- a function that renders all Project Object.
- a function that renders all ToDo object inside Project.toDo.