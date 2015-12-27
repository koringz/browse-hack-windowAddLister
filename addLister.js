!function(){

	/**********调用**********/

	function el(element){
		if(!element){element = document}
		return element 
	};

	function addLister(domnode,eventType,handler){
		if(el().all){
			domnode.attachEvent("on"+eventType,handler)
		}else{
			domnode.addEventListener(eventType,handler,false)
		}
	};

	/*********调用***********/

	addLister(your_node,Event[0],function_name);

	// var Event = ["click","drag","moveover","moveout","keyup",.....]
}();