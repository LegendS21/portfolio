function bukatutuptogle(e){
    const target = $(e.target)
    if($(target).hasClass("active")){
        $(target).html("more info").removeClass("active")
    }
    else {
        $(target).html("less info").addClass("active")
    }
    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")
    $(detail).slideToggle()
}
function onformsubmit(e){
    e.preventDefault()
    const email = $("#inp_email")
    const subject = $("#inp_subject")
    const massage = $("#inp_massage")

    if(!$(email).val()){
        alert("email is required")
    }
    else if (!$(subject).val()){
        alert("subject is required")
    }
    else if(!$(massage).val()){
        alert("massage is required")
    }
    else{
        alert("form submitted")
        $(email).val("")
        $(subject).val("")
        $(massage).val("")
    }
}