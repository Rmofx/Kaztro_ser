const WhatsAlexa = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true

WhatsAlexa.addCommand({pattern: 'list', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message! Amalser.
    var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var plk_here = new Date().toLocaleDateString(get_localized_date)
var afnplk = '```⏱ Time :' + plk_say + '```\n\n ```📅 Date :' + plk_here + '```'
	const buttons = [

        {buttonId: 'id1', buttonText: {displayText: 'LISTE☃️\n\n❄️ .vtalk\n.  ```Starts to Eva voice chat.```\n\n❄️ .pinky \n.  ```Activates full functional Eva features. Turn your account into a ai chatbot!```\n```☃️ Eg:- :``` ```.pinky on / off```\n\n❄️ .xmedia\n.  ```It is a plugin with more than 25 media tools.``` \n\n❄️ .ownercmnd\n.  ```set of commands for bot user or sudo``` \n\n❄️ .codtts\n.  ```language code to change the voice in .tts & also for .trt translation``` \n\n❄️ .adan \n.  ```Finds prayer time.```\n```☃️ Eg:- :``` ```.prayer <city>```\n\n❄️ .rename \n.  ```[object Object]``` \n\n❄️ .anime\n.  ```random anime image ``` \n\n❄️ .apkmod\n\n❄️ .fatp\n\n❄️ .ttp \n.  ```Converts text to plain painting.``` \n\n❄️ .attp \n.  ```Adds rainbow effect to the text as a sticker.``` \n❄️ .autobio\n .  ```change Auto bio mode```\n```☃️ Eg:- :``` ```.autobio on / off```\n\n❄️ .bgm \n.  ```turn on and turn off bgm. -bot owner command```\n```☃️ Eg:- :``` ```.bgm on / off```\n\n❄️ .carbon\n.  ```It sends carbon picture``` \n\n❄️ .bgm \n.  ```change reply message BGM mode```\n```☃️ Eg:- :``` ```.bgm one / two```\n\n❄️ .mp3\n.  ```Converts video to sound.``` \n\n❄️ .photo\n.  ```Converts the sticker to a photo.``` \n\n❄️ .mp4\n.  ```Converts animated stickers to video.``` \n\n❄️ .dict\n .  ```Use it as a dictionary.Eg: .dict en_US;lead For supporting languages send *.lngcode*``` \n\n❄️ .pmsend\n.  ```send message to pm``` \n\n❄️ .git\n.  ```To get github links.``` \n\n❄️ .welcome\n.  ```It sets the welcome message. If you leave it blank it shows the welcome message.```\n \n❄️ .goodbye\n.  ```Sets the goodbye message. If you leave blank, it shows the goodbye message.``` \n\n❄️ .antilink \n.  ```Activates the Antilink tool.```\n```☃️ Eg:- :``` ```.antilink on / off```\n\n❄️ .moretxt\n.  ```more txtit commands``` \n\n❄️ .ffire \n.  ```add your text to random freefire logo``` \n\n❄️ .emo \n.  ```emogi to png``` \n\n❄️ .news \n\n❄️ .notes\n.  ```Shows all your existing notes.``` \n\n❄️ .save \n.  ```Reply a message and type .save or just use .save <Your note> without replying``` \n\n❄️ .deleteNotes\n.```Deletes *all* your saved notes.```\n\n❄️ .owner\n.  ```shows the detail of bot owner``` \n\n❄️ .jid \n.  ```Giving users JID.``` \n\n❄️ .random \n.  ```word image``` \n\n❄️ .brdmore \n.  ```add readmore before your text``` \n\n❄️ .rdmore \n.  ```add readmore before your text```\n\n ❄️ .removebg \n.  ```Removes the background of the photos.``` \n\n❄️ .report \n.  ```Sends reports to group admins.``` \n\n❄️ .scan \n.  ```Checks whether the entered number is registered on WhatApp.``` \n\n❄️ .trt\n.  ```It translates with Google Translate. You must reply any message.```\n```☃️ Eg:- :``` ```.trt tr it (From Turkish to Italian)```\n\n❄️ .detectlang\n.  ```Guess the language of the replied message.```\n\n❄️ .currency\n\n❄️ .tts \n.  ```It converts text to sound.```\n\n ❄️ .song \n.  ```Uploads the song you wrote.``` \n\n❄️ .video\n .  ```Downloads video from YouTube.``` \n\n❄️ .sing \n.  ```It sings song that you have written```\n\n ❄️ .song \n.  ```Uploads the song you wrote for ios users.``` \n\n❄️ .wiki \n.  ```Searches query on Wikipedia.``` \n\n❄️ .img \n.  ```Searches for related pics on Google.``` \n\n❄️ .github \n.  ```Collects github information from the given username.\n☃️ Example: .github phaticusthiccy``` \n\n❄️ .lyric \n.  ```Finds the lyrics of the song.``` \n\n❄️ .covid \n.  ```Shows the daily and overall covid table of more than 15 countries.``` \n\n❄️ .sweather \n.  ```Gives you the weekly interpretations of space weather observations provided by the Space Weather Research Center (SWRC) for a p.``` \n\n❄️ .compliment \n.  ```It sends complimentry sentenses``` \n\n❄️ .hmod \n.  ```Finds mod apps from happymod``` \n\n❄️ .insult \n.  ```It sends insulted words``` \n\n❄️ .movie \n.  ```Shows movie info.``` \n\n❄️ .joke \n\n.  ```It sends random jokes``` \n\n❄️ .vava\n .  ```Chat with Amalser. Use .vava <message>``` \n\n❄️ .owner\n.  ```shows the detail of bot owner``` \n\n❄️ .quote \n.  ```It shares famous quotes``` \n\n❄️ .ss \n.  ```Takes a screenshot from the page in the given link.``` \n\n❄️ .setvar\n.  ```It sends high resolution wallpapers.``` \n\n❄️ .show \n.  ```Get info related to tv series and shows``` \n\n❄️ .ig \n.  ```Fetches user informations from instagram``` \n\n❄️ .animesay \n.  ```It writes the text inside the banner the anime girl is holding``` \n\n❄️ .changesay \n.  ```Turns the text into the change my mind poster.``` \n\n❄️ .trumpsay\n .  ```Converts the text to Trumps tweet.``` \n\n❄️ .bgm \n.  ```turn on and turn off bgm. -bot owner command```\n```☃️ Eg:- :``` ```.bgm on / off```\n\n❄️ .autosticker \n.  ```turn on and turn off bgm. -bot owner command```\n```☃️ Eg:- :``` ```.sticker on / off```\n\n❄️ .sudo \n.  ```changes sudo numbers```\n```☃️ Eg:- :``` ```.sudo *your number*```\n\n❄️ .caption \n.  ```changes all captions```\n```☃️ Eg:- :``` ```.caption *Made by Liza Mwol*```\n\n❄️ .handlers \n.  ```changes handlers```\n```☃️ Eg:- :``` ```.handler ^[.!] ```\n\n❄️ .botname \n.  ```change your bot name```\n```☃️ Eg:- :``` ```.botname *name* ```\n\n❄️ .theri  \n.  ```change your theri commands```\n```☃️ Eg:- :``` ```.theri command,command```\n\n❄️ .sticker\n.  ```It converts your replied photo or video to sticker.```\n\n❄️ .alive\n.  ```Does bot work?```\n\n❄️ .sysd\n.  ```Shows the system properties.``` \n\n❄️ .tagadmin\n.  ```Tags group admins.```\n❄️ .txtit\n.  ```Shows text to image tools with unlimited access.``` \n\n❄️ .theri \n.  ```turn on & off anti-badword To remove members when they use bad words```\n```☃️ Eg:- :``` ```.theri no / yes```\n\n❄️ .a \n.  ```Converts audio to sound recording.``` \n\n❄️ .unvoice\n.  ```Converts audio to sound recording.```\n\n❄️ .update\n.  ```Checks the update.``` \n\n❄️ .update now\n.  ```It makes updates.``` \n\n❄️ .wallpaper\n.  ```It sends high resolution wallpapers.``` \n\n❄️ .wame \n.  ```Get a link to the user chat.``` \n\n❄️ .reset warn\n.  ```it sends good morning message```\n\n❄️ .weather \n.  ```Shows the weather.``` \n\n❄️ .speedtest\n.  ```Measures Download and Upload speed.``` \n\n❄️ .ping\n.  ```Measures your ping.``` \n\n❄️ .short\n .  ```Shorten the long link.``` \n\n❄️ .calc \n.  ```Performs simple math operations.``` \n\n❄️ .whois\n.  ```Displays metadata data of group or person.```\n\n❄️ .gdmrng\n\n.  ```it sends good morning message```\n\n❄️ .gdni8\n.  ```it sends good night message```\n '}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: 'Owncmnd ❤️\n\n*Kaztroser two types of alive message*\n\n*Hi i am live {pp}*\n\n*Hi i am alive {qt}*\n\n*welcome message addedd simple way*\n\n*.welcome {pp} {gphead} {gpmaker} {gpdesc}{owner}*\n\n*Another way*\n*.welcome {gif} {gphead} {gpmaker} {gpdesc} {time} {owner}*\n\n*Broadcast adedd replay with any message .bc*\n\n*Alive message time set*\n\n*Button message added .bot and .help*\n\n*All type of downloading command example .yt, .video, .song, .get*\n\n '}, type: 1},
        {buttonId: 'id3', buttonText: {displayText: 'GIT 💌\n\n```Follow this page: https://instagram.com/_ajayan_007?utm_medium=copy_link```\n\n```Github link: https://github.com/Aj-fx/Kaztroserv1```\n\n```❄️```\n'  }, type: 1},

      ]
      
      const buttonMessage = {
          contentText: ' ʜɪ ʙʀᴏ---🧚\n\n```BOT NAME:``` *'+Config.LIST+'*\n\n💙 ᴛɪᴍᴇ   : ```' + plk_say + '```\n🥶 ᴅᴀᴛᴇ : ```' + plk_here + '```\n\n☃️ ᴄʟɪᴄᴋ ᴍᴇɴᴜ ᴀɴᴅ ᴇɴᴊᴏʏ ᴛʜᴇ ʙᴏᴛ\n', 
          footerText: '✮ ᴀᴊ ғx💕',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));

