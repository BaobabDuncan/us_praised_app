var databaseOptions = {
	fileName: "praised.db",
	version: "1.0",
	displayName:"praised db",
	maxSize: 1024
};
var myPraisedList = '';
var mySetting = '';
var Constants = {
	
	
	ViewingPage : {
		MainView : '#mainview',
		PraisedView : '#praisedview'
	},
	Default :{
		CallCount : 0,
		Setting_id : 1
	},	
	Separator : {
		PraisedLine : '^',
		PraisedSection : '|',
		Date : '-'
	},
	Boolean : {
		False : "false",
		True : "true"
	},
	Limit : {
		MaxPraised : 5
	}
};