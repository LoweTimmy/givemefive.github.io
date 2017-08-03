function turnper(){
	q=document.getElementsByClassName("change");
	q[1].style.display="none";
	w=document.getElementsByClassName("top-name");
	w[0].innerHTML="客服Taylor";
	e=document.getElementsByClassName("kefu-pic");
	e[0].style.display="block";
	var x=document.getElementsByClassName("chat-one");
	var y=document.getElementsByClassName("chat-two");
	var m=document.getElementsByClassName("panel");
	var n=document.getElementsByClassName("chat-input");
	x[5].style.display="block";
	m[0].scrollTop=m[0].scrollHeight;
}
