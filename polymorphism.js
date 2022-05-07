class Mesaj {
    constructor(msg){
        this.mesaj=msg
    }
    gonder = () => {
        console.log(`${this.mesaj} gönderildi`);
    }
};

class Email {
    constructor(msg){
        this.mesaj=msg
    }
    gonder = () => {
        console.log(`${this.mesaj} gönderildi`);
    }
};

class Sms {
    constructor(msg){
        this.mesaj=msg
    }
    gonder = () => {
        console.log(`${this.mesaj} gönderildi`);
    }
};

const mail = new Email('mail');
const sms = new Sms('kisa mesaj');