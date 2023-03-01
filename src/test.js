const CORE = require("@solana-suite/core");
const SHARED = require("@solana-suite/shared");
const owner = SHARED.KeypairAccount.create();
console.log('# owner: ', owner.pubkey);

CORE.Airdrop.request();