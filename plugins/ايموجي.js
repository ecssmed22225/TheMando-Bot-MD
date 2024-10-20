import fs from 'fs';

let timeout = 60000;
let dollar = 500;

let handler = async (m, { conn, usedPrefix }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {};
    let id = m.chat;
    if (id in conn.tekateki) {
        conn.reply(m.chat, '❐┃لم يتم الاجابة علي السؤال بعد┃❌ ❯', conn.tekateki[id][0]);
        throw false;
    }
    let tekateki = JSON.parse(fs.readFileSync(`./src/game/miku4.json`));
    let json = tekateki[Math.floor(Math.random() * tekateki.length)];
    let _clue = json.response;
    let clue = _clue.replace(/[A-Za-z]/g, ''); // Fixed this line
    let caption = `
ⷮⷮ > ˼⚡˹↜ الــســؤال يــا صــحــبــي↶
> الــســؤال↜ ˼${json.question}˹ 
╮───────────────────⟢ـ
┆❐↞┇الـوقـت⏳↞ ⌊${(timeout / 1000).toFixed(2)} ثانية⌉
┆❐↞┇الـجـائـزة💰↞ ⌊${dollar} دولار⌉
┆❐↞┇المطور 🤖↞ ⌊نــاروتـو - زاك⌉
╯───────────────────⟢ـ
> رايــزل بــوت
`.trim();
    conn.tekateki[id] = [
       await conn.reply(m.chat, caption, m),
        json, dollar,
        setTimeout(async () => {
            if (conn.tekateki[id]) await conn.reply(m.chat, `❮ ⌛┇انتهي الوقت┇⌛❯\n ❐↞┇الاجـابـة✅↞ ${json.response}┇`, conn.tekateki[id][0]);
            delete conn.tekateki[id];
        }, timeout)
    ];
};

handler.help = ['miku'];
handler.tags = ['game'];
handler.command = /^(ايموجي)$/i;

export default handler;
