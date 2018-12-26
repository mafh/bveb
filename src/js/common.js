var windowWidth = window.innerWidth,
	windowHeight = window.innerHeight,
	mobile = false,
	tablet = true,
	desktop = true,
	opera12 = false,
	apple = false,
	loaded = false,
	ie = 0,
	oldie = false,
	scrolltop = 0,
	scrollWidth = 0;

var isGained = false;

function isMobile() {
	var check = false;
	(function(a) {
		if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
	})(navigator.userAgent || navigator.vendor || window.opera);
	return check;
}

function isTablet() {
	return (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
}

function isApple() {
	return (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
}

function isAndroid() {
	return (/android/i.test(navigator.userAgent.toLowerCase()));
}

function isOpera12() {
	if (navigator.userAgent.indexOf('Opera') !== -1 && navigator.userAgent.indexOf('OPR/') === -1) {
		var version = navigator.userAgent.substring(navigator.userAgent.indexOf('Version/') + 8);
		if (version.indexOf('12.') !== false) return true;
		return false;
	}
	return false;
}

function isIE() {
	var myNav = navigator.userAgent.toLowerCase();
	return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}

function getScrollbarWidth() {
	var outer = document.createElement('div');
	outer.style.visibility = 'hidden';
	outer.style.width = '100px';
	outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
	document.body.appendChild(outer);
	var widthNoScroll = outer.offsetWidth;
	outer.style.overflow = 'scroll';
	var inner = document.createElement('div');
	inner.style.width = '100%';
	outer.appendChild(inner);
	var widthWithScroll = inner.offsetWidth;
	outer.parentNode.removeChild(outer);
	return widthNoScroll - widthWithScroll;
}

mobile = isMobile();
tablet = isTablet();
desktop = (isMobile() || isTablet()) ? false : true;
apple = isApple();
opera12 = isOpera12();
ie = isIE();
scrollWidth = getScrollbarWidth();

oldie = (ie !== false && ie <= 10);

var viewport = document.getElementById('viewport');

if (tablet === true) {
	viewport.setAttribute('content', 'width=device-width user-scalable=no');
}

if (mobile === true) {
	viewport.setAttribute('content', 'width=device-width user-scalable=no');
}

windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
windowHeight = window.innerHeight ? window.innerHeight : $(window).height();

if (desktop === false) {
	$('body').removeClass('desktop');
	$('body').addClass('device');
}

if (opera12 === true) {
	$('body').addClass('opera12');
}

if (isAndroid()) {
	$('body').addClass('android');
}

if (apple === true) {
	$('body').addClass('apple');
}

if (desktop === true) {
	$('body').addClass('desktop');
}

if (tablet === true && mobile === false) {
	$('body').addClass('tablet');
}

if (mobile === true) {
	$('body').addClass('mobile');
}

if (ie !== false) {
	$('body').addClass('ie');
}

if (ie !== false && ie <= 9) {
	$('body').addClass('ie9');
}

if (ie !== false && ie === 10) {
	$('body').addClass('ie10');
}

if ($('.js-years-list').length > 0) {
	yearsList();
}

$(window).scroll(function() {
	scrolltop = $(window).scrollTop();
});

function resizeHandler() {
	windowWidth = (document.documentElement.clientWidth) ? document.documentElement.clientWidth : $(window).width();
	windowHeight = (document.documentElement.clientHeight) ? document.documentElement.clientHeight : $(window).height();
}

$(window).on("debouncedresize", function(event) {
	resizeHandler();
});

if (desktop === false) {
	window.addEventListener('orientationchange', function() {
		resizeHandler();
	});
}

$(window).load(function() {

	var select = document.querySelector('[data-select]');

	if (select !== null) {

		var genericExamples = new Choices('[data-select]', {
			placeholder: false,
			placeholderValue: null,
			searchPlaceholderValue: null,
			searchEnabled: false,
			shouldSort: false,
			shouldSortItems: false,
			itemSelectText: '',
			noChoicesText: 'Данных нет',

			callbackOnInit: function() {
				// console.log(this);
			},
		});

	}

	if ($('#deposite_calc_valute').length > 0) {
		var depositeValue = new Choices($('#deposite_calc_valute')[0], {
				placeholder: false,
				placeholderValue: null,
				searchPlaceholderValue: null,
				searchEnabled: false,
				shouldSort: false,
				shouldSortItems: false,
				itemSelectText: '',
				noChoicesText: 'Данных нет',
				callbackOnInit: function() {
					// console.log(this);
				},
			});

		depositeValue.passedElement.addEventListener('change', function(event) {
			var range = $('#deposit_summ_slider');
			range.data("ionRangeSlider").update({
				from: eval( '_MIN_SUM_' + event.detail.value ),
				min: eval( '_MIN_SUM_' + event.detail.value )
			});
			updateHandler();
		  //alert( eval( '_MIN_SUM_' + event.detail.value ) );
		});
	}

	tippy(document.querySelectorAll('.tippy'), {
		placement: 'bottom',
		duration: 100,
		arrow: true,
		theme: 'bveb',
		performance: true
	});
});

var Gain = {

	set: function(isGained) {

		// console.log('set gained '+ isGained);

		if (isGained) {

			Cookies.set('gain', "true");

			$("<link/>", {
				rel: "stylesheet",
				type: "text/css",
				href: "css/gain.css",
				id: "gaincss"
			}).appendTo("body");

			$('body').addClass('is-gained');

		} else {

			Cookies.set('gain', "false");

		}
	}

};

$(document).ready(function() {

	isGained = (Cookies.get('gain') === "true") ? true : false;

	Gain.set(isGained);

	$('.js-gain-toggle').on('click', function(event) {
		event.preventDefault();
		Gain.set(!isGained);
		window.location.reload();
	});

	topmenu();

	navStick();

	promoSlider();

	rubricSlider();

	elemAppear();

	mobmenu();

	tabs();

	tablesFactory();

	//блок заказа карты
	if ($('#anchor-order-card').length > 0) {
		$('#anchor-order-card').remove();
	}

	if (desktop === true) {
		svg4everybody({});
	}

	if ($('.js-appear').length > 0) {
		elemAppear();
	}

	if ($('.js-visible').length > 0) {
		elemVisible();
	}

	if ($('#calcapp').length > 0) {
		calcApp();
	}

	if ($('.js-order-card').length > 0) {
		orderCard();
	}

	objectFitImages();

	objectFitVideos(document.querySelectorAll('video'));

	// if ($('.js-people').length > 0) {
	// 	peoplePopup();
	// }
	//

	// toplineNav();

	if ($('.flatpickr').length > 0) {
		datePicker();
	}

	if ($('.js-converter').length > 0) {
		converter();
	}

	if ($('.js-widget-rates').length > 0) {
		widgetRates();
	}

	if ($('.js-card-promo').length > 0) {
		cardPromo();
	}

	if ($('.js-card-promo').length > 0) {
		cardPromo();
	}

	if ($('.calc-legend').length > 0) {
		$('.calc-legend').stick_in_parent({
			offset_top: 30,
			recalc_every: 20
		});
	}



	if ($('.l-faq').length > 0) {

		var faqHandler = function() {

			var el;

			var options = {
				instant: false,
				defaultSpeed: 0
			}

			$('.faq-q').off('click');

			$('.faq-q').on('click', function(event) {
				event.preventDefault();
				el = $(this);
				faqOpen(el);
			});

			function faqOpen(el) {
				el.toggleClass('active').next().slideToggle(options.defaultSpeed);
			}

			function openByUrl() {

				(function(e){var t=function(){try{return!!Symbol.iterator}catch(e){return false}};var n=t();var r=function(e){var t={next:function(){var t=e.shift();return{done:t===void 0,value:t}}};if(n){t[Symbol.iterator]=function(){return t}}return t};var i=function(e){return encodeURIComponent(e).replace(/%20/g,"+")};var o=function(e){return decodeURIComponent(e).replace(/\+/g," ")};var a=function(){var t=function(e){Object.defineProperty(this,"_entries",{value:{}});if(typeof e==="string"){if(e!==""){e=e.replace(/^\?/,"");var n=e.split("&");var r;for(var i=0;i<n.length;i++){r=n[i].split("=");this.append(o(r[0]),r.length>1?o(r[1]):"")}}}else if(e instanceof t){var a=this;e.forEach(function(e,t){a.append(e,t)})}};var a=t.prototype;a.append=function(e,t){if(e in this._entries){this._entries[e].push(t.toString())}else{this._entries[e]=[t.toString()]}};a.delete=function(e){delete this._entries[e]};a.get=function(e){return e in this._entries?this._entries[e][0]:null};a.getAll=function(e){return e in this._entries?this._entries[e].slice(0):[]};a.has=function(e){return e in this._entries};a.set=function(e,t){this._entries[e]=[t.toString()]};a.forEach=function(e,t){var n;for(var r in this._entries){if(this._entries.hasOwnProperty(r)){n=this._entries[r];for(var i=0;i<n.length;i++){e.call(t,n[i],r,this)}}}};a.keys=function(){var e=[];this.forEach(function(t,n){e.push(n)});return r(e)};a.values=function(){var e=[];this.forEach(function(t){e.push(t)});return r(e)};a.entries=function(){var e=[];this.forEach(function(t,n){e.push([n,t])});return r(e)};if(n){a[Symbol.iterator]=a.entries}a.toString=function(){var e="";this.forEach(function(t,n){if(e.length>0)e+="&";e+=i(n)+"="+i(t)});return e};e.URLSearchParams=t};if(!("URLSearchParams"in e)||new URLSearchParams("?a=1").toString()!=="a=1"){a()}})(typeof global!=="undefined"?global:typeof window!=="undefined"?window:typeof self!=="undefined"?self:this);(function(e){var t=function(){try{var e=new URL("b","http://a");e.pathname="c%20d";return e.href==="http://a/c%20d"&&e.searchParams}catch(e){return false}};var n=function(){var t=e.URL;var n=function(e,t){if(typeof e!=="string")e=String(e);var n=document.implementation.createHTMLDocument("");window.doc=n;if(t){var r=n.createElement("base");r.href=t;n.head.appendChild(r)}var i=n.createElement("a");i.href=e;n.body.appendChild(i);i.href=i.href;if(i.protocol===":"||!/:/.test(i.href)){throw new TypeError("Invalid URL")}Object.defineProperty(this,"_anchorElement",{value:i})};var r=n.prototype;var i=function(e){Object.defineProperty(r,e,{get:function(){return this._anchorElement[e]},set:function(t){this._anchorElement[e]=t},enumerable:true})};["hash","host","hostname","port","protocol","search"].forEach(function(e){i(e)});Object.defineProperties(r,{toString:{get:function(){var e=this;return function(){return e.href}}},href:{get:function(){return this._anchorElement.href.replace(/\?$/,"")},set:function(e){this._anchorElement.href=e},enumerable:true},pathname:{get:function(){return this._anchorElement.pathname.replace(/(^\/?)/,"/")},set:function(e){this._anchorElement.pathname=e},enumerable:true},origin:{get:function(){var e={"http:":80,"https:":443,"ftp:":21}[this._anchorElement.protocol];var t=this._anchorElement.port!=e&&this._anchorElement.port!=="";return this._anchorElement.protocol+"//"+this._anchorElement.hostname+(t?":"+this._anchorElement.port:"")},enumerable:true},password:{get:function(){return""},set:function(e){},enumerable:true},username:{get:function(){return""},set:function(e){},enumerable:true},searchParams:{get:function(){var e=new URLSearchParams(this.search);var t=this;["append","delete","set"].forEach(function(n){var r=e[n];e[n]=function(){r.apply(e,arguments);t.search=e.toString()}});return e},enumerable:true}});n.createObjectURL=function(e){return t.createObjectURL.apply(t,arguments)};n.revokeObjectURL=function(e){return t.revokeObjectURL.apply(t,arguments)};e.URL=n};if(!t()){n()}if(e.location!==void 0&&!("origin"in e.location)){var r=function(){return e.location.protocol+"//"+e.location.hostname+(e.location.port?":"+e.location.port:"")};try{Object.defineProperty(e.location,"origin",{get:r,enumerable:true})}catch(t){setInterval(function(){e.location.origin=r()},100)}}})(typeof global!=="undefined"?global:typeof window!=="undefined"?window:typeof self!=="undefined"?self:this);

				var url = new URL(window.location.href);

				if (url.searchParams.get('id') !== null) {
					var list = url.searchParams.get('id').split(',')
					var deltaY = 0 - parseInt($('.l-header').height());
				}

				if (list) {

					$.scrollTo('#' + list[0], 1000, {
						easing: 'easeInOutCubic',
						offset: deltaY
					});

					$.each(list, function(index, val) {
						var el = $('#' + val);
						faqOpen(el);
					});
				}
			};

			openByUrl();

		};

		faqHandler();
	}

	$('.js-scrollto').on('click', function(event) {
		event.preventDefault();
		var $el = $(this),
			$target = $el.attr('href')  || $el.data('goto'),
			shift   = $el.data('shift') || false,
			deltaY = -80;

		if (shift) {
			deltaY = 0 - parseInt($('.l-header').height());
		}

		$.scrollTo($target, 700, {
			easing: 'easeInOutCubic',
			offset: deltaY
		});
	});

	// $(function() {
	// 	var box = $('.t-in'),
	// 		parent = box.parent(),
	// 		toggler = parent.find('.js-t-toggler'),
	// 		toggle = parent.find('.js-toggle-hidden');

	// 	$('.t-in').readmore({
	// 		speed: 150,
	// 		collapsedHeight: 60,
	// 		blockCSS: '',
	// 		moreLink: '<span class="t-hidden">More</span>',
	// 		lessLink: '<span class="t-hidden">Less</span>',
	// 		blockProcessed: function() {

	// 			toggler.on('click', function(event) {
	// 				event.preventDefault();
	// 				box.next().trigger('click');
	// 			});
	// 		},
	// 		beforeToggle: function() {
	// 			toggler.toggleClass('rotate-180');
	// 		}
	// 	});
	// }());
	//

	$(function() {
		var toggle = $('.js-nav-toggle'),
			box = $('.js-nav'),
			arrow = toggle.find('.nav-toggle-ctrl');

		var visible = true;

		if (!visible) {
			arrow.addClass('rotate-180');
		}

		toggle.on('click', function(event) {

			if (!visible) {
				box.slideDown(300);
				visible = true;
				arrow.removeClass('rotate-180');
			} else {
				box.slideUp(300);
				visible = false;
				arrow.addClass('rotate-180');
			}
			return false;
		});
	}());

	$(function() {
		var toggle = $('.js-currency-toggle'),
			arrow  = toggle.find('.ico-arrow'),
			close  = toggle.find('.ico-close'),
			box = $('#currency-full');

		var visible = false;

		toggle.on('click', function(event) {

			if (!visible) {
				box.slideDown(300);
				toggle.addClass('active');
				visible = true;
			} else {
				box.slideUp(300);
				toggle.removeClass('active');
				visible = false;
			}
		});
	}());

	$(function() {
		var box = $('.t-in'),
			parent = box.parent(),
			toggler = parent.find('.js-t-toggler'),
			toggle = parent.find('.js-toggle-hidden');

		$('.t-in').readmore({
			speed: 150,
			collapsedHeight: 60,
			blockCSS: '',
			moreLink: '<span class="t-hidden">More</span>',
			lessLink: '<span class="t-hidden">Less</span>',
			blockProcessed: function() {

				toggler.on('click', function(event) {
					event.preventDefault();
					box.next().trigger('click');
				});
			},
			beforeToggle: function() {

				toggler.toggleClass('rotate-180');
			}
		});
	}());


	$(function(){
		var range = $('input[data-range]');

		$.each(range, function(index, val) {

			var range = $(val);
			var name = range.data('name');
			var input_val = 0;
			var input = $('<input type="text" name="'+ name +'"  value="'+ input_val +'" placeholder="Пример: 1000">');
			var input_value;
			range.before(input);

			range.ionRangeSlider({
				hide_min_max: true,
				hide_from_to: true,

				onStart: function(data) {
					input_val = data.from;
					input.val(input_val);
				},
				onChange: function(data) {
					input_val = data.from;
					input.val(input_val);
				},
				onFinish: updateHandler
			});

			function updateHandler() {
				if ( range.data('credit_podbor') ) {
					_loadCreditProgramms();
				}
				if ( range.data('deposit_podbor') ) {
					loadIndDeposites();
				}
			}

			input.on('keypress, change, input', function(event) {
				input_value = parseInt(this.value);

				if (is.not.nan(input_value)) {
					range.data("ionRangeSlider").update({
						from: input_value
					});
				} else {
					range.data("ionRangeSlider").update({
						from: 0
					});
				}

				updateHandler();
			});

		});

	}());

	//if ($('.atvImg').length > 0) {
		//atvImg();
	//}








	var _loadCreditProgramms = function () {

		/*
		if ($('.credit_popup .error').length) {

			$('#credit_found')
				.removeClass('ajax')
				.html('0');

			$('#podbor_result').html('По данным параметрам ничего не найдено');

			return false;

		}
		*/
		//clearTimeout(_timer);
		//_timer = setTimeout(function () {

			//$('#podbor_result').html('');
			//$('#credit_found').addClass('ajax');

			var params = {
				credit_to: $('input[name=credit_to]:checked').val(),
				credit_whant: $('input[name=credit_whant]:checked').val(),
				credit_summ: $('input[name="credit_summ"]').val(),
				credit_dohod: $('input[name="credit_dohod"]').val(),
				other_credit_summ: $('input[name=other_credit_summ]').val(),
				credit_period: $('input[name="credit_period"]').val(),
				credit_spravka: $('input[name=credit_spravka]:checked').val()
			}

			$.post( $('#credit_filter_form').attr('action'), params, function (data) {

				//console.log( data );
				$("#credit_filter_ajax").html(data);
				/*
					$('#credit_found').removeClass('ajax');

					$('#credit_found').html(data.count);

					if (data.count > 0) {
						$('#podbor_result').html(data.html);
					}
					else {
						$('#podbor_result').html('По данным параметрам ничего не найдено');
					}
				*/
				//_init_toFav_links();

			});

		//}, 500);
	};



	$('#credit_filter_form input[type=text]').change(_loadCreditProgramms);
	$('#credit_filter_form input[type=radio]').click(_loadCreditProgramms);

	//_loadCreditProgramms();




	function loadIndDeposites() {
		var params = {
			valute: $("input[name='currency']:checked").val(),
			sum: $('input[name="deposit_summ"]').val(),
			type: $('input[name="type"]:checked').val()
		}
		$.post($('#ind-deposit-filter-wrap').attr('action'), params, function(data) {
			$("#deposites_list_ajax").html(data);
		})
	}

	$("input[name='currency']").on("change", function() {
		loadIndDeposites();
	});
	$("input[name='type']").on("change", function() {
		loadIndDeposites();
	});


	if ($('#partners-filter-wrap').length > 0) {
		partnersFilter();
	}

});

Parsley.addMessages('ru', {
	defaultMessage: "Некорректное значение.",
	type: {
		email: "Введите адрес электронной почты.",
		url: "Введите URL адрес.",
		number: "Введите число.",
		integer: "Введите целое число.",
		digits: "Введите только цифры.",
		alphanum: "Введите буквенно-цифровое значение."
	},
	notblank: "Заполните поле.",
	required: "Обязательное поле.",
	pattern: "Это значение некорректно.",
	min: "Это значение должно быть не менее чем %s.",
	max: "Это значение должно быть не более чем %s.",
	range: "Это значение должно быть от %s до %s.",
	minlength: "Это значение должно содержать не менее %s символов.",
	maxlength: "Это значение должно содержать не более %s символов.",
	length: "Это значение должно содержать от %s до %s символов.",
	mincheck: "Выберите не менее %s значений.",
	maxcheck: "Выберите не более %s значений.",
	check: "Выберите от %s до %s значений.",
	equalto: "Это значение должно совпадать.",
	dateiso: "Это значение должно быть корректной датой (ГГГГ-ММ-ДД).",
	minwords: "Это значение должно содержать не менее %s слов.",
	maxwords: "Это значение должно содержать не более %s слов.",
	words: "Это значение должно содержать от %s до %s слов.",
	gt: "Это значение должно быть больше.",
	gte: "Это значение должно быть больше или равно.",
	lt: "Это значение должно быть меньше.",
	lte: "Это значение должно быть меньше или равно.",
	notequalto: "Это значение должно отличаться."
});

Parsley.setLocale('ru');

function bodyFade(bool) {
	(bool === true) ? $('body').addClass('is-faded') : $('body').removeClass('is-faded');
}

function topmenu() {

	var topmenu = $('#topmenu'),
		sitemap = $('#sitemap'),
		item = topmenu.find('a'),
		tab = sitemap.find('.sitemap-tab'),
		tabCurrent = tab.eq(0);

	var timer;

	var sitemapIsVisible = false;

	$.each(topmenu.find('li'), function(index, val) {
		$(val).attr('data-menu', index);
	});

	topmenu.flexMenu({
		cutoff: 0,
		linkText: '',
		linkTitle: 'Показать больше',
		popupClass: 'topmenu-popup'
	});

	item.on('mouseenter', function() {

			var index = $(this).parent().data('menu');

		tabHide();

		tabShow(index);

			clearTimeout(timer);

			timer = setTimeout(function() {

			sitemapShow();

			}, 300);

		})
		.on('mouseleave', function() {

			clearTimeout(timer);

			timer = setTimeout(function() {

			sitemapHide();

			}, 50);

		});


	sitemap.on('mouseenter', function() {

			clearTimeout(timer);

	}).on('mouseleave', function() {

			clearTimeout(timer);

			timer = setTimeout(function() {

			sitemapHide();

			}, 50);

		});

	function sitemapShow() {
		sitemap.show();
		sitemapIsVisible = true;

		bodyFade(true);

		isotopeTry();
	}

	function sitemapHide() {
		sitemap.hide();
		sitemapIsVisible = false;

		bodyFade(false);
	}

	function tabShow(index) {

		tabCurrent = tab.eq(index);

		tabCurrent.show();

		if (sitemapIsVisible === true) {
			isotopeTry();
		}

	}

	function tabHide() {
		tab.hide();
	}

	function isotopeTry() {
		var $el = tabCurrent.find('.js-isotoper');
			data = $el.data('isotope');

		if (data !== undefined) {
			$el.isotope('layout');
		}
	}

	function isotopeInit($el) {
		$el.isotope({
			itemSelector: 'section',
			sortBy : 'original-order',
			layoutMode: 'masonry',
			masonry: {
				columnWidth: '.section-sizer',
			},
			stamp: '.sitemap-banner',
			transitionDuration: 0
		});
	}

	$.each(tab.find('.js-isotoper'), function(index, val) {
		isotopeInit($(this));
	});
}

function freeze(type, state) {

	var body = $('body'),
		page = $('.page-wrap');

	if (state === true) {

		body
			.addClass(type + '-is-visible')
			.css({
				'overflow': 'hidden',
				'height': 'calc(100vh + ' + scrolltop + 'px)'
			});

		page.css({
			'padding-right': scrollWidth + 'px'
		});

	} else {

		body
			.removeClass(type + '-is-visible')
			.removeAttr('style');

		page.removeAttr('style');
	}
}

function mobmenu() {
	var toggleView = $('.js-menu-toggle'),
		head = $('.mobile-header-in'),
		mobmenuVisible = false;

	var $menu = $('.js-mobmenu'),
		$item = $menu.find('.mm-item'),
		$toggleMenu = $menu.find('.mm-toggle'),
		$isActive = $menu.find('.is-active'),
		$select = $('[mm-data-select]',$menu)[0],
		$select_value,
		$el, $parent;

	toggleView.on('click', function(event) {
		event.preventDefault();

		if (!mobmenuVisible) {

			freeze('sidebar', true);

			head.css({
				'margin-right': scrollWidth + 'px'
			});

			mobmenuVisible = true;

		} else {

			freeze('sidebar', false);

			head.removeAttr('style');

			mobmenuVisible = false;
		}
	});

	if ($select !== undefined) {
	select = new Choices($select, {
		placeholder: false,
		placeholderValue: null,
		searchPlaceholderValue: null,
		searchEnabled: false,
		shouldSort: false,
		shouldSortItems: false,
		itemSelectText: '',

		callbackOnInit: function(event) {
			$select_value = this.element.value;
			showMenuBlock();
		}
	});

	select.passedElement.addEventListener('change', function(event) {
		$select_value = event.detail.value;
		showMenuBlock(true);
	}, false);
	}

	function showMenuBlock(force) {
		if ($select_value[0] === "#") {
			$menu.find($select_value).show(0).siblings('ul').hide(0);
		} else if (force === true) {
			window.location.href = $select_value;
		} else {
			return false;
		}
	}

	$toggleMenu.on('click', toggleMenu);

	function toggleMenu() {
		$el = $(this);
		$parent = $el.parent();

		if (!$parent.hasClass('is-active')) {
		$item.removeClass('is-active');
		$parent.toggleClass('is-active');
		} else {
			$item.removeClass('is-active');
		}
		$parent.siblings().find('ul').slideUp(300);
		$el.next().slideToggle(300);
	}

	if ($isActive.length > 0) {
		(function(){
			var $el = $isActive.parents('.mm-item');
			$el.addClass('is-active');
			$el.find('ul').slideDown(0);
		})();
	}

};


function navStick() {

	var nav = $('.js-nav');

	if (nav.length > 0) {

		nav.stick_in_parent();

	}
}

function promoSlider() {
	if (!oldie && $('.js-promo-slider').length > 0) {
		promoSliderSwiper();
	} else {
		$('.js-promo-slider').remove();
	}
}

// Swiper
function promoSliderSwiper() {
	var swiperContainer = '.js-promo-slider .swiper-container';
	var preloader = $(swiperContainer).find('.swiper-preloader-wrap');

	var sizer = $('#swiper_sizer');
	var sizerAfter = $('.main-content');
	var sizerWidth;
	var sizerAfterWidth;
	var delta;
	var deltaAfter;
	var lastSlide = $('.js-promo-slider').find('.swiper-slide').last();

	var setDelta = function() {

		lastSlideWidth = lastSlide.width();

		sizerWidth = sizer.width();

		delta = (sizerWidth - 720) / 2;

		delta = delta < 10 ? 10 : delta;

		sizerAfterWidth = sizerAfter.width();

		deltaAfter = sizerAfterWidth - lastSlideWidth - 20;

		swiper.params.slidesOffsetAfter  = deltaAfter;

		swiper.update();
	};

	var swiper = new Swiper(swiperContainer, {
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true
		},
		autoplay: {
			delay: 5000,
		},
		slidesPerView: 'auto',
		slidesOffsetBefore: 0,
		slidesOffsetAfter: 0,
		spaceBetween: 0,
		speed: 400,
		loop: true,
		// loopedSlides: 3,
		init: false
	});

	swiper.on('init', function() {

		$(swiperContainer).removeClass('swiper-is-loading');

		preloader.remove();

		setDelta();

	});

	swiper.on('resize', function() {

		setDelta();

	});

	// swiper.on('slideChangeTransitionEnd', function () {
	// });

	swiper.init();
}

// rubricSlider
function rubricSlider() {
	var $slider = $('.js-rubric-slider');
	if (!oldie && $slider.length > 0) {
		rubricSliderSwiper();
	} else {
		$slider.remove();
	}
}

function rubricSliderSwiper() {
	var swiperContainer = '.js-rubric-slider';

	var mySwiper = new Swiper(swiperContainer, {
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true
		},
		autoplay: {
			delay: 5000,
		},
		speed: 400,
		loop: true,
		init: false
	});

	mySwiper.on('init', function() {
		$(swiperContainer).removeClass('swiper-is-loading');
	});

	mySwiper.init();
}


function elemAppear() {

	var elem = $('.js-appear');

	elem.appear();

	$.each(elem, function(index, val) {
		var elem = $(val);

		elem.on('appear', function(event, $all_appeared_elements) {
			$(this).addClass('is-visible');
		});

		elem.on('appear', function(event, $all_appeared_elements) {
			$(this).addClass('is-visible');
		});

		if (elem.is(':appeared') === true) {
			elem.addClass('is-visible');
		}
	});
}


function elemVisible() {

	var elem = $('.js-visible');

	elem.appear();

	elem.on('appear', function(event, $all_appeared_elements) {
		$(this).addClass('is-visible');
	});

	elem.on('disappear', function(event, $all_appeared_elements) {
		$(this).removeClass('is-visible');
	});

	if (elem.is(':appeared') === true) {
		elem.addClass('is-visible');
	}
}

function tabs() {

	var tabs = $('.js-tabs'),
		tab = tabs.find('.tabs a'),
		tabContent = tabs.find('.tab-content'),
		activeID = tabs.find('.is-active').attr('href') || tab.eq(0).attr('href'),
		isScrollable = tabs.data('scrollable') || false;

	var resultInput = tabs.find('input');

	var ctrl = $('.js-tab-ctrl');

	if (isScrollable) {
		scrollNav();
	}

	$(activeID).fadeIn();

	tab.eq(0).addClass('is-active');

	tab.on('click', function(event) {
		event.preventDefault();
		var tab = $(this);
		toTab(tab);

	});

	if (ctrl.length > 0) {
		ctrl.on('click', function(event) {
			event.preventDefault();
			var id = $(this).attr('href');

			toTabID(id);
		});
	}

	function toTab(elem, scrollto) {
		var tab = elem,
			tabID = tab.attr('href'),
			tabValue = tab.text();

		tab.addClass('is-active').siblings().removeClass('is-active');

		if (!isScrollable) {
			tabContent.not(tabID).hide();

			$(tabID).fadeIn(100);
		}

		if (scrollto) {
			$.scrollTo(tabs, 600, {
				easing: 'easeInOutCubic',
				offset: {
					top: -80
				}
			});
		}
	}

	function toTabID(id, scrollto) {
		var num = parseInt($(id).index() + 1);
		toTabNUM(num, true)
	}

	function toTabNUM(num, scrollto) {
		toTab(tab.eq(num - 1), scrollto);
	}

}

function scrollNav() {
	var nav     = $('.js-scrollnav'),
		header  = nav.find('.scrollnav-header'),
		content  = nav.find('.scrollnav-content'),
		content_box = content.find('.box-letter'),
		offset  = $('.scrollnav-header').height(),
		tab     = nav.find('.tabs a'),
		span    = [],
		closest = null,
		closestIndex = null,
		tabscroll = false,
		tabID = '',
		mobileHeader = $('.mobile-header');

	$.each(content_box, function(index, val) {
		span.push(parseInt($(val).position().top));
	});

	$(window).on("debouncedresize", function(event) {
		offset  = $('.scrollnav-header').height();

		span = [];

		$.each(content_box, function(index, val) {
			span.push(parseInt($(val).position().top));
		});

		// console.log('tabscroll has started');
		tabscroll = true;

		$.scrollTo(tabID, 300, {
			offset: {
				top: -offset
			},
			onAfter: function() {
				// console.log('tabscroll has ended');
				tabscroll = false;
			}
		});

		header.trigger("sticky_kit:detach");

		console.log('mobileHeader',mobileHeader.is(':visible'));

		if (!mobileHeader.is(':visible')) {

			offset  = $('.scrollnav-header').height();

			header.stick_in_parent({
				offset_top: 0
			});
		} else {
			offset  = $('.scrollnav-header').height() + 50;

			header.stick_in_parent({
				offset_top: 50
			});
		}



	});

	header.stick_in_parent({
		offset_top: 50
	});


	$(window).scroll(function() {

		if (!tabscroll) {

			var position = scrolltop + offset;

			closest = null;
			closestIndex = null;

			$.each(span, function(index, val){
				if (this <= position && (closest == null || (position - this) < (position - closest))) {
					closest = this;
					closestIndex = index;
				}
			});

			// console.log(parseInt(closestIndex));

			// set active tab
			tab.eq(closestIndex).addClass('is-active').siblings().removeClass('is-active');

		}

	});

	tab.on('click', function(event) {
		event.preventDefault();

		// console.log('tabscroll has started');
		tabscroll = true;

		var tab = $(this),
			tabValue = tab.text();

		tabID = tab.attr('href');

		$.scrollTo(tabID, 300, {
			offset: {
				top: -offset
			},
			onAfter: function() {
				// console.log('tabscroll has ended');
				tabscroll = false;
			}
		});

	});

}

function tablesFactory() {
	var table = $('.usercontent table');
	if (table.length > 0) {
		$.each(table, function(index, val) {
			var $table = $(this);
			var $parent;
			var $toggle;
			var templateScroll = '<div class="table-scroll"></div>';
			var templateZoom = '<div class="table-zoom-wrap"><div class="table-zoom"><div class="table-scroll"></div><button class="table-zoom-button js-zoom-table"></button></div></div>';
			// var zoomable = $table.hasClass('zoom') || mobile || tablet;
			var zoomable = $table.hasClass('zoom');
			var scrollWidth = window.scrollWidth;

			var template = (zoomable) ? templateZoom : templateScroll;

			$table.wrap(template);

			if (zoomable) {
				$parent = $table.parents('.table-zoom');
				$toggle = $parent.find('.js-zoom-table');

				$toggle.css({
					'margin-right': scrollWidth + 'px'
				});

				$toggle.on('click', function(event) {
					event.preventDefault();
					$parent.toggleClass('active');
					freeze('table', $parent.hasClass('active'));

					if ($parent.hasClass('active')) {
						$toggle.css({
							'margin-right': 0
						});
					} else {
						$toggle.css({
							'margin-right': scrollWidth + 'px'
						});
					}

				});
			}
		});
	}
}


function calcApp() {

	var type = $('#calcapp').data('type');

	console.log(type);

	switch (type) {
		case 'lahodny':
			calcLahodny(type);
			break;
		default:
			calcDefault('Тип калькулятора не определен');
	}
}

function calcDefault(type) {
	new Vue({
		el: '#calcapp',
		data: {
			type: type
		}
	});

	$('.l-calc').hide();
}

var calcapp;
Vue.component('v-select', VueSelect.VueSelect);

function calcLahodny(type) {


	//получаем знаечения полей формы
	var creditperiod = $('input[name="credit-period"]').val(),
		creditname = $('input[name="credit-name"]').val();

	console.log(creditname);

	calcapp = new Vue({
		el: '#calcapp',

		data: {
			type: type,
			creditPeriod: creditperiod,
			creditName: creditname,
		},

		created: function() {
			console.log('created');
		},

		updated: function() {
			console.log('updated');
		},


	});
}



function datePicker() {

	$('.flatpickr').flatpickr({
		wrap: true,
		"locale": "ru",
		clickOpens: true,
		dateFormat: 'd.m.Y',
		//minDate: "today",
		//defaultDate: '06.12.2018',

		onReady: function(selectedDates, dateStr, instance) {

			input = $(instance.input);

			if (input.val() !== undefined) {
				input.siblings('.input-clear').show();
			}

			if ( input.attr('data-minDate').length ){
				instance.set("minDate", input.attr('data-minDate'));
			}
			if ( input.attr('data-maxDate').length ){
				instance.set("maxDate", input.attr('data-maxDate'));
			}
			if ( input.attr('data-defaultDate').length ){
				instance.set("defaultDate", input.attr('data-defaultDate'));
			}

		},

		onChange: function() {
			input.siblings('.input-clear').show();
		}

	});

	$('.input-clear').on('click', function(event) {
		$(this).hide();
	});
}




function peoplePopup() {
	var link = $('.js-people .card a');

	var configuration = {};

	link.on('click', function(event) {
		event.preventDefault();
		var link = $(this);
		box  = link.parents('.card'),
		content = box.find('script').html();
		console.log(content);

		$.featherlight(content, configuration);
	});
}

var Popup = {};

(function($) {

	Popup = {

		open: function(url, title) {

			$('.js-popup').fadeIn(200);

			freeze('popup', true);

			switch (url[0]) {
				case '#':
					var id = url;
					popupTemplate(id, title);
					break;
				default:
					console.error('Контент не найден');
			}
		},

		close: function() {

			freeze('popup', false);

			setTimeout(function(){
				$('.js-popup').fadeOut(200, function(){
					$('.js-popup-content').html('');
					$('.js-popup-title').html('');
				});
			},200)

		}
	};

	function popupTemplate(id, title) {

		content = $(id).html();

		if (content !== undefined) {

			$('.js-popup-title').text(title);

			$('.js-popup-content').html(content);

		} else {

			$('.js-popup-title').text('Ошибка загрузки окна');

			$('.js-popup-content').html('Контент для попапа не найден. Проверьте наличие ссылки <pre>id</pre> на шаблон и наличие <pre>x-template</pre>');
		}

	}

	popupEvents();

})(jQuery);

function popupEvents() {
	$('.popup').off().on('click', function(event) {
		event.stopPropagation();
	});

	$('.js-popup-open').off().on('click', function(event) {
		event.preventDefault();

		var link = $(this);

		var url =   link.attr('href'),
			title = link.data('popup-title') || link.text();

		Popup.open(url, title);
	});

	$('.js-popup-close').off().on('click', function(event) {
		event.preventDefault();
		Popup.close();
	});

	$('.js-popup').off().on('click', function(event) {
		event.preventDefault();
		Popup.close();
	});

	$(document).off().on('keyup', function(e) {
		if (e.keyCode === 27) Popup.close();
	});
}



function yearsList() {

	var el = $('.js-years-list');

	var cur = $('.years-list__current', el).index();

	if (cur == 0) {
		cur = 0;
	} else {
		cur = cur - 1;
	}

	$('.js-years-list').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		speed: 200,
		initialSlide: cur,
		prevArrow: '<div class="years-list__item years-list__prev"><span class="c-ico ico-30 ico--white"><svg class="ico-arrow" viewBox="0 0 96 96"><use xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" xlink:href="#arrow-left" ></use></svg></span></div>',
		nextArrow: '<div class="years-list__item years-list__next"><span class="c-ico ico-30 ico--white"><svg class="ico-arrow" viewBox="0 0 96 96"><use xmlns:xlink="http:\/\/www.w3.org\/1999\/xlink" xlink:href="#arrow-right"></use></svg></span></div>'
	})

};




function orderCard() {

	var order = $('.js-order-card'),
		step  = $('.order-step', order),
		proceed = $('.js-proceed-step', order),
		submit = $('.js-submit', order),
		loader  = $('.order-loader', order),
		closer  = $('.js-order-close', order);

	var form = $('#card_form');

	loader.fadeOut(500, function() {
		$('.order-step-1', order).slideDown();
	});

	proceed.on('click', function(event) {
		event.preventDefault();
		var rel = $(this).attr('href');
		openStep(rel);
	});

	function openStep(rel) {
		var showElem = $('.' + rel, order);
		step.slideUp(300);
		showElem.slideDown(300, function(){
			$.scrollTo(showElem, 300, {
				offset: {
					top: -140
				}
			});
		});
	}

	submit.on('click', function(event) {
		event.preventDefault();
		var dataForm = form.serialize()+'&web_form_submit=Y';
		var action = form.prop("action");
		getForm(dataForm, action);
	});

	closer.on('click', function(event) {
		event.preventDefault();
		order.parent('.box-letter').slideUp();
	});

	function getForm(data, action){

		$.ajax({
			url: action,
			type: 'POST',
			data: data,
			success: function(data){
				console.log(data);
				if(data.indexOf('errortext') > 0) {
				} else {
					openStep('order-step-success');
				}
			}
		});
	}

}



function converter() {

	var converter = $('.js-converter');

	var select_from = document.querySelector('[data-select-from]'),
		select_to   = document.querySelector('[data-select-to]');


	$.each(converter, function(index, val) {

		var parent = $(val),
			input     = $('.js-input', parent),
			input_from = $('.js-input-from', parent),
			input_to   = $('.js-input-to', parent);

		var select_elem_from = $('[data-select-from]',parent)[0];
		var select_elem_to   = $('[data-select-to]',parent)[0];

		var current_valute_1;
		var current_valute_2;

		if (select_from !== null) {
			select_from = new Choices(select_elem_from, {
				placeholder: false,
				placeholderValue: null,
				searchPlaceholderValue: null,
				searchEnabled: false,
				shouldSort: false,
				shouldSortItems: false,
				itemSelectText: '',

				callbackOnInit: function() {
					// console.log(this);
				}
			});
		}

		if (select_to !== null) {
			select_to = new Choices(select_elem_to, {
				placeholder: false,
				placeholderValue: null,
				searchPlaceholderValue: null,
				searchEnabled: false,
				shouldSort: false,
				shouldSortItems: false,
				itemSelectText: '',

				callbackOnInit: function() {
					// console.log(this);
				}
			});
		}

		current_valute_1 = select_from.getValue();
		current_valute_2 = select_to.getValue();

		input.on('input', function(event) {

			var index = input.index($(this));

			var currency_from;
			var currency_to;
			var target_to_fill;
			var num;
			var result;
			var format = 4;
			var result_flag;

			if(index % 2 == 0) {

				currency_from = select_from.getValue(true);
				currency_to   = select_to.getValue(true);

				target_to_fill = input_to;

			} else {

				currency_from = select_to.getValue(true);
				currency_to = select_from.getValue(true);

				target_to_fill = input_from;
			}

			num = input.eq(index).val();

			num = num.replace(",", ".", num);

			if((rates[currency_from + "_" + currency_to]) !== undefined) {
				result = num * rates[currency_from + "_" + currency_to].buy;
			} else if((rates[currency_to + "_" + currency_from]) !== undefined) {
				result = num / rates[currency_to + "_" + currency_from].sale;
			} else {
				result_flag = 'similar';
				result = parseInt(num);
			}

			if(currency_to == "byn") {
				format = 2;
			}

			console.log(result);

			if(result !== 0 && !isNaN(result)) {

				if (result_flag !== 'similar') {
					result = result.toFixed(format);
				}
			} else {
				result = "";
			}

			target_to_fill.val(result);
		});

		var checkSimilar = function() {
			if (currency_from === currency_to)
				return true;
		}

		select_from.passedElement.addEventListener('change', function(event) {
			console.log(event.detail.value);

			input_from.trigger("input");
		}, false);

		select_to.passedElement.addEventListener('change', function(event) {
			console.log(event.detail.value);

			input_from.trigger("input");
		}, false);


	});


}

function widgetRates() {
	var $rates = $('.js-widget-rates'),
		$select = select_elem_from = $('[wr-data-select]',$rates)[0],
		$result = $rates.find('.js-wr-result'),
		$url = $rates.prop('action') || 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/218423/data1.json',
		$select_value;

	select = new Choices($select, {
		placeholder: false,
		placeholderValue: null,
		searchPlaceholderValue: null,
		searchEnabled: false,
		shouldSort: false,
		shouldSortItems: false,
		itemSelectText: '',

		callbackOnInit: function(event) {
			// console.log(this.element.value);
			$select_value = this.element.value;
		}
	});

	select.passedElement.addEventListener('change', function(event) {

		$select_value = event.detail.value;

		getResult();

	}, false);

	function getResult() {
		$result.addClass('wr-loading');

		$.ajax({
			url: $url,
			type: 'POST',
			data: {body_rates_type: $select_value},
		})
		.done(function(data) {
			$result.html(data);
		})
		.fail(function() {
			$result.text('Ошибка передачи данных');
		})
		.always(function() {
			$result.removeClass('wr-loading');
		});
	}
}


function cardPromo() {
	var $el = $('.js-card-promo'),
		$gradient = $el.find('.bg-gradient');

	if ($gradient.length > 0) {
		var granimate = new Granim({
			element: $gradient[0],
			name: 'basic-gradient',
			direction: 'left-right', // 'diagonal', 'top-bottom', 'radial'
			opacity: [1, 1],
			isPausedWhenNotInView: true,
			states : {
				"default-state": {
					gradients: [
						['#1a4fe8', '#61045F'],
						['#02AAB0', '#00CDAC'],
						['#006e93', '#9733EE']
					]
				}
			}
		});
	}
}

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

function partnersFilter() {
	var $form = $('#partners-filter-wrap');
	var selectRegion = $form.find('[data-select-region]')[0];
	var selectCity = $form.find('[data-select-city]')[0];
	var $suggestInput  = $form.find('#partners-suggest-input');
	var $suggestResult = $form.find('#partners-suggest-result');

	var regionSelected = false;
	var citySelected = false;

	if (selectRegion !== null && selectCity !== null) {
		var instanceRegion = new Choices(selectRegion, {
			placeholder: false,
			placeholderValue: null,
			searchPlaceholderValue: null,
			searchEnabled: false,
			shouldSort: false,
			shouldSortItems: false,
			itemSelectText: '',
			noChoicesText: 'Данных нет',

			callbackOnInit: function() {
			}
		});

		var instanceCity = new Choices(selectCity, {
			placeholder: false,
			placeholderValue: null,
			searchPlaceholderValue: null,
			searchEnabled: false,
			shouldSort: false,
			shouldSortItems: false,
			itemSelectText: '',
			noChoicesText: 'Данных нет',

			callbackOnInit: function() {
				regionSelected = instanceRegion.getValue().id > 1;
				citySelected = this.getValue().id > 1;
				if (!regionSelected) {
					this.disable();
				}

				if (!regionSelected && !citySelected) {
					$suggestInput.prop('disabled', true);
				} else {
					$suggestInput.prop('disabled', true);
				}
			}
		});

		instanceRegion.passedElement.addEventListener('change', function(value, keyCode) {
			$form.submit();
		}, false);

		instanceCity.passedElement.addEventListener('change', function(value, keyCode) {
			$form.submit();
		}, false);
	}

	$suggestInput.on('input', function() {
		var value = this.value;
		var url;
		if (this.timeoutId) window.clearTimeout(this.timeoutId);
		this.timeoutId = window.setTimeout(function () {
			console.log(value);
			renderSuggestResults(url, value);

		}, 400);
	});

	function renderSuggestResults(url, value) {
		if (value) {
			$suggestResult.html('<li><a href="'+ url +'">'+value+'</a></li>');
			$suggestResult.show();
		} else {
			$suggestResult.hide();
		}
	}
}

function toggleCard ($container, $card, $thumb) {
	var activeClass = 'active';
	$thumb.on('click', function (e) {
		var $thisThumb = $(this),
			$curContainer = $thisThumb.closest($container);

		$curContainer.find($thumb).removeClass(activeClass);
		$thisThumb.addClass(activeClass);

		var src = $('img', $thisThumb).attr('src');
		$curContainer.find($card).find('img').attr('src', src);

		e.preventDefault();
	});
}

function cardsSlider() {
	var $asideCardGroup = $('.b-aside-card-group');
	if ($asideCardGroup.length) {
		toggleCard($asideCardGroup, $asideCardGroup.find('.b-aside-card'), $asideCardGroup.find('.b-aside-card-thumbs').find('a'));
	}

	var $cardShapeGroup = $('.b-card-shape-group');
	if ($cardShapeGroup.length) {
		toggleCard($cardShapeGroup, $cardShapeGroup.find('.b-card-shape'), $cardShapeGroup.find('.b-card-shape-thumbs').find('a'));
	}
}

$(document).ready(function () {
	cardsSlider();

	$('#phone').mask('(99999)000-00-00', {
		placeholder: "(XXX)XXX-XX-XX"
	});
});