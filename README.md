# WebtreeMediaSolutionsAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.6.


# Application architecture
- Application contain two module `Header` and `Task`
- `Header` module has only `app-header-components` components
- `Task` modules has 4 components `TaskList`,`TaskEdit`,`TaskCreate`,`TaskDetails`
- used `Bootstrap` for styling.
- used `Angular Material`.
- Used `Angular Router`
- many `angular framework facility`


## PLease follow the bellow Steps to run this project locally.
step 1: Clone the project from github repository 
step 2: Open the terminal in project root directory
step 3: Run `npm install` to install the required package
step 4: If `npm install` doesn't work, Run `npm install --f`
step 5: If you have installed the package the run `npm start`
step 5: Now open the `http://localhost:4200/` in your browser


# Application Functions
1:Application will land you to Task listing page where all the task are listed in tabular view.

2:User can change the Status of the task from dues to completed and vice versa from from the Status column.

3:user Can Edit the Task detail by clicking on crosponding Edit icon and user will be moved to editTaskComponent and there user update the Task detail.

4:From the TaskList user can create the new task bye clicking on Create New Task button user will be moved to CreateTaskComponents and user can create multiple Task one after one.

5: After the creating or Updating the task Application will notify the user about successfull dataBase Operation.

6:User can delete the task from Task listing table by clicking on crosponding delete Icon and then after user ask for conformation, if user will click on delete then the task will be deleted.

7:User can explore the task detail bye clicking on View-More icon and user will be moved to TaskDetailComponents where user can se complete detail of task like title, status, dues date, description.



