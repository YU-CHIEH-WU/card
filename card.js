$(function(){
	var hoverable=true;
	var screenCount=1;
	var thumbnailCount = 0;
	setTimeout(function(){
		$('.fa-spinner').removeClass('fa-spinner').removeClass('fa-pulse')
		.addClass('fa-play');
	},1000)
	$('.start').click(function(){
		if($('.start .fa').hasClass('fa-play')){
			$('.start').hide();
			$('#card').removeClass('startButton').addClass('card');
			$('.coverWrap').delay(1000).show(0);
			$('.cardtext').delay(1000).show(0);
		}
	})
	var hoverable=true;
	$('.coverWrap').mouseenter(function(){
		if(hoverable)
			$('#cover').addClass('active');
	})
	$('.coverWrap').mouseleave(function(){
		if(hoverable)
			$('#cover').removeClass('active');
	})
	$('#nextStep').click(function(){
		hoverable=false;
		$('#cover').removeClass('active');
		setTimeout(function(){
			$('#card').addClass('hide');
		},1000);
		setTimeout(function(){
			$('#blackScreen').addClass('active');
			$('#screen1').addClass('active');
		},1500);
		setTimeout(function(){
			$('.next').fadeIn();
			$('#screen1 .photo').addClass('active');
		},2500);
	})
	$('.prev').click(function(){
		//按鈕控制
		$('.prev').fadeOut();
		$('.next').fadeOut();
		//原先螢幕往右移動
		$('#screen'+screenCount).addClass('rightOut');
		$('#screen'+screenCount+' .text').addClass('rightOut');
		$('.photo.active').addClass('rightOut');
		//調整記數
		screenCount--;
		//下一幕預先定位(螢幕左方)
		$('#screen'+screenCount).addClass('leftOut');
		$('#screen'+screenCount+' .text').addClass('leftOut');
		setTimeout(function(){
			//原先螢幕移除active
			$('.screen.active .photo.active').removeClass('active');
			$('.screen.active').removeClass('active');
			$('.text.active').removeClass('active');
			//下一幕active往左移入
			$('.screen.leftOut').addClass('active').removeClass('leftOut');
		},1000);
		//相片滑下
		setTimeout(function(){
			$('.screen.active .photo').addClass('active');
		},1100)
		//取消leftOut與rightOut
		setTimeout(function(){
			$('.leftOut').removeClass('leftOut');
			$('.rightOut').removeClass('rightOut');
			//按鈕控制
			if(screenCount!=1)
				$('.prev').fadeIn();
			$('.next').fadeIn();
		},2000)
	})
	$('.next').click(function(){
		//按鈕控制
		$('.prev').fadeOut();
		$('.next').fadeOut();
		//原先螢幕往左移動
		$('#screen'+screenCount).addClass('leftOut');
		$('#screen'+screenCount+' .text').addClass('leftOut');
		$('.photo.active').addClass('leftOut');
		//調整記數
		screenCount++;
		//下一幕預先定位(螢幕右方)
		$('#screen'+screenCount).addClass('rightOut');
		$('#screen'+screenCount+' .text').addClass('rightOut');
		setTimeout(function(){
			//原先螢幕移除active
			$('.screen.active .photo.active').removeClass('active');
			$('.screen.active').removeClass('active');
			$('.text.active').removeClass('active');
			//下一幕active往左移入
			$('.screen.rightOut').addClass('active').removeClass('rightOut')
		},1000);
		//相片滑下
		setTimeout(function(){
			$('.screen.active .photo').addClass('active');
		},1100)
		//取消leftOut與rightOut
		setTimeout(function(){
			$('.leftOut').removeClass('leftOut');
			$('.rightOut').removeClass('rightOut');
			//按鈕控制
			if(screenCount!=5){
				$('.next').fadeIn();
			}
			if(screenCount==5){
				$('.down').fadeIn();
			}
			$('.prev').fadeIn();
		},2000)
	})
	$('.down').click(function(){
		$('.prev').fadeOut();
		$('.down').fadeOut();
		$('.active').removeClass('active');
		$('.wall').addClass('active');
		setTimeout(function(){
			$('.thumbnail').each(function(index){
				$(this).delay(200*index).fadeIn(300,function(){
					thumbnailCount++;
					if(thumbnailCount==32){
						setTimeout(function(){
							$('.thumbnail').addClass('opacity');	
						},800);
						setTimeout(function(){
							$('.e1').addClass('active');
						},1500);
						setTimeout(function(){
							$('.e2').addClass('active');
						},2500);
						setTimeout(function(){
							$('.e3').addClass('active');
						},3500);
					}
				});
			})
		},500)
	})
	$('.replay').click(function(){
		$('.active').removeClass('active');
		$('#card').addClass('startButton').removeClass('card');
		$('.start').show();
		$('#card').removeClass('hide');
	})
})