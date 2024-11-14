const {cmd , commands} = require('../command')

cmd({
    pattern: "anime",
    desc: "anime the bot",
    category: "main",
    react: "⛱️",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*┌─〈➥⃟⟣𝐒ᴀͥɪᴍ 𝐀ʟɪ 𝐊ʜᷧᴀͫɴ⟢⃟❑𓃮〉─◆*
*┴*
*│▸ 𝙋𝙊𝙒𝙀𝙍𝘿 𝘽𝙔 𝙈𝘼𝙉𝙉𝙊-𝙈𝘿*
*┬*
*└────────────···▸*`
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/P4F56ht/7uc-Eh-E3-F3799.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/BBp7HJC/ao4hf-B6-L3405.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/m9pFgfH/d-Jxg-APl-D1828.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/7NJbnB3/lo75s-RTo4294.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/p2KX69w/ttn-SAC1u7151.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/r7Vq85F/qb96vb-AJ8624.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/ce9cb5acd2cec7693d76b.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
