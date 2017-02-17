

$(document).ready(function(e) {
    $('#verticle-menu li').hover(function(){
		$(this).stop(true,false).animate({"marginLeft":"20px"},300);
	},function(){
		$(this).stop(true,false).animate({"marginLeft":"0px"},300);
		});
});




  function load(event) {
    
  //  var vpage= event.attr("page");

   var page= $(event).attr("page")

    $("#container").load("service.html");


}