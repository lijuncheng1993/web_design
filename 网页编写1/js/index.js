$(function () {
    var $pic = $('.pic li img'),//图片
        $btn = $('.btn li'),    //原点
        $tab = $('.tab li'),    //箭头
        $banner = $('.banner'); //


    var n = 0;  //定义下标

    //初始化
    $pic.eq(n).addClass('show');
    $btn.eq(n).addClass('active');

    //小圆点事件
    $btn.click(function () {
        // console.log($(this).index());   //获取下标
        // console.log($(this).index());

        // console.log($('.btn li').length);
        var num = $(this).index();

        if (num!=n){
            change(num);
        // $btn.eq(n).fadeOut(2000);       //淡出事件
        // $btn.eq(n).removeClass('active');
        // n = num;
        // $pic.eq(n).fadeIn(2000);
        // $btn.eq(n).addClass('active');
        }
    });

    // 优化，封装
    function change(num) {
        $pic.eq(n).fadeOut(1000);       //淡出事件
        $btn.eq(n).removeClass('active');
        n = num;
        $pic.eq(n).fadeIn(1000);
        $btn.eq(n).addClass('active');
    }

    // 左箭头
    $tab.click(function () {
        var num=n;
        if($(this).index()){  //右箭头
            num++; // 0 1 2 3 4 5 6 7
            num%=$pic.length; //0 1 2 3 4 0 1 2 3 4

        }else {         //左箭头
            num--;
            if(num<0){
                num%=$pic.length-1;
            }
        }
        change(num);
    });
    // 自动轮播
    function f() {
        var num=n;
        num++;
        num%=$pic.length;
        change(num);
    }
    var s1 = setInterval(f,2000);
    $banner.hover(function () {
        clearInterval(s1);

    },function(){   //移出激活
        s1 = setInterval(f,2000)

    });
    // 菜单栏
    var $title=$('.news-tag .title li');
    var $content=$('.news-tag .news-content li');
    var num = 0;
    $title.click(function () {
        $content.eq(num).removeClass('show');
        $title.eq(num).removeClass('active');
        num=$(this).index();
        $content.eq(num).addClass('show');
        $title.eq(num).addClass('active');


    });




});


