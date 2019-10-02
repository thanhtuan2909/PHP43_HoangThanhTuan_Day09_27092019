$(document).ready(function(){
	$('form').submit(function(event){
		event.preventDefault();
		var a = $('#a').val();
		var b = $('#b').val();
		var result = '';
		var error = '';
		if (a == '' || b == '') {
			error += "<b>Không được để trống dữ liệu</b>";
			$('#error').html(error);
			$('#result').html('');
		} else if (isNaN(a) || isNaN(b)) {
			error += "<b>Cần nhập dữ liệu là số</b>";
			$('#error').html(error);
			$('#result').html('');
		} else {
			a = parseInt(a);
			b = parseInt(b);
			result += "Chu vi = " + ((a+b)*2) + "m" + "<br>" + "Diện tích = " + (a*b) + "m<sup>2</sup>";
			$('#error').html('');
			$('#result').html(result);
		}
	});
});