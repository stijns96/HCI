/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    'use strict';
    var tlm = new TimelineMax();
    tlm
        .to($('.bg'), 2, {opacity: 1, ease: Power2.easeOut}, 0)
        .to($('.card'), 2, {opacity: 1, ease: Power2.easeOut}, 0)
        .from($('.card'), 2, {y: 50, ease: Power2.easeOut}, 0);
});