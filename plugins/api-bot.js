import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
  try {
    const apiURL = `https://joanimi-apis-for-devs.vercel.app/api/gpt4role?text=${encodeURIComponent(text)}&role=عربي اتكلم`;

    if (!text) {
      return conn.reply(m.chat, 'اكتب الرسالة اللي عايز تبعتها لـ ', m);
    }

    const response = await fetch(apiURL);
    const data = await response.json();

    if (data && data.result) {
      conn.reply(m.chat, data.result, m);
    } else {
      conn.reply(m.chat, 'للأسف مفيش رد متاح دلوقتي.', m);
    }
  } catch (error) {
    console.error(error);
    conn.reply(m.chat, 'حصل خطأ في التواصل مع الـ API.', m);
  }
};

handler.help = ['S A R'];
handler.tags = ['ai'];
handler.command = /^(بوت|chatgpt)$/i;
export default handler;
