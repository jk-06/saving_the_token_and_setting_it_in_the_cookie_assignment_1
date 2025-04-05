const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const JWT_SECRET = 'my_jwt_secret';
const ENC_KEY = '12345678901234567890123456789012'; 
const IV = '1234567890123456'; 

const encrypt = (payload) => {
  // encrypt the payload and return token
  const cipher = crypto.createCipheriv('aes-256-cbc', ENC_KEY, IV);
  let encrypted = cipher.update(JSON.stringify(payload), 'utf8', 'hex');
  encrypted += cipher.final('hex');
  const token = jwt.sign({ data: encrypted }, JWT_SECRET);
  return token;
}

const decrypt = (token) => {
  // return decoded payload
  const decoded = jwt.verify(token, JWT_SECRET);
  const decipher = crypto.createDecipheriv('aes-256-cbc', ENC_KEY, IV);
  let decrypted = decipher.update(decoded.data, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return JSON.parse(decrypted);
}

module.exports = {
  encrypt,
  decrypt
}
