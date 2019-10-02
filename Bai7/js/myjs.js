$(document).ready(function(){
	$('form').submit(function(event){
		event.preventDefault();
		var a = $('#a').val();
		var result = '';
		var error = '';
		if (a == '') {
			error += '<b>Không được để trống dữ liệu</b>';
			$('#error').html(error);
			$('#result').html('');
		} else if (isNaN(a)) {
			error += '<b>Cập nhật dữ liệu là số</b>';
			$('#error').html(error);
			$('#result').html('');
		} else {
			var sochan = '';
			var sole = '';
			a = parseInt(a);
			for (var i = 1; i <= a; i++) {
				if (i%2 == 0) {
					sochan += i + ', ';
				} else {
					sole += i + ', ';
				}
			}
			result += "Các số chẵn từ 1 - " + a + " là: " + sochan.substring(0,sochan.length - 2) + '<br>' + "Các số lẻ từ 1 - " + a + " là: " + sole.substring(0,sole.length - 2);
			$('#result').html(result);
			$('#error').html('');
		}
	});
});