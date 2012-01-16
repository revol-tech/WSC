window.addEvent('domready', function() {
	var isTouchEnabled = false;
	if ('ontouchstart' in window) {
		document.body.addClass('touch-enabled');
		isTouchEnabled = true;
	}
	
	var updateOrientation = function() {
		if (window.orientation) {
			switch(window.orientation) {
	        case 0:   // Portrait
	        case 180: // Upside-down Portrait
	        	document.body.addClass('portrait');
	        	document.body.removeClass('landscape');
	            break;
	        case -90: // Landscape: turned 90 degrees counter-clockwise
	        case 90:  // Landscape: turned 90 degrees clockwise
	        	document.body.addClass('landscape');
	        	document.body.removeClass('portrait');
	            break;
			}
		}
	}
	
	window.addEvent('orientationchange', updateOrientation);
	updateOrientation();
	
	var slideshow = $('slideshow');
	if (slideshow) {
	  var currentIndex = 0;
	  var i = 0;
	  var indicators = $('slideshow-indicator').getElements('li');
	  var indicatorCount = indicators.length;  
	  var images = slideshow.getElements('div');
    images.each(function(img,i){ 
      if (i > 0) {
        img.set('opacity',0);
      }
    });
    
    var slideshowClick = function() {
      i = currentIndex + 1;
      
      if (i >= indicatorCount) {
        i = 0;
      }
      indicators[i].getElement('a').fireEvent('click');
    }
    var slideshowEnter = function() {
      indicators[currentIndex].getElement('a').addClass('active');
    }
    var slideshowLeave = function() {
      indicators[currentIndex].getElement('a').removeClass('active');
    }
    
    slideshow.addEvent('click', slideshowClick);
    var headerTitle = $('header').getElement('.title');
    headerTitle.addEvent('click', slideshowClick);
    slideshow.addEvent('mouseover', slideshowEnter);
    slideshow.addEvent('mouseout', slideshowLeave);
    headerTitle.addEvent('mouseover', slideshowEnter);
    headerTitle.addEvent('mouseout', slideshowLeave);
	  
	  indicators.each(function(li, i) {
	    li.getElement('a').addEvent('click', function(e) {
	      if (e) {
	        e.stop();
	      }
	      $('slideshow-indicator').getElements('a.active').removeClass('active');
	      this.addClass('active');
	      indicators.removeClass('selected');
	      li.addClass('selected');
	      images[currentIndex].fade('out');
	      images[i].fade('in');
	      currentIndex = i;
	    });
	  });
	  /*
	  var showDuration = 7000;
	  var images = slideshow.getElements('div');
	  var currentIndex = 0;
	  var interval;	  
	  images.each(function(img,i){ 
	    img.set('tween', {duration: 'long'});
	    if(i > 0) {
	      img.set('opacity',0);
	    }
	  });
	  var showNextImage = function() {
	    images[currentIndex].fade('out');
	    images[currentIndex = currentIndex < images.length - 1 ? currentIndex+1 : 0].fade('in');
	  };
	  
	  window.addEvent('load',function(){
	    interval = showNextImage.periodical(showDuration);
	  });	  
	  */
	}
	
	var workInProgress = $('work-in-progress');
	if (workInProgress) {
		var toggle = workInProgress.getElement('a');
		var div = workInProgress.getElement('div');
		var close = div.getElement('a');
		toggle.addEvent('click', function(e) {
			e.stop();
			div.removeClass('hide');
			this.addClass('hide');
		});
		close.addEvent('click', function(e) {
			e.stop();
			div.addClass('hide');
			toggle.removeClass('hide');
		});
	}
	var aboutUs = $('how-we-work');
	if (aboutUs) {
		document.getElements('.pages').each(function(pages) {
			
			var parent = pages.getParent();
			var nav = parent.getElements('.nav li');
			var strip = parent.getElement('.strip');

			var pageIndicator = parent.getElements('.page-indicator li');
			
			nav.each(function(item, i) {
				
				var pageChange = function(e) {
					e.stop();
					var val = -i * 960;
					var href = item.getElement('a').get('href');
					nav.removeClass('selected');
					pageIndicator.removeClass('selected');
					nav[i].addClass('selected');
					pageIndicator[i].addClass('selected');
					strip.tween('margin-left', val);
				};
				item.addEvent('click', pageChange);
				pageIndicator[i].addEvent('click', pageChange);
			});		

			if (isTouchEnabled && $('top').hasClass('mobile-loaded')) {
				var aboutUsContent = aboutUs.getElement('#what-we-do .content');
				var aboutUsSwipe = new MooSwipe(aboutUsContent, {tolerance: 50, preventDefaults: false});
				aboutUsContent.set('tween', {fps: 24, duration: 'short'});
				aboutUsSwipe.addEvent('swipe', function(direction) {
					if (direction == 'left') {
						aboutUsContent.tween('margin-left', -245);
					} else {
						aboutUsContent.tween('margin-left', 0);
					}
				});
				var processContent = $('process').getElement('.content');
				var processSwipe = new MooSwipe(processContent, {tolerance: 50, preventDefaults: false});
				processContent.set('tween', {fps: 24, duration: 'short'});
				processSwipe.addEvent('swipe', function(direction) {
					var offset = processContent.getStyle('margin-left').toInt();
					
					if (direction == 'left') {
						offset = offset - 245;
					} else {
						offset = offset + 245;
					}
					if (offset < -735) {
						offset = 735;
					} 
					if (offset > 0) {
						offset = 0;
					}
					processContent.tween('margin-left', offset);
				});

				var approachContent = $('approach').getElement('.content');
				var approachSwipe = new MooSwipe(approachContent, {tolerance: 50, preventDefaults: false});
				approachContent.set('tween', {fps: 24, duration: 'short'});
				approachSwipe.addEvent('swipe', function(direction) {
					var offset = approachContent.getStyle('margin-left').toInt();
					
					if (direction == 'left') {
						offset = offset - 245;
					} else {
						offset = offset + 245;
					}
					if (offset < -735) {
						offset = 735;
					} 
					if (offset > 0) {
						offset = 0;
					}
					approachContent.tween('margin-left', offset);
				});
				
				var thinkingContent = $('posts');
				var thinkingSwipe = new MooSwipe(thinkingContent, {tolerance: 50, preventDefaults: false});
				thinkingContent.set('tween', {fps: 24, duration: 'short'});
				thinkingSwipe.addEvent('swipe', function(direction) {
					var offset = thinkingContent.getStyle('margin-left').toInt();
					
					if (direction == 'left') {
						offset = offset - 245;
					} else {
						offset = offset + 245;
					}
					if (offset < -735) {
						offset = 735;
					} 
					if (offset > 0) {
						offset = 0;
					}
					thinkingContent.tween('margin-left', offset);
				});

				var peopleContent = $('staff');
				var peopleSwipe = new MooSwipe(peopleContent, {tolerance: 50, preventDefaults: false});
				peopleContent.set('tween', {fps: 24, duration: 'short'});
				peopleSwipe.addEvent('swipe', function(direction) {
					var offset = peopleContent.getStyle('margin-left').toInt();
					
					if (direction == 'left') {
						offset = offset - 195;
					} else {
						offset = offset + 195;
					}
					if (offset < -2730) {
						offset = 2730;
					} 
					if (offset > 0) {
						offset = 0;
					}
					peopleContent.tween('margin-left', offset);
				});

				var clientContent = $('clients').getElement('.columns');
				var clientSwipe = new MooSwipe(clientContent, {tolerance: 50, preventDefaults: false});
				clientContent.set('tween', {fps: 24, duration: 'short'});
				clientSwipe.addEvent('swipe', function(direction) {
					var offset = clientContent.getStyle('margin-left').toInt();
					
					if (direction == 'left') {
						offset = offset - 125;
					} else {
						offset = offset + 125;
					}
					if (offset < -625) {
						offset = 625;
					} 
					if (offset > 0) {
						offset = 0;
					}
					clientContent.tween('margin-left', offset);
				});

				var caseContent = $('case-menu');
				var caseSwipe = new MooSwipe(caseContent, {tolerance: 50, preventDefaults: false});
				caseContent.set('tween', {fps: 24, duration: 'short'});
				caseSwipe.addEvent('swipe', function(direction) {
					var offset = caseContent.getStyle('margin-left').toInt();
					
					if (direction == 'left') {
						offset = offset - 255;
					} else {
						offset = offset + 255;
					}
					if (offset < -1470) {
						offset = 1470;
					} 
					if (offset > 0) {
						offset = 0;
					}
					caseContent.tween('margin-left', offset);
				});

				
			}
		});
	}

	
	document.getElements('a[href^=mailto:firstname]').each(function(a) {
	      var name = a.get('title').toLowerCase();
	      if (!a.hasClass('only')) {
	    	  a.set('text', a.get('text').replace('firstname', name));
	      }
	      a.set('href', a.get('href').replace('firstname', name));
	      // for ie6
	      if (!a.hasClass('only')) {
	    	  a.set('text', a.get('text').replace('firstname', name));
	      }
	});
	
	var services = $('services');
	if (services) {
		var originalHeight = services.getSize().y;
		var openHeight = services.getElement('.content').getSize().y + services.getElement('.nav').getSize().y;
		services.getElements('.toggle').addEvent('click', function(e) {
			var tweenToHeight = null;
			if (services.hasClass('open')) {
				services.set('tween', {onComplete: function() {services.removeClass('open')}});
				tweenToHeight = originalHeight;
			} else {
				services.set('tween', {onComplete: function() {services.addClass('open')}});
				tweenToHeight = openHeight;
			}
			services.tween('height', tweenToHeight);
		});
	}
	
	document.getElements('.searchform input[type=text]').each(function(input) {
    var defaultValue = input.get('title');
    if (input.get('value') == '') {
      input.set('value', defaultValue);
    }
    input.addEvent('focus', function(e) {
      input.addClass('active');
      if (input.get('value') == defaultValue) {
        input.set('value', '');
      }
    });
    input.addEvent('blur', function(e) {
      if (input.get('value').trim() == '') {
        input.removeClass('active');
        input.set('value', defaultValue);
      }
    });     	  
	});
	
	var nav = $('nav-bar');
	if (nav) {
		var links = $('header').getElements('.content ul a');
		var offset = -42;
		/*
		if (nav.getStyle('display') != 'block') {
			offset = 0;
		}
		*/
		links.addEvent('click', function(e) {
			var href = this.get('href');
			if (href.substr(0, 1) == '#') {
				e.stop();
				var id = href.substr(1);
        var off = -42;
        if (id == 'services') {
          off = -41;
        }
				
				var el = $(id); 
				if (el) {
					 new Fx.Scroll(window).start(0, el.getPosition().y + off);
				}
			}
		});

		var links = nav.getElements('a');
		links.addEvent('click', function(e) {
			var href = this.get('href');
			if (href.substr(0, 1) == '#') {
				e.stop();
				var id = href.substr(1);
				var off = -42;
				if (id == 'services') {
				  off = -41;
				}
				var el = $(id); 
				if (el) {
					 new Fx.Scroll(window).start(0, el.getPosition().y + off);
				}
			}
		});
		document.getElements('a.to-top').addEvent('click', function(e) {
			e.stop();
			new Fx.Scroll(window).start(0, 0);
		});
		var positions = [];
		links.each(function(a) {
			var href = a.get('href');
			if (href.substr(0, 1) == '#') {
				
				var id = href.substr(1);
				var el = $(id); 
				if (el) {
					var pos = el.getPosition().y;
					if (pos > 0) {
						pos = pos  - 140;
					}
					if (id == 'top') {
						id = 'home';
					}
					positions.include({'id': id, 'pos': pos});
				}
			}
		});
		positions = positions.reverse();
		var len = positions.length;
		//nav.set('tween', {duration: 'short', link: 'cancel'});
		
		var tw = new Fx.Tween(nav, {
	    link: 'cancel',
	    property: 'margin-top',
	    duration: 80,
	    transition: 'sine:out',
	    onComplete: function() {
	      if (nav.getStyle('margin-top') == 0) {
	        nav.removeClass('inverse');
	      } else {
	        nav.addClass('inverse'); 
	      }
	    }
		}); 
		(function() {
      var y = window.getScroll().y;
      if (y >= 564) {
        tw.start(0);
      } else {
        tw.start(-42);
      }     		  
		}).periodical(30);
		
		window.addEvent('scroll', function(e) {
			var y = window.getScroll().y;
			/*
			if (y >= 65) {
			  nav.addClass('fixed');
			  if (y >= 564) {
			    nav.addClass('inverse');
			    nav.tween('margin-top', 0);
			  } else {
	        nav.tween('margin-top', -42);
	        (function() {
	          nav.removeClass('inverse');
	        }).delay(300);
			  }
			} else {
			  nav.removeClass('fixed');
			  nav.removeClass('inverse');
			}
			*/
			/*
			if (y > 1512 && nav.hasClass('hidden')) {
				nav.set('tween', {onComplete: function() {nav.removeClass('hidden');}})
				nav.fade('in');
			}
			if (y < 1512) {
				nav.set('tween', {onComplete: function() {nav.addClass('hidden');}})
				nav.fade('out');				
			}
			*/
			
			for (var x = 0;x < len; x++) {
				if (y >= positions[x].pos) {
					var sel = nav.getElement('.selected');
					if (!sel || (sel.get('href') != '#' + positions[x].id)) {
						links.removeClass('selected');
						var l = nav.getElement('li.' +positions[x].id+' a');
						
						if (l) {
							l.addClass('selected');
						}
					}
					break;
				}
			}
		});
	}
	
	
});