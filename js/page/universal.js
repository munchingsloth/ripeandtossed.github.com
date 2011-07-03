

$(document).ready(function() {
    $("li a")
        .filter(function (index){return this.href == window.location.href; })
        .click(function(){return false;}).addClass("current-page");

    $("#banner a")
        .filter(function (index){return this.href == window.location.href || window.location.href == "http://nicnguyen.github.com/"; })
        .click(function(){return false;}).addClass("current-page-home");


    var itemCall = function(){ $("#m_"+this.id).toggleClass("menu-item-hover");};
    $("#menu li")
        .filter(function (index){return $("a", this).get(0).href != window.location.href; })
        .hover( itemCall,itemCall);

    $("#menu li")
        .filter(function (index){return $("a", this).get(0).href == window.location.href; })
        .each(function(index){$("#m_"+this.id).addClass("current-page-item")});
});

var addthis_config =
{
    ui_delay: 200,
    pubid: "ripeandtossed",
    "data_track_clickback":true
};