require('dotenv').config();

function mapPresence(val) {
    const mapping = {
        typing: 'composing',
        online: 'available',
        recording: 'recording',
        paused: 'paused',
        offline: 'unavailable'
    };
    return mapping[val?.toLowerCase()?.trim()] || 'paused';
}

module.exports = {
    prefixes: process.env.PREFIX
        ? process.env.PREFIX.split(',').map(p => p.trim())
        : ['.'],

    NUMBER: process.env.YOUR_NUMBER || '242041029122',
    MODE: (process.env.MODE || 'private').toLowerCase().trim(),
    WARN_LIMIT: process.env.WARNINGS || '3',
    ON: process.env.YOUR_NAME || 'FLASH-MD',
    ANTICALL: process.env.ANTICALL || 'on',
    ADM: process.env.ANTIDELETE || 'on',
    AR: process.env.AUTO_REACTION || 'off',

    AUTO_VIEW_STATUS: process.env.AUTO_READ_STATUS === 'on',
    AUTO_LIKE: process.env.AUTO_LIKE === 'on',
    AUTO_READ_MESSAGES: process.env.AUTO_READ_DM === 'on',
    HEROKU_API_KEY: process.env.HEROKU_API_KEY,
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
    sessionBase64: process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0tOTjRxNHJyTVM2QWlhaVFRTXJtMndQcFAxQnB2R0s1TnFnUERza0FXZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1NOWFU4UXRvRk1iU3JTSnFPNHErN045Z0JzV08yNDRUM3IzbHNSY2dtRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTT1ljMFRJKytCUTZGTEdiWTZ2R3M4WXZ5NnE2K3lwa2dPTGpaWnJEZGxjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6V0FoS29uUDNhQVJNelBXc3MrL2hQOTIvODA5QUdVSzlyMWJPMnlmQVQwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVBSnN4b3QrUG9zOHhGU29BdWkwSCtsTkJuL0dTZHlWbFMyVWxzUGxSSFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkU3b1JDS3dSZHB5SkN5T1pqeVBpVjJPQ3lPQ3ZNZitiWXdrVWFGQzVrbjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU5KTm1seWJSODZUQTdpdUpoUERPSWx6TkFHTHk2bVpLaitjSVdVQ3NVQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0YxNDVSUlJMTUtjSkp5cnNwd2pjeFFSNGRtZGxBOEJQZ09sMHkyUUFVcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImsyUDQ0V2hVT0Vsa1R5S0tSYWVqek4vdUJ2WnlLSE1NRU9oVDlQcEZVSlplWUx6M3pkMzJKOGVna0w1Mk1ySUJQTjNPSE5WdnEzb3ZjME9LbmI1NWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIwLCJhZHZTZWNyZXRLZXkiOiIzTmJSRlpwMVlwRnZxZktIR3lqdmpEWnFxeHVkeVkxbHROWE8xYUFBQTFzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMywiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6ZmFsc2UsImxhc3RQcm9wSGFzaCI6Im5tM0JiIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVRQXhBQSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTXpPZ0xNRUVQUHYyY2NHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiU3N4Y1NlWW5tZDlyNHlxNzZqY3pnMHgxOXVKNVlqS21IVFpwV3JvTGlpRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoieWE5NFFpNGh2S3VzRnhLOU8yVlNQMTZYdzJmNUNiSzNhV2szWTVrN1BqSW1uam40aWxoNUw4dWpISEtxNjR2MlVyc01iOC9Pd0R1d1F6VkE1QXFjQVE9PSIsImRldmljZVNpZ25hdHVyZSI6IkNNaXJmWGk0RnY1TmR1RGZKbEdGSE4yNEVWQzdVNkdaUGFqdWk5WmgrT3JlMHkrVkRjRzJFS0g0d3FrVXNRVEJ6S3JKMldQSmtLcXQ5ajY0N2s2cWpBPT0ifSwibWUiOnsiaWQiOiIyNDIwNDEwMjkxMjI6NzNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQ3Vyc2kiLCJsaWQiOiI4OTc2OTg1MDA2MDk5OjczQGxpZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNDIwNDEwMjkxMjI6NzNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVXJNWEVubUo1bmZhK01xdStvM000Tk1kZmJpZVdJeXBoMDJhVnE2QzRvaCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MDk4MzAzNCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPMXYifQ==',
    timezone: 'Africa/Nairobi',

    USER_LID: process.env.YOUR_LID, 

    PRESENCE_DM: mapPresence(process.env.PRESENCE_DM || 'typing'),
    PRESENCE_GROUP: mapPresence(process.env.PRESENCE_GROUP || 'recording'),

    mapPresence
};
