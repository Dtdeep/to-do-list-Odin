## To Do object
- #id get/set should be generated randomly and is unique. should only have getter.
- #Title get/set
- #Description get/set
- #dueDate get/set
- #Priority get/set. lahi lahi color per priority
- #status get/set
- #POSSIBLY checklist?? future feature
- #projectIdReference
## Project Object
- SUB/PUB
- #ProjectTitle get/set
- #id get/set should be generated randomly and is unique
- #numberOfToDo
## Middleman ToDoProject Module
- a projectArray that contains an array of Project Object
- a ToDoArray that contains an array of ToDO Objects
- create a #Default project object here. 
- a function that can create a fresh ToDo object and put that object into the ToDo array. arguments are the proper constructor arguments;
- a function that can create a fresh Project Object. arguments are the proper constructor arguments

-A function that  using the provided index of a ToDo object in the ToDoArray. we use the proper setter of the ToDo object to change its field's values. a ToDo object should be able to change Project.


- a function that renders all Project Object.

- a function that renders all ToDo Project based on Project object's ID.

-think of a way to make a simple solution that changes a Project Object's title and another that increments the number of Todo

## UI renderer
for some reason clicking a project with zero todos will render one empty task.

A project should be deletable by clicking a trash can button on its right side

There should always be one project, deleting a project when there is only one is not allowed.

clicking the circle button of the task should flip its status. status that is "true" should be deleted.

Fix the styling stuff and design.



<!-- - create a fresh ToDo object put it into your selected Project Object via Project.id. Its weird to do all the logic in one function so create this into a separate function then call this in the main function. so basically a function that accepts an object ToDo and an id of the selected Project object -->

<!-- - findToDo object inside the projectArray > Project.toDo. a function that accepts id of Project and id of ToDo. so basically what this should do is search for projectArray with the selected Project.id, once it finds it that Project object's toDo array will be searched for an object that has the same id as the provided id in the argument, once that todo object is located we use the appropriate setter. this should return the projectArray index, Project.ToDo index. (Actually one solution is that a ToDo should only reference a Project via ID, Project doesnt have to store the ToDo in an array) -->






