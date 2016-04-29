function praisedApp(){
	praisedApp.prototype = new Object();
};

praisedApp.VO_Praised = function() {
	this.title = '';
	this.sound_id = '';	
};

praisedApp.VO_Setting = function() {
	this.setting_id = '';             
	this.update_date = '';
	this.callCount = '';
};

