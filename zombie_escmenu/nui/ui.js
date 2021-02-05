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
        if ( typeof item.open === "boolean"  ) {
            $('.container').css('display', item.open ? "block" : "none");
        } else if ( typeof item.opendiscord === "boolean" ) {
            $('.discordmenu').css('display', item.opendiscord ? "block" : "none");
        }
    });

    $("#discordCopy").click(function(){
        $.post('http://zombie_escmenu/discordCopy', "{}");
		fnCopyToClipboard("https://discord.gg/dUkuYGQ")
    });
    $("#continue").click(function(){
        $.post('http://zombie_escmenu/continue', "{}");
    });
    $("#discord").click(function(){
        $.post('http://zombie_escmenu/discord', "{}");
    });
    $("#guide").click(function(){
        $.post('http://zombie_escmenu/guide', "{}");
    });
    $("#key").click(function(){
        $.post('http://zombie_escmenu/key', "{}");
    });
    $("#offGame").click(function(){
        $.post('http://zombie_escmenu/offGame', "{}");
    });
    $("#close").click(function(){
        $.post('http://zombie_escmenu/close', "{}");
    });
})
