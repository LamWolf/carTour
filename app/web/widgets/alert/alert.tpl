<div class="pop_mask" data-for=".J-alert-wrap"></div>
<div class="J-alert-wrap new_pop_main">
	<% if(closeAble){ %>
		<span class="close" <% if(ifSa) {%>data-sa-title="<%= saTitle.close %>"<% } %>></span>
	<% } %>
	<% if(title) {%>
		<div class="pop_msg">
			<h3><%=title%></h3>
			<div class="cont_withtitle"<%if(align){%> style="text-align:<%=align %>"<%}%>><%= msg %></div>
	      <div class="btn_content">
	      <% if(cancel){ %>
	        <span class="cancel_btn"><%= cancelText %></span>
					<% } %>
	        <span class="msg_btn" <% if(ifSa) {%>data-sa-title="<%= saTitle.btn %>"<% } %> ><%= btn %></span>
	      </div>
		</div>
	<%}else{%>
		<% if(isShowBtn){ %>
		<div class="pop_msg">
			<div class="cont"<%if(align){%> style="text-align:<%=align %>"<%}%>><%= msg %></div>
	      <div class="btn_content">
	      <% if(cancel){ %>
	        <span class="cancel_btn" <% if(ifSa) {%>data-sa-title="<%= saTitle.cancel %>"<% } %>><%= cancelText %></span>
					<% } %>
	        <span class="msg_btn" <% if(ifSa) {%>data-sa-title="<%= saTitle.btn %>"<% } %>><%= btn %></span>
	      </div>
		</div>
		<% } else {%>
			<div class="pop_msg_btnunshow">
				<div class="cont"<%if(align){%> style="text-align:<%=align %>"<%}%>><%= msg %></div>
			</div>
		<% } %>
	<% } %>
</div>
