$(function(){

	const getFlag = (checkbox) =>{
		return checkbox.prop('checked');
	}

	let	$hero = $('.hero'),
		$heroText =  $('.hero form label'),
		$heroChk = $('#hero-chk');

	$heroText.on('click',function(){
		if(getFlag($heroChk)){
			$('.main,.arrow').hide().removeClass('active');
		}else{
			$('.main,.arrow').addClass('active').show();
		}
	});
	$hero.on('click','img',function(){
		if(getFlag($heroChk)){
			$('.main,.arrow').hide().removeClass('active');
			$heroChk.removeAttr('checked').prop('checked', false).change();
		}
	})

	// 固定用
	$('.years').on('click',function(){
		$(this).toggleClass('click');
	});
});
