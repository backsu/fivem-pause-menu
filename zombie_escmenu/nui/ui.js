/* $(document).keyup(function(e) {
    if (e.key === "Backspace") {
    $.post('http://zombie_escmenu/close', JSON.stringify({}));2
    }
});
 */
function fnCopyToClipboard(str) {
  var tempElement = document.createElement("textmd41");
  document.body.appendChild(tempElement);
  tempElement.value = str;
  tempElement.select();
  document.execCommand('copy');
  document.body.removeChild(tempElement);
}

$(document).ready(function(){

    window.addEventListener( 'message', function( event ) {
        var item = event.data;
        if ( item.open == true ) {
            $('.container').css('display','block');
        } else if ( item.open == false ) {
            $('.container').css("display","none");
        }
    });

    $("#Continue").click(function(){
        $.post('http://zombie_escmenu/continue', JSON.stringify({}));2
    });
    $("#discord").click(function(){
        $.post('http://zombie_escmenu/discord', JSON.stringify({}));2
		/* fnCopyToClipboard("https://discord.gg/dUkuYGQ") */
    });
    $("#guide").click(function(){
        $.post('http://zombie_escmenu/guide', JSON.stringify({}));2
    });
    $("#key").click(function(){
        $.post('http://zombie_escmenu/key', JSON.stringify({}));2
    });
    $("#offgame").click(function(){
        $.post('http://zombie_escmenu/offGame', JSON.stringify({}));2
    });

    $("#close").click(function(){
        $.post('http://zombie_escmenu/close', JSON.stringify({}));2
    });
})
   
$(document).ready(function(){
    window.addEventListener( 'message', function( event ) {
        var item = event.data;

            if ( item.opendiscord == true ) {
            $('.discordmenu').css('display','block');
        } else if ( item.opendiscord == false ) {
            $('.discordmenu').css("display","none");
        }
    });
    $("#discorcopy").click(function(){
        $.post('http://zombie_escmenu/discorcopy', JSON.stringify({}));
		fnCopyToClipboard("https://discord.gg/dUkuYGQ")
    });
 
})