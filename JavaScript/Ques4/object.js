(function(){

	var obj1 = { name : "Abhishek", 
				 college : "ABES",
                 id : 5};

      var obj2 = {};
      console.log("Before copying: " + obj2);
      var key;

      console.log("After copying: \n");

	for(key in obj1){

		obj2[key] = obj1[key];

		console.log(key + ":" + obj2[key]);
	}
      
      
})();
