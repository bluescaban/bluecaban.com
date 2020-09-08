// Studio

$(document).ready(function() {
	
	// Menu dropdown

	$('#menu').click(function() {
		$('nav').slideToggle('fast');
		return false;
	});
	

	
	// nav - when click off menu menu disappears

	$(this).on({
		click: function(e) {
			if ($(e.target).attr('id') !== 'menu') {
				$('nav').slideUp('fast');
			}
		}
	});
	

	
	// Cursor arrows - turn to hand over link

	$(".expo").on('mousemove', function(e) {
		if ((e.pageX - this.offsetLeft) < $(this).width() / 2) {
			$(".expo").css('cursor', 'w-resize');
		} else {
			$(".expo").css('cursor', 'e-resize');
		}
	});
	

	
	// Intro (lookbook)

	var looktime;
	var lookbook = function(step) {
		if (step == undefined) step = 1;
		clearTimeout(looktime);
		var look = $('.look:visible').index('.look');
		if (step != 0) {
			$('.look').stop();
			$('.look:visible').fadeOut('fast');
		}
		look = look + step;
		if (look >= $('.look').length) {
			look = 0;
		} else if (look < 0) {
			look = $('.look').length - 1;
		}
		if (step != 0) {
			$('.look:eq(' + look + ')').stop().fadeIn('fast');
		}
		if ($('#book').length > 0) {
			looktime = setTimeout(lookbook, 2500);
		}
		now = look;
		updateCounter();
	};
	lookbook(0);
	$('#book').click(function() {
		//$(location).attr('href', '/portfolio'); not implemented
	});
	$('#lookbook_prev').click(function() {
		lookbook(-1);
		clearTimeout(looktime);
		$('#stop').hide();
		$('#play').show();
	});
	$('#lookbook_next').click(function() {
		lookbook(1);
		clearTimeout(looktime);
		$('#stop').hide();
		$('#play').show();
	});
	$('#stop').click(function() {
		clearTimeout(looktime);
		$(this).hide();
		$('#play').show();
	});
	$('#play').click(function() {
		lookbook(0);
		$(this).hide();
		$('#stop').show();
		$('#grid').show();
		$('#hide_grid').hide();
		$('main').removeClass('grid');
	});
	

	
	// Counters - 

	var now = 0;

	function updateCounter() {
		var itemTotal = $('figure:visible').length;
		var pageTotal = $('.expo').length;
		var drawTotal = $('.draw').length;
		var lookbookTotal = $('.look').length;
		var sortanalog = $('.analog').length;
		var sortdigital = $('.digital').length;
		var sortacrylic = $('.acrylic').length;
		var sortceramic = $('.ceramic').length;
		var sortcrayon = $('.crayon').length;
		var sortgouache = $('.gouache').length;
		var sortink = $('.ink').length;
		var sortmarker = $('.marker').length;
		var sortoilpaint = $('.oilpaint').length;
		var sortoilpastel = $('.oilpastel').length;
		var sortpencil = $('.pencil').length;
		var sortporcelain = $('.porcelain').length;
		var sortvector = $('.vector').length;
		var sortwood = $('.wood').length;
		var sortcollage = $('.collage').length;
		var sortproduct = $('.product').length;
		var sortdrawing = $('.drawing').length;
		var sortgraphic = $('.graphic').length;
		var sortmural = $('.mural').length;
		var sortneon = $('.neon').length;
		var sortpainting = $('.painting').length;
		var sortprint = $('.print').length;
		var sortsculpture = $('.sculpture').length;
		var sortvideo = $('.video').length;
		var sort2020 = $('.2020').length;
		var sort2019 = $('.2019').length;
		var sort2018 = $('.2018').length;
		var sort2017 = $('.2017').length;
		var sort2016 = $('.2016').length;
		var sort2015 = $('.2015').length;
		var sort2014 = $('.2014').length;
		var sort2013 = $('.2013').length;
		var sort2012 = $('.2012').length;
		var sort2011 = $('.2011').length;
		var sort2010 = $('.2010').length;
		var sortolder = $('.older').length;
		var label = itemTotal === 1 ? 'item' : 'items';
		$('#item_nr').text(itemTotal + ' ' + label);
		$('#draw_nr').text(drawTotal + ' ' + label);
		$('#page_nr').text(now + 1 + '/' + pageTotal);
		$('#work_nr').text(now + 1 + '/' + pageTotal);
		$('#look_nr').text(now + 1 + '/' + lookbookTotal);
		$('#analog_nr').text('(' + sortanalog + ')');
		$('#digital_nr').text('(' + sortdigital + ')');
		$('#acrylic_nr').text('(' + sortacrylic + ')');
		$('#ceramic_nr').text('(' + sortceramic + ')');
		$('#crayon_nr').text('(' + sortcrayon + ')');
		$('#gouache_nr').text('(' + sortgouache + ')');
		$('#ink_nr').text('(' + sortink + ')');
		$('#marker_nr').text('(' + sortmarker + ')');
		$('#oilpaint_nr').text('(' + sortoilpaint + ')');
		$('#oilpastel_nr').text('(' + sortoilpastel + ')');
		$('#pencil_nr').text('(' + sortpencil + ')');
		$('#porcelain_nr').text('(' + sortporcelain + ')');
		$('#vector_nr').text('(' + sortvector + ')');
		$('#wood_nr').text('(' + sortwood + ')');
		$('#collage_nr').text('(' + sortcollage + ')');
		$('#product_nr').text('(' + sortproduct + ')');
		$('#drawing_nr').text('(' + sortdrawing + ')');
		$('#graphic_nr').text('(' + sortgraphic + ')');
		$('#mural_nr').text('(' + sortmural + ')');
		$('#neon_nr').text('(' + sortneon + ')');
		$('#painting_nr').text('(' + sortpainting + ')');
		$('#print_nr').text('(' + sortprint + ')');
		$('#sculpture_nr').text('(' + sortsculpture + ')');
		$('#video_nr').text('(' + sortvideo + ')');
		$('#2020_nr').text('(' + sort2020 + ')');
		$('#2019_nr').text('(' + sort2019 + ')');
		$('#2018_nr').text('(' + sort2018 + ')');
		$('#2017_nr').text('(' + sort2017 + ')');
		$('#2016_nr').text('(' + sort2016 + ')');
		$('#2015_nr').text('(' + sort2015 + ')');
		$('#2014_nr').text('(' + sort2014 + ')');
		$('#2013_nr').text('(' + sort2013 + ')');
		$('#2012_nr').text('(' + sort2012 + ')');
		$('#2011_nr').text('(' + sort2011 + ')');
		$('#2010_nr').text('(' + sort2010 + ')');
		$('#older_nr').text('(' + sortolder + ')');
	}
	updateCounter();
	

	
	// Header

	$(window).scroll(function() {
		if ($(this).scrollTop() > 1000) {
			$('#top').fadeIn('fast');
		} else {
			$('#top').fadeOut('fast');
		}
	});
	$("#top").click(function() {
		$("html, body").animate({
			scrollTop: 0
		}, 'fast');
		return false;
	});
		

	
	// Back

	$('#back').click(function() {
		parent.history.back();
		return false;
	});
	

	
	// Home

	$("#home").click(function() {
		$(location).attr('href', '../index.html');
	});
	$("#home_info").click(function() {
		$(location).attr('href', '../index.html');
	});
	

	
	// Sidebar

	function toggleBar() {
		$("aside, section").toggleClass('open');
		$("#sort").text(function(p, text) {
			return text === "sort" ? "hide" : "sort";
		});
	}
	$("#sort").click(function() {
		toggleBar();
	});
	$('aside:not(.about) p').on({
		click: function(evt) {
			var type = this.id;
			$('body').scrollTop(0);
			if (type === 'all') {
				$('figure').show();
				$('aside p:not(#all)').hide();
				$('.selected').removeClass('selected');
			} else {
				if ($(this).hasClass('selected')) {
					$('figure').show();
					$('.selected').removeClass('selected');
					//$('aside p:not(#all)').hide();
				} else {
					$('.selected').removeClass('selected');
					$(this).addClass('selected');
					$('figure').hide();
					$('figure.' + type).show();
				}
			}
		}
	});
	$('aside span').on({
		click: function(evt) {
			var type = this.id;
			var numVisible = $('aside p.' + type + ':visible').length;
			if (numVisible > 0) {
				$('aside p.' + type).hide();
			} else {
				$('aside p:not(#all)').hide();
				$('aside p.' + type).show();
			}
		}
	});
	$('aside p').click(function() {
		updateCounter();
	});
	

	
	// List / grid view --- NOT YET IMPLEMENTED

	function toggleListView() {
		$("section").toggleClass('list');
		$("#list").text(function(p, text) {
			return text === "grid" ? "list" : "grid";
		});
	}
	$('#list').on({
		click: function() {
			toggleListView();
		}
	});
	


	// Slider

	var divs = $('.expo');
	divs.hide().first().show();
	$("#next").click(function(e) {
		divs.eq(now).hide("slide", {
			direction: "left"
		}, 300);
		now = (now + 1 < divs.length) ? now + 1 : 0;
		divs.eq(now).show("slide", {
			direction: "right"
		}, 300);
		updateCounter();
	});
	$("#prev").click(function(e) {
		divs.eq(now).hide("slide", {
			direction: "right"
		}, 300);
		now = (now > 0) ? now - 1 : divs.length - 1;
		divs.eq(now).show("slide", {
			direction: "left"
		}, 300);
		updateCounter();
	});
	
	// Thumbnails (click)

	$('#thumbnails img').on('click',function(){

		$('#thumbnails img').removeClass('active');

		$(this).addClass('active');

		var pos=$(this).position().left; 
		var currentscroll=$("#thumbnails").scrollLeft(); 
		var divwidth=$("#thumbnails").width(); 
		
		pos=(pos+currentscroll)-(divwidth/2);

		$('#thumbnails').animate({
	    	scrollLeft: pos
		});
		
		divs.eq(now).fadeOut('fast');

		now = $(this).index();

		divs.eq(now).fadeIn('slow');

		updateCounter();
		
	});

	// Thumbnails (next & prev)

	let thumbnails = $('#thumbnails img');

	$("#next").click(function() {
	  	let $target = thumbnails.filter('.active').removeClass('active').next();
	  	if ($target.length == 0)
	    	$target = thumbnails.first();
	  	$target.addClass('active');

	  	var posNext=$target.position().left; 
		var currentScrollNext=$("#thumbnails").scrollLeft(); 
		var divWidthNext=$("#thumbnails").width(); 
		
		posNext=(posNext+currentScrollNext)-(divWidthNext/2);

	  	$('#thumbnails').animate({
	    	scrollLeft: posNext
		});
	});

	$("#prev").click(function() {
	  	let $target = thumbnails.filter('.active').removeClass('active').prev();
	  	if ($target.length == 0)
	    	$target = thumbnails.last();
	  	$target.addClass('active');

	  	var posPrev=$target.position().left; 
		var currentScrollPrev=$("#thumbnails").scrollLeft(); 
		var divWidthPrev=$("#thumbnails").width(); 
		
		posPrev=(posPrev+currentScrollPrev)-(divWidthPrev/2);

	  	$('#thumbnails').animate({
	    	scrollLeft: posPrev
		});
	});



	// Slider (Navigation)

	$(".expo").click(function(e) {
		console.log(e);
		if (!$(e.target).hasClass('button')) {
			if ((e.pageX - this.offsetLeft) < $(this).width() / 2) {
				divs.eq(now).hide("slide", {
					direction: "right"
				}, 300);
				now = (now > 0) ? now - 1 : divs.length - 1;
				divs.eq(now).show("slide", {
					direction: "left"
				}, 300);
				updateCounter();

				let $target = thumbnails.filter('.active').removeClass('active').prev();
			  	if ($target.length == 0)
			    	$target = thumbnails.last();
			  	$target.addClass('active');

			  	var posPrev=$target.position().left; 
				var currentScrollPrev=$("#thumbnails").scrollLeft(); 
				var divWidthPrev=$("#thumbnails").width(); 
				
				posPrev=(posPrev+currentScrollPrev)-(divWidthPrev/2);

			  	$('#thumbnails').animate({
			    	scrollLeft: posPrev
				});
				
			} else {
				divs.eq(now).hide("slide", {
					direction: "left"
				}, 300);
				now = (now + 1 < divs.length) ? now + 1 : 0;
				divs.eq(now).show("slide", {
					direction: "right"
				}, 300);
				updateCounter();

				let $target = thumbnails.filter('.active').removeClass('active').next();
			  	if ($target.length == 0)
			    	$target = thumbnails.first();
			  	$target.addClass('active');

			  	var posNext=$target.position().left; 
				var currentScrollNext=$("#thumbnails").scrollLeft(); 
				var divWidthNext=$("#thumbnails").width(); 
				
				posNext=(posNext+currentScrollNext)-(divWidthNext/2);

			  	$('#thumbnails').animate({
			    	scrollLeft: posNext
				});
				
			}
		}
	});
	
	
	//  Paintings -- NOT IMPLEMENTED

	$("#view").click(function() {
		$('.wall').toggleClass("wallpaper");
		$('.text').toggleClass("textpaper");
	});
	$("#view").click(function() {
		$(this).text(function(p, text) {
			return text === "wall" ? "done" : "wall";
		});
	});



	// About - NAV

	var tv = $('.profile');
	tv.hide().first().show();
	$(".profile").click(function(e) {
		tv.eq(now).hide();
		now = (now + 1 < tv.length) ? now + 1 : 0;
		tv.eq(now).show();
	});
	$('aside.about a').on({
		click: function(e) {
			$('aside.about a').removeClass('selected');
			$(this).addClass('selected');
			var section = $(this).attr('href');
			var $section = $(section);
			var sectionOffset = Math.round($section.offset().top);
			animateScrollPosition(section, sectionOffset);
		}
	});
	$('#about_prev').on({
		click: function() {
			var $selected = $('aside.about a.selected');
			
			var $prev = $selected.prev('.internal');
			console.log($prev);
			if ($selected.length === 0 || $prev.length === 0) {
				$prev = $('aside.about a.internal:last');
			}

			var hash = $prev.attr('href');
			console.log(hash);
			var $section = $('article' + hash);
			var top = $section.offset().top;
			animateScrollPosition(hash, top);
		}
	});
	$('#about_next').on({
		click: function() {

			var $selected = $('aside.about a.selected');

			var $next = $selected.next('.internal');
			
			if ($selected.length === 0 || $next.length === 0) {
				$next = $('aside.about a:first');
			}
			var hash = $next.attr('href');

			var $section = $('article' + hash);
			var top = $section.offset().top;
			animateScrollPosition(hash, top);
		}
	});
});



// Anchor scrolling

function animateScrollPosition(hash, top) {
	animatingScroll = true;
	if (isFirefox()) {
		$(window).scrollTop(top);
		animatingScroll = false;		
		setHash(hash);
	} else {
		$(document.documentElement).animate({
			scrollTop: top + 'px'
		}, 'fast', function() {
			//setHash(hash);
			animatingScroll = false;
		});
	}

	$('aside.about a').removeClass('selected');
	$('aside.about a[href="#' + hash.replace('#', '') + '"]').addClass('selected');
}



// FF hack

function isFirefox() {
	var browser = navigator.userAgent.toLowerCase();
	if (browser.indexOf('firefox') === -1) {
		return false;
	} else {
		return true;
	}
}
var animatingScroll = false;
var currentMenuItem;

function setHash(hash) {
	if (history.pushState) {
		history.pushState(null, null, '#' + hash);
	} else {
		parent.location.hash = '#' + hash;
	}
}

function setMenuSection(id) {
	$('aside.about a').removeClass('selected');
	$('aside.about a[href="#' + id + '"]').addClass('selected');
}
$(document).on({
	scroll: function(e) {
		if (!isFirefox()) {
			$('.about_item').each(function() {
				var offset = $(this).position().top - $(window).scrollTop() - $('header').height();
				if (offset < 0) {
					$(this).addClass('above');
				} else {
					$(this).removeClass('above');
				}
			});
			if ($(window).scrollTop() === 0) {
				setHash('');
			}
			$('.about_item').removeClass('selected');
			var $last = $('.above:last').addClass('selected');
			var id = $last.attr('id');
			if (!animatingScroll) {
				if (currentMenuItem != id) {
					currentMenuItem = id;
					setHash(id);
					setMenuSection(id);
				}
			}
		}
	}
});