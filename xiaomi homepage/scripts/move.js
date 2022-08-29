function getStyle(obj,name){
  if (obj.currentStyle)
  {
   return obj.currentStyle[name];
  }
  else 
  {
    return getComputedStyle(obj,false)[name];
  }
}

// 注释1

function startMove(obj,json,end){
	
  
    clearInterval(obj.timer);
	
	obj.timer=setInterval(function(){
								 
    var oTag=true;
								   
	for (attr in json) {
		
	if(attr=='opacity')
	{
	   cuur=Math.floor(parseFloat(getStyle(obj,attr))*100);	 
	}
	else
	{
	   cuur=parseInt(getStyle(obj,attr));
	}
	
	var speed=(json[attr]-cuur)/6;	
	speed=speed>0?Math.ceil(speed):Math.floor(speed);
	
	if (cuur!=json[attr]){
		oTag=false;
		}
	if (attr=='opacity')
	  {
	      obj.style.filter="filter:(opacity:"+(cuur+speed)+")";
		  obj.style.opacity=(cuur+speed)/100;
		   	  
	  }
	  else
	  {
	   obj.style[attr]=cuur+speed+'px'; 
	  }
	}
   if(oTag){
	   clearInterval(this.timer);
	   if(end){
		    end();
		   }
	   }
 },30) 
}

// JavaScript Document// JavaScript Document