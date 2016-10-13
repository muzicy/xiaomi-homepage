// JavaScript Document
var shopcar = document.getElementById("shopcar");
var shopNum = document.getElementById("shopnum");
var oBlankshop=null,
    txt;
var ul1=document.getElementById("span1").children[0];
var ul2=document.getElementById("span2").children[0];

 a_last_style(ul1);
 a_last_style(ul2);

eventUtil.addHandler(shopcar,"mouseover",function(){
	if (parseInt(shopNum.innerText) == 0){
	  
	  shopcar.className=shopcar.className+" "+"shopcarblank";	  
	  oBlankshop = document.createElement("div");
	  document.body.appendChild(oBlankshop);
	  oBlankshop.className = "blankShopcar";
	  oBlankshop.style.display = "block";
	  txt=document.createTextNode("购物车中还没有商品，赶紧选购吧");
	  oBlankshop.appendChild(txt);	  	
	 }
});
eventUtil.addHandler(shopcar,"mouseout",function(){	
      shopcar.className="shopcar";   
	  oBlankshop.style.display = "none";	  
	 
	 return ;
});

function a_last_style(elem){
  var len=elem.children.length;
  var lilist=elem.children[len-1].children[0];
 
   lilist.style.border="none";  	
}