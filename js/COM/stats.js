var percentArr = {};
var double;
var mobileHeight = 60;
var pcWidth = 55;


$(function(){

    init();
    
    setGraph();
});


function init()
{
    let arr = {};
    let iSum = 0;

    for(let i = 0; i < 5; i++)
    {
        arr[i] = Math.floor(Math.random() * 100 + 1);
        iSum += arr[i];
    }

    let percent = iSum / 100;
    for(let i = 0; i < 5; i++)
        percentArr[i] = Math.ceil(arr[i] / percent);

    //그래프 크기가 너무 작아 모든 그래프가 50이하면 2배로 확장
    double = 2;
    for(let i = 0; i < 5; i++)
    {
        if(50 < percentArr[i])
        {
            double = 1;
            break;
        }
    }
}

function setGraph()
{
    let width = $(window).width();

    if(0 <= width && width <= 540)
        changeGraphSize("height");
    else
        changeGraphSize("width");
}

function changeGraphSize(heightWidth)
{
    let wid = $("#graph").css(heightWidth);

    let index = wid.indexOf('.');
    if(-1 != index)
        wid = wid.substring(0, index);
    else
    {
        index = wid.indexOf("px");
        wid = wid.substring(0, index);
    }

    let percent = wid / 100;

    for(let i = 0; i < 5; i++)
    {
        let value = percent * percentArr[i] * double;

        if("width" == heightWidth)
        {
            $(".graph_bar").eq(i).css("width", value + "px");
            $(".graph_bar").eq(i).css("height", mobileHeight + "px");
            $(".graph_bar").eq(i).css("margin-top", 0 + "px");
        }
        else
        {
            let width = $(window).width();
            let graphWidth = $("div#graph").css("width");
            index = graphWidth.indexOf("px");
            graphWidth = graphWidth.substring(0, index);

            let marginLeft = (width - graphWidth) / 2;
            $("#article_wrap").css("margin-left", 0 + "px");
            $("#haru_subcontents").css("margin-left", marginLeft + "px");

            let margin = wid - value;
            $(".graph_bar").eq(i).css("width", pcWidth + "px");
            $(".graph_bar").eq(i).css("height", value + "px");
            $(".graph_bar").eq(i).css("margin-top", margin + "px");
        }
    }
}