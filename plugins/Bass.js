/* Amalser Bot
Re-edit Amalser
*/

const Amalser = require('../events');
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

Amalser.addCommand({pattern: 'mk', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!credit Amal
    const buttons = [
        {buttonId: 'id1', buttonText: {displayText: Config.AMAL_SER }, type: 1},
        {buttonId: 'id2', buttonText: {displayText: Config.AMAL_S }, type: 1}
      ]
      
      const buttonMessage = {
          contentText: ' ```'+Config.BOT+'\n\n```'+Config.ALIVEMSG+'\n',
          footerText: 'Amalser ©',
          buttons: buttons,
          headerType: 1
      }
      if (id1.test((message.message)) {
         await message.client.sendMessage(message.jid,'ʏᴇꜱ ᴛʜᴀᴛꜱ ᴍᴇ', MessageType.text, {quoted: message.data })
      }
      else if (id2.test((message.message)) {
         await message.client.sendMessage(message.jid,'ᴛʜᴀᴛꜱ ᴍᴇ', MessageType.text, {quoted: message.data })
      }
      
      await message.client.sendMessage(message.jid, message.message, buttonMessage, MessageType.buttonsMessage)

}));
