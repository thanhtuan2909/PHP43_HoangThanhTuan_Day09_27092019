$(document).ready(function(){
	$('form').submit(function(event){
		event.preventDefault();
		var a = $('#a').val();
		var result = '';
		var error = '';
		if (a == '') {
			error += "Không được để trống";
			$('#error').html(error);
			$('#result').html('');
		} else if (isNaN(a)) {
			error += "Nhập dữ liệu là số";
			$('#error').html(error);
			$('#result').html('');
		} else {
			a = parseInt(a);
			result += "Chu vi = " + (a*4) + "m" + "<br>" + "Diện tích = " + (a*a) + "m<sup>2</sup>";
			$('#error').html('');
			$('#result').html(result);
		}
	});
});