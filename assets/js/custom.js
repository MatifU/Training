$(document).ready(function() {
	$.getJSON( "./db.json", function( data ) {
    //console.log(data);
    $.each(data.cards, function (key, cards) {
		
	var data = '';
		
      data += '<li>';
	  data += '<div class="card spacer-bottom">';
	  data += '<a href="#"><div class="top-img"><img src="'+ cards.image_url +'" alt="'+ cards.title + '"></div></a>';
	  data += '<div class="card-body spacer-top spacer-right spacer-left">';
	  data += '<a href="#"><div class="d-flex">';
	  data += '<span class="icon"></span>';
	  data += '<h2>' + cards.title + '<span class="sub-heading">' + cards.subtitle + '</span></h2>';
	  data += '</div></a>';
	  data += '<div class="excerpt spacer-top spacer-bottom">';
	  data += '<p>' + cards.text.split(/\s+/).slice(0,20).join(" ") + '</p>';
	  data += '</div>';
	  data += '</div>';
	  data += '<div class="card-footer card-footer spacer-right spacer-left spacer-bottom">'
	  data += '<div class="learn-more"><a href="#">Learn More</a></div>';
	  data += '</div>';
	  data += '</div>';
	  data += '</li>';
	  if ( key < 6 ) {
		$('#data').append(data);
	  }
	  if ( key < 8 ) {
		$('#data2').append(data);
	  }
    
    	});
	});
});

// Slider

(function() {
 
	// store the slider in a local variable
	var $window = $(window),
		flexslider = { vars:{} };
   
	// tiny helper function to add breakpoints
	function getGridSize() {
	  return (window.innerWidth < 680) ? 1 :
	 		 (window.innerWidth < 991) ? 2 :
			 (window.innerWidth < 1200) ? 3 : 3;
	}
   
	$window.load(function() {
		setTimeout(function(){
			$('.flexslider').flexslider({
				animation: "slide",
				animationLoop: true,
				itemWidth: 308,
				itemMargin: 26,
				controlNav: false,
				minItems: getGridSize(), 
				maxItems: getGridSize()
			  });
		}, 100);
	});
   
	// check grid size on resize event
	$window.resize(function() {
	  var gridSize = getGridSize();
   
	  flexslider.vars.minItems = gridSize;
	  flexslider.vars.maxItems = gridSize;
	});
  }());