$(document).ready(function(){
	$('form').submit(function(event){
		// ngăn ngừa hành vi mặc định của thẻ
		event.preventDefault();
		var email = $('input[type=email]').val();
		var name = $('#name').val();
		var phone = $('#phone').val();
		var notes = $('textarea').val();
		var guest = $('#guest').val();
		var result = '';
		var error = '';
		// xử lý validate
		if (email == '' || name == '' || phone == '' || notes == '' || guest == '') {
			error = "Cần nhập đủ tất cả các trường";
			$('#error').html(error);
			$('#result').html('');
		} else if (isNaN(guest)) {
			error = "Cần nhập dữ liệu số cho trường này";
			$('#error').html(error);
			$('#result').html('');
		} else {
			result += "Email: " + email + "<br>" +"Name: " + name + "<br>" + "Phone: " + phone + "<br>" + "Note: " + notes + "<br>" + "Guest: " + guest;
			$('#result').html(result);
			$('#error').html('');
		}
	});
});