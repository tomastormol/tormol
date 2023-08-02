$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0})
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // skills accordion
    const skillsContent = document.getElementsByClassName('skills_content'),
          skillsHeader = document.querySelectorAll('.skills_header');

    function toogleSkills(){
        let itemClass = this.parentNode.className;

        for(i = 0; i < skillsContent.length; i++){
            skillsContent[i].className = 'skills_content skills_close'
        }

        if(itemClass === 'skills_content skills_close'){
            this.parentNode.className = 'skills_content skills_open'
        }
    }

    skillsHeader.forEach((el) => {
        el.addEventListener('click', toogleSkills)
    })

    // Dark-Light
    const themeButton = document.getElementById('theme-button');
    const darkTheme = 'dark-theme';
    const moonIcon = 'fas fa-moon'
    const sunIcon = 'fas fa-sun';

    themeButton.addEventListener('click', () =>{
        document.body.classList.toggle(darkTheme);
        if(themeButton.classList.contains('fa-moon')){
            themeButton.className = sunIcon;
        }else {
            themeButton.className = moonIcon;
        }
        //themeButton.classList.toggle(iconTheme);
    });

    // Language
    // const languageButton = document.getElementById('language-button');
    // const iconLanguageButton = 'fa-flag-usa';

    // languageButton.addEventListener('click', () => {
    //     languageButton.classList.toggle(iconLanguageButton);
    // });

    // $('.switch-lang').click(function(e) {
    //     e.preventDefault();
    //     $.i18n().locale = $(this).data('locale');
    //     update_texts();
    //   });

});