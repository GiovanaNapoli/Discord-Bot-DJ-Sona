const Discord = require('discord.js');
//requisição da biblioteca Discord.js

const ytdl = require('ytdl-core');
//requisição da biblioteca Youtube Download - core

const token = 'Njc2OTg2MzkyMzkxNDUwNjUy.XkmKEg.Zs4ooOd-TH7O_atH-KD3r6cT1U8';
//pegando o token do bot

const app = new Discord.Client();
//criando um novo objeto discord

let estouPronto = false;

app.on('ready', ()=>{
    console.log("estou conectado");
    
});


app.on('message', (msg)=>{
    //!join = bot se junta ao canal de voz
    if(msg.content === "!join"){
        //let VoiceChannel = msg.guild.channels.find(channel => channel.id === '676978112923172864');
        if(msg.member.voiceChannel){
            msg.member.voiceChannel.join();
            estouPronto = !estouPronto;
            msg.channel.send('Só você pode me ouvir invocador!');
        }else{
            msg.channel.send('Você precisa estar conectado ao canal de musica do servidor');
        }
    }
    //!leave = bot sai do canal de musica
    else if(msg.content === "!leave"){
        if(msg.member.voiceChannel){
            msg.member.voiceChannel.leave();
            estouPronto = !estouPronto;
            msg.channel.send('Até breve invocador!');
        }else{
            msg.channel.send('Você precisa estar conectado ao canal de musica do servidor');
        }
    }
    //!play [link] = bot toca as musicas
    else if(msg.content.startsWith('!play ')){
        if(estouPronto){
            let oqTocar = msg.content.replace('!play ', '');
            if (ytdl.validateURL(oqTocar)){
                msg.member.voiceChannel.connection.playStream(ytdl(oqTocar));
            }else{
                msg.channel.send("O link informado não é valido, tente novamente");
            }
        }
    }

});

app.login(token);