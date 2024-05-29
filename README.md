## React Todo Task

### Create a Todo App which have All CRUD Functionalities

- Create Todo Task with task name , Description & status. 

- By default status needs to added as not completed for created todo.

- There should be two buttons in the name of edit and Delete which used to perform update and delete created todos.

- By onclick on status it should show a dropdown for completed and not completed by that we can change the status of todo.

- All todos should be displayed in Card.

- There should be filter to display status completed, not completed and both statuses

### Task Description

- Create a react App

>npm create vite@latest

>project-name:Todo

>cd Todo

>npm install

>npm run dev-to run the project

- In App.jsx file i create a TodoApp arrow function using useState to set TodoList.

- Using div tag to create a input box and placeholder for Task name,Description.

- Using select box to create a status filter.

- Using map function to display all details entered in input feild that will be displayed in cards.

- By handling edit,delete button using function like
handleUpdateTodo function is for edit the input field,handleDeleteTodo function is for delete the todo.

- By editing the todo it shows a prompt box to enter a new task name and description.

- By adding a new todo using handleAddTodo function it will add the todo to their previous list of todos.



### Project run in localhost:http://localhost:5173/