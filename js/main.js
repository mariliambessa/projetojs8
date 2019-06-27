$(document).ready(function(){

	var botao = $('button');
	var navbar = $('.navbar-brand')
	var corNav = $('nav')

	botao.click(function(){
		navbar.html(`
			<img src="${dados.avatar_url}" class="avatar d-inline-block align-top">
			${dados.name}
		`);
		navbar.addClass('d-flex align-items-center');
		corNav.toggleClass('trocar-cor');
		
	});

});