<div class="pop_mask" data-for=".J-alert-wrap"></div>
<div class="J-alert-wrap pop_main">
	<div class="pop_msg">
		<div class="cont"<%if(align){%> style="text-align:<%=align %>"<%}%>><%= msg %></div>
		<% if(isShowBtn){ %>
      <div class="btn_content">
      <% if(cancel){ %>
        <span class="cancel_btn">取消</span>
        <span class="msg_btn">确定</span>
      <% } else{%>
        <span class="msg_btn"><%= btn %></span>
      <% } %>
      </div>
		<% } %>
	</div>
</div>
