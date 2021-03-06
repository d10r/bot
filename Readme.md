# ANIMAL bot
This is the home of the ANIMAL bot. It shall be a (not so) silent companion, supporting our everyday work life at the office.

[![Project Status: WIP - Initial development is in progress.](http://www.repostatus.org/badges/latest/wip.svg)](http://www.repostatus.org/#wip)
[![Build Status](https://travis-ci.org/AnimalDesign/bot.svg?branch=master)](https://travis-ci.org/AnimalDesign/bot)
[![Test Coverage](https://codeclimate.com/github/AnimalDesign/bot/badges/coverage.svg?branch=master)](https://codeclimate.com/github/AnimalDesign/bot/coverage)
[![Code Climate](https://codeclimate.com/github/AnimalDesign/bot/badges/gpa.svg?branch=master)](https://codeclimate.com/github/AnimalDesign/bot)
[![Issue Count](https://codeclimate.com/github/AnimalDesign/bot/badges/issue_count.svg?branch=master)](https://codeclimate.com/github/AnimalDesign/bot)
[![Dependencies](https://david-dm.org/AnimalDesign/bot.svg?branch=master)](https://david-dm.org/AnimalDesign/bot)

## Core functionality
The core of the ANIMAL bot provides the following functionality:

### Database layer
The database layer is based on the [Sequelize](http://docs.sequelizejs.com/en/latest/) ORM and therefor supports PostgreSQL, MySQL, MariaDB, SQLite (currently tested and used) and MSSQL databases.

### Module loader
With the module loader, we try to maintain greatest possible flexibility. Developers can independently teach the bot new tricks without blocking others. Modules overseen by the [ANIMAL team](http://animal.at) can be found [here](https://github.com/AnimalBot). To install a module, it usually needs to be copied (or cloned) into  `app/modules/<modulename>`. Have a look at the [Example module repository](https://github.com/AnimalBot/example) to learn more on how to extend the bot.

> **Note:** A module can be deactivated simply by renaming its `module.js` file.

The modular concept of the module loader is loosely inspired by [this article](https://strongloop.com/strongblog/modular-node-js-express/).

### Commandline interface

To make some functionality easy accessable, the bos also has a commandline interface. It is based on 
[Commander.js](https://github.com/tj/commander.js) and can be extended by modules.

```
./bin/bot
```

### Logger

The logger component uses [winston](https://github.com/winstonjs/winston) to log infos into `app/logs/info.log` and 
errors into `app/logs/error.log`.

## Dependencies
- [winston](https://github.com/winstonjs/winston)
- [Sequelize](http://docs.sequelizejs.com/en/latest/)
- [Node Schedule](https://github.com/node-schedule/node-schedule)
- [Commander.js](https://github.com/tj/commander.js)

## About

„We build it" -- [ANIMAL](http://animal.at)
