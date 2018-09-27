
var u=document.getElementById('t1');
var p=document.getElementById('p1');
	u.onkeydown=function()
	{
		var pattern1=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		var div1=document.getElementById('d2');
		var matched1= pattern1.test(u.value);
		if (matched1==false) {
			div1.classList.add('glyphicon','glyphicon-remove');
		}
		if (matched1==true) {
			div1.classList.remove('glyphicon','glyphicon-remove');
			div1.classList.add('glyphicon','glyphicon-ok');
		}

	}
		
	p.onkeydown=function()
	{
	var pattern=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
	console.log("value", p.value);
	var matched= pattern.test(p.value);
	if (matched==false)
	{
		 var but=document.getElementById('b1');
		 var div=document.getElementById('d1');
		 div.classList.add('glyphicon','glyphicon-remove');		 
	}
	if(matched==true)
	{
		var but=document.getElementById('b1');
		var div=document.getElementById('d1');
		div.classList.remove('glyphicon','glyphicon-remove');
		div.classList.add('glyphicon','glyphicon-ok');
	}

}



