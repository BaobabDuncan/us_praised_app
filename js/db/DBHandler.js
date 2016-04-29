
function DBHandler(aOption)
{
	var self = this;
	
	this.databaseOption = aOption;
	this.database = null;
	this.name = 'DBHandler';
	
	DBHandler.prototype.connectDB = function(){	
		try{
			self.database = openDatabase(
				self.databaseOption.fileName,
				self.databaseOption.version,
				self.databaseOption.displayName,
				self.databaseOption.maxSize
			);
		}
		catch(e){
			
		}
	};
	DBHandler.prototype.nullDataHandler = function(transaction, resultSet) {
		console.info('nullDataHandler');
	};
	DBHandler.prototype.nullDataHandler = function(transaction, resultSet) {
		console.info('nullDataHandler');
	};
	DBHandler.prototype.handleError = function(transaction, resultSet){
		console.info('handleError');
	};
	
	
	DBHandler.prototype.openSQL = function(aSql,dataHandler,errorHandler){		
		self.database.transaction(
			function (transaction){
				transaction.executeSql(aSql,[],dataHandler,errorHandler);
			}
		);
	};
	DBHandler.prototype.accSQL = function(aSql,dataHandler,errorHandler){			
		self.database.transaction(
			function (transaction){
				transaction.executeSql(aSql,[],dataHandler,dataHandler);
			}
		);
	};
	
	DBHandler.prototype.execSQLCommand = function(aSql, onSuccess, onFailure){		
		self.database.transaction(
			function(transaction){
				transaction.executeSql(aSql, [], onSuccess, onFailure);
			}
		);
	};
	
	DBHandler.prototype.execSQL = function(aSql) {
		self.execSQLCommand(aSql, self.nullDataHandler, self.nullErrorHandler);
	};

	
	DBHandler.prototype.dropTable = function(table_name) {		
		var sql1 = 'DROP TABLE '+table_name;		
		self.execSQL(sql1,self.nullDataHandler,self.nullErrorHandler);
	};
	
	DBHandler.prototype.createSettingTable = function() {
		try{
			var sSql = 'CREATE TABLE IF NOT EXISTS setting'+
				'(setting_id INTEGER NOT NULL PRIMARY KEY, '+
				' update_date TEXT DEFAULT "", '+				
				' callCount INTEGER DEFAULT '+Constants.Default.CallCount+' );';								
			self.execSQL(sSql);
		}
		catch(err){
			console.info('DBHandler.prototype.createSettingTable = '+err.message)
		}
	};	
	
	
	
	
}