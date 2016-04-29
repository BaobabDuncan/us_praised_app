praisedApp.SettingMediator = function(_facade) {	
	var settingFacade = _facade;			
	var self = this;
	praisedApp.SettingMediator.prototype.initalizeSettingPage = function() {		
		myCurrentPage = Constants.ViewingPage.Setting;		
	};
    praisedApp.SettingMediator.prototype.appendHtmlSettingPage = function() {
	  var targetDiv = getJqtCurrentPageWrapper(myCurrentPage);
      emptyHTML(targetDiv);
      var html = self.getHtmlForSetting();
      var insert = $(html);  	
      $(targetDiv).append(insert);
	};
    praisedApp.SettingMediator.prototype.getHtmlForSetting = function() {		
		var html = '';			
		html += '<h2>'+Setting.UserName[mySetting.language]+'</h2>';
		html += '<ul class="edit rounded">';		
		html += '<li><input type="text" name="name" id="name" value="'+mySetting.name+'" maxlength="8"/></li>';
		html += '</ul>';		
		html += '<h2>'+Setting.Language[mySetting.language]+'</h2>';
		html += '<ul class="edit rounded">';
		html += '<li>';		
		html +=	'<select id="language">';
		html += '<option value ="en" id="language_en">English</option>';	
		html += '<option value ="kr" id="language_kr">Korean</option>';			
		html += '</select>';	
		html += '</li>';
		html += '</ul>';
		html +='</ul>';
		html +='<h2 id="userinfo-label" >'+Setting.DeuDate[mySetting.language]+'</h2>';
		html +='<ul class="edit rounded">';
		html +='<li class="totalReview">'+Constants.IsTargetDate+'</li>';
		html +='</ul>';
		html += '<div class="info">';
		html += '<p>'+Setting.StatusInfo[mySetting.language]+'</p>';			
		html += '</div>';
		html +='<h2 id="userinfo-label" >'+Setting.BoardStatus[mySetting.language]+'</h2>';
		html +='<ul class="edit rounded">';
		if (mySetting.wall_read_status==Constants.Boolean.True){
			html +='<li class="totalReview">'+Setting.Completion[mySetting.language]+'</li>';
		}
		else{
			html +='<li class="totalReview">'+Setting.Possibility[mySetting.language]+'</li>';
		}		
		html +='</ul>';
		html +='<h2 id="userinfo-label" >'+Setting.PostStatus[mySetting.language]+'</h2>';
		html +='<ul class="edit rounded">';
		if (mySetting.wall_write_status==Constants.Boolean.True){
			html +='<li class="totalReview">'+Setting.Completion[mySetting.language]+'</li>';
		}
		else{
			html +='<li class="totalReview">'+Setting.Possibility[mySetting.language]+'</li>';
		}	
		html +='</ul>';
		
		
		return html;		
	};
    praisedApp.SettingMediator.prototype.attachEventSettingPage = function() {
		try{
			$("#settingview .button").unbind('click');			
		}catch(e){
		}
		$("#settingview .button").click(function(){
			mySetting.language = $("#language").val();
			mySetting.name = $("#name").val();
			settingFacade.updateSettingLocalDB(settingFacade.settingCommand.handleUpdateSetting);
		});
		languageId = "#language_"+mySetting.language;		
		$(languageId).attr('selected','true');
	};
    praisedApp.SettingMediator.prototype.displayEventSettingPage = function() {		
		goToPage(myCurrentPage,'slideleft');
	};
	
};

