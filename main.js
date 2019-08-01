var clicky = $("#nearby-events");
var boxy = $("#boxy");
var eventBar = $("#events");

var tl = new TimelineLite();

clicky.click(function(){

    TweenLite.to(boxy, 2, {rotation:90, scale:1, transformOrigin:"1050px 0px"});
    tl.to(eventBar, 1, {autoAlpha:1, left: "1000px"});

});
