$(function(){

	const getChecked = (checkbox) =>{
		return checkbox.prop('checked');
	}

	let	$heroChk = $('#hero-chk');


	$('.hero label').on('click',function(){
		if(getChecked($heroChk)){
			$('.main,.arrow').hide().removeClass('active');
		}else{
			$('.main,.arrow').addClass('active').show();

		}
	});
	$('#img').on('click',function(){
		if(getChecked($heroChk)){
			$('.main,.arrow').hide().removeClass('active');
			$heroChk.removeAttr('checked').prop('checked',false).change();
		}
	});
	// 固定用
	$('.years').on('click',function(){
		$(this).toggleClass('click');
	});


	let $sections = $('section');

	// クラスshowを入れ替える
	toggleShow = (elem) =>{
		if($(elem).hasClass('show')){
			$sections.removeClass('show');
		}else{
			$sections.removeClass('show');
			$(elem).addClass('show');
		}
	};

	// 
	$sections.on('click',function(){
		let id = '#' + $(this).attr('id');
		toggleShow(id);
	});

	// ヘッダーとリンク
	$('.main ul a').each(function(){
		$(this).on('click',function(e){
			// e.preventDefault();
			let id = $(this).attr('href');
			toggleShow(id);

		});
	});
	$('.triangle').on({
		'mouseover':function(){
			$('.three-dimention').css('animation-duration','15s');
		},'mouseout':function(){
			$('.three-dimention').css('animation-duration','');
		}
	});
	$('.char').on({
		'mouseover':function(){
			$('.words').css('animation-duration','10s');
		},'mouseout':function(){
			$('.words').css('animation-duration','');
		}
	});
});
