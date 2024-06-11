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


global.SESSION_ID = process.env.SESSION_ID ||  ""  //SUHAIL_19_40_06_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc4LFxuICAgICAgICA4NixcbiAgICAgICAgMTMsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDc2LFxuICAgICAgICA5NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODAsXG4gICAgICAgIDYwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA0MixcbiAgICAgICAgMzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDY4LFxuICAgICAgICA1MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzYsXG4gICAgICAgIDczLFxuICAgICAgICAxMTQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2NixcbiAgICAgICAgNixcbiAgICAgICAgNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIxLFxuICAgICAgICA3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjIyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTExLFxuICAgICAgICA4NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA4OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDgzLFxuICAgICAgICAxODIsXG4gICAgICAgIDczLFxuICAgICAgICAxNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTcsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1LFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODgsXG4gICAgICAgIDMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTksXG4gICAgICAgIDI5LFxuICAgICAgICA3NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDkxLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NixcbiAgICAgICAgOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDgyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgODQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDU5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzLFxuICAgICAgICA5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTksXG4gICAgICAgIDc3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDUzLFxuICAgICAgICA0NixcbiAgICAgICAgMjQyLFxuICAgICAgICAyNixcbiAgICAgICAgMTk5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDMsXG4gICAgICAgIDYyLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTbmQ5WDVQanJ6T2pFeTQzOEJLZk8zaXltRzkzd2R6NDhHU3p0RkZxVDFZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFTERodE9iclFzYXNBTllnekFLLUhRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM3MmNkMDY3LTBmZmQtNDE5MC04NjQ4LTM0MTQ5MWRhMmNjZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjEsXG4gICAgICAyMDMsXG4gICAgICA4MCxcbiAgICAgIDIwLFxuICAgICAgMTI3LFxuICAgICAgMjAxLFxuICAgICAgMTkxLFxuICAgICAgMTIzLFxuICAgICAgMTgwLFxuICAgICAgMjMxLFxuICAgICAgMzQsXG4gICAgICAxMTgsXG4gICAgICAyMDcsXG4gICAgICAxNjksXG4gICAgICA2OSxcbiAgICAgIDY4LFxuICAgICAgNSxcbiAgICAgIDExOSxcbiAgICAgIDM4LFxuICAgICAgMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTMsXG4gICAgICAxNjYsXG4gICAgICAyMzksXG4gICAgICAyMjAsXG4gICAgICAzMSxcbiAgICAgIDE5MixcbiAgICAgIDIwMSxcbiAgICAgIDM5LFxuICAgICAgNzgsXG4gICAgICAyMTksXG4gICAgICAyNTUsXG4gICAgICAzMyxcbiAgICAgIDE3MyxcbiAgICAgIDExMSxcbiAgICAgIDkyLFxuICAgICAgNDEsXG4gICAgICA4NSxcbiAgICAgIDcwLFxuICAgICAgMTc1LFxuICAgICAgNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMTQyUzRMVjVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxNzY3MjA2ODozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTgxMjY5MTc4NjQ2NjcxOjMzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lMMWxxNEhFSi9Rb3JNR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiai9tS3pxck82a3ZiT3FXQkdVR2xmWkVVaU5NRUxISGNGV3pnbDc2UVNuQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJlekJvbzZpUUMrTTNpTmhmNTc3MkJVYjJwSCs1alNnVGlpajkwK2dGRTB6TFFkMWVTYjFmZ3VLcHBOSUpYWnNxeFJaYWc1QmN0L3R6NVlBMW5FL3lCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMQWJ5QytXSk5ZYmt6Y1p1UHIrS0JYMjhWa09RQlNRRk9TY1lEZXh6YlJZWFV5V1hrazNHWk1Ed01zOFhaSjRnTk8rQWxIZ2NrV2N3aStLWjRjeFBBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTc2NzIwNjg6MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODEzNDgxOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9ZaVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT1lpLmpzb24iOiAie1wia2V5RGF0YVwiOlwiek5IZ21WU2xleENUaisvR1ZmWkh6N0FoeFRraUtkTERxd3Biblk2S0FZQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTc1ODkyNjEwLFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwxLDMsNCw1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgxMzI1MzM4MzdcIn0iCn0= PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "k29promax",


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
