praisedApp.MainMediator = function(_facade) {	
	var mainFacade = _facade;			
	var self = this;
	
	praisedApp.MainMediator.prototype.initalizeMainPage = function() {		
		myCurrentPage = Constants.ViewingPage.MainView;		
	};
	praisedApp.MainMediator.prototype.appendHtmlMainPage = function() {
	  var targetDiv = getJqtCurrentPageWrapper(myCurrentPage);
      emptyHTML(targetDiv);
      var html = self.getHtmlForMain();
      var insert = $(html);  	
      $(targetDiv).append(insert);
	};
	praisedApp.MainMediator.prototype.getHtmlForMain = function() {		
		var html = '';	
		html += '<ul>';
		html += '<div class="info">';
		html += '칭찬으로 삶의 활력을 불어 넣으세요.<br>여러분의 즐거운 하루를 응원 합니다.<p class="ranpraised">'+myPraisedList[getRandomFromTo(0,myPraisedList.length-5)].title+'</p>';
		html += '</div>';
		html += '<li class="arrow"><a href="javascript:" title="1" class="moveMenu">칭찬 듣기</a></li>';
		html += '<li class="arrow"><a href="#effect" class="slideleft">칭찬 효과</a></li>';
		html += '</ul>';		
		return html;		
	};
	
	praisedApp.MainMediator.prototype.attachEventMainEvents = function() {
		$('.moveMenu').click(function(){
			if(this.title=='1'){
				praisedFacade.showPraisedPage();
			}			
		});
	};
	praisedApp.MainMediator.prototype.displayMainPage = function() {				
		goToPage(myCurrentPage,'pop');
	};
	
};

