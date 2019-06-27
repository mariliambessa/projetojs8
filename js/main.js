$(document).ready(function(){

	$('button').click(function(){
		$('.navbar-brand').html(`
			<img src="${dados.avatar_url}" class="avatar d-inline-block align-top">
			${dados.name}
		`);

		$('.navbar-brand').addClass('d-flex align-items-center');
		$('nav').toggleClass('trocar-cor');
		if ($('nav').hasClass('trocar-cor')) {
			
		}
	});

});