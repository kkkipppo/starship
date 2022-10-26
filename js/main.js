
// mobile

function mobile(){

    // nav
    $('.btnNav').on('click',function(){
        $('nav').show();
    });

    $('.btnClose').on('click',function(){
        $('nav').hide();
    });


    //sub li
    $('.gnb>li>a').on('click',function(e){
        e.preventDefault();
        $(this).siblings('.sub').stop().slideToggle();
        $(this).parent()
        .siblings().find('.sub').stop().slideUp();
    });


    // artists
        $('.artWrap a').click(function(e){
        e.preventDefault();
    })
    $('.artCon').draggable({
        axis:"x",
        containment : [-500, 0, 30, 0]
    });


    // new
    $('.btnNewr button').on('click',function(){
        $(this).css({'backgroundColor' : '#f4f4f4'})
        .siblings().css({'backgroundColor' : '#ffffff'})
    
        let i = $(this).index();
    
        $('.newWrapr').children().eq(i).css({'display':'flex'}).siblings().hide();
    
    });
    
    $('.btnNewm button').on('click',function(){
        $(this).css({'backgroundColor' : '#f4f4f4'})
        .siblings().css({'backgroundColor' : '#ffffff'})
    
        let i = $(this).index();
    
        $('.newWrapm').children().eq(i).css({'display' : 'flex'}).siblings().hide();
    
    });
    

};  // mobile


// pc

function pc(){

    //  gnb sub
    $('.gnb>li>a, .subBack').on('mouseenter',function(){
        $('.subBack').stop().slideDown();
        
    }).on('mouseleave',function(){
        $('.subBack').stop().slideUp();
    });


    // new
        $('.btnNewr button').on('click',function(){
        $(this).css({'backgroundColor' : '#f4f4f4'})
        .siblings().css({'backgroundColor' : '#ffffff'})
    
        let i = $(this).index();
    
        $('.newWrapr').children().eq(i).css({'display':'flex'}).siblings().hide();
    
    });
    
    $('.btnNewm button').on('click',function(){
        $(this).css({'backgroundColor' : '#f4f4f4'})
        .siblings().css({'backgroundColor' : '#ffffff'})
    
        let i = $(this).index();
    
        $('.newWrapm').children().eq(i).css({'display' : 'flex'}).siblings().hide();
    
    });





}; // pc


// all


// slick banner
$(function(){
    $('.bnCon').slick({
        Infinity : true,
        arrows : false,
        dots : true,
        autoplay : true,
        autoplayspeed : 1000,
        draggable : true,
    });
});





$(window).on('resize',function(){
    let winwidth = $(window).width();

    if(winwidth >= 1200){
        location.reload();
        pc();
    }else{
        location.reload();

        mobile();
    }
    
})

//리사이징 할때 무조건 넣어야 하는거


// setting
let winwidth = $(window).width();
if(winwidth >= 1200){
    pc();
}else{

    mobile();
}






