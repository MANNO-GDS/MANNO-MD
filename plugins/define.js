                          const axios = require('axios');
                         const {cmd , commands} = require('../command');

                         cmd({
                             pattern: "define",
                             desc: "📚 𝙂𝙀𝙏 𝙏𝙃𝙀 𝘿𝙀𝙁𝙄𝙉𝙏𝙄𝙊𝙉 𝙒𝙊𝙍𝘿...",
                             react: "🔍",
                             category: "Auther",
                             filename: __filename
                         },
                         async (conn, mek, m, { from, q, reply }) => {
                             try {
                                 if (!q) return reply("❗ Please provide a word to define. Usage: .define [word]");

                                 const word = q;
                                 const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

                                 const response = await axios.get(url);
                                 const definitionData = response.data[0];

                                 const definition = definitionData.meanings[0].definitions[0].definition;
                                 const example = definitionData.meanings[0].definitions[0].example || 'No example available';
                                 const synonyms = definitionData.meanings[0].definitions[0].synonyms.join(', ') || 'No synonyms available';

const wordInfo = `
📚 *𝙒𝙊𝙍𝘿𝙎*: ${definitionData.word}
🔍 *𝘿𝙀𝙁𝙄𝙉𝙏𝙄𝙊𝙉*: ${definition}
📝 *𝙀𝙓𝘼𝙈𝙋𝙇𝙀*: ${example}
🔗 *𝙎𝙔𝙉𝙊𝙉𝙔𝙈𝙎*: ${synonyms}

*𝙈𝘼𝘿𝙀 𝙒𝙄𝙏𝙃 ♥ 𝙈𝘼𝙉𝙉𝙊-𝙈𝘿 `;

                                 return reply(wordInfo);
                             } catch (e) {
                                 console.log(e);
                                 if (e.response && e.response.status === 404) {
                                     return reply("🚫 Word not found. Please check the spelling and try again.");
                                 }
                                 return reply("⚠️ An error occurred while fetching the definition. Please try again later.");
                             }
                         });
