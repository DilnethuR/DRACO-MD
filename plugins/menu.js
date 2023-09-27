const {
	Function,
	isPublic,
	Fancy,
	prefix,
	parsedUrl,
	formatp,
	commands
} = require('../lib/');
const {
	BOT_INFO,
	MODE,
	PREFIX,
	VERSION
} = require('../config')
const os = require('os')
const speed = require('performance-now')
Function({
	pattern: 'menu',
	fromMe: isPublic,
	type: 'info'
}, async (message, match, client) => {
	const commandslist = {}
	commands.map(async (command, index) => {
		if (command.dontAddCommandList === false && command.pattern !== undefined) {
			try {
				var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
				var mmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
			} catch {
				var match = [command.pattern];
			}

			var HANDLER = '';

			if (/\[(\W*)\]/.test(PREFIX)) {
				HANDLER = PREFIX.match(/\[(\W*)\]/)[1][0];
			} else {
				HANDLER = '.';
			}
			if (!commandslist[command.type]) commandslist[command.type] = []
			commandslist[command.type].push((match.length >= 3 ? (HANDLER + mmatch) : command.pattern).trim())
		}
	})
	let msg = `╭━━━❙📃 𝔻𝕀𝕃ℕ𝔼𝕋ℍ𝕌-𝕄𝔻 ℂ𝕆𝕄𝕄𝔸ℕ𝔻 𝕃𝕀𝕊𝕋 📃⁩❙━━━┈⊷
┃✵╭──────────────
│ │ 👤 User:- ${citel.pushName}
│ │ 🤖Prefix:- [ ${prefix} ]
│ │ 👥Owner:- ${Config.ownername}
│ │ 🫥 Plugins:- ${commands.length}
│ │ 👁 Users:- ${total}
│ │ ‼ Uptime:- ${runtime(process.uptime())}
│ │ ✔ Mem:- ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
│ │ 🕐 Time:- ${time}
│ │ 📆 Date:- ${date}
┃✵╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
`
	for (const command in commandslist) {
		msg += `╭─────────────┈⊷
`
		msg += `│ 「 *${await Fancy(command.toUpperCase(), 32)}* 」 `
		msg += `────────┈⊷\n┌┤\n`
		for (const plugin of commandslist[command])
			msg += `││◦➛ ${await Fancy(plugin.toLowerCase(), 32)}\n`
		msg += `│╰────────────┈⊷
`
		msg += `╰─────────────┈⊷
`
	}
	await message.send(msg);
	/ var img = await parsedUrl(BOT_INFO)
	if (img.length == 0) {
		img = ['https://i.ibb.co/YpJzvQw/DILNETHU-MD.png']
	}
	const image = img[Math.floor(Math.random() * img.length)]
	const type = image.endsWith('mp4') ? 'video' : 'image'
	const buttonMessage = {
		[type]: { url: image },
		caption: `${msg}`,
		footer: `${BOT_INFO.split(";")[0] || ' '}`,
		
	await message.client.sendMessage(message.chat, buttonMessage)
	/
	
});

const runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " d " : " d ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " h " : " h ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " m " : " m ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " s" : " s") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

exports.runtime = runtime;
