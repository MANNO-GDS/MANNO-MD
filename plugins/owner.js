const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "owner",
    desc: "im owner",
    react: "👩‍💻",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let owner =` 
*HEAR IS BOT OWNER INFO*
*NAME:-* *SAIM-ALI*
*AGE:-* *20 YEARS*
*PUBLIC NAME:-* *MANNO*

> *BY MANNO-MD*
`
await conn.sendMessage(from, { text: owner ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363232588171807@newsletter',
      newsletterName: "MANNO-MD-DEV",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'MANNO-MD DEV',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://wa.me/+923094029835?text=HY SAIM BRO I'M MSG YOU FROM OWNER ADS" ,
thumbnailUrl: "https://i.ibb.co/7NJbnB3/lo75s-RTo4294.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
});
