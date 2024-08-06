// ต้องติดตั้ง Node ก่อนกับ npm install node-rsa
const NodeRSA = require('node-rsa');
const key = new NodeRSA({b: 512});

console.log('Public Key:', key.exportKey('public'));
console.log('Private Key:', key.exportKey('private'));

const encrypted = key.encrypt('Jaturaphum suaprakhon 6440200373', 'base64');
console.log('Encrypted:', encrypted);

console.log('Decrypted:', key.decrypt(encrypted, 'utf8'));
