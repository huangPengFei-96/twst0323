// 封装 一个according的方法
$.fn.accordion = function (colors) {

    var lis = this.find('li');
    var wd = this.width() / lis.length;
    var arr = colors;
    // 给ul里面的所有li都上样色
    Array.from(arr.colors).forEach(function (item, index) {
        $(lis[index]).css({
            backgroundColor: item
        })
        $(lis[index]).css({
            width: wd
        })
    })


    //计算出min max
    if (arr.minWidth > 200 || arr.minWidth < 50) {
        // min要是大于$(this).width() / lis.length就直接等于默认值
        throw new Error("该值太小了,无法使用")
        // return
    } else {
        minwidth = arr.minWidth ? arr.minWidth : 100;
    }
    var maxwidth = $(this).width() - ((lis.length - 1) * minwidth)
    //给所有的li注册鼠标移入事件
    $(this).find('li').mouseenter(function () {
        // 在事件处理函数中,找到当前li,宽度改为max 其他的li 宽度改为min
        $(this)
            .stop(true)
            .animate({
                width: maxwidth,
            })
            .siblings()
            .stop(true)
            .animate({
                width: minwidth,
            })
    })

    //给box注册鼠标移出事件,在事件处理函数中,让所有的li的宽度改为
    $(this).mouseleave(function () {
        $('li').stop(true).animate({
            width: wd
        })
    })
}