$('#b1').click(function(){
	 var data={  email: $('#i1').val(),password:$('#i2').val() }
	$.post("https://reqres.in/api/login",data,function(data,status){
		alert("Token no: "+data.token+" \nstatus: "+status)
	})
	})