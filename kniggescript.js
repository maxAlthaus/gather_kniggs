'use strict';

// Alle globalen Variablen und Arrays auflisten.
const wrapper = document.querySelector('.wrapper');
const btn_box = document.querySelector('.btn_cont_log');
const code_dec_in = document.querySelector('#code_dec');
const code_enc_in = document.querySelector('#code_enc');
const code_key_dec = document.querySelector('#code_key_dec');
const code_key_enc = document.querySelector('#code_key_enc');
const out_dec = document.querySelector('.output_dec');
const out_enc = document.querySelector('.output_enc');
const btn_dec = document.querySelector('#btn_dec');
const btn_enc = document.querySelector('#btn_enc');
const btn_power_off = document.querySelector('#logBtn');
const pw_sign = document.querySelector('.pw_sign');
const last = document.querySelector('h2');

// ***********************************************************************************     Caesars Cipher Encryption       ****************************************************

let caesar_cipher = (eingabe, schluessel) => {
    if (schluessel < 0)
        return cesar_cipher(eingabe, schluessel + 26);
    // variable für das Ergebnis
    let ausgabe = '';
    // Über den String itterieren
    for (let i = 0; i < eingabe.length; i++) {
        // Das Zeichen bekommen, dass wir in das Ergebnis hinzufügen
        let c = eingabe[i];
        // Check, ob es ein Buchstabe ist
        if (c.match(/[a-z]/i)) {
            // Den Buchstaben-Code holen
            let code = eingabe.charCodeAt(i);
            // Großbuchstaben
        if ((code >= 65) && (code <= 90))
            c = String.fromCharCode(((code - 65 + schluessel) % 26) + 65);
            // Kleinbuchstaben
        else if ((code >= 97) && (code <= 122))
            c = String.fromCharCode(((code - 97 + schluessel) % 26) + 97);
        }
        // Zeichen hinzufügen
        ausgabe += c;
    }
    // Zurückgeben des Ergebnisses
    return ausgabe;
};

// *************************************************************************************    Entschlüsselung der Codes    ******************************************************

let casear_decrypt = (eingabe, schluessel) => {
    if(schluessel < 0)
        return casear_decrypt(eingabe, schluessel + 26);
    let ausgabe = '';
    for (let i = 0; i < eingabe.length; i++) {
        let c = eingabe[i];
        if (c.match(/[a-z]/i)) {
            let code = eingabe.charCodeAt(i);
            if ((code >= 65) && (code <= 90))
                c = String.fromCharCode(((code - 90 - schluessel) % 26) + 90);
            else if ((code >= 97) && (code <= 122))
                c = String.fromCharCode(((code - 122 - schluessel) % 26) + 122);
        }
        ausgabe += c;
    }
  return ausgabe;
};


btn_dec.addEventListener('click', () =>{
    let eingabe = code_dec_in.value;
    let schluessel = parseInt(code_key_dec.value);
    let result = casear_decrypt(eingabe, schluessel);
    out_dec.innerHTML = `${result}`;
});

btn_enc.addEventListener('click', () => {
    let eingabe = code_enc_in.value;
    let schluessel = parseInt(code_key_enc.value);
    let result = caesar_cipher(eingabe, schluessel);
    out_enc.innerHTML = `${result}`;
});

let powerOff = () => {
    wrapper.classList.toggle('hide');
    btn_box.classList.toggle('hide');
    pw_sign.classList.toggle('hide');
    if(pw_sign.className != 'hide'){
        last.classList.toggle('typewriter');
    }
}

btn_power_off.addEventListener('click', () => powerOff());