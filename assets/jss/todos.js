// check Off specific todos by clicking 

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//click to delete a todo

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut("slow", function(){
        $(this).remove();
    });
     event.stopPropagation();
});

//to take a todo as an input from the user and add it to the list

$("input[type='text']").on("keypress", function(event){
    if(event.which ===13)
    {
        var todoText = $(this).val();

        //create a new li and add to ul

        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText + "</li>");
        $(this).val("");
        
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});

