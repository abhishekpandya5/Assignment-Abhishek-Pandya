(function(){

	//a. List of objects of employees with info as : Name, age, salary ,DOB

	var employees = [

		   { "Name" : "Abhishek", "Age" : 24, "Salary": 15000, "DOB" : "02-11-1995"},
         { "Name" : "Ronit",    "Age" : 17, "Salary": 4000,  "DOB" : "09-01-1989"},
         { "Name" : "Avinash",  "Age" : 23, "Salary": 10000, "DOB" : "07-05-1996"},
         { "Name" : "Rahul",    "Age" : 32, "Salary": 700,   "DOB" : "25-09-1987"}
      ];

      var len = employees.length;

      var i,key;

      for(i =0; i<len; i++)
      {
      	console.log("\n Record of employee " + (i+1) +  " : ");

      	for(key in employees[i])
      	{
      		console.log(key + " : " + employees[i][key]);
      	}
      }



      //b. filter all employees with salary greater than 5000


      console.log("\nEmployees having salary greater than 5000");
      for(i =0; i<len; i++)
      {
      	if(employees[i]["Salary"] > 5000)
      	{
      		console.log(employees[i]["Name"] + " : " + employees[i]["Salary"]);
      	}
      }


      //c. group employee on the basis of their age


     console.log("\nGrouping employees on the bases of age");

      var age_less_than18 = [];
      var age_greater_than18 = [];



      for(i =0; i<len; i++)
      {
			if(employees[i]["Age"]<18){
          age_less_than18.push(employees[i]["Name"]);
         }
         else
         {
             age_greater_than18.push(employees[i]["Name"]);
         }
      }

      console.log("\nEmployees with age less than 18: " + age_less_than18);
      console.log("Employees with age greater than 18: " + age_greater_than18);



      //d. fetch employees with salary less than 1000 and age greater than 20. Then give them an increment 5 times their salary.


      for(i =0; i<len; i++)
      {
      		if(employees[i]["Salary"] < 1000  && employees[i]["Age"] > 20)
      		{
      			employees[i]["Salary"] = employees[i]["Salary"] + 5 * employees[i]["Salary"];

      			console.log("\nEmployees having incremented salary are \n" + employees[i]["Name"] + " : " + employees[i]["Salary"]);

      		}
      }

})();
