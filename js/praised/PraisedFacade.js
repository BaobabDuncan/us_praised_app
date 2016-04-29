praisedApp.PraisedFacade = function() {
	this.praisedProxy = clone(new praisedApp.PraisedProxy(this));
	this.praisedCommand = clone(new praisedApp.PraisedCommand(this));
	this.praisedMediator = clone(new praisedApp.PraisedMediator(this));

	praisedApp.PraisedFacade.prototype.retrieveMediator = function() {
		return this.praisedMediator;
	};	
	praisedApp.PraisedFacade.prototype.retrieveProxy = function() {
		return this.praisedProxy;
	};	
	
	praisedApp.PraisedFacade.prototype.showPraisedPage = function() {
		this.praisedMediator.initalizePraisedPage();
		this.praisedMediator.appendHtmlPraisedPage();
		this.praisedMediator.attachEventPraisedEvents();
		this.praisedMediator.displayPraisedPage();
	};
	
	praisedApp.PraisedFacade.prototype.getPraisedListToFile = function() {
		this.praisedCommand.getPraisedListToFile();
	};
	
	praisedApp.PraisedFacade.prototype.playSound = function() {
		this.praisedCommand.playSound();
	};
};