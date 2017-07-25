"use strict";
if(document.getElementsByClassName("recent_game").length>0){
	for(var i=0;i<document.getElementsByClassName("recent_game").length;i++){
		var h = document.getElementsByClassName("recent_game")[i].getElementsByClassName("game_info")[0].getElementsByTagName("img")[0].src.replace("http://","").replace("https://","").replace("//","").split("/");
		var g = h.indexOf("apps"),e = h[g+1];
		var d = document.createElement("img");d.src = window.location.protocol + "//cdn.akamai.steamstatic.com/steam/apps/"+e+"/header.jpg";d.className = "game_bg";
		d.onerror = function(e){e.currentTarget.src= window.location.protocol + "//store.akamai.steamstatic.com/public/images/v6/home/background_maincap_2.jpg";};
		document.getElementsByClassName("recent_game")[i].getElementsByClassName("recent_game_content")[0].appendChild(d);
		if(document.querySelectorAll(".recent_game:nth-of-type("+(i+1)+") .recent_game_content > div").length<2){
			var y = document.createElement("div");
			y.className = "game_ph";
			document.getElementsByClassName("recent_game")[i].getElementsByClassName("recent_game_content")[0].appendChild(y);
		}
	}
}
if(document.querySelectorAll(".profile_rightcol .responsive_status_info .profile_in_game.offline .profile_in_game_name").length>0){
	var index = document.querySelectorAll(".profile_rightcol .responsive_status_info .profile_in_game.offline .profile_in_game_name")[0].innerHTML.search(/[0-9]/);
	if(index!=-1){
		document.querySelectorAll(".profile_rightcol .responsive_status_info .profile_in_game.offline .profile_in_game_name")[0].innerHTML = document.querySelectorAll(".profile_rightcol .responsive_status_info .profile_in_game.offline .profile_in_game_name")[0].innerHTML.substring(index);
	};
}