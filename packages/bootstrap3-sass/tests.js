Tinytest.add("bootstrap3-sass - SCSS variables should be available", function(test) {
	console.log(Template);
	var $div = $('<div class="test-screen-xs-width"></div>');
	$('body').append($div);

	test.equal(getStyleProperty($div[0], "width"), "480px");

	$div.remove();
});

Tinytest.add("bootstrap3-sass - SCSS class should be extendable", function(test) {
	var $div = $('<div class="test-btn-extended"></div>');
	$('body').append($div);

	test.equal(getStyleProperty($div[0], "display"), "inline-block");
	test.equal(getStyleProperty($div[0], "text-align"), "center");

	$div.remove();
});

Tinytest.add("bootstrap3-sass - jQuery extensions should be loaded", function(test) {
	test.isTrue(typeof $.fn.affix !== 'undefined');
	test.isTrue(typeof $.fn.alert !== 'undefined');
	test.isTrue(typeof $.fn.button !== 'undefined');
	test.isTrue(typeof $.fn.carousel !== 'undefined');
	test.isTrue(typeof $.fn.collapse !== 'undefined');
	test.isTrue(typeof $.fn.dropdown !== 'undefined');
	test.isTrue(typeof $.fn.modal !== 'undefined');
	test.isTrue(typeof $.fn.popover !== 'undefined');
	test.isTrue(typeof $.fn.scrollspy !== 'undefined');
	test.isTrue(typeof $.fn.tab !== 'undefined');
	test.isTrue(typeof $.fn.tooltip !== 'undefined');
	test.isTrue(typeof $.fn.emulateTransitionEnd !== 'undefined');
});
