$(document).ready(function () {

    let priceTab = $('.price-tab-mon');
    let priceTabYea = $('.price-tab-yea');
    let tabWrap = $('.tab-wrap');
    let pricebot = $('.price-bot');
    let countActive = $('.count-active');
    let mons = $('.mons');
    let priceBox = $('.price-box-1-price')
    // let priceCoun = $('.price-box-1-price');
    // 월간 계약 클릭시 포커스 이동
    priceTab.click(function (e) {
        e.preventDefault();
        priceTab.addClass('active');
        priceTabYea.removeClass('active');
        tabWrap.show();
        // priceCoun.removeClass('count-active');
        $('.counter').counterUp({
            delay: 2,
            time: 200
        });
        pricebot.css('display', 'none');
        countActive.css('display', 'block');
        mons.css('display', 'none');
        priceBox.css('paddingBottom', 40);


    })
    // 연간 계약 클릭시 포커스 이동
    priceTabYea.click(function (e) {
        e.preventDefault();
        priceTabYea.addClass('active');
        priceTab.removeClass('active');
        tabWrap.hide();
        $('.counter').stop().counterUp({
            delay: 2,
            time: 200
        });
        countActive.css('display', 'none');
        mons.css('display', 'block');
        pricebot.css('display', 'block');
        priceBox.css('paddingBottom', 40);


    })


    tabWrap.click(function (e) {
        e.preventDefault();
        priceTabYea.addClass('active');
        priceTab.removeClass('active');
        tabWrap.hide();
        $('.counter').counterUp({
            delay: 2,
            time: 200
        });
        countActive.css('display', 'none');
        mons.css('display', 'block');
        pricebot.css('display', 'block');
        priceBox.css('paddingBottom', 40);

    })

    // 카운터
    $('.counter').counterUp({
        delay: 2,
        time: 200
    });


    let quesList = $('.ques-list ul li');
    let quesListWrap = $('.ques-list-wrap');
    quesList.click(function (e) {
        e.preventDefault();
        $(this).next().toggle().parent().siblings().find(quesListWrap).hide();
    })
})