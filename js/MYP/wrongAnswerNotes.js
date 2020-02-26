var dragFlag = false;
var noteIndex;
var dropX;
var dropY;

$(function(){

  addWrongNotes();
  clickNote();
  clickDeleteBtn();
  dragDropSub();
});

function dragDropSub()
{
  $(".note").mousedown(function(){
    dragFlag = true;
    noteIndex = $(this).index();
  });

  $(".note").mouseup(function(){
    dragFlag = false;
  });
}

// Drag
function drag(event) 
{
}

function drop(event)
{
  if(true == dragFlag)
  {
    dropX = event.clientX;
    dropY = event.clientY;

    let width = $(".note").eq(0).width();
    let height = $(".note").eq(0).height();

    let list = [];    
    let len = $(".note").length;
    for(let i = 0; i < len; i++)
    {
      let tmp = {};
      tmp.clientX = $(".note").eq(i).offset().left + width / 2;
      tmp.clientY = $(".note").eq(i).offset().top;
      list.push(tmp);
    }

    let imsi = -2;
    for(let i = 0; i < len - 1; i++)
    {
      if(list[i].clientY <= dropY && dropY <= list[i].clientY + height)
      {
        //드랍을 객체와 객체 사이에 할때
        if(list[i].clientX <= dropX && dropX <= list[i + 1].clientX)
        {
          imsi = i;
          break;
        }
        //드랍을 줄의 맨 처음에 할때
        else if(dropX < list[i].clientX && list[i].clientX == list[0].clientX)
        {
          imsi = i - 1;
          break;
        }
        //드랍을 줄의 마지막에 할때
        else if(list[i].clientX <= dropX && list[i + 1].clientX == list[0].clientX)
        {
          imsi = i;
          break;
        }
        //드랍을 객체의 맨 마지막에 할때
        else if(list[i + 1].clientX <= dropX && (i + 1) == (len - 1))
        {
          imsi = len - 1;
          break;
        }
      }
      //드랍을 마지막에 할때 마지막 객체가 다음줄의 첫 번째일때 예외처리
      else if(list[i + 1].clientX <= dropX && (i + 1) == (len - 1))
        {
          imsi = len - 1;
          break;
        }
    }

    if(-1 == imsi)
    {
      $(".note").eq(0).before($(".note").eq(noteIndex));

      let margin = $(".note").eq(0).css('margin-right').replace(/[^-\d\.]/g, '');
      $(".note").eq(0).css('margin-right', 0 + "px");
      $(".note").eq(0).animate({'margin-right': margin + "px"}, 500);
    }
    else if(-2 != imsi)
    {
      $(".note").eq(imsi).after($(".note").eq(noteIndex));

      let margin = $(".note").eq(imsi).css('margin-right').replace(/[^-\d\.]/g, '');
      $(".note").eq(imsi).css('margin-right', 0 + "px");
      $(".note").eq(imsi).animate({'margin-right': margin + "px"}, 500);
    }
  }

  dragFlag = false;
}

function allowDrop(event)
{
  event.preventDefault(); 
}

function clickNote()
{
  $(".note").click(function(){

    let num = $(this).index();
    let url = "./examNote_pop.html?num=" + num;
    window.open(url, "_blank", "left=200, top=100, width=750, height=710, resizable=no");
  });
}

function clickDeleteBtn()
{
  $(".btnDelete").click(function(e){
    e.stopPropagation();

    var result = confirm("해당 회차의 오답노트를 삭제하시겠습니까?");
    if(result == true)
    {
      $(this).parent().fadeOut(400, function(){
        $(this).remove();
      });
    }      
    
    if (1 == $('.note').length) 
    {
      strHtml = "<div class='noteIsNone'>오답노트가 존재하지 않습니다.</div>"
      $("#wrongNotes").html(strHtml);
    }
  });
}

//현재 데이터가 없기에 랜덤으로 0 ~ 7개까지 회차를 만듬
function addWrongNotes()
{
  let len = Math.floor(Math.random() * 8);
  $("#wrongNotes").html("");

  let strHtml = "";
  for(let i = 0; i < len; i++)
  {
    let str = "<div class='note' draggable='true' ondragstart='drag(event)'>" + (i + 1) + "회차<div class='btnDelete' title='삭제'>x</div></div>";
    strHtml += str;
  }

  if(0 == len)
    strHtml = "<div class='noteIsNone'>오답노트가 존재하지 않습니다.</div>"

  $("#wrongNotes").html(strHtml);
}