//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '*✳️ مــنــشــن الــمــســتــخــدم*'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw ' *╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•*\n*┆ ✳️ ضــيــف الــمــبــلــغ الــي عــايــز تــحــولــه*\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*'
  if (isNaN(txt)) throw '*🔢 ارقــام اوعــي تــحــط رمــوز يــا حــب*'
  let dollar = parseInt(txt)
  let dollar = dollar

  if (dollar < 1) throw '💷 الــحــد الأدنــي *1 دولار*'
  let users = global.db.data.users
  users[who].dollar += dollar

  await m.reply(`
  *⌊ اضــافــه فــلــوس ⌉* ↶
*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•*
*┆ تــم اضـافـة : ${dollar} دولار 💷*
*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*
> استخدم امر ⌊ .محفظة ⌉ لي الاطلاع علي فلوسك`)
 conn.fakeReply(m.chat, `
*⌊ لـقـد حـصـلـت عـلـي ⌉* ↶
*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•*
*┆ ⌊ ${dollar} ⌉ دولار 💷*
*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*
> استخدم امر ⌊ .لفل ⌉ لي الاطلاع علي مستواك`, who, m.text)
}

handler.help = ['dollar <@user>']
handler.tags = ['econ']
handler.command = ['دولار'] 
handler.owner = true
handler.premium = true

export default handler
