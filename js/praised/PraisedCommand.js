praisedApp.PraisedCommand = function(_facade) {
	var praisedFacade = _facade;	
	var self = this;	
	
	praisedApp.PraisedCommand.prototype.getPraisedListToFile = function() {
		praisedFacade.retrieveProxy().getPraisedListToFile(self.handleGetPraisedListToFile);
	};
	praisedApp.PraisedCommand.prototype.handleGetPraisedListToFile = function(responseObject) {			
		praisedFacade.retrieveProxy().savePraisedListToClientArray(responseObject,self.handlesavePraisedListToClientArray);
		
	};
	praisedApp.PraisedCommand.prototype.handlesavePraisedListToClientArray = function() {
		onDeviceReady();
	};
	
	praisedApp.PraisedCommand.prototype.playSound = function() {
		praisedFacade.retrieveProxy().playSound(self.handlePlaySound);
	};
	praisedApp.PraisedCommand.prototype.handlePlaySound = function() {		
		settingFacade.updateSettingLocalDB(praisedFacade.praisedCommand.handleUpdateSettingLocalDB);		
	};
	praisedApp.PraisedCommand.prototype.handleUpdateSettingLocalDB = function() {					
		praisedFacade.praisedMediator.handlePlaySound();		
	};
	
};