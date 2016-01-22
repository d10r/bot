'use strict';

var join = require('path').join,
	filesystem = require('fs');

var db = require('./db');
var moduleLoader = require('./moduleLoader');

/**
 * Main class of the ANIMAL bot.
 * @class animalBot
 */
class animalBot {
	constructor(settings) {
		var defaults = {};

		try {
			defaults = JSON.parse(
				filesystem.readFileSync(join(process.cwd(), 'server', 'config.json'))
			);
		} catch (err) {
			console.log('Error loading config.json', err);
		}

		this.settings = Object.assign({}, defaults, settings);
	}

	/**
	 * Run the bot
	 */
	run() {
		this._connectDb();
		this._registerModules();
	}

	/**
	 * Open connection to the database
	 */
	_connectDb() {
		db.connect('', '', '', {
			'dialect': 'sqlite',
			'storage': join(process.cwd(), this.settings.dbPath)
		});

		// db.loadModels('models');
	}

	/**
	 * Autoloads modules
	 */
	_registerModules() {
		var modules = moduleLoader.loadModules();
		for (var moduleName in modules) {
			db.loadModels('lib/modules/' + moduleName + '/models');
		}
	}
}

module.exports = animalBot;