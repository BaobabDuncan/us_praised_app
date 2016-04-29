praisedApp.PraisedProxy = function(_facade) {
	var praisedFacade = _facade;	
	var self = this;	
	var GetPraisedCount = 0;
	praisedApp.PraisedProxy.prototype.getPraisedListToFile = function(callbackFunc) {
		$.ajax({
			url:"./file/praised.txt",
			error : function(e){
				console.info('praisedApp.PraisedProxy.prototype.getPraisedListToFile Error = ' + e.message);
			},
			success : function(data){				
				callbackFunc(data);
			} 
		});
	};
	
	
	praisedApp.PraisedProxy.prototype.savePraisedListToClientArray = function(praised_data,callbackFunc) {	
		var tempPraisedList = new Array();
		var data = splitData(praised_data,Constants.Separator.PraisedLine);
		
		for (var index = 0; index < data.length; index++)
		{			
			var praisedlist = jQuery.trim(data[index]);
			var praisedListVO = self.parseFilePraisedList(praisedlist);					
			tempPraisedList.push(praisedListVO);	
		}
		myPraisedList = tempPraisedList;
		callbackFunc();		
	};
	
	praisedApp.PraisedProxy.prototype.parseFilePraisedList = function(praisedlist) {
		praisedlist = splitData(praisedlist,Constants.Separator.PraisedSection);		
		var praisedListVO = new praisedApp.VO_Praised();
		praisedListVO.title = jQuery.trim(praisedlist[0]);
		praisedListVO.sound_id = jQuery.trim(praisedlist[1]);		
		return praisedListVO;
	};
	
	praisedApp.PraisedProxy.prototype.playSound = function(callbackFunc) {
		var praised = this.getRandomPraised();
		/*var gameSound = new Media('./file/sound/'+praised.sound_id+'.mp3');
		gameSound.play();*/
		callbackFunc(praised.title);		
	};	
	praisedApp.PraisedProxy.prototype.getRandomPraised = function() {
		mySetting.callCount++;	
		if (mySetting.callCount>Constants.Limit.MaxPraised){
			return myPraisedList[getRandomFromTo(myPraisedList.length-4,myPraisedList.length-1)];
		}
		else{
			return myPraisedList[getRandomFromTo(0,myPraisedList.length-5)];
		}
		
	};	
	
	
	
	
};
