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