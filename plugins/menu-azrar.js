function clockString(ms) {
    let h = Math.floor(ms / 3600000);
    let m = Math.floor(ms % 3600000 / 60000);
    let s = Math.floor(ms % 60000 / 1000);
    return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
}

import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = pkg;

const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000);
    let locale = 'ar';
    let week = d.toLocaleDateString(locale, { weekday: 'long' });
    let time = d.toLocaleDateString(locale, { time: 'long' });
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender)
    let { money, joincount } = global.db.data.users[m.sender];
    let { exp, limit, level, role, health, crystal, dollar, wood, gold } = global.db.data.users[m.sender];
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;
    let more = String.fromCharCode(8206);
    let readMore = more.repeat(850);
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
  await conn.sendMessage(m.chat, { react: { text: '📜', key: m.key } })
  const zack = 'https://envs.sh/Bre.jpg'
  const mentionId = m.key.participant || m.key.remoteJid;
 
conn.relayMessage(m.chat, { viewOnceMessage: { message: { interactiveMessage: { header: { title: `zack`}, body: { text: `˼✨˹↜ مـࢪحـبـا بـك/ي @${mentionId.split('@')[0]}
*⌊🪪┇مـعـلـومـاتـك┇🪪⌉*
*❐═━━━═╊⊰🦇⊱╉═━━━═❐*
*【⚜️┇مـــســـتواك ┇  ${level} 】*
*【💫┇رتـبـتـك ┇  ${role} 】*
*●━── ⊱•┇«🦇»┇•⊰ ──━●*
*⌊🤖┇الــبــوت┇🤖⌉*
*●━── ⊱•┇«🦇»┇•⊰ ──━●*
*【✨┇اسم البوت ┇ 𝑀𝐴𝑁𝐷𝛩 】*
*【📌┇الـتـشـغـيل ┇  ${uptime} 】*
*【📅┇الــيــوم ┇  ${week} 】*
*【🗓┇الـتـاريـخ ┇  ${time} 】*
*【🎶┇الــمــســتـخـدمـيـن ⟣  ${rtotalreg} 】*
*❐═━━━═╊⊰🦇⊱╉═━━━═❐*
> © 𝐍𝐀𝐑𝐔𝐓𝐎 & 𝐙𝐀𝐂𝐊 2025`,subtitle: "zack",},header: { hasMediaAttachment: true,...(await prepareWAMessageMedia({ image : { url: zack } }, { upload: conn.waUploadToServer }, {quoted: m}))},
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: false,
                    },nativeFlowMessage: { buttons: [


                            {
                                name: 'single_select',
                                buttonParamsJson: JSON.stringify({
                                    title: '⌈✨╎اوامــر الــبــوت╎✨⌋',
                                    sections: [
                                        {
                                            title: 'مــرحـ🛡ـبــا بــك فـي مــ☑هــام ماندو بـ🤖ـوت',
                                            highlight_label: '𝐍𝐀𝐑𝐔𝐓𝐎 & 𝐙𝐀𝐂𝐊',
                                            rows: [
                                                {
                                                    header: 'الــقـ👑ـســم الـاول',
                                                    title: '#الاعضاء',
                                                    description: '',
                                                    id: '.ق1'
                                                },
                                                {
                                                    header: 'الــقـ👨🏻‍💻ـســم الــثــانــي',
                                                    title: '#المشرفين',
                                                    description: '',
                                                    id: '.ق10'
                                                },
                                                {
                                                    header: 'الــقـ🕋ـســم الــثــالــث',
                                                    title: '#الدين',
                                                    description: '',
                                                    id: '.ق2'
                                                },
                                                {
                                                    header: 'الــقـ🦇ـســم الــرابــع',
                                                    title: '#المطور',
                                                    description: '',
                                                    id: '.ق3'
                                                },
                                                {
                                                    header: 'الــقـ🛡ـســم الــخــامــس',
                                                    title: '#التنزيلات',
                                                    description: '',
                                                    id: '.ق4'
                                                },
                                                {
                                                    header: 'الــقـ🕹ـســم الــســادس',
                                                    title: '#الالعاب',
                                                    description: '',
                                                    id: '.ق5'
                                                },
                                                {
                                                    header: 'الــقـ🌀ـســم الــســابــع',
                                                    title: '#التحويلات',
                                                    description: '',
                                                    id: '.ق6'
                                                },
                                                {
                                                    header: 'الــقـ🤖ـســم الــتــاســع',
                                                    title: '#Ai',
                                                    description: '',
                                                    id: '.ق7'
                                                },
                                                {
                                                    header: 'الــقـ🚨ـســم الــعــاشــر',
                                                    title: '#الدعم',
                                                    description: '',
                                                    id: '.ق8'
                                                },
                                                {
                                                    header: 'الــقـ🔍ـســم الــحــاديــة عــشــر',
                                                    title: '#البحث',
                                                    description: '',
                                                    id: '.ق11'
                                                },
                                                {
                                                    header: 'الــقـ🏦ـســم الــثــانــي عــشــر',
                                                    title: '#بنكك',
                                                    description: '',
                                                    id: '.بنكك'
                                                },
                                                {
                                                    header: 'الــقـ🐱ـســم الــثــالــث عــشــر',
                                                    title: '#التسلية',
                                                    description: '',
                                                    id: '.ق13'
                                                },
                                                {
                                                    header: 'الــقـ🪛ـســم الــرابــع عــشــر',
                                                    title: '#الادوات',
                                                    description: '',
                                                    id: '.ق12'
                                                },
                                                {
                                                    header: 'الــقـ📹ـســم الــخــامــس عــشــر',
                                                    title: '#الاديت',
                                                    description: '',
                                                    id: '.ق14'
                                               }
                                            ]
                                        }
                                    ]
                                }),
                  messageParamsJson: ''
                     },
                     {
              name: "quick_reply",
              buttonParamsJson: '{"display_text":"⌈🙌╎الاشــتــراكــات╎🙌⌋","id":".الباقات"}'
                     },
                     {
               name: "cta_url",
               buttonParamsJson: '{"display_text":"⌈📲╎قـنـاة الــبــوت╎📲⌋","url":"https://whatsapp.com/channel/0029VarJdJO7dmeZS5ZKft1U","merchant_url":"https://whatsapp.com/channel/0029VarJdJO7dmeZS5ZKft1U"}'
                            }
                        ]
                    }
                }
            }
        }
    }, {});
}

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['menu', 'مهام', 'اوامر','الاوامر','قائمة','القائمة']

export default handler;
