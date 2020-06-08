var tdClicks = 0;
$(document).ready(function(){
    $(".body table tr td").each(function(){
        $(this).addClass('black');
    });
    $(".body table tr td").click(function(){
        $(this).removeClass('black');
        tdClicks++;
        if(tdClicks >= 4800){
            $("#downloadLink").click();
        }
    });
});
