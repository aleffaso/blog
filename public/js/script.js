function deleteCheck(event, form){
    event.preventDefault(); //Don't let the form to be submitted
    var decision = confirm("Do you really want to delete this category?");
    if(decision){
        form.submit();
    }
}