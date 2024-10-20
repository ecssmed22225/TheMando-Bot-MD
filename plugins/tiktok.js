import fetch from 'node-fetch';
import fs from 'fs';
//https://click.discord.com/ls/click?upn=u001.a0NJ38DJJG1sulNx5wS1jjC3-2FytEgbSbq-2FUmpxbpkbg14puiUN75BQU-2BrfLFYuAWB8X0py2eeyVjD738fhGFSHhMPsyUEndqfLtACp5zPj0vjfPcC3G1jvcquDbkdstS32dz0bJWFvPTn-2FAvvLDKrUh4375A2uVOxB3xHdhpQbBwa5xZJf7eh5qhKyEnKDgBZhxI-2Fq8qLS5rANb-2FtP7b3Os-2F6-2Be1A94HCOHNI2RW2Y8-3DKUc9_DC2mLSuw-2BGdNjXXJGz6qZODze6aow2jS5IQbAEd5B73UhzNnCbqQjZYc5L1oKFymwYEyFg7EUZgkaVJLvncwl2WfOkU9OPIE7GlwI-2BUrQU-2BCR5MgQbBguStFwIUSk7csKPgJtfvep7w1A7KqmuKkGBBHbbO-2BMnvC1G-2BZgdoNf8xVorMUcTaaPNZHmHaDMc-2FTRT8AgRtHFa51s0Nlc-2FPo1rprsm-2BMPT5SWShHcunMeRZaSz-2F5oUXER65qIVKbzfi6dAr4ywQ0NPs-2B9qe8ckmH1Q-3D-3D
let handler = async (m, { conn, usedPrefix, args, command, text }) => {
  if (!text) throw `يرجى استخدام الأمر مع رابط فيديو من تيكتوك\nمثال: ${usedPrefix + command} https://vt.tiktok.com/ZS2CQ96qp/`;
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
handler.command = /^(تيك|تيكتوك|tiktok)$/i;

export default handler;