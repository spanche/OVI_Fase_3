// JavaScript Document
$(function() {

	//highlight the current nav
	$("#inicio a:contains('Inicio')").parent().addClass('active');
	$("#clinica a:contains('Clínica')").parent().addClass('active');
	$("#especial a:contains('Especialistas')").parent().addClass('active')
	$("#casos a:contains('Casos Clínicos de Odontología')").parent().addClass('active');
	$("#contacto a:contains('Contacto')").parent().addClass('active');
   	
	if($("#clinica a:contains('Clínica')").parent().hasClass('active')){
		$(".dropdown a:contains('Acerca')").parent().addClass('active');
	}
	if($("#especial a:contains('Especialistas')").parent().hasClass('active')){
		$(".dropdown a:contains('Acerca')").parent().addClass('active');
	}
	if($("#casos a:contains('Casos Clínicos de Odontología')").parent().hasClass('active')){
		$(".dropdown a:contains('Servicios Odontológicos')").parent().addClass('active');
	}
	//make menus drop automatically
	$('ul.nav li.dropdown').hover(function() {
		$('.dropdown-menu', this).fadeIn();
	}, function() {
		$('.dropdown-menu', this).fadeOut('fast');
	});//hover
	
}); //jQuery is loaded