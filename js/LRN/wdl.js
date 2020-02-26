// 아행부터 행별로 표시
function wordlistoutput() {
    for(let i=0; i<form_a.length; i++) {
    var form = form_a[i];
    var test = test_a[i];   
    var kanji = kanji_a[i];
    var yomigana = yomigana_a[i];
    var korean = korean_a[i];
    var WDLlist = document.getElementById('LRN_WDL_table_list_a');
    var add = WDLlist.insertRow( WDLlist.rows.length );
    var WDL_formcell = add.insertCell(0);
    var WDL_testcell = add.insertCell(1);
    var WDL_kanjicell = add.insertCell(2);
    var WDL_yomiganacell = add.insertCell(3);
    var WDL_koreancell = add.insertCell(4);
    WDL_formcell.innerHTML = form;
    WDL_testcell.innerHTML = test;
    WDL_kanjicell.innerHTML = kanji;
    WDL_yomiganacell.innerHTML = yomigana;
    WDL_koreancell.innerHTML = korean;
    }
}

// 행별 표 보이기 숨기기
// $(function(){
//     $('.WDL_col_title').click(this, function(){
//         $(this).next(".WDL_col_table_wrap").stop().slideToggle();
//     });
// });

// function cat_control() {
//     var cat_box = document.getElementsByName('cat_select');
//     var cat_chk = false;
//     for(var i=0 ; i<cat_box.length ; i++) {
//         if(cat_box[i].checked) {
//             cat_chk = true;
//         } else {
//             cat_chk = false;
//         }
//     }
//     if(cat_chk) {
//         $('.WDL_table_list').hide();
//         return false;
//     } else {
//         $('.WDL_table_list').show();
//     }
// }


// function cat_control() {
//     $('.cat_chk').change(function(){
//         if(this.checked)
//         $('.WDL_table_list').hide();
//         else
//         $('.WDL_table_list').show();
//     });
// }

$(document).ready(function(){
    wordlistoutput();

        // 체크리스트 작성
        checkList();
        // 급수별
        $('#check1').click(function(){
            checkList();
        })
        $('#check2').click(function(){
            checkList();
        })
        $('#check3').click(function(){
            checkList();
        })
        $('#check4').click(function(){
            checkList();
        })
        $('#check5').click(function(){
            checkList();
        })
    
        // 품사별
        $('#all').click(function(){
            checkList();
        })
        $('#meishi').click(function(){
            checkList();
        })
        $('#daimeishi').click(function(){
            checkList();
        })
        $('#doushi').click(function(){
            checkList();
        })
        $('#jyoshi').click(function(){
            checkList();
        })
        $('#keiyoushi').click(function(){
            checkList();
        })
    
        // 전체 버튼
        $('#all').click(function() {
            if(allCheck()){
                $('#meishi, #daimeishi, #doushi, #jyoshi, #keiyoushi').prop('checked',false);
                for(var i = 1; i < 6; i++)
                    $('#check' + i).prop('checked',false);
            }else{
                $('#meishi, #daimeishi, #doushi, #jyoshi, #keiyoushi').prop('checked',true);
                for(var i = 1; i < 6; i++)
                    $('#check' + i).prop('checked',true);
            }
            checkList();
        });
        function checkBtnAll(){
            checkButton($('#check1'));
            checkButton($('#check2'));
            checkButton($('#check3'));
            checkButton($('#check4'));
            checkButton($('#check5'));
            checkButton($('#meishi'));
            checkButton($('#daimeishi'));
            checkButton($('#doushi'));
            checkButton($('#jyoshi'));
            checkButton($('#keiyoushi'));
        }
        function checkButton($var){
            if($var.is(':checked'))
                $var.css({'font-weight':'bold;',});
            else
                $var.css({'font-weight':'10;'});
                $('#all').css({'font-weight':'10;'});
        }
        function allCheck(){
            var returnVal = true;
            if(!$('#check1').is(':checked'))
                returnVal = false;
            if(!$('#check2').is(':checked'))
                returnVal = false;
            if(!$('#check3').is(':checked'))
                returnVal = false;
            if(!$('#check4').is(':checked'))
                returnVal = false;
            if(!$('#check5').is(':checked'))
                returnVal = false;
            if(!$('#meishi').is(':checked'))
                returnVal = false;
            if(!$('#daimeishi').is(':checked'))
                returnVal = false;
            if(!$('#doushi').is(':checked'))
                returnVal = false;
            if(!$('#jyoshi').is(':checked'))
                returnVal = false;
            if(!$('#keiyoushi').is(':checked'))
                returnVal = false;
            return returnVal;
        }
    
        // 체크리스트 구동
        function checkList(){
    
            checkBtnAll();
            // 1급 버튼
            if($('#check1').is(':checked')) {
                if($('#meishi').is(':checked')){
                    $("td").filter(function() {
                        return $(this).text() === "명사";
                    }).next("td:contains('JLPT N1')").parent().stop().slideDown();
                } else {
                    $("td").filter(function() {
                        return $(this).text() === "명사";
                    }).parent().stop().slideUp();
                }
                if($('#daimeishi').is(':checked')){
                    $("td").filter(function() {
                        return $(this).text() === "대명사";
                    }).next("td:contains('JLPT N1')").parent().stop().slideDown();
                } else {
                    $("td").filter(function() {
                        return $(this).text() === "대명사";
                    }).parent().stop().slideUp();
                }
                if($('#doushi').is(':checked')){
                    $("td").filter(function() {
                        return $(this).text() === "동사";
                    }).next("td:contains('JLPT N1')").parent().stop().slideDown();
                } else {
                    $("td").filter(function() {
                        return $(this).text() === "동사";
                    }).parent().stop().slideUp();
                }
                if($('#jyoshi').is(':checked')){
                    $("td").filter(function() {
                        return $(this).text() === "조사";
                    }).next("td:contains('JLPT N1')").parent().stop().slideDown();
                } else {
                    $("td").filter(function() {
                        return $(this).text() === "조사";
                    }).parent().stop().slideUp();
                }
                if($('#keiyoushi').is(':checked')){
                    $("td").filter(function() {
                        return $(this).text() === "형용사";
                    }).next("td:contains('JLPT N1')").parent().stop().slideDown();
                } else {
                    $("td").filter(function() {
                        return $(this).text() === "형용사";
                    }).parent().stop().slideUp();
                }
            } else {
                $("td").filter(function() {
                    return $(this).text() === "JLPT N1";
                }).parent().stop().slideUp();
            }
    
            // 2급 버튼
            if($('#check2').is(':checked')) {
                if($('#meishi').is(':checked')){
                    $("td").filter(function() {
                        return $(this).text() === "명사";
                    }).next("td:contains('JLPT N2')").parent().stop().slideDown();
                } else {
                    $("td").filter(function() {
                        return $(this).text() === "명사";
                    }).parent().stop().slideUp();
                }
                if($('#daimeishi').is(':checked')){
                    $("td").filter(function() {
                        return $(this).text() === "대명사";
                    }).next("td:contains('JLPT N2')").parent().stop().slideDown();
                } else {
                    $("td").filter(function() {
                        return $(this).text() === "대명사";
                    }).parent().stop().slideUp();
                }
                if($('#doushi').is(':checked')){
                    $("td").filter(function() {
                        return $(this).text() === "동사";
                    }).next("td:contains('JLPT N2')").parent().stop().slideDown();
                } else {
                    $("td").filter(function() {
                        return $(this).text() === "동사";
                    }).parent().stop().slideUp();
                }
                if($('#jyoshi').is(':checked')){
                    $("td").filter(function() {
                        return $(this).text() === "조사";
                    }).next("td:contains('JLPT N2')").parent().stop().slideDown();
                } else {
                    $("td").filter(function() {
                        return $(this).text() === "조사";
                    }).parent().stop().slideUp();
                }
                if($('#keiyoushi').is(':checked')){
                    $("td").filter(function() {
                        return $(this).text() === "형용사";
                    }).next("td:contains('JLPT N2')").parent().stop().slideDown();
                } else {
                    $("td").filter(function() {
                        return $(this).text() === "형용사";
                    }).parent().stop().slideUp();
                }
            } else {
                $("td").filter(function() {
                    return $(this).text() === "JLPT N2";
                }).parent().stop().slideUp();
            }
    
            // 3급 버튼
            if($('#check3').is(':checked')) {
                if($('#meishi').is(':checked')){
                    $("td").filter(function() {
                        return $(this).text() === "명사";
                    }).next("td:contains('JLPT N3')").parent().stop().slideDown();
                } else {
                    $("td").filter(function() {
                        return $(this).text() === "명사";
                    }).parent().stop().slideUp();
                }
                if($('#daimeishi').is(':checked')){
                    $("td").filter(function() {
                        return $(this).text() === "대명사";
                    }).next("td:contains('JLPT N3')").parent().stop().slideDown();
                } else {
                    $("td").filter(function() {
                        return $(this).text() === "대명사";
                    }).parent().stop().slideUp();
                }
                if($('#doushi').is(':checked')){
                    $("td").filter(function() {
                        return $(this).text() === "동사";
                    }).next("td:contains('JLPT N3')").parent().stop().slideDown();
                } else {
                    $("td").filter(function() {
                        return $(this).text() === "동사";
                    }).parent().stop().slideUp();
                }
                if($('#jyoshi').is(':checked')){
                    $("td").filter(function() {
                        return $(this).text() === "조사";
                    }).next("td:contains('JLPT N3')").parent().stop().slideDown();
                } else {
                    $("td").filter(function() {
                        return $(this).text() === "조사";
                    }).parent().stop().slideUp();
                }
                if($('#keiyoushi').is(':checked')){
                    $("td").filter(function() {
                        return $(this).text() === "형용사";
                    }).next("td:contains('JLPT N3')").parent().stop().slideDown();
                } else {
                    $("td").filter(function() {
                        return $(this).text() === "형용사";
                    }).parent().stop().slideUp();
                }
            } else {
                $("td").filter(function() {
                    return $(this).text() === "JLPT N3";
                }).parent().stop().slideUp();
            }
    
            // 4급 버튼
            if($('#check4').is(':checked')) {
                if($('#meishi').is(':checked')){
                    $("td").filter(function() {
                        return $(this).text() === "명사";
                    }).next("td:contains('JLPT N4')").parent().stop().slideDown();
                } else {
                    $("td").filter(function() {
                        return $(this).text() === "명사";
                    }).parent().stop().slideUp();
                }
                if($('#daimeishi').is(':checked')){
                    $("td").filter(function() {
                        return $(this).text() === "대명사";
                    }).next("td:contains('JLPT N4')").parent().stop().slideDown();
                } else {
                    $("td").filter(function() {
                        return $(this).text() === "대명사";
                    }).parent().stop().slideUp();
                }
                if($('#doushi').is(':checked')){
                    $("td").filter(function() {
                        return $(this).text() === "동사";
                    }).next("td:contains('JLPT N4')").parent().stop().slideDown();
                } else {
                    $("td").filter(function() {
                        return $(this).text() === "동사";
                    }).parent().stop().slideUp();
                }
                if($('#jyoshi').is(':checked')){
                    $("td").filter(function() {
                        return $(this).text() === "조사";
                    }).next("td:contains('JLPT N4')").parent().stop().slideDown();
                } else {
                    $("td").filter(function() {
                        return $(this).text() === "조사";
                    }).parent().stop().slideUp();
                }
                if($('#keiyoushi').is(':checked')){
                    $("td").filter(function() {
                        return $(this).text() === "형용사";
                    }).next("td:contains('JLPT N4')").parent().stop().slideDown();
                } else {
                    $("td").filter(function() {
                        return $(this).text() === "형용사";
                    }).parent().stop().slideUp();
                }
            } else {
                $("td").filter(function() {
                    return $(this).text() === "JLPT N4";
                }).parent().stop().slideUp();
            }
    
            // 5급 버튼
            if($('#check5').is(':checked')) {
                if($('#meishi').is(':checked')){
                    $("td").filter(function() {
                        return $(this).text() === "명사";
                    }).next("td:contains('JLPT N5')").parent().stop().slideDown();
                } else {
                    $("td").filter(function() {
                        return $(this).text() === "명사";
                    }).parent().stop().slideUp();
                }
                if($('#daimeishi').is(':checked')){
                    $("td").filter(function() {
                        return $(this).text() === "대명사";
                    }).next("td:contains('JLPT N5')").parent().stop().slideDown();
                } else {
                    $("td").filter(function() {
                        return $(this).text() === "대명사";
                    }).parent().stop().slideUp();
                }
                if($('#doushi').is(':checked')){
                    $("td").filter(function() {
                        return $(this).text() === "동사";
                    }).next("td:contains('JLPT N5')").parent().stop().slideDown();
                } else {
                    $("td").filter(function() {
                        return $(this).text() === "동사";
                    }).parent().stop().slideUp();
                }
                if($('#jyoshi').is(':checked')){
                    $("td").filter(function() {
                        return $(this).text() === "조사";
                    }).next("td:contains('JLPT N5')").parent().stop().slideDown();
                } else {
                    $("td").filter(function() {
                        return $(this).text() === "조사";
                    }).parent().stop().slideUp();
                }
                if($('#keiyoushi').is(':checked')){
                    $("td").filter(function() {
                        return $(this).text() === "형용사";
                    }).next("td:contains('JLPT N5')").parent().stop().slideDown();
                } else {
                    $("td").filter(function() {
                        return $(this).text() === "형용사";
                    }).parent().stop().slideUp();
                }
            } else {
                $("td").filter(function() {
                    return $(this).text() === "JLPT N5";
                }).parent().stop().slideUp();
            }
    
    
        }
    

});

