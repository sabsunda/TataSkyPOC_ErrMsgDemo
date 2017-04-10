/* JS file for Test application */
    //Error ID
    var blockout107 = "1";
    var SDHDpromo = "2";
    var SVODOSD4 = "3";
	var P_SubscriptionError = '4';
	
    //Languages available
    var Hind = "0";
    var Eng = "1";
    var queryParams;
    var path;
	
//Function to get query params and process as input
var getQueryParams = function(){
    var decodedURL = decodeURIComponent(window.location.search.substring(1));
    var queryObject = new Object();
    if (decodedURL != undefined && decodedURL != null && decodedURL.length != 0) {
        var paramsList = decodedURL.split('&');
        if (paramsList != undefined && paramsList != null && paramsList.length != 0) {
            for (var i = 0; i < paramsList.length; i++) {
                var parameter = paramsList[i].split('=');
                queryObject[parameter[0]] = parameter[1];
            }
        }

    }
    else {
 //To show the default product subscription error when query parameters are not passed with html path
     	queryObject.LangId ="1";
    	queryObject.errorId = "4";
    	queryObject.evntId = "101";
    }


    return queryObject;
}
//Function to switch as per the language retrieved from query params
function langSelect(x){
	var pathjoin;

        switch (queryParams.LangId){
            case Hind:
                pathjoin = "./model/Hindi/Hin_"+x+".xml";
                path=pathjoin;
                break;
            case Eng:
                pathjoin = "./model/English/"+x+".xml";
                path=pathjoin;
                break;
            default:
                console.log("Its not matching");
        }
    }
    
$(document).ready(function() {
	
		queryParams = getQueryParams();
		//Function to switch as per the Error id retrieved from query params and call langselect
        switch (queryParams.errorId){
            case blockout107:
                langSelect("BlockoutError");
                break;
            case SDHDpromo:
                langSelect("HDCatchupError");
            break;
            case SVODOSD4:
                langSelect("SubscriptionError");
            break;
			case P_SubscriptionError:
				langSelect("P_SubscriptionError");
				break;
            default:
                console.log("Its not matching");
        }

         if (window.XMLHttpRequest)
         {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
         }
		 else{
			 xmlhttp = new ActiveXObject("Microsoft.XMlHTTP");
		 }
		 /* Code to open appropriate XML file based on Error ID*/
		 
         xmlhttp.open("GET",path,true);
		 xmlhttp.send();
		 		 
		 xmlhttp.onload = function (){
			if(xmlhttp.readyState==4){
				if(xmlhttp.status ==200){
				}
				var ErrorMessageText = ParseXML(xmlhttp);
				RenderText(ErrorMessageText);
            }
		}
		
		function ParseXML(xmlhttp){
				
				var propertiesXml = xmlhttp.responseXML;
				var Text = "";
				var FullText = [];
				var Heading = 0; var Title =1; var Body = 2;
				var heading = propertiesXml.getElementsByTagName("heading");
								
				//Fetch all the children of the 'heading' tag
				var headingChildren = heading[0].children;
				
				for(var i =0;i<headingChildren.length;i++){
					if (headingChildren[i].nodeName == 'fetch' ){
						if(((headingChildren[i].childNodes[0].nodeValue) != " ")){
							Text += fetchdata(headingChildren[i].childNodes[0].nodeValue);
						}
					}
					if (headingChildren[i].nodeName == 'style'){
						if(((headingChildren[i].childNodes[0].nodeValue) != " ")){
							Text += " "+"stylestart" + " "+headingChildren[i].childNodes[0].nodeValue+" "+"styleend"+" ";
						}
					}
					if (headingChildren[i].nodeName == 'normal'){
						if(((headingChildren[i].childNodes[0].nodeValue) != " ")){
							Text += " "+headingChildren[i].childNodes[0].nodeValue+" ";
						}
					}
				}
			
				FullText[Heading] = Text;
				Text = "";
				var title = propertiesXml.getElementsByTagName("title");
								
				//Fetch all the children of the 'heading' tag
				var titleChildren = title[0].children;
				
				for(var i =0;i<titleChildren.length;i++){
					if (titleChildren[i].nodeName == 'fetch'){
						Text += fetchdata(titleChildren[i].childNodes[0].nodeValue);
					}
					if (titleChildren[i].nodeName == 'style'){
						Text += " "+"stylestart" + " "+titleChildren[i].childNodes[0].nodeValue+" "+"styleend"+" ";
					}
					if (titleChildren[i].nodeName == 'normal'){
						Text += " "+titleChildren[i].childNodes[0].nodeValue+" ";
					}
				}
				
				FullText[Title] = Text;
				
				Text = "";
				var bodytext = propertiesXml.getElementsByTagName("bodytext");
								
				//Fetch all the children of the 'heading' tag
				var bodytextChildren = bodytext[0].children;
				
				for(var i =0;i<bodytextChildren.length;i++){
					if (bodytextChildren[i].nodeName == 'fetch'){
						Text += fetchdata(bodytextChildren[i].childNodes[0].nodeValue);
						
					}
					if (bodytextChildren[i].nodeName == 'style'){
						Text += " "+"stylestart" +" "+bodytextChildren[i].childNodes[0].nodeValue+" "+"styleend"+" ";
					}
					if (bodytextChildren[i].nodeName == 'normal'){
						Text += " "+bodytextChildren[i].childNodes[0].nodeValue+" ";
					}
				}
				
				FullText[Body] = Text;
				
				return(FullText);
				
				
		}
		
		function fetchdata(data){
			/* Write code to fetch by calling API 
			The first word tells where to fetch from and second word tells what to fetch.
			Ex: "EED EventName" says EventName to be fetched from Extended Even Descriptor*/
			var time = "NTP Time";
			var EventName = "EED EventName";
			var Duration = "EED EventDuration%";
			var Price = "EED EventPrice";
			var Price1 = "EED Price%";
			// var jsonq = "";
			// var myJSON = '{ "name":"John", "age":31, "city":"New York" }';
			// var myObj = JSON.parse(myJSON);
			// console.log(myObj.name);

			var request = new XMLHttpRequest();
			request.open("GET", "./model/eventDetail.json", false);
			request.send(null);
			var my_JSON_object = JSON.parse(request.responseText);
			//alert (my_JSON_object.result[0]);
			//alert (my_JSON_object);
			console.log(my_JSON_object.channels[0].schedule);
			console.log(my_JSON_object.channels[0]["schedule"]);

			switch(data){
				case time:
					console.log("10:42");
					data = "10:42";
					break;
				case EventName:
					data = "THE MARTIN";
					break;
				case Duration:
					data = "10:00 - 11:00%";
					break;
				case Price:
					data = "$7";
					break;
				case Price1:
					data = "14 pm%"
				default:
					console.log("Its not matching");

			}

			return data;
			
		}
		
		function RenderText (Text){
		/* Parse "Text" received for Style and apply respective style. 
		Note: Look for "stylestart" string, the next word is the style to be applied. 
		This style need to be applied till you get next "stylestart" string. */

		var posstart = 0; var posend = 0;
		var tmpstr = [];
		for(var msgtype =0;msgtype<Text.length;msgtype++){
			
			var BufStr = Text[msgtype]; var Style = ""; var type=0;
			var BufLen = BufStr.length; var cnt=0;
			
			do {
				//Retreiving the style
				posstart = BufStr.search("stylestart");
				if(posstart>=0){
					posend = BufStr.search("styleend");
					cnt = posend+8;
					tmpstr[type] = BufStr.slice(posstart+10,posend);
					type++;
					BufStr = BufStr.slice(posend+8);
				
					//Retreiving the string if no stylestart present else repeat after extracting string till stylestart
					posstart = BufStr.search("stylestart");
					if(!(posstart>=0)){
						tmpstr[type] = BufStr;
						type++;
						cnt = BufLen;	
					 }
					 else{
					   tmpstr[type] = BufStr.slice(0,posstart);
					   type++;
					   BufStr = BufStr.slice(posstart);	
					 }										
					}
				else{
					//There is no Stylestart tag, so exit
					cnt = BufLen;
					}
				}
			while(cnt < BufLen);
			
			switch (queryParams.errorId){
	            case P_SubscriptionError:
	            	product_screen(tmpstr, msgtype);
	                break;
	            case blockout107:
					custom_blockout(tmpstr, msgtype);
	                break;
	            case SDHDpromo:
					custom_SDHD(tmpstr, msgtype);
	            break;
	            case SVODOSD4:
	                custom_SubError(tmpstr, msgtype);
	            break;
	            default:
	                console.log("Its not matching");
	        	}
			}
		}

	});	
							
