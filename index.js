const $ = require('./node_modules/jquery/dist/jquery.js');
import './node_modules/bootstrap/dist/js/bootstrap.bundle.js';

$(function () {
  $('[data-toggle="popover"]').popover({
  	html: true,
	  trigger: 'hover',
	  content: function () {
	    return '<img src="'+$(this).data('image') + '" />';
	  }
  });
})