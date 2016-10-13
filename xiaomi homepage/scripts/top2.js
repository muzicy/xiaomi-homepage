// JavaScript Document
var ct1=document.getElementById("content1"),
    left2=ct1.getElementsByClassName("left2")[0],
	left2_ul=document.getElementById("left2_nav"),
	left2_span1=left2_ul.getElementsByClassName("left2_span1")[0],
	left2_span2=left2_ul.getElementsByClassName("left2_span2")[0],    
	i,len,lilist,oDiv,timer=null,
	target,ev,hei=0,showct1;

var left3=document.getElementsByClassName("search_ct")[0];


	oDiv=document.createElement("div");	
	oDiv.id="showct1";
	document.body.appendChild(oDiv);
	
var jsn={
	  "小米手机":[{"url":"img/top2/xiaomi/p1.jpg","tag":"小米Max","price":"1299元起"},
	             {"url":"img/top2/xiaomi/p2.jpg","tag":"小米手机5","price":"1499元起"}
			    ],
	  "红米手机":[{"url":"img/top2/hongmi/160x110_1.jpg","tag":"红米Pro","price":"1499元起"},{"url":"img/top2/hongmi/160x110_2.jpg","tag":"红米Note4","price":"899元起"},
	             {"url":"img/top2/hongmi/note3!160x110.jpg","tag":"红米Note3","price":"899元起"},{"url":"img/top2/hongmi/hongmi3s!160x110_4.jpg","tag":"红米3s","price":"699元起"},
				 {"url":"img/top2/hongmi/hongmi3!160x110_5.jpg","tag":"红米手机3","price":"699元起"},{"url":"img/top2/hongmi/320-220!160x110_6.jpg","tag":"红米手机3X","price":"799元起"}]
	  
	}	

eventUtil.addHandler(left2_span1,"mouseover",function(event){	
   		
	oDiv.className="showleft2";
	showct1=document.getElementById("showct1");
	
	ev=eventUtil.getEvent(event);
	target=eventUtil.getTarget(ev);   
	
	if (( target.innerHTML !== "社区"  && target.innerHTML !== "服务") || 
	     ( target.firstChild.innerHTML !== "社区" && target.firstChild.innerHTML !== "服务")){	
		 	 			 
		 showct1.style.borderBottomWidth="1px";
		 showct1.style.borderBottomColor="#FCF";
		 showct1.style.borderBottomStyle="solid";
		 showct1.style.borderTopWidth="1px";
		 showct1.style.borderTopColor="#FCF";
		 showct1.style.borderTopStyle="solid";
		// showct1.style.display="block";	
		 var items = target.innerHTML || target.firstChild.innerHTML || target.children[1].innerHTML ;
		
		// for (var items in jsn){
			 
		   switch (items) {
			   
			 case ("小米手机"): 
			    var li_1=showct1.getElementsByTagName("li")[0];
				
		        if(showct1.getElementsByTagName("li").length>0 && li_1.children[1].innerHTML != "小米Max") {
					var list_1=showct1.getElementsByTagName("li");
					for (var i=0,len=showct1.getElementsByTagName("li").length; i<len; i++){
					  	list_1[i].onmouseover==null;
						if(typeof oul == Object) {
						oul.removeChild(list_1[i]);
						}
					}
					//if(typeof oul == Object){
					//  oul.onmouseover == null;
				      showct1.removeChild(oul);
					//}
				} 
				if(showct1.getElementsByTagName("li").length == 0){ 			      
			        oul=document.createElement("ul");
			        oul.className="left2p1";
				  
			        var arr1=jsn["小米手机"];
				
			        addLinkArray(oul,arr1);			
			
			        showct1.appendChild(oul);			 
			   } 	     
			   		  
		        break;  
				 
		  case ("红米"): 
		        var li_2=showct1.getElementsByTagName("li")[0];
				
		        if(showct1.getElementsByTagName("li").length>0 && li_2.children[1].innerHTML != "红米Pro") {
					var list_2=showct1.getElementsByTagName("li");
					
					for (var i=0,len=showct1.getElementsByTagName("li").length; i<len; i++){
					  	list_2[i].onmouseover==null;
						if(typeof oul == Object){
						oul.removeChild(list_2[i]);
						}
					}
					//if(typeof oul == Object){
					//  oul.onmouseover == null;
				      showct1.removeChild(oul);
				}
				 if (showct1.getElementsByTagName("li").length<=0){ 
				
			      oul=document.createElement("ul");
				  
			      oul.className="left2p1";
			 
			      var arr2=jsn["红米手机"];
				
			      addLinkArray(oul,arr2);			
			
			      showct1.appendChild(oul);			 
			   }
			   break;
		//   }	 
		 };		
		
		startMove(showct1,{height:230},null);		 
	}
	if (target.innerHTML == "社区"  || target.innerHTML == "服务" || 
        target.firstChild.innerHTML == "社区" ||target.firstChild.innerHTML == "服务"){
	 
	   startMove(showct1,{height:0},function(){
		   showct1.style.border="none";
	   });	
	   
	    
	}
	
})

eventUtil.addHandler(left2_span1,"mouseout",function(event){	     
      if (document.getElementById("showct1")) {
       var showct2=document.getElementById("showct1");	
	    
	   startMove(showct2,{height:0},function(){
		  showct2.style.border="none";   
		});
		
	  }
	});
	
eventUtil.addHandler(oDiv,"mouseover",function(event){	    
      clearTimeout(oDiv.timer); 
      if (oDiv.offsetHeight > 0){
		startMove(showct1,{height:230},null);  
	  }
	});
	
eventUtil.addHandler(oDiv,"mouseout",function(event){	    
      if (oDiv.offsetHeight>0){
		startMove(showct1,{height:0},function(){
		   showct1.style.border="none";
	   });	  
	  }
      
	});
	
(function(){eventUtil.addHandler(left3,"click",function(event){	 
       
	 
	   var ev=eventUtil.getEvent(event);	   
	   var arr1=[{"type":"小米手机5"},{"type":"空气进化器"},{"type":"小米盒子"},{"type":"移动电源"},{"type":"小米相机"},{"type":"小米体重秤"}];
	   
	   if(!left3.getElementsByTagName("input")[0]){
	   var input_s=document.createElement("input");
	   input_s.type="text";		   
	  // input_s.value="hello";	   
	   input_s.setAttribute("id","search_what");
	   
	  
	   left3.appendChild(input_s);	   
	   input_s.focus();
	   
	   var oul=document.createElement("ul");
	   oul.id="select_list";	   
	   
	   
	   var len1=arr1.length;
	   createMutlElement(oul,len1);
	   //console.log(oul);
	   var li_m=oul.getElementsByTagName("li");
	   //salert(li_m);
	   for(var j=0;j<len1;j++){
		 // console.log(li_m[i]);
		  li_m[j].children[0].innerHTML=arr1[j].type;
		  console.log(arr1[i]);  
	   }	  
	   
	   left3.appendChild(oul);
	   left3.style.borderColor="#C6F";
	   left3.style.borderBottom="none";
	   
	   }
	   else
	   {
		
		left3.getElementsByTagName("input")[0].style.display="block";
		left3.getElementsByTagName("input")[0].focus();
	    left3.getElementsByTagName("ul")[0].style.display="block";	
		left3.style.borderColor="#C6F";	
		left3.style.borderBottom="none";
	  }   
	   eventUtil.stopPropagation(ev);
	   	   
	  });
})();
     
eventUtil.addHandler(document,"click",function(event){
	if(document.getElementById("search_what")){
	var input_s=document.getElementById("search_what");
	input_s.value="";
	}
	//var oDiv=document.getElementById("search_ct");
	//alert(oDiv);
	var oul=document.getElementById("select_list");
	var ev=eventUtil.getEvent(event);
	var target=eventUtil.getTarget(ev);
	//alert("1");
	//alert(target);
	if (target !== left3 && target !== oul){   
	if(input_s) {
	   input_s.style.display="none";	
	}
	left3.style.borderColor="#CCC";
	left3.style.borderStyle="solid";
	left3.style.borderWidth="1px";
	if(oul){
	oul.style.display="none";
	}
	//left3.style.borderColor="black";
	
		
	}
	});	

function createMutlElement(elem,num){
  	var i=0;
	
	for (i=0; i<num; i++){
	   var li = document.createElement("li");
	   var a1 = document.createElement("a"); 	   
	   li.appendChild(a1);	  
       elem.appendChild(li);
}
	   
}

function addLinkArray(elem,arr){
	var  len=arr.length,
	     i;
		 
	if(elem.childNodes.length>0){	  
	  for (j=0,len1=elem.childNodes.length;i<len;i++){
	    elem.removeChild(elem.childNodes[i]);	
	  }	 
	}
	
	for (i=0 ;i<len ;i++){
		
	   var li=document.createElement("li");
	   var img=document.createElement("img");
	   img.setAttribute("src",arr[i]["url"].toString());
	   img.className="img_bor";
	   // console.log(img.url);
	   var a1=document.createElement("a");
	   	   
	   var a2=document.createElement("a");
	   var p2=document.createElement("p");
	   p2.innerHTML=arr[i]["tag"];
	   p2.className="left2_tag";
	   a2.appendChild(p2);
	   a2.className="lef2_mar";
	   // img.appendChild(a2);
	   var p1=document.createElement("p");
	   
	   
	   p1.className="left2_price";	   
	   p1.innerHTML=arr[i]["price"];	   
	   
	   a1.appendChild(img);	   
	   
	   li.appendChild(a1);
	   li.appendChild(a2);
	   li.appendChild(p1);
	   
	   elem.appendChild(li);	   
	   	
	}	
	
	li_last_style(elem);
	
	elem.style.width=len*180+"px";
	
}

function li_last_style(elem){
  var len=elem.children.length;
  var lilist=elem.children[len-1].children[0].children[0];
 
   lilist.style.border="none";  	
}
function getJsonLenght(json){
  var length=0;
  
  for(var item in json){
	 length++;  
  }	
  
  return length;
}