$(function(){
	var text = $('.orange')
    for(i=0;i<text.length;i++){
	var bool = $('.orange').eq(i).text().indexOf("+");	
	if(bool>=0){
      $('.orange').eq(i).css({color:'#FF6600'})
    }else{
      $('.orange').eq(i).css({color:'#54AC22'})
    }
    }
    $('.detail').click(function(){
    	$(this).siblings().removeClass('hover')
    	$(this).addClass('hover')
    	$('#expenditure').hide()
    	$('#income').hide()
    	$('#detail').show()
    })
    $('.incomed').click(function(){
    	$(this).siblings().removeClass('hover')
    	$(this).addClass('hover')
    	$('#expenditure').hide()
    	$('#income').show()
    	$('#detail').hide()
    })
    $('.expenditure').click(function(){
    	$(this).siblings().removeClass('hover')
    	$(this).addClass('hover')
    	$('#expenditure').show()
    	$('#income').hide()
    	$('#detail').hide()
    })
   var index = $("#income_number>a").last().prev().text()   
   $("#income_number").createPage({
        pageCount:index,
        current:1,
        backFn:function(p){
            console.log(p);
        }
    });
    var index = $("#income_number>a").last().prev().text()   
   $("#income_number").createPage({
        pageCount:index,
        current:1,
        backFn:function(p){           
        }
    });
    var index = $("#detail_number>a").last().prev().text()   
   $("#detail_number").createPage({
        pageCount:index,
        current:1,
        backFn:function(p){           
        }
    });
    var index = $("#expenditure_number>a").last().prev().text()   
   $("#expenditure_number").createPage({
        pageCount:index,
        current:1,
        backFn:function(p){           
        }
    });
})
