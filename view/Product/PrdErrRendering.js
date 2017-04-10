/* JS file for Product Error screen rendering */
function product_screen(Text, msgtype){
	console.log("product_screen");
	var tlt = [];

	switch (msgtype){

		case 0:	
		console.log(Text);
		console.log(Text[0]);
			break;

		case 1:
			var right = document.getElementById('Right_container');
			right.innerHTML = Text[1];
			var title = Text[0].trim();
			right.classList.add("P_"+title);
			break;

		case 2:
			tlt = Text[5].split("%");
			var headerContainer = document.getElementById("Header_container");
			
			var eventContainer = document.getElementById("Event_container");
			var durationContainer = document.getElementById("Duration_container");

			var eventPrice = document.getElementById("Event_Price");
			var subscribeInfo = document.getElementById("Subscribe_Info");

			headerContainer.innerHTML = Text[1];
			var style1 = Text[0].trim();
			headerContainer.classList.add("P_"+style1);

			document.getElementById("Channel_container").innerHTML = "<img class = 'P_Channel_style' src='./view/Resources/Channelname.jpg'>";

			eventContainer.innerHTML = Text[3];
			var style2 = Text[2].trim();
			eventContainer.classList.add("P_"+style2);

			durationContainer.innerHTML = tlt[0];
			var style3 = Text[4].trim();
			durationContainer.classList.add("P_"+style3);

			document.getElementById("EventImage_container").innerHTML = "<img class = 'P_EventImage_style' src='./view/Resources/EventPic.jpg'>";

			eventPrice.innerHTML = tlt[2];
			eventPrice.classList.add("P_"+style3);
			eventPrice.style.fontSize = "25px";
			eventPrice.style.marginTop = "36%";
			eventPrice.style.lineHeight = "1";

			subscribeInfo.innerHTML = tlt[3];
			subscribeInfo.classList.add("P_"+style3);
			subscribeInfo.style.fontSize = "25px";
			subscribeInfo.style.marginTop = "41%";
			subscribeInfo.style.lineHeight = "1";
			break;

		}

}