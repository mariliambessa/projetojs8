$(document).ready(function(){

	const botao = $('button');
	let navbar = $('.navbar-brand');
	let corNav = $('nav');
	let bio = $('#bio');
	let inputNome = $('#nome');
	let inputBotao = $('#input-button');

	botao.click(function(){
		navbar.html(`
			<img src="${dados.avatar_url}" class="avatar d-inline-block align-top">
			${dados.name}
		`);
		navbar.addClass('d-flex align-items-center');
		corNav.toggleClass('trocar-cor');

		bio.html(`${dados.bio}`)
		});

		inputBotao.click(function(){
			let nome = inputNome.val();
			navbar.html(`
			<img src="${dados.avatar_url}" class="avatar d-inline-block align-top">
			${nome}
		`);
		
	});

});