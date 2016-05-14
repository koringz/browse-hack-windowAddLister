!function(w){
	var koringz = {};
	/**********调用**********/
	  koringz.el = function (element){
	    	if(!element){element = document}
	    	return element 
	  };
	  
	  koringz.hookAddLister = function (el,eventType,handler,isbool){
	    	isbool = isbool || false;
	    	if(el.addEventListener){
	    		el.addEventListener(eventType,handler,isbool);
	        }
	  };
	  
	  koringz.addLister = function (domnode,eventType,handler,isbool){
	    	if(koringz.el().all){
	      		domnode.attachEvent("on"+eventType,handler)
	    	}
	    	koringz.hookAddLister(domnode,eventType,handler,isbool);
	  };

	/*********调用***********/
	
	w.addLst = koringz.addLister;

	// var Event = ["click","drag","moveover","moveout","keyup",.....]
	// addLst(your_node,Event[0],function_name,isbo);
}(window);
