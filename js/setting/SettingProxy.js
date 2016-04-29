praisedApp.SettingProxy = function(_facade) {
	var settingFacade = _facade;	
	var self = this;
	
	praisedApp.SettingProxy.prototype.getSettingData = function(callbackFunc) {
		myDBHandler.database.transaction(function (tx) {
			var sql = 'select * from setting WHERE setting_id = '+Constants.Default.Setting_id+'';
			tx.executeSql(sql,[], function(transaction, results)  {                         
				callbackFunc(results);
			}, self.handleError);
		});   
	};
	
	praisedApp.SettingProxy.prototype.saveSettingDataToLocalDB = function(callbackFunc) {	
		myDBHandler.database.transaction(function (tx) {
			tx.executeSql("INSERT INTO setting (setting_id) VALUES (?)",
				[Constants.Default.Setting_id],
				function(trans, results)  {                             
					callbackFunc();
				}, self.handleError);
		});
	};
	
	praisedApp.SettingProxy.prototype.saveSettingDataToClientArray = function(data,callbackFunc) {
		for (var index = 0; index < data.rows.length; index++)
		{                                               
			var setting = data.rows.item(index);                    
			var settingVO = new praisedApp.VO_Setting();
			settingVO.setting_id = setting['setting_id'];
			settingVO.update_date = setting['update_date'];
			settingVO.callCount = setting['callCount'];				
		}			
		mySetting = settingVO;
		callbackFunc();
	};
	
	praisedApp.SettingProxy.prototype.updateSettingLocalDB = function(callbackFunc) {				
		myDBHandler.database.transaction(function (tx) {
			var sql = "UPDATE setting SET update_date = '"+mySetting.update_date+"',callCount= '"+mySetting.callCount+"' WHERE setting_id = '"+mySetting.setting_id+"'";
			tx.executeSql(sql,[], function(transaction, results)  {                         
				callbackFunc();
			}, self.handleError);
		});       
	};	
	
};
