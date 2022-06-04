function handler(m) {
const q = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": ""
	},
	"message": {
		"contactMessage": {
			"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Rull;;;FN:Rull\nORG:Rull;\nTEL;type=CELL;type=VOICE;waid=6285859047172:+62 858-5904-7172\nEND:VCARD"
		}
	},
	"participant": "0@s.whatsapp.net"
}

conn.sendContact(m.chat, '6285859047172', 'Hyzer', m)
m.reply(m.chat,'*Tuh nomor owner ku :D*\n*Chat jika Penting Atau Sekedar Kenalan*', q)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
