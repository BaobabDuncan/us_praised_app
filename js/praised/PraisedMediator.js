praisedApp.PraisedMediator = function(_facade) {	
	var praisedFacade = _facade;			
	var self = this;
	
	praisedApp.PraisedMediator.prototype.initalizePraisedPage = function() {		
		myCurrentPage = Constants.ViewingPage.PraisedView;		
	};
	praisedApp.PraisedMediator.prototype.appendHtmlPraisedPage = function() {
		var targetDiv = getJqtCurrentPageWrapper(myCurrentPage);
		emptyHTML(targetDiv);
		var html = self.getHtmlForPraised();
		var insert = $(html);  	
		$(targetDiv).append(insert);
	};
	praisedApp.PraisedMediator.prototype.getHtmlForPraised = function() {		
		var html = '';		
		html += '<div class="info">';
		html += '칭찬 버드를 클릭 해주세요 <br>칭찬 듣기는 하루에 5번으로 제한이 되있습니다.<br>';
		html += '<span id="remaindCount">'+this.getRemaindCount()+'</span>';
		html += '</div>';
		html += '<div id="praised_bird">';
		html += '<img src="./images/praised_bird.png" id="praised_bird_img">';
		html += '</div>';		
		return html;		
	};
	
	praisedApp.PraisedMediator.prototype.attachEventPraisedEvents = function() {
		$("#praised_bird_img").click(this.clickBirdImg);		
	};
	praisedApp.PraisedMediator.prototype.clickBirdImg = function() {				
		praisedFacade.playSound();
		$(this).addClass('talk');
		$("#praised_bird_img").unbind(this.clickBirdImg);
	};
	praisedApp.PraisedMediator.prototype.handlePlaySound = function() {		
		var remaindCount = this.getRemaindCount();		
		setTimeout(function() {
			$("#remaindCount").html(remaindCount);
			$("#praised_bird_img").removeClass('talk');
			$("#praised_bird_img").bind("click",self.clickBirdImg);
		}, 3000);		
	};
	
	praisedApp.PraisedMediator.prototype.getRemaindCount = function() {
		var remaindCount = (Constants.Limit.MaxPraised*1)-(mySetting.callCount*1);
		if (remaindCount<0) return '오늘의 칭찬을 모두 사용하셨어요';
		return remaindCount;
	};	
	praisedApp.PraisedMediator.prototype.displayPraisedPage = function() {				
		goToPage(myCurrentPage,'slideleft');
	};
};

