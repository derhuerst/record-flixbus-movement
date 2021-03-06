#!/usr/bin/env node
'use strict'

const mri = require('mri')
const pkg = require('./package.json')

const argv = mri(process.argv.slice(2), {
	boolean: [
		'help', 'h',
		'version', 'v'
	]
})

if (argv.help || argv.h) {
	process.stdout.write(`
Usage:
    record-flixbus-movement >file.ndjson
\n`)
	process.exit(0)
}

if (argv.version || argv.v) {
	process.stdout.write(`record-flixbus-movement v${pkg.version}\n`)
	process.exit(0)
}

const showError = (err) => {
	if (process.env.NODE_ENV === 'dev') console.error(err)
	else console.error(err.message || (err + ''))
	process.exit(1)
}

const {asEventEmitter} = require('live-icomera-position')

asEventEmitter()
.on('error', (err) => {
	console.error(err)
	process.exitCode = 1
})
.on('data', (pos) => {
	process.stdout.write(JSON.stringify(pos) + '\n')
})
