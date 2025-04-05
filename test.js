const { encrypt, decrypt } = require('./script');

const payload = { username: 'student1', role: 'admin' };

const token = encrypt(payload);
console.log('Encrypted Token:', token);

const data = decrypt(token);
console.log('Decrypted Payload:', data);

if (data.username === 'student1' && data.role === 'admin') {
  console.log('Success');
} else {
  console.log('Try again');
}
