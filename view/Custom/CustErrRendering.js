/* JS file for Product Error screen rendering */

function custom_blockout(Text, msgtype){

	document.getElementById("grad1").classList.add("C_grad1");
	document.getElementById("Hline").classList.add("C_Hline");
	document.getElementById("Hline1").classList.add("C_Hline");
	document.getElementById("Hline1").style.marginTop = "11%";
	document.getElementById("Hline2").classList.add("C_Hline");
	document.getElementById("Hline2").style.marginTop = "18%";
	document.getElementById("Hline3").classList.add("C_Hline");
	document.getElementById("Hline3").style.marginTop = "21%";
	document.getElementById("Hline4").classList.add("C_Hline");
	document.getElementById("Hline4").style.marginTop = "28%";
	document.getElementById("Vline").classList.add("C_Vline");
	document.getElementById("Vline1").classList.add("C_Vline1");
	document.getElementById("Vline2").classList.add("C_Vline1");
	document.getElementById("Vline2").style.marginLeft = "74%";

	var Errorname = "ERROR(4)";
	var tlt = [];
	var posstart = 0; var posend = 0; var tmpstr = "";

	document.getElementById("Left_container").innerHTML = Errorname;
	document.getElementById("Left_container").classList.add("Left_panel_style");

	switch (msgtype){

		case 0:

			var headingContainer = document.getElementById("Header_container")
			headingContainer.innerHTML = Text[1];
			var heading = Text[0].trim();
			headingContainer.classList.add(heading);
			break;

		case 1:

			tlt = Text[1].split("%");

			document.getElementById("Title1_container").innerHTML = tlt[0];
			var title = Text[0].trim();
			document.getElementById("Title1_container").classList.add(title);


			var title2Container = document.getElementById("Title2_container");
			title2Container.innerHTML = tlt[1];
			title2Container.classList.add(title);
			title2Container.style.marginLeft = "65%";
			title2Container.style.width = "10%";

			var title3Container = document.getElementById("Title3_container");
			title3Container.innerHTML = tlt[2];
			title3Container.classList.add(title);
			title3Container.style.marginLeft = "75%";
			title3Container.style.width = "23%";
			break;

		case 2:

			tlt = Text[1].split("%");

			var body2_container = document.getElementById('Body2_container');
			var body3_container = document.getElementById('Body3_container');
			var body4_container = document.getElementById('Body4_container');
			var body5_container = document.getElementById('Body5_container');
			var body6_container = document.getElementById('Body6_container');
			var body7_container = document.getElementById('Body7_container');
			var body8_container = document.getElementById('Body8_container');

			document.getElementById("Body1_container").innerHTML = tlt[0];
			var style = Text[0].trim();
			document.getElementById("Body1_container").classList.add(style);

			body2_container.innerHTML = tlt[1];
			body2_container.classList.add(style);
			body2_container.style.marginLeft = "65%";
			body2_container.style.width = "10%";

			body3_container.innerHTML = tlt[2];
			body3_container.classList.add(style);
			body3_container.style.marginLeft = "75%";
			body3_container.style.width = "23%";

			body4_container.innerHTML = tlt[3];
			body4_container.classList.add(style);
			body4_container.style.marginTop = "18.5%";
			body4_container.style.width = "73%";
			body4_container.style.lineHeight = "40px";

			body5_container.innerHTML = tlt[4];
			body5_container.classList.add(style);
			body5_container.style.marginTop = "23%";

			body6_container.innerHTML = tlt[5];
			body6_container.classList.add(style);
			body6_container.style.marginLeft = "65%";
			body6_container.style.marginTop = "23%";
			body6_container.style.width= "10%";

			body7_container.innerHTML = tlt[6];
			body7_container.classList.add(style);
			body7_container.style.marginLeft = "75%";
			body7_container.style.marginTop = "23%";
			body7_container.style.width = "23%";

			body8_container.innerHTML = tlt[7];
			body8_container.classList.add(style);
			body8_container.style.marginTop = "28%";
			body8_container.style.width = "73%";
			body8_container.style.lineHeight = "50px";
			break;

		default:
			console.log("Not matching");
	}
}

function custom_SDHD(Text, msgtype){

	document.getElementById("grad1").classList.add("C_grad1");
	document.getElementById("Hline").classList.add("C_Hline");
	document.getElementById("Hline1").classList.add("C_Hline");
	document.getElementById("Hline1").style.marginTop = "8%";
	document.getElementById("Hline2").classList.add("C_Hline");
	document.getElementById("Hline2").style.marginTop = "12%";
	document.getElementById("Hline3").classList.add("C_Hline");
	document.getElementById("Hline3").style.marginTop = "16%";
	document.getElementById("Hline4").classList.add("C_Hline");
	document.getElementById("Hline4").style.marginTop = "20%";
	document.getElementById("Hline5").classList.add("C_Hline");
	document.getElementById("Hline5").style.marginTop = "28%";
	document.getElementById("Hline6").classList.add("C_Hline");
	document.getElementById("Hline6").style.marginTop = "31%";
	document.getElementById("Vline").classList.add("C_Vline");
	document.getElementById("Vline1").classList.add("C_Vline1");
	document.getElementById("Vline2").classList.add("C_Vline1");
	document.getElementById("Vline2").style.marginLeft = "74%";
	document.getElementById("Vlinesmall").classList.add("C_Vlinesmall");


	var Errorname = "ERROR(4)";

	document.getElementById("Left_container").innerHTML = Errorname;
	document.getElementById("Left_container").classList.add("Left_panel_style");

	switch (msgtype){

		case 0:

			var headingContainer = document.getElementById("Header_container")
			headingContainer.innerHTML = Text[1];
			var heading = Text[0].trim();
			headingContainer.classList.add(heading);
			break;

		case 1:
			tlt = Text[1].split("%");

			document.getElementById("Title1_container").innerHTML = tlt[0];
			var title = Text[0].trim();
			document.getElementById("Title1_container").classList.add(title);

			var title2Container = document.getElementById("Title2_container");
			title2Container.innerHTML = tlt[1];
			title2Container.classList.add(title);
			title2Container.style.marginLeft = "65%";
			title2Container.style.width = "10%";

			var title3Container = document.getElementById("Title3_container");
			title3Container.innerHTML = tlt[2];
			title3Container.classList.add(title);
			title3Container.style.marginLeft = "75%";
			title3Container.style.width = "23%";
			title3Container.style.textAlign = "left";

			break;
			
		case 2:
			tlt = Text[1].split("%");
			console.log(tlt.length);

			var body2_container = document.getElementById('Body2_container');
			var body3_container = document.getElementById('Body3_container');
			var body4_container = document.getElementById('Body4_container');
			var body5_container = document.getElementById('Body5_container');
			var body6_container = document.getElementById('Body6_container');
			var body7_container = document.getElementById('Body7_container');
			var body8_container = document.getElementById('Body8_container');
			var body9_container = document.getElementById('Body9_container');
			var body10 = document.getElementById('Body10_container');
			var body11 = document.getElementById('Body11_container');
			var body12 = document.getElementById('Body12_container');
			var body13 = document.getElementById('Body13_container');

			document.getElementById("Body1_container").innerHTML = tlt[0];
			var style = Text[0].trim();
			document.getElementById("Body1_container").classList.add(style);
			document.getElementById("Body1_container").style.width = "7%";
			document.getElementById("Body1_container").style.marginTop = "9%";


			
			body2_container.innerHTML = tlt[1];
			body2_container.classList.add(style);
			body2_container.style.marginLeft = "29%";
			body2_container.style.marginTop = "9%";
			body2_container.style.width = "32%";
			body2_container.style.textAlign = "left";

			body3_container.innerHTML = tlt[2];
			body3_container.classList.add(style);
			body3_container.style.marginLeft = "65%";
			body3_container.style.marginTop = "9%";
			body3_container.style.width = "10%";

			body4_container.innerHTML = tlt[3];
			body4_container.classList.add(style);
			body4_container.style.marginLeft = "75%";
			body4_container.style.marginTop = "9%";
			body4_container.style.width = "23%";

			body5_container.innerHTML = tlt[4];
			body5_container.classList.add(style);
			body5_container.style.marginTop = "16%";
			body5_container.style.width = "7%";

			body6_container.innerHTML = tlt[5];
			body6_container.classList.add(style);
			body6_container.style.marginLeft = "29%";
			body6_container.style.marginTop = "13%";
			body6_container.style.width= "32%";
			body6_container.style.textAlign= "left";

			body7_container.innerHTML = tlt[6];
			body7_container.classList.add(style);
			body7_container.style.marginLeft = "65%";
			body7_container.style.marginTop = "13%";
			body7_container.style.width = "10%";

			body8_container.innerHTML = tlt[7];
			body8_container.classList.add(style);
			body8_container.style.marginTop = "13%";
			body8_container.style.marginLeft = "75%";
			body8_container.style.width = "23%";

			body9_container.innerHTML = tlt[8];
			body9_container.classList.add(style);
			body9_container.style.marginTop = "17%";
			body9_container.style.width = "70%";

			body10.innerHTML = tlt[9];
			body10.classList.add(style);
			body10.style.marginTop = "21%";
			body10.style.marginLeft = "29%";
			body10.style.width = "29%";
			body10.style.textAlign = "left";

			body11.innerHTML = tlt[10];
			body11.classList.add(style);
			body11.style.marginTop = "21%";
			body11.style.marginLeft = "65%";
			body11.style.width = "10%";

			body12.innerHTML = tlt[11];
			body12.classList.add(style);
			body12.style.marginTop = "21%";
			body12.style.marginLeft = "75%";
			body12.style.width = "23%";

			body13.innerHTML = tlt[12];
			body13.classList.add(style);
			body13.style.marginTop = "28%";
			body13.style.marginLeft = "29%";
			body13.style.width = "70%";


			break;
		default:
			console.log("Not matching");
	}
}

function custom_SubError(Text,msgtype){
	
	document.getElementById("grad1").classList.add("C_grad1");
	document.getElementById("Hline").classList.add("C_Hline");
	document.getElementById("Hline1").classList.add("C_Hline");
	document.getElementById("Hline1").style.marginTop = "11%";
	document.getElementById("Hline2").classList.add("C_Hline");
	document.getElementById("Hline2").style.marginTop = "18%";
	document.getElementById("Hline3").classList.add("C_Hline");
	document.getElementById("Hline3").style.marginTop = "21%";
	document.getElementById("Hline4").classList.add("C_Hline");
	document.getElementById("Hline4").style.marginTop = "28%";
	document.getElementById("Vline").classList.add("C_Vline");
	document.getElementById("Vline1").classList.add("C_Vline1");
	document.getElementById("Vline2").classList.add("C_Vline1");
	document.getElementById("Vline2").style.marginLeft = "74%";

	var Errorname = "ERROR(4)";

	document.getElementById("Left_container").innerHTML = Errorname;
	document.getElementById("Left_container").classList.add("Left_panel_style");
}