export default {
    command: 'ping',
    aliases: ['p', 'pong'],
    category: 'general',
    description: 'Check bot response time',
    usage: '.ping',
    isPrefixless: true,
    async handler(sock, message, _args) {
        const start = Date.now();
        const chatId = message.key.remoteJid;
        const sent = await sock.sendMessage(chatId, {
            text: 'Pinging...'
        });
        const end = Date.now();
        await sock.sendMessage(chatId, {
            text: `*╭━〔 🌐 𝐇ᴀsɪ 𝐌ᴅ 〕━⬣*
*│⚡ ᗷOT Տᑭᗴᗴᗪ*
*│*
*│🚀 sᴘᴇᴇᴅ:* ${speed}ms
*│🧠 ᴜᴘᴛɪ.ᴇ:* ${runtime(process.uptime())}
*│❤️‍🔥 ᴠᴇʀsɪᴏɴ:* v${config.VERSION || "5.0.0"}
*╰━━━━━━━━━━━━━━━⬣*

> 📌 𝐏ᴏᴡᴇʀᴅ 𝐁ʏ 𝐇ᴀsɪ 𝐌ᴅ`,
            edit: sent.key
        });
    }
};
