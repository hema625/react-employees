## 
Have created an app for employees using PERN(Postgre,Express,React and Node) stack.

This app displays the employee information from the database.(postgre was installed on my machine. so didnt use the online database)

All CRUD operations are implemented.

Have displayed the details of the employees using React Table(as mentioned).

Users can filter a particular field using the textbox provided for filtering.

Have used Bootstrap for styling the pages.

There is a Landing page for the app.

All API end points are taken care.

User can read,add,edit/update or delete an employee using the links and buttons provided for the same.

Signup and login are added for future enhancements(which can be implemented using passport.js)

For the development purpose, i have used all the config details for the backend in the same file.

Have displayed the color in the color field instead of hardcoding it. Also, I made it as a not-sortable and non-filterable fields.

Please use the insert scripts given below for the dummy data.

insert into employees(name,code,profession,color,city,branch,assigned) 
values('Kyle Lowry','F100','Drywall Installer','#FF6600','Brampton','Abacus',true);

insert into employees(name,code,profession,color,city,branch,assigned) 
values('DeMar DeRozan','F101','DrywallInstaller','yellow','Brampton','Pillsworth',false);

insert into employees(name,code,profession,color,city,branch,assigned) 
values('Fred Van Vleet','F102','DrywallInstaller','green','Bolton','Abacus',false);

insert into employees(name,code,profession,color,city,branch,assigned) 
values('Jonas Valanciunas','F103','DrywallInstaller','#333333','Bolton','Pillsworth',true);

insert into employees(name,code,profession,color,city,branch,assigned) 
values('Chris Bosh','F104','DrywallInstaller','#FF6600','Brampton','Abacus',true);

insert into employees(name,code,profession,color,city,branch,assigned) 
values('Marcus Camby','F105','Runner','red','Brampton','Pillsworth',false);

insert into employees(name,code,profession,color,city,branch,assigned) 
values('Vince Carter','F106','Runner','red','Toronto','Abacus',false);
