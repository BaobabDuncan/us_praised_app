settingDB();

function settingDB() {
	myDBHandler = new DBHandler(databaseOptions);
	myDBHandler.connectDB();
	myDBHandler.createSettingTable();	
}

function clone(obj) {
	if(typeof(obj) != 'object') return obj;
	if(obj == null) return obj;
	
	var newObj = new Object();
	for(var i in obj) newObj[i] = clone(obj[i]);
	return newObj;
};

function getJqtCurrentPageWrapper(pageId) {
	var wrapperPage = pageId+'-wrapper';
	return wrapperPage;
};

function getJqtCurrentPageToolbar(pageId) {
	var toolbarPage = pageId+'-toolbar';
	return toolbarPage;
};

function goBackJqt(){
	jQT.goBack();
}

function emptyHTML(Id){
	$(Id).empty();
};

function goToPage(pageId,event,reverse) {	
	if (event==null) event='';
	if (reverse==null) reverse=false;
	jQT.goTo(pageId,event,reverse);	
};

function splitData(data,separator) {
	return data.split(separator);	
};

// date function
function getToDayDate(){
	var today = new Date();
	var s = leadingZeros(today.getFullYear(), 4) + '-' +
		leadingZeros(today.getMonth() + 1, 2) + '-' +
		leadingZeros(today.getDate(), 2);
	return s;
};
function leadingZeros(n, digits) {
  var zero = '';
  n = n.toString();

  if (n.length < digits) {
    for (i = 0; i < digits - n.length; i++)
      zero += '0';
  }
  return zero + n;
};
function getTimingDifference(targetData) {
	if (!targetData){
		return true;
	}
	var todayArray = splitData(getToDayDate(),Constants.Separator.Date);
	var updateArray = splitData(targetData,Constants.Separator.Date);	
	var todayDate = new Date(todayArray[0],Math.abs(todayArray[1])-1,todayArray[2]);	
	// for test
	//var todayDate = new Date(2011,4,50);	
	var updateDate = new Date(updateArray[0],Math.abs(updateArray[1]-1),updateArray[2]);	
	if (todayDate-updateDate != 0){			
		return true;
	}
	else return false;	
};
// random
function getRandomFromTo(from,to) {			
	return Math.floor(Math.random() * (to - from + 1) + from);
};	



