let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*ادخل مشكلتك و بلاغك*\n\n*مثال:*\n*${usedPrefix + command} مرحباً سيدي زاك${usedPrefix}كيف اخبارك*`
let teks = `*●━── ⊱•┇«🦇»┇•⊰ ──━●*\n*┆ابلاغ جديد ↶*\n*┆ الرقم:* wa.me/${m.sender.split`@`[0]}\n*┆*\n*┆ المشكلة:* ${text}\n*●━── ⊱•┇«🦇»┇•⊰ ──━●*`
conn.reply('972546887176@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})
conn.reply('@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})
m.reply(`*[ ✔️ ] تـم ابـلاغ الـمـطـوريـن بـنـجـاح*`)
}
handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.command = /^(report|بلاغ|بلغ|ابلاغ|bug|report-owner|reportes)$/i
export default handler
