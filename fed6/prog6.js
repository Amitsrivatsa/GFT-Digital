$(document).ready(function(){
$("#b1").click(function(){
	$.get("https://reqres.in/api/login",function(data,status){
		alert("data "+data+" status "+status);
	})
})
})
