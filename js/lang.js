if (localStorage.getItem("lang") == null) {
    var system_lang = navigator.language || navigator.userLanguage;
    if (system_lang !== 'ru') {
        localStorage.getItem('lang', 'en');
    }
}

function new_lang() {
    if (localStorage.getItem('lang') == "en") {
        localStorage.setItem('lang', "ru");
        lang_ru();
    } else {
        localStorage.setItem('lang', "en");
        lang_en();
    }
}

if (localStorage.getItem('lang') == "en") {
    lang_en();
} else {
    lang_ru();
}

function lang_ru() {
    document.documentElement.lang = 'ru'; 
    // menu
    document.getElementById('home_menu').innerHTML = 'Обо мне'; document.getElementById('mmenu1').innerHTML = 'Обо мне';
    document.getElementById('pf_menu').innerHTML = 'Портфолио'; document.getElementById('mmenu2').innerHTML = 'Портфолио';
    document.getElementById('contact_menu').innerHTML = 'Связаться'; document.getElementById('mmenu3').innerHTML = 'Связаться';
    // about me
    if (page == "index") {
    document.getElementById('lang_lang').innerHTML = 'EN';
    document.getElementById('hello').innerHTML = 'Привет!';
    document.getElementById('name').innerHTML = 'Меня зовут Данияр,';
    document.getElementById('i').innerHTML = 'Я &mdash; ';
    document.getElementById('webdev_bg').innerHTML = 'веб-разработчик';
    document.title = "Данияр Богданов";
    // styles
    document.getElementById('link_anim').href ="css/anim_ru.css";
    }

    // portfolio
    if (page == "portfolio") {
        document.getElementById('lang_lang').innerHTML = 'EN';
        document.getElementById('lang_lang1').innerHTML = 'EN';
        document.getElementById('pf_page_name').innerHTML = 'Портфолио';
        document.title = "Портфолио";
        ru_pf_cases();
    }

    // contact me
    if (page == "contact_me") {
        document.getElementById('lang_lang').innerHTML = 'EN';
        document.getElementById('lang_lang1').innerHTML = 'EN';
        document.getElementById('con_lang_soc').innerHTML = 'Свяжитесь со мной через соцсети';
        document.title = "Связаться";
    }
}

function lang_en() {
    document.documentElement.lang = 'en';
    // menu 
    document.getElementById('home_menu').innerHTML = 'About me'; document.getElementById('mmenu1').innerHTML = 'About me';
    document.getElementById('pf_menu').innerHTML = 'Portfolio'; document.getElementById('mmenu2').innerHTML = 'Portfolio';
    document.getElementById('contact_menu').innerHTML = 'Contact me'; document.getElementById('mmenu3').innerHTML = 'Contact me';
    // about me
    if (page == "index") {
    document.getElementById('lang_lang').innerHTML = 'RU';
    document.getElementById('hello').innerHTML = 'Hello!';
    document.getElementById('name').innerHTML = 'My name is Daniyar,';
    document.getElementById('i').innerHTML = 'I am a ';
    document.getElementById('webdev_bg').innerHTML = 'web-developer';
    document.title = "Daniyar Bogdanov";
    // styles
    document.getElementById('link_anim').href ="css/anim_en.css";
    }

    // portfolio
    if (page == "portfolio") {
        document.getElementById('lang_lang').innerHTML = 'RU';
        document.getElementById('lang_lang1').innerHTML = 'RU';
        document.getElementById('pf_page_name').innerHTML = 'Portfolio';
      document.title = "Portfolio";
        en_pf_cases();
    }

    // contact me
    if (page == "contact_me") {
        document.getElementById('lang_lang').innerHTML = 'RU';
        document.getElementById('lang_lang1').innerHTML = 'RU';
        document.getElementById('con_lang_soc').innerHTML = 'Contact me via social networks';
        document.title = "Contact me";
    }
}





function ru_pf_cases() {
    document.getElementById('case_button').innerHTML = 'Открыть сайт';

    document.getElementById('name_case0').innerHTML = 'сайт 1';
    document.getElementById('about_case0').innerHTML = 'описание 1';
    document.getElementById('about_case01').innerHTML = 'описание 1';
    document.getElementById('about_case02').innerHTML = 'описание 1';
        document.getElementById('m_name_case0').innerHTML = 'сайт 1';
        document.getElementById('m_about_case0').innerHTML = 'описание 1';
        document.getElementById('m_about_case01').innerHTML = 'описание 1';
        document.getElementById('m_about_case02').innerHTML = 'описание 1';

    document.getElementById('name_case1').innerHTML = 'сайт 2';
    document.getElementById('about_case1').innerHTML = 'описание 2';
    document.getElementById('about_case11').innerHTML = 'описание 2';
    document.getElementById('about_case12').innerHTML = 'описание 2';
        document.getElementById('m_name_case1').innerHTML = 'сайт 2';
        document.getElementById('m_about_case1').innerHTML = 'описание 2';
        document.getElementById('m_about_case11').innerHTML = 'описание 2';
        document.getElementById('m_about_case12').innerHTML = 'описание 2';

    document.getElementById('name_case2').innerHTML = 'сайт 3';
    document.getElementById('about_case2').innerHTML = 'описание 3';
    document.getElementById('about_case21').innerHTML = 'описание 3';
    document.getElementById('about_case22').innerHTML = 'описание 3';
        document.getElementById('m_name_case2').innerHTML = 'сайт 3';
        document.getElementById('m_about_case2').innerHTML = 'описание 3';
        document.getElementById('m_about_case21').innerHTML = 'описание 3';
        document.getElementById('m_about_case22').innerHTML = 'описание 3';

}

function en_pf_cases() {
    document.getElementById('case_button').innerHTML = 'Open site';

    document.getElementById('name_case0').innerHTML = 'site 1';
    document.getElementById('about_case0').innerHTML = 'description 1';
    document.getElementById('about_case01').innerHTML = 'description 1';
    document.getElementById('about_case02').innerHTML = 'description 1';
        document.getElementById('m_name_case0').innerHTML = 'site 1';
        document.getElementById('m_about_case0').innerHTML = 'description 1';
        document.getElementById('m_about_case01').innerHTML = 'description 1';
        document.getElementById('m_about_case02').innerHTML = 'description 1';

    document.getElementById('name_case1').innerHTML = 'site 2';
    document.getElementById('about_case1').innerHTML = 'description 2';
    document.getElementById('about_case11').innerHTML = 'description 2';
    document.getElementById('about_case12').innerHTML = 'description 2';
        document.getElementById('m_name_case1').innerHTML = 'site 2';
        document.getElementById('m_about_case1').innerHTML = 'description 2';
        document.getElementById('m_about_case11').innerHTML = 'description 2';
        document.getElementById('m_about_case12').innerHTML = 'description 2';

    document.getElementById('name_case2').innerHTML = 'site 3';
    document.getElementById('about_case2').innerHTML = 'description 3';
    document.getElementById('about_case21').innerHTML = 'description 3';
    document.getElementById('about_case22').innerHTML = 'description 3';
        document.getElementById('m_name_case2').innerHTML = 'site 3';
        document.getElementById('m_about_case2').innerHTML = 'description 3';
        document.getElementById('m_about_case21').innerHTML = 'description 3';
        document.getElementById('m_about_case22').innerHTML = 'description 3';

}
