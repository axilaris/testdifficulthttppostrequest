function doClick(e) {
    alert($.label.text);
}

$.index.open();


searchTA();
 
function searchTA() {
	Ti.API.info("searchTA");	

	
	var jsonparam =				
			{ctl00$ContentPlaceHolder1$TSM1:'ctl00$ContentPlaceHolder1$UpdatePanel2|ctl00$ContentPlaceHolder1$btnSubmit',
			ctl00_ContentPlaceHolder1_TSM1_HiddenField:'/wEPDwUJNzg4NzQxOTgzZGQ3n9ah6+62OZIn2c4Ag5Owbzr/Fg==',
			__EVENTTARGET:'/wEPDwUJNzg4NzQxOTgzZGQ3n9ah6+62OZIn2c4Ag5Owbzr/Fg==',
			__EVENTARGUMENT:'/wEPDwUJNzg4NzQxOTgzZGQ3n9ah6+62OZIn2c4Ag5Owbzr/Fg==',
			__VIEWSTATE:'/wEPDwUJNzg4NzQxOTgzZGQ3n9ah6+62OZIn2c4Ag5Owbzr/Fg==',
			ctl00$userid:'SQASI/TA/13/2579',
			ctl00$screenname:'SQASI/TA/13/2579',
			ctl00$ContentPlaceHolder1$txtSearch1:'SQASI/TA/13/2579',
			ctl00$ContentPlaceHolder1$txtSearch2:'111111111111',
			__ASYNCPOST:true,
			ctl00$ContentPlaceHolder1$btnSubmit:'Search'};
 
 
/*
	var jsonparam =							
		{"ctl00%24ContentPlaceHolder1%24TSM1":"ctl00%24ContentPlaceHolder1%24UpdatePanel2%7Cctl00%24ContentPlaceHolder1%24btnSubmit",
		"ctl00_ContentPlaceHolder1_TSM1_HiddenField":"%2FwEPDwUJNzg4NzQxOTgzZGQ3n9ah6%2B62OZIn2c4Ag5Owbzr%2FFg%3D%3D",
		"__EVENTTARGET":"%2FwEPDwUJNzg4NzQxOTgzZGQ3n9ah6%2B62OZIn2c4Ag5Owbzr%2FFg%3D%3D",
		"__EVENTARGUMENT":"%2FwEPDwUJNzg4NzQxOTgzZGQ3n9ah6%2B62OZIn2c4Ag5Owbzr%2FFg%3D%3D",
		"__VIEWSTATE":"%2FwEPDwUJNzg4NzQxOTgzZGQ3n9ah6%2B62OZIn2c4Ag5Owbzr%2FFg%3D%3D",
		"ctl00%24userid":"SQASI%2FTA%2F13%2F2579",
		"ctl00%24screenname":"SQASI%2FTA%2F13%2F2579",
		"ctl00%24ContentPlaceHolder1%24txtSearch1":"SQASI%2FTA%2F13%2F2579",
		"ctl00%24ContentPlaceHolder1%24txtSearch2":"111111111111",
		"__ASYNCPOST":true,
		"ctl00%24ContentPlaceHolder1%24btnSubmit":"Search"};
*/
	
	console.log(jsonparam);
	
	  var request = Titanium.Network.createHTTPClient();
	  var url = "http://ecomm.sirim.my/SirimEnquiry/search_type_approval.aspx";
	  
	  
	  request.open("POST",url);
	  
//	  request.setRequestHeader("Cookie","ASP.NET_SessionId=v25znk55rz5dbnvqtulrw12f; path=/; HttpOnly");
	  request.setRequestHeader('User-Agent',"Mozilla/5.0 (Data)");
//	  request.setRequestHeader('User-Agent','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.152 Safari/537.36');
	
//	  request.setRequestHeader('Content-Type',"application/x-www-form-urlencoded");
//	  request.setRequestHeader('Accept',"*/*");
//	  request.send(jsonparam);
//	  request.send('ctl00%24ContentPlaceHolder1%24TSM1=ctl00%24ContentPlaceHolder1%24UpdatePanel2%7Cctl00%24ContentPlaceHolder1%24btnSubmit&ctl00_ContentPlaceHolder1_TSM1_HiddenField=&__EVENTTARGET=&__EVENTARGUMENT=&__VIEWSTATE=%2FwEPDwUJNzg4NzQxOTgzZGQ3n9ah6%2B62OZIn2c4Ag5Owbzr%2FFg%3D%3D&ctl00%24userid=&ctl00%24screenname=&ctl00%24ContentPlaceHolder1%24txtSearch1=SQASI%2FTA%2F13%2F2579&ctl00%24ContentPlaceHolder1%24txtSearch2=111111111111&__ASYNCPOST=true&ctl00%24ContentPlaceHolder1%24btnSubmit=Search');
 	  request.send(jsonparam);
 
	  request.onload = function(){
	  	Ti.API.info("request.onload");
	  	Ti.API.info(this.status);
	  	Ti.API.info(this.responseText);
	  	var cookie=request.getResponseHeader("Set-Cookie");
 
	  	Ti.API.info("cookie:" + cookie);
	  	
	  	var someresponseheaders=request.getResponseHeader("Date");
	  	Ti.API.info("someresponseheaders:" + someresponseheaders);
	  	
	 	var contentlengthheader=request.getResponseHeader("Content-Length");
	  	Ti.API.info("contentlengthheader:" + contentlengthheader);
 
	 	var respdata=request.getResponseData();
	  	console.log(JSON.stringify(respdata));
	  	
	  };
	
	
}