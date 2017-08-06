$(document).ready(function () {
	"use strict";
	

	
	

var $grid = $('#thumbnails').masonry({});
var $gridfs = $('#fullsize').masonry({});
	

$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});
$gridfs.imagesLoaded().progress( function() {
  $gridfs.masonry('layout');
});
	
//$('.thumb').masonry({
//  columnWidth: '.thumb',
//  itemSelector: '.thumb'
//});
	
$grid.isotope({
});

	
$('#theghostof').click(function() {
	
	 $gridfs.css("display","none");
	 $grid.css("display","inline-block"); 
            
	 $grid.isotope({ filter: '.theghostof' });
              
              });
	
$('#sketchbook').click(function() {
	
	$gridfs.css("display","none");
	 $grid.css("display","inline-block"); 
            
	 $grid.isotope({ filter: '.sketchbook' });
              
              });
	
$('#commissioned').click(function() {
	
	 $gridfs.css("display","none");
	 $grid.css("display","inline-block"); 
            
	 $grid.isotope({ filter: '.commissioned' });
              
              });

$('#fogtown').click(function() {
	
	 $gridfs.css("display","none");
	 $grid.css("display","inline-block"); 
            
	 $grid.isotope({ filter: '.fogtown' });
              
              });
	
$('#illustration').click(function() {
	
/*	$('#illsubcats').slideDown();*/
	
	 $gridfs.css("display","none");
	 $grid.css("display","inline-block"); 
            
	 $grid.isotope({ filter: '.illustration' });
              
              });
	
/*$('#illcont').click(function() {
	
	$('#illsubcats').slideDown();
  
              });
	
$('#anicont').click(function() {
	
	$('#anisubcats').slideDown();
        
              });*/
	
$('#animation').click(function() {
	
/*	$('#anisubcats').slideDown();*/
	
	 $gridfs.css("display","none");
	 $grid.css("display","inline-block"); 
            
	 $grid.isotope({ filter: '.animation' });
              
              });
	
$('#title, #logo').click(function() {
	
/*	$('#illsubcats').slideUp();
    $('#anisubcats').slideUp();*/
	$gridfs.css("display","none");
	 $grid.css("display","inline-block");  
            
	 $grid.isotope({ filter: '*' });
              
              });
	
$('.thumb').click(function() {
	

    var whatclass = $(this).attr('class').split(" ")[0];

	$grid.css("display", "none"); 
    $gridfs.css("display","inline-block");
	
	$gridfs.isotope({ filter: "." + whatclass });
	$grid.isotope({ filter: "." + whatclass });

              });
	
	
$gridfs.click(function() {
	
	//var whatclassfs = $(this).attr('class').split(" ")[1]; 
	
	$gridfs.css("display","none");
	 $grid.css("display","inline-block");  
      $grid.isotope({ filter: '*' });     
	 //$grid.isotope({ filter: "." + whatclassfs });
	
});
	



	
	

	
	
	
	
});