<div class="pop_mask J-alert-wrap">
	<div class="pop_msg ${isSucc ? 'pop_wrap_succ' : 'pop_wrap_err'}">
	  <span class="pop_close_btn"></span>
	  <div class="pop_title">
	    <div class="pop_title_img ${isSucc ? 'pop_title_succ' : 'pop_title_err'}"></div>
	    <p>${isSucc ? '验证成功' : '验证失败'}</p>
	  </div>
		<div class="cont">$${msg}</div>
		<button class="msg_btn">${btn}</button>
	</div>
</div>
