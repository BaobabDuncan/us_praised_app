praisedApp.MainFacade = function() {
	this.mainProxy = clone(new praisedApp.MainProxy(this));
	this.mainCommand = clone(new praisedApp.MainCommand(this));
	this.mainMediator = clone(new praisedApp.MainMediator(this));

	praisedApp.MainFacade.prototype.retrieveMediator = function() {
		return this.mainMediator;
	};	
	praisedApp.MainFacade.prototype.retrieveProxy = function() {
		return this.mainProxy;
	};
	
	praisedApp.MainFacade.prototype.showMainPage = function() {
		this.mainMediator.initalizeMainPage();
		this.mainMediator.appendHtmlMainPage();
		this.mainMediator.attachEventMainEvents();
		this.mainMediator.displayMainPage();
	};	
	
};