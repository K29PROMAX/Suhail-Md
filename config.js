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


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PSUHAIL_20_08_06_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDUsXG4gICAgICAgIDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQxLFxuICAgICAgICA1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDU2LFxuICAgICAgICA5MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjExLFxuICAgICAgICA3NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcwLFxuICAgICAgICA0MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDYzLFxuICAgICAgICAzLFxuICAgICAgICAxMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY5LFxuICAgICAgICA5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAwLFxuICAgICAgICA3MixcbiAgICAgICAgNjgsXG4gICAgICAgIDI2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA5MSxcbiAgICAgICAgNTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI4LFxuICAgICAgICA4OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA1LFxuICAgICAgICA5MixcbiAgICAgICAgMjI4LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxODksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDMyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTAyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDUyLFxuICAgICAgICAxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgzLFxuICAgICAgICAzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDcwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTQxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICA2MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDksXG4gICAgICAgIDExOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJublhWMHFUVldGQnpUUzFlRWw1VFVTUUc4Wlp3dUF0M0NzbjZJZ3ZoS2FFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MzcxNzY3MjA2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjE3RUY4QjRDQTRFNDQ2NDE3RjM4MUZCMUEzODc4OENcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4MTM2NTE5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjBfVmozZkItU2V1Vjk5TzVnOS1lZFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTAwYTRlZmMtNmIwMy00MDA0LTg5MzItOTE4ZDlmYmE4OGE0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyOSxcbiAgICAgIDg2LFxuICAgICAgNTEsXG4gICAgICA4NixcbiAgICAgIDg3LFxuICAgICAgODYsXG4gICAgICAxNTksXG4gICAgICAxNjgsXG4gICAgICAyMDMsXG4gICAgICA4NixcbiAgICAgIDIxMCxcbiAgICAgIDE3MCxcbiAgICAgIDAsXG4gICAgICAxMjYsXG4gICAgICAyMCxcbiAgICAgIDExOCxcbiAgICAgIDExNCxcbiAgICAgIDI2LFxuICAgICAgODgsXG4gICAgICA1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxLFxuICAgICAgMjI3LFxuICAgICAgMjM0LFxuICAgICAgOTcsXG4gICAgICA3MSxcbiAgICAgIDI0NCxcbiAgICAgIDI5LFxuICAgICAgMTE1LFxuICAgICAgMzAsXG4gICAgICAxNDQsXG4gICAgICAxMDUsXG4gICAgICAxMTksXG4gICAgICAxNDMsXG4gICAgICAyMjUsXG4gICAgICAxOTksXG4gICAgICA3OCxcbiAgICAgIDE5OSxcbiAgICAgIDE5NixcbiAgICAgIDI1MCxcbiAgICAgIDE0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxSkpTTVNNOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE3NjcyMDY4OjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODEyNjkxNzg2NDY2NzE6MzRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiSzI5IFBST01BWCDwn6SWXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUwxbHE0SEVML2Rvck1HR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqL21LenFyTzZrdmJPcVdCR1VHbGZaRVVpTk1FTEhIY0ZXemdsNzZRU25BPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInpta3JYeHFqVGRmSFZaN3k1KzJsM1ZacTdheVVndXI1akFySUFScS9ObkVqNjE2N2pLb0IrakE0K3RITFNOTWxnRk1IeTN1VDNiOVQ5TWl4OXFMMUNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkt3WkpnQzdnUlF6Qzh5akRmdVJibVUvN1VsMTk3OS9wamFyUXhUOHRIMWhBb2E3MmlHREFyZlp6SitXU3RYWVdJL2JCY2NDS1RrVkVBMXFZdG5sRGl3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxNzY3MjA2ODozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4MTM2NTE1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT1lpXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPWWkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ6TkhnbVZTbGV4Q1RqKy9HVmZaSHo3QWh4VGtpS2RMRHF3cGJuWTZLQVlBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NzU4OTI2MTAsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMyw0LDVdfSxcInRpbWVzdGFtcFwiOlwiMTcxODEzMjUzMzgzN1wifSIKfQ==UT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
