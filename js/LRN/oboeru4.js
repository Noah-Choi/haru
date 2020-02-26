// 일본어 행별로 표시
function wordlistoutput() {
    for(let i=0; i<oboeru_form.length; i++) {
    var form = oboeru_form[i];
    var test = oboeru_test[i];   
    var kanji = oboeru_kanji[i];
    var yomigana = oboeru_yomigana[i];
    var korean = oboeru_korean[i];
    var WDLlist = document.getElementById('LRN_WDL_table_list_a');
    var add = WDLlist.insertRow( WDLlist.rows.length );
    var WDL_formcell = add.insertCell(0);
    var WDL_testcell = add.insertCell(1);
    var WDL_kanjicell = add.insertCell(2);
    var WDL_yomiganacell = add.insertCell(3);
    var WDL_koreancell = add.insertCell(4);
    WDL_formcell.innerHTML = form;
    WDL_testcell.innerHTML = test;
    WDL_testcell.className = "WDL_table_test"
    WDL_kanjicell.innerHTML = kanji;
    WDL_yomiganacell.innerHTML = yomigana;
    WDL_koreancell.innerHTML = korean;
    }
}

// function listNone(){
//     if($('#LRN_WDL_list_col_a_list tr').css('display','table-row').length==1){
//         $('#list_none').stop().slideDown();
//         return;
//     } else { 
//         $('#list_none').stop().slideUp();
//         return;
//     }
// }

// 표 보이기 숨기기
// $(function(){
//     $('.WDL_col_title').click(this, function(){
//         $(this).next(".WDL_col_table_wrap").stop().slideToggle();
//     });
// });

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

        function voidCheck(){
            let n1 = $('#check1').is(":checked");
            let n2 = $('#check2').is(":checked");
            let n3 = $('#check3').is(":checked");
            let n4 = $('#check4').is(":checked");
            let n5 = $('#check5').is(":checked");

            let meishi = $("#meishi").is(":checked");
            let daimeishi = $("#daimeishi").is(":checked");
            let doushi = $("#doushi").is(":checked");
            let jyoshi = $("#jyoshi").is(":checked");
            let keiyoushi = $("#keiyoushi").is(":checked");
            
            if((n1||n2||n3||n4||n5)&&(meishi||daimeishi||doushi||jyoshi||keiyoushi)){
                if(!(n1||n3||n4||n5||meishi||daimeishi||doushi||keiyoushi)&&(n2&&jyoshi)){
                    $('#list_none').css('visibility','visible');
                }else{
                    $('#list_none').css('visibility','hidden')
                    
                }
            }else{
                $('#list_none').css('visibility','visible');
            }
        }
        
        // 체크리스트 구동
        function checkList(){
            checkBtnAll();
            voidCheck();
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

