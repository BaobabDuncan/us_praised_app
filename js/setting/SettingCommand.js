praisedApp.SettingCommand = function(_facade) {
	var settingFacade = _facade;	
	var self = this;
	
	praisedApp.SettingCommand.prototype.getSettingData = function() {		
		settingFacade.retrieveProxy().getSettingData(self.handleGetSettingData);
	};
	praisedApp.SettingCommand.prototype.handleGetSettingData = function(responseObject) {		
		var data_length = responseObject.rows.length;		
		if (data_length==0) {					
			self.saveSettingDataToLocalDB();
		}
		else{			
			self.saveSettingDataToClientArray(responseObject);
		}
	};	
	praisedApp.SettingCommand.prototype.saveSettingDataToLocalDB = function() {
		settingFacade.retrieveProxy().saveSettingDataToLocalDB(self.handleSaveSettingDataToLocalDB);
	};
	praisedApp.SettingCommand.prototype.handleSaveSettingDataToLocalDB = function() {
		self.getSettingData();
	};
	
	praisedApp.SettingCommand.prototype.saveSettingDataToClientArray = function(data) {
		settingFacade.retrieveProxy().saveSettingDataToClientArray(data,self.handleSaveSettingDataToClientArray);
	};
	
	praisedApp.SettingCommand.prototype.handleSaveSettingDataToClientArray = function() {
		if(getTimingDifference(mySetting.update_date)){			
			mySetting.update_date = getToDayDate();
			mySetting.callCount = Constants.Default.CallCount;
			self.updateSettingLocalDB(self.test);			
		}
		else{			
			praisedFacade.getPraisedListToFile();		
		}
		//	
	};
	
	praisedApp.SettingCommand.prototype.test = function() {
		praisedFacade.getPraisedListToFile();		
	};
	
	praisedApp.SettingCommand.prototype.updateSettingLocalDB = function(callbackFunc) {
		settingFacade.retrieveProxy().updateSettingLocalDB(callbackFunc);
	};
};