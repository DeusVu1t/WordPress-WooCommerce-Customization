$(document).on('click', '#msds--download--all', function(e) {
	e.preventDefault();
	let button = $(this);
	let files = button.data('msds');
	let ajaxUrl = 'https://www.moje-auto.pl/wp-admin/admin-ajax.php';
	let zipName = button.data('msds-zip');

	console.log('0');
	button.addClass('generating');
	jQuery.ajax({
		url: ajaxUrl,
		type: 'post',
		data: {
			action: 'massFileDownload',
			files: files,
			zip_name: zipName
		},
		success: function(response) {
			var url = 'https://' + response;
			console.log('success_1');
			$.ajax({
				url: url,
				method: 'GET',
				xhrFields: {
					responseType: 'blob'
				},
				success: function() {
					var a = document.createElement('a');
					a.href = url;
					a.click();
					window.URL.revokeObjectURL(url);
					button.removeClass('generating');
				}
			});
		}
	});
});
