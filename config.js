import 'dotenv/config';
const _prefixes = process.env.PREFIXES ? process.env.PREFIXES.split(',') : ['.', '!', '/', '#'];
const config = {
    // Bot Identity
    botName: process.env.BOT_NAME || 'MEGA-MD',
    botOwner: process.env.BOT_OWNER || 'Qasim Ali',
    ownerNumber: process.env.OWNER_NUMBER || '923051391007',
    author: process.env.AUTHOR || 'GlobalTechInfo',
    packname: process.env.PACKNAME || 'MEGA-MD',
    description: process.env.DESCRIPTION || 'High performance multi-device WhatsApp bot',
    version: '6.0.0',
    // Bot Config
    prefixes: _prefixes,
    prefix: _prefixes[0],
    commandMode: process.env.COMMAND_MODE || 'public',
    timeZone: process.env.TIMEZONE || 'Asia/Karachi',
    // Links
    channelLink: process.env.CHANNEL_LINK || 'https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07',
    updateZipUrl: process.env.UPDATE_URL || 'https://github.com/GlobalTechInfo/MEGA-MD/archive/refs/heads/main.zip',
    ytChannel: process.env.YT_CHANNEL || 'GlobalTechInfo',
    // Session
    sessionId: process.env.SESSION_ID || 'CYBER PANDA MD~H4sIAAAAAAAAA5VW227bOBD9F72GaESKFMUABdaxXedSN06T1m0WfWAk2tZGkRyJdusU+fc9Q+VSLLDdLBLDEjmcy5lzxvwZ1U3ZuVO3iw5+Ruu23Frv6NHv1viODjeLhWsjFhXW2+jgTyEzpjnjmWKGcZUynirGdcYExyfOsCNZEjOYcYNdgW+hmUmYEDgGgxhHOBOw4QInGIxiPMDQ9N4U7BLNspQZ8+2BRevNdVXmv8kp00zCf8aQidRwlSA2730JliIDlVCwjHJC1pIJyVkq8YSVVDNl6GgmkAmykpKlKTJToT6JFYXcsJkxyb89UEa2bMt6OV6v3K1rbQX0Zlh6HYIcOVE6lEXch08RPiSWhJSAb8pSYKJgE5ASAuEljAhnjUyAVJIy1IpiEkaZa7zGYUczLZmJXwUdnedChACATST4wCvlRm8IxRFdxaE/GjuxCf1BDUL27ULeGfqNHnBqJzptCDnTt9jEDKep7xz+TY9fVy5rVxwXrval372ee/BCmCQUHCUnyD0FgTgDFhyVhKCIBBiRpEAlPEUZcRLy5tR/vANhMkSBsKUiqOmceKMCr7mRoTgCWahXwagVA2t0QmQj4hAIoWD6D+5VSJlSCRQkUvInAemQdaoDBQXVQkUIwpQzTaXBiwqvsaSO/ALirH3S7s3/ISERX/Y9TNBOQZ3SQSCJCVCSZKgSskMGQJ3HOvCDkKKSwEXwLEvCOCCIe/nDHfGQEOZpUB2Q5K8jI6KEvqG3GBbqUYQkRnIFl0EUKtBPmiD0oCGSRZwGnvYNx16vc7BSUF9oOAE/pannpKRAiOQZSOs37W9FmyhyQzOMDpMQU6J1GgQCQhLROQhPzaRGIVn8oRgyT2jxkYCwQUsDN7kKsiU9EddMAC/AHSYhp3RpNVOhPFJi4GzaS5Pomoa5y4EJEZeMcYyjIzTxAJ4g56RoQZY9tFoExYbpQmhQFOor9QgkOi6iA47H1i3LzrfWl00d1sCMyBbbC5e3zgfSRe3dZHA9syer1XK+zYplfnT3dX1U5uJL85ev8j21v6gmZ/w0WWRvAea6bXLXda44guem3U3xYpeuA8DfWFS7H76nM4UDFNGibDv/qd6sq8YWT1x/2rR53mxqf7Gr8yE9oF0H8cuy8x4juqOebmrb5qty64Yr67GysFXnnit0rYNH327c82AfNgWRIP08OZqr6Tkyvw3kKGEYGanTWEACShxI+Uf35jt5tev1m9p5mFbBSuKXL4MgpMkyk5EhrT8850fuCudtWSGhaHh61N5ef5qMp3rFi8FkMpguB8PlIHqp54mkPfDZeLhK9NlO2fHZ3ldfdPr9Rn+c2eNBdjkV8WRgT4vrNtuW9wH4fzqBh3dXpzXX97NCNfvX+/HRlfSj/fH0x2WRDERSxVd31U7VZm/x8cPE7W/uzEUTn3vXbfOTm/nhh92X5ZX/cXJ2//343q7z/Eao0Wx4/paiFW5b5u7XYPXg8HLUqhPfpMupGI/yu/cfvmZnk2Kkt7Om/lzM3+3syu4Op9PL+927k8PP89PiPJ5cpdX59qKS32/4ZXY9HsyPRl/27qfJ3C32RksEe5Jv9fhjUgYyUafodVG6MA9rS/37z871eRO/Yvh9cfE4YP9lNKgwg+g2Qdcaunto09+IxKMcZa9+6Mf8sptk/Q+sCRKmEUI/PWEaYDZB7jgsenXyOFxoaK7ASUpjC3pZV9YvmvYWOdm6aBvwC5xuNsT743rR/O7GhBFG1yW6rpHsK9v5wYueLstb13l7u4bqtTbaxLFUD38D1a+hdSsKAAA=',
    pairingNumber: process.env.PAIRING_NUMBER || '94760220052',
    // Performance
    port: Number(process.env.PORT) || 5000,
    maxStoreMessages: Number(process.env.MAX_STORE_MESSAGES) || 20,
    tempCleanupInterval: Number(process.env.CLEANUP_INTERVAL) || 1 * 60 * 60 * 1000,
    storeWriteInterval: Number(process.env.STORE_WRITE_INTERVAL) || 10000,
    // API Keys
    giphyApiKey: process.env.GIPHY_API_KEY || 'qnl7ssQChTdPjsKta2Ax2LMaGXz303tq',
    removeBgKey: process.env.REMOVEBG_KEY || '',
    // Warn system
    warnCount: 3,
    // External APIs
    APIs: {
        xteam: 'https://api.xteam.xyz',
        dzx: 'https://api.dhamzxploit.my.id',
        lol: 'https://api.lolhuman.xyz',
        violetics: 'https://violetics.pw',
        neoxr: 'https://api.neoxr.my.id',
        zenzapis: 'https://zenzapis.xyz',
        akuari: 'https://api.akuari.my.id',
        akuari2: 'https://apimu.my.id',
        nrtm: 'https://fg-nrtm.ddns.net',
        fgmods: 'https://api-fgmods.ddns.net'
    },
    APIKeys: {
        'https://api.xteam.xyz': 'd90a9e986e18778b',
        'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
        'https://api.neoxr.my.id': process.env.NEOXR_KEY || 'yourkey',
        'https://violetics.pw': 'beta',
        'https://zenzapis.xyz': process.env.ZENZAPIS_KEY || 'yourkey',
        'https://api-fgmods.ddns.net': 'fg-dylux'
    }
};
export default config;
