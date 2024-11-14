const axios = require('axios');
const { cmd, commands } = require('../command');

cmd({
    pattern: "dog",
    desc: "𝙁𝙀𝙏𝘾𝙃 𝘼 𝙍𝘼𝙉𝘿𝙊𝙈 𝘿𝙊𝙂 𝙄𝙈𝘼𝙂𝙀.....",
    category: "fun",
    react: "🐶",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://dog.ceo/api/breeds/image/random`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.message }, caption: '𝙈𝘼𝙉𝙉𝙊-𝙈𝘿 𝘿𝙊𝙒𝙉𝙇𝙊𝙒𝘼𝘿📦 𝘿𝙊𝙂 𝙋𝙄𝘾𝙎\n\n\n> *© 𝙂𝙍𝘼𝙉𝙏𝙀𝘿 𝘽𝙔 𝙈𝘼𝙉𝙉𝙊-𝙈𝘿 📦*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`𝙀𝙧𝙧𝙤𝙧 𝙁𝙚𝙩𝙘𝙝𝙞𝙣𝙜 𝘿𝙤𝙜 𝙄𝙢𝙖𝙜𝙚 🚫: ${e.message}`);
    }
});
