const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
⊱✫💌𝙈𝘼𝙉𝙉𝙊-𝘽𝙊𝙏✫⊱╮
│✫ - *📂𝙍𝙀𝙋𝙊𝙎𝙄𝙏𝙊𝙍𝙔-𝙉𝘼𝙈𝙀:* ${repoData.name}
│✫ - *📃𝘿𝙀𝙎𝘾𝙍𝙀𝙋𝙏𝙄𝙊𝙉:* ${repoData.description}
│✫ - *👤𝙊𝙒𝙉𝙀𝙍:* ${repoData.owner.login}
│✫ - *⭐𝙎𝙏𝘼𝙍𝙎:* ${repoData.stargazers_count}
│✫ - *💌𝙁𝙊𝙍𝙆𝙎:* ${repoData.forks_count}
│✫ - *🌐 𝙐𝙍𝙇:* ${repoData.html_url}
╰━━━━━━━━━━━━━━━━━╯

> *POWERED BY MANNO-MD*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363232588171807@newsletter',
      newsletterName: "SILENTLOVER432",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'SILENT-SOBX-MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/SILENTLOVER40/SILENT-SOBX-MD" ,
thumbnailUrl: "https://telegra.ph/file/2a06381b260c3f096a612.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
