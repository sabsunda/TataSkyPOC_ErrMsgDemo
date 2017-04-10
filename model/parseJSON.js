//js file for parsing JSON

			var request = new XMLHttpRequest();
			request.open("GET", "./model/eventDetail.json", false);
			request.send(null)
			var my_JSON_object = JSON.parse(request.responseText);
			alert (my_JSON_object.result[0]);
			console.log(my_JSON_object);

			// 			$.getJSON("./model/eventdesc.json", function(json) {
			// 	jsonq = JSON.stringify(json);


   //  			console.log(json, jsonq); // this will show the info it in firebug console

			// });