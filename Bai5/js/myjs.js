$(document).ready(function(){
	$('form').submit(function(event){
		event.preventDefault();
		var r = $('#r').val();
		var result = '';
		var error = '';
		if (r == '') {
			error += "<b>Không được để trống</b>";
			$('#error').html(error);
			$('#result').html('');
		} else if (isNaN(r)) {
			error += "<b>Nhập dữ liệu là số</b>";
			$('#error').html(error);
			$('#result').html('');
		} else {
			r = parseInt(r);
			result += "Chu vi = " + (2*r*3.14) + "m" + "<br>" + "Diện tích = " + (3.14*r*r) + "m<sup>2</sup>";
			$('#error').html('');
			$('#result').html(result);
		}
	});
});