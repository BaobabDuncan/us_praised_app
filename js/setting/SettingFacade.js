praisedApp.SettingFacade = function() {
	this.settingProxy = clone(new praisedApp.SettingProxy(this));
	this.settingCommand = clone(new praisedApp.SettingCommand(this));
	this.settingMediator = clone(new praisedApp.SettingMediator(this));

	praisedApp.SettingFacade.prototype.retrieveMediator = function() {
		return this.settingMediator;
	};	
	praisedApp.SettingFacade.prototype.retrieveProxy = function() {
		return this.settingProxy;
	};
	
	praisedApp.SettingFacade.prototype.getSettingData = function() {
		this.settingCommand.getSettingData();
	};
	
	praisedApp.SettingFacade.prototype.updateSettingLocalDB = function(callbackFunc) {		
		this.settingCommand.updateSettingLocalDB(callbackFunc);
	};
	
	praisedApp.SettingFacade.prototype.updateSettingToStatus = function() {		
		this.settingCommand.updateSettingToStatus();
	};
	
	praisedApp.SettingFacade.prototype.showSettingPage = function() {		
		this.settingMediator.initalizeSettingPage();
		this.settingMediator.appendHtmlSettingPage();
		this.settingMediator.attachEventSettingPage();
		this.settingMediator.displayEventSettingPage();
	};
	
	
};