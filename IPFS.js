const IPFS = require('ipfs-core');
const infura = require('ipfs-http-client');

const ipfs = await IPFS.create();

const infuraOptions = {
  url: 'https://ipfs.infura.io:5001/api/v0/',
  headers: {
    authorization: 'Bearer VOTRE_CLE_SECRETE_INFURA'
  }
};

const ipfsInfura = infura(infuraOptions);

const filesAdded = await ipfsInfura.add({path: 'nom_du_fichier', content: contenu_du_fichier});
const ipfsUrl = `https://ipfs.infura.io/ipfs/${filesAdded.cid.toString()}`;

console.log(`IPFS URL: ${ipfsUrl}`);

