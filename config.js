const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "trur"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "787382852,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_12_06_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzksXG4gICAgICAgIDgzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjksXG4gICAgICAgIDIwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTUsXG4gICAgICAgIDQ0LFxuICAgICAgICA0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTksXG4gICAgICAgIDI5LFxuICAgICAgICA4MixcbiAgICAgICAgMjI1LFxuICAgICAgICA0MyxcbiAgICAgICAgODAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDMsXG4gICAgICAgIDg2LFxuICAgICAgICA4NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIsXG4gICAgICAgIDY5LFxuICAgICAgICA2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDExLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMixcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE1LFxuICAgICAgICA2MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTE5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzksXG4gICAgICAgIDc2LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NixcbiAgICAgICAgNzAsXG4gICAgICAgIDEyLFxuICAgICAgICA3NixcbiAgICAgICAgMTgxLFxuICAgICAgICA5OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDY4LFxuICAgICAgICA1LFxuICAgICAgICA4MyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA3LFxuICAgICAgICA4NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDUzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTksXG4gICAgICAgIDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTExLFxuICAgICAgICAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjExLFxuICAgICAgICAxNDgsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMixcbiAgICAgICAgMTg3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc1LFxuICAgICAgICA1OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODcsXG4gICAgICAgIDE1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUxLFxuICBcImFkdlNlY3JldEtleVwiOiBcInRnK2ZFajgxS2c2UlNCTFoxUzFlWmFqdkFYZ0lWakZpMjFReVRXYUpOOG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzg3MzgyODUyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFNEU4NDY3OURGRkNFRDJCREU2NDlFNTY3MDIwRjFGMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc0MDU5NDhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia28zUkc2X2FTVFMtZWlMdnJKZVFQUVwiLFxuICBcInBob25lSWRcIjogXCIyOTU3MmRjMS00MmYyLTQwZjQtYjFmMi0zMzgyMGMyODNkMmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODcsXG4gICAgICAxMzksXG4gICAgICA0OCxcbiAgICAgIDEzMyxcbiAgICAgIDIwMCxcbiAgICAgIDEwMixcbiAgICAgIDE0LFxuICAgICAgMTY0LFxuICAgICAgMTcsXG4gICAgICAxMzAsXG4gICAgICAyMDEsXG4gICAgICAxOSxcbiAgICAgIDksXG4gICAgICA4LFxuICAgICAgMTU4LFxuICAgICAgNjUsXG4gICAgICAyMjUsXG4gICAgICAxMDIsXG4gICAgICAzMixcbiAgICAgIDE2OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5LFxuICAgICAgMTk0LFxuICAgICAgMTczLFxuICAgICAgMjYsXG4gICAgICAxNjMsXG4gICAgICA4NyxcbiAgICAgIDExNyxcbiAgICAgIDE5OCxcbiAgICAgIDE4MCxcbiAgICAgIDIxNCxcbiAgICAgIDE0MixcbiAgICAgIDE4MyxcbiAgICAgIDYxLFxuICAgICAgODgsXG4gICAgICAyMzcsXG4gICAgICAxNTgsXG4gICAgICA0MCxcbiAgICAgIDI0NixcbiAgICAgIDU3LFxuICAgICAgMTM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFQUENXWDZTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3ODczODI4NTI6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM4MzYyOTgzNDg1NTA1OjE0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkJsZXNzZWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKT0Z4SXNCRVBLUjlySUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlAyR0JHK0U3TENia1YyZlpLZzdWQm1IelB6aFJpMEE3Zk56UW5EaDd0U2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiM3h3WVRONTlyRXdGUlM4dXMxZ3R4Vkp4VlJHZEF1a3AwWjlxKzZtV1BPakZXbEhmSHd5SHBKVDdicmVGZDhwMjR4ZFVsUDBOaE4xbjIyeVVzWVhCQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiM2Z2MGpmRHhIaEgya20zQ3padUZjN1JIN1ZnVUxWaEtHU2U0aENrdWZMbDVZb0M3OEZGdjd5ZEQ4b1Zod0t6cWRDZHBnTFJtWS9NMzRMRUJpd1h0akE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzg3MzgyODUyOjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc0MDU5NDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMU2dcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxTZy5qc29uIjogIntcImtleURhdGFcIjpcIlNiS25oRktrekJZUWNjQmZwK0tHRHJvL2plMHZaSlVnSTFsM3BaUkJOaUU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjkyNjE4ODk5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTQ5ODMxOTIwNDJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "k29",
  packname: process.env.PACK_NAME || "k29pro",
  botname : process.env.BOT_NAME  || "k29promax",
  ownername:process.env.OWNER_NAME|| "k29",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
