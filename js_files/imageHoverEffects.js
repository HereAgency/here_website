/****************************************************************
* 	ABOUT US PAGE - CLIENT LIST  				*
*****************************************************************/

// List items on hover effect
$( ".list-item" ).mouseenter(function(ev) {
	$(".list-item").css({"opacity": "0.13"});
	$(this).css({"color":"#ff2119", "height": "110px", "opacity":"1","paddingTop":"36px"});
	
	if ( $(this)[0] == $(".list-item").first()[0] ){
		$(this).next().css({"opacity": "0.6", "height": "97px"});
	} else if ( $(this)[0] == $(".list-item").last()[0] ){
		$(this).prev().css({"opacity": "0.6", "height": "97px"});
	} else {
		$(this).next().css({"opacity": "0.6", "height": "97px"});
		$(this).prev().css({"opacity": "0.6", "height": "97px"});
	}
	
	$(".list-header").css({"opacity":"1", "height": "84px"});
});

$( ".list-item" ).mouseleave(function(ev) {
	$(this).css({"opacity":"1", "color":"black", "height": "84px"});
	$(".list-item").css({"opacity":"1", "color":"black", "height": "84px","paddingTop":"24px"});
});

/* ****************************************************************
* IMAGE EFFECTS ON ITEMS HOVER
* Demo:	https://tympanus.net/Development/ImageRevealHover/	  *
*******************************************************************/

!function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}(window,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}function n(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function o(t,e,r){return this instanceof o?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=n(t),this.options=i({},this.options),"function"==typeof e?r=e:i(this.options,e),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(t,e,r)}function r(t){this.img=t}function s(t,e){this.url=t,this.element=e,this.img=new Image}var h=t.jQuery,a=t.console;o.prototype=Object.create(e.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&d[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},o.prototype.addImage=function(t){var e=new r(t);this.images.push(e)},o.prototype.addBackground=function(t,e){var i=new s(t,e);this.images.push(i)},o.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},o.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},r.prototype=Object.create(e.prototype),r.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},r.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},o.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(h=e,h.fn.imagesLoaded=function(t,e){var i=new o(this,t,e);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});  

// charming.min.js
!function(e){"undefined"==typeof module?this.charming=e:module.exports=e}(function(e,n){"use strict";n=n||{};var t=n.tagName||"span",o=null!=n.classPrefix?n.classPrefix:"char",r=1,a=function(e){for(var n=e.parentNode,a=e.nodeValue,c=a.length,l=-1;++l<c;){var d=document.createElement(t);o&&(d.className=o+r,r++),d.appendChild(document.createTextNode(a[l])),n.insertBefore(d,e)}n.removeChild(e)};return function c(e){for(var n=[].slice.call(e.childNodes),t=n.length,o=-1;++o<t;)c(n[o]);e.nodeType===Node.TEXT_NODE&&a(e)}(e),e});

{
	const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;

	// Linear interpolation
	const lerp = (a, b, n) => (1 - n) * a + n * b;
	const clamp = (num, min, max) => num <= min ? min : num >= max ? max : num;

	// from http://www.quirksmode.org/js/events_properties.html#position
	const getMousePos = (e) => {
		let posx = 0;
		let posy = 0;
		if (!e) e = window.event;
		if (e.pageX || e.pageY) {
			posx = e.pageX;
			posy = e.pageY;
		}
		else if (e.clientX || e.clientY) 	{
			posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}
		return { x : posx, y : posy }
    	}
	
	// Generate a random float.
	const getRandomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(2);
	
	// track the mouse position
	let mousepos = {x: 0, y: 0};

	// cache the mouse position
	let mousePosCache = mousepos;
	let direction = {x: mousePosCache.x-mousepos.x, y: mousePosCache.y-mousepos.y};

	// update mouse position when moving the mouse
	window.addEventListener('mousemove', ev => mousepos = getMousePos(ev));

    // Image effect
    class HoverImgList {
        constructor(el) {
		this.DOM = {el: el};
		this.DOM.reveal = document.createElement('div');
		this.DOM.reveal.className = 'hover-reveal';
		this.DOM.reveal.innerHTML = `<div class="hover-reveal__inner"><div class="hover-reveal__img" style="background-image:url(https://cdn.jsdelivr.net/gh/HereAgency/here_website@8ae52355b6486f529a3762928e70104b0a27477f/dist/${this.DOM.el.dataset.img})"></div></div>`;
		this.DOM.el.appendChild(this.DOM.reveal);
		this.DOM.revealInner = this.DOM.reveal.querySelector('.hover-reveal__inner');
		this.DOM.revealInner.style.overflow = 'hidden';
		this.DOM.revealImg = this.DOM.revealInner.querySelector('.hover-reveal__img');
		this.animatableProperties = {
			// Rotation angle
			rotation: {previous: 0, current: 0, amt: 0.08},
		};
		this.initEvents();
        }
        initEvents() {
		this.bounds = {
			el: this.DOM.el.getBoundingClientRect(),
			reveal: this.DOM.reveal.getBoundingClientRect(),
		};
           	this.positionElement = (ev) => {
			const mousePos = getMousePos(ev);
			const docScrolls = {
				left : document.body.scrollLeft + document.documentElement.scrollLeft, 
				top : document.body.scrollTop + document.documentElement.scrollTop
			};

			// calculate the mouse distance (current vs previous cycle)
			const mouseDistanceX = clamp(Math.abs(mousePosCache.x - mousepos.x), 0, 100);
			// direction where the mouse is moving
			direction = {x: mousePosCache.x-mousepos.x, y: mousePosCache.y-mousepos.y};
			// updated cache values
			mousePosCache = {x: mousepos.x, y: mousepos.y};

			// new rotation value
			this.animatableProperties.rotation.current = this.firstRAFCycle ? 0 : map(mouseDistanceX,0,100,0,direction.x < 0 ? 60 : -60);

			// set up the interpolated values
			this.animatableProperties.rotation.previous = this.firstRAFCycle ? this.animatableProperties.rotation.current : lerp(this.animatableProperties.rotation.previous, this.animatableProperties.rotation.current, this.animatableProperties.rotation.amt);

			// set styles
			gsap.to(this.DOM.reveal, 0.4, {
				x: mousePos.x-this.bounds.reveal.width/2-docScrolls.left,
				y: mousePos.y-this.bounds.reveal.height/2-docScrolls.top,
				rotation: this.animatableProperties.rotation.previous
			});

			//loop
			this.firstRAFCycle = false;
            	};
		this.mouseenterFn = (ev) => {
			this.positionElement(ev);
			this.showImage();
			this.firstRAFCycle = true;
		};
		this.mousemoveFn = (ev) => requestAnimationFrame(() => {
			this.positionElement(ev);
		});
		this.mouseleaveFn = () => {
			this.hideImage();
		};

		this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
		this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
		this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
        }
        showImage() {
		TweenMax.killTweensOf(this.DOM.revealInner);
		TweenMax.killTweensOf(this.DOM.revealImg);
		this.tl = new TimelineMax({
			onStart: () => {
			    // this.DOM.reveal.style.opacity = 1;
			    TweenMax.set(this.DOM.el, {zIndex: 1000});
			}
		})
		.set(this.DOM.reveal,{
			opacity: 1,
			delay: 0.2,
		})
		.add('begin')
		.add(new TweenMax(this.DOM.revealInner, 0.2, {
			ease: 'Sine.easeOut',
			startAt: {x: '-100%'},
			x: '0%'
		}), 'begin')
		.add(new TweenMax(this.DOM.revealImg, 0.2, {
			ease: 'Sine.easeOut',
			startAt: {x: '100%'},
			x: '0%'
		}), 'begin');
        }
        hideImage() {
		TweenMax.killTweensOf(this.DOM.revealInner);
		TweenMax.killTweensOf(this.DOM.revealImg);

		this.tl = new TimelineMax({
			onStart: () => {
			    TweenMax.set(this.DOM.el, {zIndex: 999});
			},
			onComplete: () => {
			    TweenMax.set(this.DOM.el, {zIndex: ''});
			    TweenMax.set(this.DOM.reveal, {opacity: 0});
			}
		})
		.add('begin')
		.add(new TweenMax(this.DOM.revealInner, 0.2, {
			ease: Sine.easeOut,
			x: '100%'
		}), 'begin')
		.add(new TweenMax(this.DOM.revealImg, 0.2, {
			ease: Sine.easeOut,
			x: '-100%'
		}), 'begin');
	}
}
	const arraySelector = document.querySelectorAll('.list-item');
	[...document.querySelectorAll('.list-item')].forEach(link => new HoverImgList(link));

	// Demo purspose only: Preload all the images in the page..
	const contentel = document.querySelector('.list-2');
	[...document.querySelectorAll('.list-item')].forEach((el) => {
		const imgsArr = el.dataset.img.split(',');
		for (let i = 0, len = imgsArr.length; i <= len-1; ++i ) {
			const imgel = document.createElement('img');
			imgel.style.visibility = 'hidden';
			imgel.style.width = 0;
			imgel.src = 'https://cdn.jsdelivr.net/gh/HereAgency/here_website@8ae52355b6486f529a3762928e70104b0a27477f/dist/' + imgsArr[i];
			imgel.className = 'preload';
			contentel.appendChild(imgel);
		}
	});
	imagesLoaded(document.querySelectorAll('.preload'), () => document.body.classList.remove('loading'));
}
