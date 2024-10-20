import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command, args }) => {

  let userAge = global.db.data.users[m.sender].age;
  if (userAge < 17) throw `❎ يجب أن يكون عمرك 18 عامًا على الأقل`;

  try {
    m.reply(global.wait);
    let res = await fetch('https://api.guruapi.tech/hanime/trend');
    let json = await res.json();

    if (!json || json.length === 0) throw 'No data found';

    let topTrending = json.slice(0, 8);

    let message = '🔥 *اتفضل يا عمو زاك الهنتاي بتاعك واتمتع* 🔥\n\n';

    topTrending.forEach((data, index) => {
      message += `
${index + 1}. **${data.name}**
   - 📎 Link: https://hanime.tv/videos/hentai/${data.slug}
   - 👁️ Views: ${data.views}

`;
    });

    await conn.sendFile(m.chat, topTrending[0].cover_url, 'hanime.jpeg', message, m);
  } catch (error) {
    console.error(error);
    throw `*خطأ: حدث خطأ ما. يرجى المحاولة مرة أخرى لاحقا.*`;
  }
};

handler.command = /^(لول)$/i;
export default handler;
