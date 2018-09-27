var select1=document.getElementById('s1');
var select2=document.getElementById('s2');
console.log(select1)
var obj=[{text:'India',value:'IND'},{text:'Australia',value:'AUS'}]
select1.onchange = function (event) {
	console.log("event", event.target.value , select2.options);
	var selected = select2.options.length ;
	console.log(selected);
	for(var i =selected;i>=0;i++){
		select2.options.remove(i);
	}
	if(event.target.value == "a"){
		var states2=[{text:'Sydney',value:'Sydney'},{text:'Melbrone',value:'Melbrone'},{text:'5435gfffhMelbrone',value:'Melbrone'},{text:'Melbronefdfgdg',value:'Melbrone'},{text:'Melbgfdfghrone',value:'Melbrone'}]
		states2.forEach(function(stat){
		select2.options.add(new Option(stat.value))
	})

	}
	if(event.target.value == "i"){
		var states=[{text:'Pune',value:'PUN'},{text:'Delhi',value:'DEL'}]
		console.log(select2.options);
		states.forEach(function(state){
		select2.options.add(new Option(state.value))})
	}
	
	console.log(select2.options.length ,"....");
	
} 
