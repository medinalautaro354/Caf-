$(document).ready(function(){

	$(window).scroll(function(){
		var windowWidth = $(window).width();

		if(windowWidth > 800){
			//para calcular el valor del scroll hacia arriba
			var scroll = $(window).scrollTop();

			$('header .textos').css({
				'transform': 'translate(0px,' + scroll / 2 + '%)'
			});

			$('.acerca-de article').css({
				'transform': 'translate(0px, -' + scroll / 4 + '%)'
			});
		}
	});

	$(window).resize(function(){
		var windowWidth = $(window).width();

		if(windowWidth < 800){
			//por si alguien con una table gira la pantalla no se ponga el acerca de muy arriba

			$('.acerca-de article').css({
				'transform': 'translate(0px, 0px)'
			});
		}
	});

});