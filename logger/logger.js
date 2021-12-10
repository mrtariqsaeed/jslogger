const fs = require('fs')
const infoStream = fs.createWriteStream('logger/logs/info.txt')
const errorStream = fs.createWriteStream('logger/logs/error.txt')
const debugStream = fs.createWriteStream('logger/logs/debug.txt')

let Logger = {}

Logger.info = (msg) => {
	const message = new Date().toLocaleTimeString() + ' : ' + msg + '\n'
	infoStream.write(message)
}

Logger.debug = (msg) => {
	const message = new Date().toLocaleTimeString() + ' : ' + msg + '\n'
	debugStream.write(message)
}

Logger.error = (msg) => {
	const message = 'ERROR - ' + new Date().toLocaleTimeString() + ' - ' + msg + '\n'
	console.error(message)
	errorStream.write(message)
}

exports.Logger = Logger
