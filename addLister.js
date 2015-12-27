(function(){
	function el(element){
		if(!element){element = document}
		return element; 
	}

	function addLister(domnode,eventType,handler){
		if(el().all){
			domnode.attachEvent("on"+eventType,handler)
		}else{
			domnode.addEventListener(eventType,handler,false)
		}
	}

	addLister(input_left,"click",scroll_left)
	addLister(input_right,"click",scroll_left)

})(); // use of this ! replace ()