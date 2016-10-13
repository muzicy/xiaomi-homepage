// JavaScript Document


var oTop3=document.getElementById("ct3");
var oUl1=document.getElementById("left_vertical_list");

var oSpan_prev=document.getElementById("prev_choose");
var oSpan_next=document.getElementById("next_choose");


var oDiv_ct4=document.getElementById("show_danpin");
var oUl_ct4=document.getElementsByClassName("signal_list")[0];
oUl_ct4.style.width=oUl_ct4.children[0].offsetWidth*10+8*25+"px";

var oDiv_ct5=document.getElementById("ct5");
var auto_prev=oDiv_ct5.getElementsByClassName("auto_prev")[0];
var auto_next=oDiv_ct5.getElementsByClassName("auto_next")[0];
var ct5_choose=document.getElementById("ct5_choose");

oDiv_ct5.fn=moveauto;
	  
var arr1=[{"url":"img/top3/mi5bar80.jpg","name":"小米手机5"},{"url":"img/top3/mi5bar80.jpg","name":"小米Max"},{"url":"img/top3/mi5bar80.jpg","name":"红米Note4"},{"url":"img/top3/mi5bar80.jpg","name":"红米Note3"},{"url":"img/top3/mi5bar80.jpg","name":"红米手机3s"},{"url":"img/top3/mi5bar80.jpg","name":"红米Pro"},{"url":"img/top3/mi5bar80.jpg","name":"红米手机3"},{"url":"img/top3/mi5bar80.jpg","name":"红米手机3X"},{"url":"img/top3/mi5bar80.jpg","name":"合约机"},{"url":"img/top3/mi5bar80.jpg","name":"对比手机"},{"url":"img/top3/mi5bar80.jpg","name":"小米移动 电话卡"}];
var arr2=[{"url":"img/top3/bijiben80_cp.jpg","name":"小米笔记本"},{"url":"img/top3/bijiben80_cp.jpg","name":"小米平版2"},{"url":"img/top3/bijiben80_cp.jpg","name":"SUB-C转接器"},
           {"url":"img/top3/bijiben80_cp.jpg","name":"小米笔记本内胆包"}];
		   

//oUl_ct4.timer2=setTimeout(moveauto,1000);

oDiv_ct5.fn();	   
eventUtil.addHandler(oUl1,"mouseover",function(event){
	
  var aLi=oUl1.getElementsByTagName("li");
  var ev=eventUtil.getEvent(event);
  var target=eventUtil.getTarget(ev);
 // var oDiv1=null;
  
  for (var i=0,len=aLi.length; i<len; i++){
	  
	    
	   if(target==aLi[i] || target.parentNode==aLi[i]){		
	       aLi[i].index=i;   
		  //alert(aLi[i].index);
		   aLi[i].style.background="orange";	 
		     
		  if(aLi[i].index==0){
			  
			if(document.getElementsByClassName("div1_choose").length>0){
			var od=document.getElementsByClassName("div1_choose")[0];	
			  od.parentNode.removeChild(od);	
			  
		    }
			var oDiv1=document.createElement("div");
			 oDiv1.className="div1_choose";
			 
			 var num=Math.ceil(arr1.length/6);
			 //alert(num);
			 oDiv1.style.width=250*num+"px";
			// console.log(oDiv1);
			 for(var m=0; m<num; m++) {
			    var oUl=document.createElement("ul");
				oUl.className="top3_div1_list" ;
			    oUl.style.position="absolute";
			    oUl.style.left=m*250+"px";
			 
			    var arr=new Array();
			    for(var k=m*6;k<(m+1)*6;k++){
				   if (arr1[k]){
			       arr.push(arr1[k]);
				   }					 
		        }
			   createLiList(oUl,arr);			 
			   oDiv1.appendChild(oUl);	 
			 }
			 oTop3.appendChild(oDiv1);
		  }	
		   if(aLi[i].index==1){
			   
			if(document.getElementsByClassName("div1_choose").length>0){
			var od=document.getElementsByClassName("div1_choose")[0];	
			  od.parentNode.removeChild(od);	
			 // alert("1");
			  
		    }
			var oDiv2=document.createElement("div");
			 oDiv2.className="div1_choose";
			 
			 var num=Math.ceil(arr2.length/6);
			 oDiv2.style.width=250*num+"px";
			 for(var j=0; j<num; j++) {
			    var oUl=document.createElement("ul");
				oUl.className="top3_div1_list" ;
			    oUl.style.position="absolute";
			    oUl.style.left=j*250+"px";
			 
			    var arr=new Array();
			    for(var k=j*6;k<(j+1)*6;k++){
				   if (arr2[k]){
			       arr.push(arr2[k]);
				   }					 
		        }
			   createLiList(oUl,arr);			 
			   oDiv2.appendChild(oUl);	 
			 }
			oTop3.appendChild(oDiv2); 
		  }	
	   }
	 else{
	  aLi[i].style.background="";	 
	 }
     
  }
 });
 
eventUtil.addHandler(oUl1,"mouseleave",function(event){	
       var aLi=oUl1.getElementsByTagName("li");
	   var ev=eventUtil.getEvent(event);
	   var target=eventUtil.getTarget(ev); 
	  // console.log(target);
		
		
		if(document.getElementsByClassName("div1_choose")[0]){
		  var left3_div=document.getElementsByClassName("div1_choose")[0];  	
		
	      oUl1.timer=setTimeout(function(){	
		  left3_div.style.display="none";
		  eventUtil.stopPropagation(ev);
		  for (var j=0,len=aLi.length;j<len;j++){
			 aLi[j].style.background="";  
		  }		 	 
	    },100);
		
		eventUtil.addHandler(left3_div,"mouseover",function(){
		   clearTimeout(oUl1.timer);
		   	left3_div.style.display="";
		});
		
		eventUtil.addHandler(left3_div,"mouseleave",function(){
		   clearTimeout(oUl1.timer);
		   oUl1.timer=setTimeout(function(){
		   	left3_div.style.display="none";
			 for (var j=0,len=aLi.length;j<len;j++){
			 aLi[j].style.background="";  
		  }		
		   },100);
		   eventUtil.stopPropagation(ev);
		})
		}
		
		 
	 	
});
	

(function(){eventUtil.addHandler(oSpan_prev,"click",function(){
   var oBg=document.getElementById("backg");
   var oBg_img=document.getElementById("backg_img");
   var img_s=oBg_img.getAttribute("src");
   var tag=document.getElementById("tag_pic");
   var aLi=tag.getElementsByTagName("li");
   var img_src=[{"url":"img/top3/bg/p1.jpg"},{"url":"img/top3/bg/p2.jpg"},{"url":"img/top3/bg/p3.jpg"},{"url":"img/top3/bg/p4.jpg"},{"url":"img/top3/bg/p5.jpg"}];
    var vetical_listbg=["666","444","079","000","A70"];
	
    for (var j=0,len1=aLi.length;j<len1;j++){
	 aLi[j].className="";   
   }
   
   for (var i=0,len=img_src.length; i<len; i++) {
	 // aLi[i].className="";
	  if(img_s==img_src[i].url) {
		img_src[i].index=i; 
		if(img_src[i].index!==0){
		  oBg_img.src=img_src[i-1].url;
		  aLi[i-1].className="choose_bg";
		   oUl1.style.background="#"+vetical_listbg[i-1];
		  
	   } else {
		  oBg_img.src=img_src[4].url; 
		  aLi[4].className="choose_bg";
		   oUl1.style.background="#"+vetical_listbg[4];
	   } 
	   
	  }   
   } ;  
   	
});
})();

(function(){
   eventUtil.addHandler(oSpan_next,"click",function(){
   var oBg=document.getElementById("backg");
   var oBg_img=document.getElementById("backg_img");
   var img_s=oBg_img.getAttribute("src");
   var tag=document.getElementById("tag_pic");
   var aLi=tag.getElementsByTagName("li");
   var img_src=[{"url":"img/top3/bg/p1.jpg"},{"url":"img/top3/bg/p2.jpg"},{"url":"img/top3/bg/p3.jpg"},{"url":"img/top3/bg/p4.jpg"},{"url":"img/top3/bg/p5.jpg"}];
   
   var vetical_listbg=["666","444","079","000","A70"];
   for (var j=0,len1=aLi.length;j<len1;j++){
	 aLi[j].className="";   
   }
   
   for (var i=0,len=img_src.length; i<len; i++) {
	  
	  if(img_s==img_src[i].url) {
		img_src[i].index=i; 
		if(img_src[i].index!==4){
		  oBg_img.src=img_src[i+1].url;
		  aLi[i+1].className="choose_bg";
		  oUl1.style.background="#"+vetical_listbg[i+1];
		  
	   } else {
		  oBg_img.src=img_src[0].url; 
		  aLi[0].className="choose_bg";
		   oUl1.style.background="#"+vetical_listbg[0];
	   } 
	   
	  }   
   } ;  
   	
});
})();

(function(){
	
   var oBg=document.getElementById("backg");
   var oBg_img=document.getElementById("backg_img");
   
   var tag=document.getElementById("tag_pic");
   var aLi=tag.getElementsByTagName("li");
   var img_src=[{"url":"img/top3/bg/p1.jpg"},{"url":"img/top3/bg/p2.jpg"},{"url":"img/top3/bg/p3.jpg"},{"url":"img/top3/bg/p4.jpg"},{"url":"img/top3/bg/p5.jpg"}];
   
   
  eventUtil.addHandler(tag,"click",function(event){
	  for (var i=0,len=aLi.length;i<len;i++) {
		  aLi[i].className="";  
	  }
	  var ev=eventUtil.getEvent(event);
	  var target=eventUtil.getTarget(ev);  
	  if(target.parentNode.tagName.toLowerCase()=="li") {
		 var index=parseInt(target.innerText);
		 if(oBg_img.src !== img_src[index-1].url) {
			 oBg_img.src = img_src[index-1].url;
			 aLi[index-1].className="choose_bg";
		  }
	  } 
  })
})();





function moveauto(){
	  clearInterval(oUl_ct4.timer2);
	  
      var dis=parseInt(oUl_ct4.offsetWidth/2);
  
      oUl_ct4.timer2=setInterval(function(){	 
	    // alert("hello");
         var oUl_left=oUl_ct4.offsetLeft;
	     //console.log(oUl_left);
	    
         if(oUl_left==0) {
		 startMove(oUl_ct4,{left:-dis});  
	     } 
	   
         if(oUl_left==-dis) {
		 startMove(oUl_ct4,{left:0});  
	  }  
	  },5000);

};

(function(){
	var aLi=oUl_ct4.getElementsByTagName("li");
	var border_color=[{"cl":"F0F"},{"cl":"7FFF00"},{"cl":"FF8C00"},{"cl":"7CFC00"},{"cl":"0FF"}]
	for(var i=0; i<aLi.length/2;i++){
		aLi[i].style.borderTopColor="#"+border_color[i].cl;
		aLi[i+5].style.borderTopColor="#"+border_color[i].cl;
    }
  
})();


/*(function(){
  var tag=document.getElementById("tag_pic");
  var aLi=tag.getElementsByTagName("li");	
  
  eventUtil.addHandler(tag,"mouseover",function(event){
	  for (var i=0,len=aLi[i].length;i<len;i++) {
		 aLi[i].className="";  
	  }
	  var ev=eventUtil.getEvent(event);
	  var target=eventUtil.getTarget(ev);
	  
	  if(target.tagName.toLowerCase()=="li") {
		 target.className="choose_bg";  
	  }
	  if(target.parentNode.tagName.toLowerCase()=="li"){
		 target.parentNode.className="choose_bg";
	  }
	    
  });


});
*/

eventUtil.addHandler(auto_prev,"click",function(){
	//this.style.background="red";
    clearInterval(oUl_ct4.timer2);
   
   var oUl_left=oUl_ct4.offsetLeft;
   var dis=parseInt(oUl_ct4.offsetWidth/2);
	    
         if(oUl_left==-dis) {		  	 
		 startMove(oUl_ct4,{left:0});  
	     } 
	   
});

eventUtil.addHandler(auto_next,"click",function(){
    clearInterval(oUl_ct4.timer2);
	
    var oUl_left=oUl_ct4.offsetLeft;
	var dis=parseInt(oUl_ct4.offsetWidth/2);
         if(oUl_left==0) {		   
		 startMove(oUl_ct4,{left:-dis});
		 }
});

eventUtil.addHandler(ct5_choose,"mouseover",function(event){
	var ev=eventUtil.getEvent(event);
   var target=eventUtil.getTarget(ev);
   
   var oUl_left=oUl_ct4.offsetLeft;
   var dis=parseInt(oUl_ct4.offsetWidth/2);
  
  
   if(target.className=="auto_prev"||target.parentNode.className=="auto_prev") {
	 auto_next.style.color="#ccc";
	 if(oUl_left==-dis) {		   
	  auto_prev.style.color="red";
	}		   	   
   }
   
   else if(target.className=="auto_next"||target.parentNode.className=="auto_next") {
	 auto_prev.style.color="#ccc";
	 if(oUl_left==0) {		   
	  auto_next.style.color="red";
	}
	
  else
   {
	  auto_next.style.color="#ccc"; 
	  auto_prev.style.color="#ccc"; 
   }			   	   
   }
   
  
});

eventUtil.addHandler(ct5_choose,"mouseleave",function(event){	
	 auto_next.style.color="#ccc";	
	 auto_prev.style.color="#ccc";	 
	 oDiv_ct5.fn();
});
/*
eventUtil.addHandler(auto_next,"mouseover",function(){
	auto_prev.style.color="#ccc";
    var oUl_left=oUl_ct4.offsetLeft;
	var dis=parseInt(oUl_ct4.offsetWidth/2);
    if(oUl_left==-dis) {		   
	  this.style.color="orange";
	}		   	 
});

eventUtil.addHandler(auto_prev,"mouseover",function(){
    auto_next.style.color="#ccc";
    var oUl_left=oUl_ct4.offsetLeft;
	var dis=parseInt(oUl_ct4.offsetWidth/2);
    if(oUl_left==0) {		   
	  this.style.color="orange";
	}		   	 
});
*/


function createLiList(elem,arr){
  var len= arr.length;
  
  var oFragment= document.createDocumentFragment();
  
  for (var i=0; i<len; i++){
	 var oLi=document.createElement("li");
	 oLi.className="div1_li"
	 var oA1=document.createElement("a");
	 var oA2=document.createElement("a");
	 oA2.className="dis_choose_top3";
	 
	 var oImg=document.createElement("img");
	 oImg.setAttribute("src",arr[i]["url"]);
	 oA2.innerHTML=arr[i]["name"]
	 var oSpan=document.createElement("span");
	 oSpan.innerHTML="<a>抢购</a>";	 
	 
	 
	 oA1.appendChild(oImg);
	 oSpan.appendChild(oA2);
	 oLi.appendChild(oA1);
	 oLi.appendChild(oA2);
	 oLi.appendChild(oSpan);
	 
	 oFragment.appendChild(oLi);	   
  }
  
  elem.appendChild(oFragment);
  
}

