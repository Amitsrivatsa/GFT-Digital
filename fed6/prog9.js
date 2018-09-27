$('#i1').mouseenter(function(){
	var obj={color:"red",background:"black" }
	$('#i1').css(obj)
})
$('#i1').mouseleave(function(){
	var obj={color:"blue",background:"white"}
	$('#i1').css(obj)
})
$('#i2').mouseenter(function(){
	$('#i2').css("color","red")
})
$('#i2').mouseleave(function(){
	$('#i2').css("color","blue")
})