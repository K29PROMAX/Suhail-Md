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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263787382852";




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
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // SUHAIL_08_02_06_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDUsXG4gICAgICAgIDEzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzLFxuICAgICAgICA4MSxcbiAgICAgICAgODEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODQsXG4gICAgICAgIDgyLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIxLFxuICAgICAgICA0MixcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDczLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjUsXG4gICAgICAgIDE2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAzMyxcbiAgICAgICAgODQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgzLFxuICAgICAgICA3OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk5LFxuICAgICAgICA4NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU3LFxuICAgICAgICA5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA5MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAzLFxuICAgICAgICA2MixcbiAgICAgICAgMTU3LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTUzLFxuICAgICAgICA4NixcbiAgICAgICAgODksXG4gICAgICAgIDk5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgODksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc1LFxuICAgICAgICA2MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDIyMixcbiAgICAgICAgODUsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTksXG4gICAgICAgIDUwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDg0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTExLFxuICAgICAgICA1NixcbiAgICAgICAgMTc1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUxLFxuICAgICAgICA4MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDQsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDgzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwQ20zNmRxNld5ZEhWYXZPUE5XazgzQWk5TzhQeG9PTEhCTmZWTVhqOVdvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJEaHlHVUwwWFIweTFaVVdJNFNMMUdBXCIsXG4gIFwicGhvbmVJZFwiOiBcImY1MzU2Y2M2LTI5ZTUtNGRiNi1hYWRlLTE2YzQ1NDUzOWE0ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTQsXG4gICAgICAxMDgsXG4gICAgICA2OSxcbiAgICAgIDgsXG4gICAgICAyMTksXG4gICAgICAyNDMsXG4gICAgICAxNDIsXG4gICAgICAwLFxuICAgICAgNzksXG4gICAgICAyMzIsXG4gICAgICAxMDQsXG4gICAgICA2NCxcbiAgICAgIDIzNCxcbiAgICAgIDc3LFxuICAgICAgMTczLFxuICAgICAgMTg4LFxuICAgICAgMjQxLFxuICAgICAgMjAxLFxuICAgICAgMTg1LFxuICAgICAgMTM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMxLFxuICAgICAgNDQsXG4gICAgICAyNTQsXG4gICAgICAxNTIsXG4gICAgICAyMDksXG4gICAgICAxNjUsXG4gICAgICA1MixcbiAgICAgIDIxOSxcbiAgICAgIDAsXG4gICAgICAxMDUsXG4gICAgICA1NixcbiAgICAgIDU5LFxuICAgICAgMTkyLFxuICAgICAgMTQzLFxuICAgICAgMjIzLFxuICAgICAgMjQ2LFxuICAgICAgMjM3LFxuICAgICAgODMsXG4gICAgICAxODcsXG4gICAgICAxMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMzdCTjVKOEpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2Mzc4NzM4Mjg1MjoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIksyOVwiLFxuICAgIFwibGlkXCI6IFwiMzgzNjI5ODM0ODU1MDU6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTm4rbUtVRkVKM0RsYk1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIrdmlmOWdyVXloR2NXTTJGaEhNeVRqYlVKNCtSZml2SFo5eTQ4YWF2YTE0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjRYS1BUSytFdEpWTUlSK3VNS2RLMGMxKzUvMDMyM2ZRWGRvV0t6K0pFWmlUbHJMMXU3cUxUc00rSkRzQ09iZU5ld3N2R2cyUkM5eXpWY3hXK21jQkRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjAvSXNlMTlqTkFsZzJ3UjhRWG9aV2JOZVczZURzL3R3L2hvVnp5VksxdS8xVy9IWDF2LzNUK0pyVFoyUFNNYXpLWHFYQ0dRWUFLQ2I4elNITkxwUERRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc4NzM4Mjg1MjoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzkyMDE2MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURTRFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRFNELmpzb24iOiAie1wia2V5RGF0YVwiOlwiQktMcnZqcG81S09tUHFjKzR0L0w2S0ZqSUI0RG1CMzhWazNEWnc4Tmxoaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDIwMTgxMzM3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTc5MjAxNjU5NDNcIn0iCn0=PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
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
