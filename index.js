const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
});

const CANAL_STAFF_ID = "1529613922301251694";
const CANAL_APRENDIZ_ID = "1529617121066352753";
const CARGO_APRENDIZ_ID = "1523407298733805658";


client.on("ready", () => {
    console.log(`Bot ligado como ${client.user.tag}`);
});


client.on("messageCreate", async (message) => {

    if (message.author.bot) return;

    if (
        message.channel.id === CANAL_STAFF_ID &&
        message.content.toUpperCase() === "EU QUERO"
    ) {

        await message.member.roles.add(CARGO_APRENDIZ_ID);

        await message.delete();

        const canal = message.guild.channels.cache.get(CANAL_APRENDIZ_ID);

        if (canal) {
            canal.send(`
# Seja bem-vindo(a), ${message.member}!

Você entrou no período de avaliação da equipe.

Durante 7 dias iremos observar sua participação, ajuda aos membros e comportamento.

Boa sorte!
            `);
        }
    }
});


client.login("WQfC1QEeLskdprFRVLEya4IHjFYl5JUd");
;
