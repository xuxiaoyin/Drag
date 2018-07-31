function Drag(id){
	var obj=document.getElementById(id);
	var disx=0;
	var disy=0;
	
	obj.onmousedown=function(ev){
		var ev=ev||window.event;
		disx=ev.clientX-obj.offsetLeft;
		disy=ev.clientY-obj.offsetTop;
		
		document.onmousemove=function(ev){
			var ev=ev||window.event;
			obj.style.left=ev.clientX-disx+'px';
			obj.style.top=ev.clientY-disy+'px';
		}
		
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;
		}
		
		return false;
	}
}
