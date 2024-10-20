import fetch from 'node-fetch';
import fs from 'fs';

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
  if (!text) throw `يرجى استخدام الأمر مع رابط فيديو من إنستغرام\nمثال: ${usedPrefix + command} https://www.instagram.com/p/xyz/`;
  m.react('⏳');

  try {
    let mediaURL = await zoro(text);

    if (!mediaURL) throw new Error('لم يتم العثور على رابط تحميل الفيديو');

    await conn.sendFile(m.chat, mediaURL, '', 'تم تحميل الفيديو بنجاح', m, false, { mimetype: 'video/mp4' });
  } catch (error) {
    console.error('تفاصيل الخطأ:', error);
    throw `حدث خطأ ما في تحميل الفيديو: ${error.message}`;
  }
};

async function zoro(text) {
  try {
    let res = await fetch(`https://artst-three.vercel.app/download?link=${encodeURIComponent(text)}`);
    
    if (!res.ok) {
      let errorText = await res.text();
      throw new Error('الـ API لم يعيد استجابة صحيحة');
    }

    let json = await res.json();

    if (!json.link) throw new Error('لم يتم العثور على رابط الفيديو');

    const fileName = 'Instagram_video.mp4';
    const fileStream = fs.createWriteStream(fileName);

    let videoRes = await fetch(json.link);
    if (!videoRes.ok) {
      let videoErrorText = await videoRes.text();
      throw new Error('فشل في تنزيل الفيديو');
    }

    videoRes.body.pipe(fileStream);

    await new Promise((resolve, reject) => {
      fileStream.on('finish', resolve);
      fileStream.on('error', reject);
    });

    return fileName;
  } catch (error) {
    console.error('تفاصيل الخطأ:', error);
    return false;
  }
}

handler.help = ['instagramdl'];
handler.tags = ['downloader'];
handler.command = /^(instadl|ig|انستا|انستغرام)$/i;

export default handler;
