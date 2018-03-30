const charset = require('./charset').map((entry, index) => [dec2bin(index), entry]);

function dec2bin(dec) {
    let binaryString = (dec >>> 0).toString(2);
    let additionalZeros = '';
    for (let i = 0; i < 8 - binaryString.length; i++) {
        additionalZeros = '0' + additionalZeros;
    }
    return additionalZeros + binaryString
}

class JsonCrypter {
    constructor(password, charset) {
        this.charset = charset;
        this.password = password;
        this.getBinaryByString = this.getBinaryByString.bind(this);
        this.getStringByBinary = this.getStringByBinary.bind(this);
        this.cryptInvert = this.cryptInvert.bind(this);
        
    }

    getBinaryByString(string) {
        return this.convertArrayToOneString(
            Array.prototype.map.call(string, character => {
                return this.charset.find(element => element[1] === character)[0]
            })
        )
    }

    getStringByBinary(binary) {
        let binarySplit = binary.split('');
        let buffer = '';
        let binaryData = []
        for (let i = 0; i < binarySplit.length / 8; i++) {
            buffer = '';
            for (let ii = 0; ii < 8; ii++) {
                buffer += binarySplit[i * 8 + ii];
            }
            binaryData.push(buffer);
        }
        return this.convertArrayToOneString(binaryData.map(binaryElement => {
            return this.charset.find(element => element[0] === binaryElement)[1]
        }))
    }

    convertArrayToOneString(array) {
        let string = '';
        array.forEach(element => {
            string += element;
        });
        return string;
    }

    cryptInvert(cryptThisString) {
        let cryptThisStringBinary = this.getBinaryByString(cryptThisString)
        let passwordBinary = this.getBinaryByString(this.password);

        let passwordIndex = -1;
        let invertedData = Array.prototype.map.call(cryptThisStringBinary, character => {
            passwordIndex++;
            if (passwordIndex >= passwordBinary.length) {
                passwordIndex = 0;
            }
            if (passwordBinary[passwordIndex] === '1') {
                if (character === '0') {
                    return '1';
                } else {
                    return '0';
                }
            } else {
                return character;
            }
        })
        return this.getStringByBinary(this.convertArrayToOneString(invertedData));
    }

    cryptWith(JsonObj) {
        return this.cryptInvert(JSON.stringify(JsonObj));
    }

    getEncrypted(encryptThisString) {
        try {
            return JSON.parse(this.cryptInvert(encryptThisString));    
        } catch (e) {
            return false;
        }
    }
}

module.exports = JsonCrypter;