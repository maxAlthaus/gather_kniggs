'use strict';

// Alle globalen Variablen und Arrays auflisten.
// Zugangs-Sektion
const body = document.querySelector('body');
const logo = document.querySelector('#logo');
const typewr = document.querySelector('.typewriter');
const c_container = document.querySelector('.container');
const c_input = document.querySelector('.code-input');
const c_btn = document.querySelector('.code-btn');
// Trainingsinput-Sektion
const infobox = document.querySelector('.infobox');
const info_img = document.querySelector('.info_img');
const weiter_btn = document.querySelector('#weiter');
// Übungs-Sektion
const wrapper1 = document.querySelector('#wrapper1');
const quiz_img = document.querySelector('.quiz_img');
const quiz = document.querySelector('.question');
// Ergebnis und Log Out
const wrapper2 = document.querySelector('#wrapper2');
const bild_ende = document.querySelector('.bild_ende');
const slider = document.querySelector('#slider');
const result = document.querySelector('.ergebnis');
const result_code = document.querySelector('.neuer_code');
const jc_hint = document.querySelector('.hinweis');
const logBtn = document.querySelector('#logBtn');

// Alert Popup

let popup_vis = document.querySelector('.popup_wrapper');
let popup_text = document.querySelector('.popup_text');
let popup_btn = document.querySelector('.btn_popup');

let codewort;
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');

let arr_puzzle_dec = ['Es gibt', 'keine', 'zweite', 'Chance', 'für einen', 'ersten', 'Eindruck'];
let arr_puzz_enc = [];
let arr_master = ['Walter', 'Claudia', 'PiaYvonne', 'Franziska', 'HeikeS', 'Monika', 'AnnaLena', 'LenaKuehnlein', 'Marlene', 'Phillipp', 'Maximilian', 'BalthasarMax', 'Watzlawick', 'SimonSinek'];
let arr_enc = [];
let arr_steps = [document.querySelector('#stage1'), document.querySelector('#stage2'), document.querySelector('#stage3'), document.querySelector('#stage4'), document.querySelector('#stage5'), document.querySelector('#stage6'), document.querySelector('#stage7')];
let arr_imgs = ['./img/kleidung.png', './img/aufmerksamkeit.png', './img/begruessung.png', './img/smalltalk.png', './img/setzen.png', './img/unguenstigesit.png', './img/essen.png'];
let arr_icons = ['./img/kleidung_icon.png', './img/aufmerksam_icon.png', './img/greeting_icon.png', './img/setzen_icon.png', './img/small_talk_icon.png', './img/unguenstig_icon.png', './img/essen_icon.png',];
let arr_kniggs = ['./img/kniggs1_icon.png', './img/kniggs2_icon.png', './img/kniggs3_icon.png', './img/kniggs4_icon.png'];
let arr_alerts = ['Das ist nicht förderlich für Dein Business. Hast Du auch noch eine andere Lösung?',
'Kann man machen...und dann das Geschäft versemmeln. Noch einmal bitte.',
'Sehr ungünstige Lösung. Versuche es noch einmal.',
'Oh je. Das wird eine Weile dauern, bis die grundlegenden Manieren erlernt werden. Na schön, versuch es noch einmal.',
'Wenn Du so Geschäfte machen willst, hoffe ich Du hast noch einen Nebenjob, der Dich ernährt.',
'Dieses Geschäft geht gerade winkend an Dir vorbei zur Marktbegleitung. Neuer Versuch, neues Glück.',
'Echt jetzt?',
'Kannst Du singen? Dann versuche das. Diesen Test hast Du nämlich vergeigt. Noch einmal bitte.',
'Könnte dieses Sicherheitssystem fühlen, würde es einen Herzinfarkt bekommen. Versuche eine andere Lösung.',
'Aye, das sind die besten Manieren, die ich je erlebt habe...wären wir auf einem Piratenschiff. ARRRRR! Los, noch ein Versuch, Mate!'];

const zufallszahl = () => {
    let min = 0;
    let max = arr_alerts.length-1;
    return Math.floor(Math.random() * ((max - min) + 1) + min);
};

let alert_show = () => {
    popup_vis.classList.toggle('hide');
    popup_text.innerHTML = arr_alerts[zufallszahl()];
}

let alert_hide = () => popup_vis.classList.toggle('hide');

popup_btn.addEventListener('click', () => alert_hide());

let arr_quiz_fragen = [
    'Ein Meeting steht an. Teilnehmende auf Kundenseite sind eine Dir unbekannte CIO, ein Admin der IT-Abteilung und jemand aus der Technik. Welche Kleidung trägst Du für das Meeting?',
    'Was tust Du, um wirklich aufmerksam und auf den Termin konzentriert zu sein?',
    'Der erste Eindruck zählt: Wie verhälst Du Dich bei der Begrüßung?',
    'Welche Themen eignen sich für Small Talk?',
    'Platz nehmen: Was beachtest Du alles?',
    'Dein:e Kund:in / ASPA:in tritt mit Schwung in einen Fettnapf. Was tust Du?',
    'Wie verhälst Du dich beim Geschäftsessen so, dass Du einen guten Eindruck hinterlässt?'
];

let arr_answers = [
    [
        {
            antwort : 'Businesslook. Orientiert an der ranghöchsten Position. Lieber eine Stufe höher, als zu leger.',
            res : true
        }, 
        {
            antwort : 'Weißes Hemd/Bluse und die Jogginghose im Anzugstil. Das ist modern.',
            res : false  
        },
        {
            antwort : 'Ich hab eher mit dem Admin zu tun und dem Techniker. Da muss ich leger hin gehen.',
            res : false  
        },
        {
            antwort : 'Businesslook engt mich nur ein. Und ich will ja performen und nicht posen.',
            res : false   
        }
    ],
    [
        {
            antwort: 'Wenn abgesprochen ist, dass ich parallel etwas machen muss, ist das durchaus vertretbar.',
            res : false
        },
        {   
            antwort: 'Glücksfall Video-Call: Kamera aus, Joggers an, wirklich wichtige Sachen erledigen.',
            res : false
        },
        {
            antwort:'Mein Outlook sagt „nicht verfügbar“, mein Handy ist aus und alle nicht für das Meeting notwendigen Anwendungen sind auf allen Devices deaktiviert.',
            res : true
        },
        {
            antwort: 'Multitasking, Baby! Wer Mails später als sofort beantwortet, verliert Geld und… oh, sorry, mein Phone. Ich geh mal ran, ja?',
            res: true
        }
    ],
    [
        {
            antwort : 'Ich bin auf die Minute pünktlich und gebe allen der Reihe nach die Hand.',
            res : false
        },
        {
            antwort : 'Ich bin etwas eher da und begrüße mit Gespür für den gewünschten Abstand nach der Regel „Hierarchie vor Alter“',
            res : true
        },
        {
            antwort : 'Vier Minuten zu spät? Das gleiche ich ganz locker mit einem fröhlichen „Moin allerseits!“ aus.',
            res : false
        },
        {
            antwort : 'Rang und Namen sind doch nur bürgerliche Kategorien. Ich habe das im Gefühl, wer meinen sanften Händedruck zuerst spüren will.',
            res : false
        }
    ],
    [
        {
            antwort : 'Wetter, Politik und Reisen.',
            res : false
        },
        {
            antwort : 'Lieblingsliteratur, Krankheiten und religiöse Überzeugungen.',
            res : false
        },
        {
            antwort : 'Kundenfinanzen, Dein Hölltenkater im Business Review und Details aus der Unterhose.',
            res : false
        },
        {
            antwort : 'Hobbys, aktuelle Projekte und Essen.',
            res : true
        }
    ],
    [
        {
            antwort : 'Wenn die Gesprächspartner kommen gemeinsam über Eck Platz nehmen, Jackett öffnen, bei Kostüm die geschlossenen Beine zur Seite neigen.',
            res : true
        },
        {
            antwort : 'Wenn die Gesprächspartner kommen gegenüber Platz nehmen, Jackett zulassen, bei Kostüm die geschlossenen Beine nach vorne strecken.',
            res : false
        },
        {
            antwort : 'Wenn die Gesprächspartner kommen noch warten, bis mir ein Platz angeboten wird und es sich dann so richtig bequem machen.',
            res : false
        },
        {
            antwort : '„Ah, Herr XY, ich hab mich schonmal hier ans Kopfende gesetzt, Sie wissen ja, nie mit dem Rücken zur Tür, haha!“ ',
            res : false
        }
    ],
    [
        {
            antwort : 'Ich lockere die Stimmung mit ein paar Floskeln und zur Not einem Witz auf – Humor hilft immer.',
            res : false
        },
        {
            antwort : '„Das ist doch jedem schon mal passiert. Da müssen Sie doch nicht gleich rot werden, morgen ist das wieder vergessen!“',
            res : false
        },
        {
            antwort : 'Wer Schwäche zeigt, verliert. Das koste ich so lange aus, bis er völlig die Fassung verliert, das werfe ich ihm dann vor und lasse ihn endlich als den inkompetenten Gartenzwerg dastehen, der er ist.',
            res : false
        },
        {
            antwort : 'Ich wahre Contenance, helfe ihm wenn möglich aus der Situation und hebe mir Kritik für später unter vier Augen auf.',
            res : true
        }
    ],
    [
        {
            antwort : 'Beim Alkoholkonsum orientiere ich mich an den Gastgebern. Wer Geschäfte machen will, muss mithalten können.',
            res : false
        },
        {
            antwort : `Nach dem Filetsteak rülpse ich und sage: „Frei nach Johann Wolfgang Schiller: Alles raus, was keine Miete zahlt, sonst war's nicht lecker!“`,
            res : false
        },
        {
            antwort : 'Ich bestelle ein Gericht der mittleren Preiskategorie, das ich souverän mit Messer und Gabel essen kann.',
            res : true
        },
        {
            antwort : 'Der Burger ist zwar kaum in der Hand zu halten, aber immer noch zeitgeistig und mit extra Käse. Zack, bestellt',
            res : false
        }
    ]
];

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

// *************************************************** Verschlüsseln des Lösungswortes und speichern in einem Array ***********************************************************

for(let i = 0; i < arr_puzzle_dec.length; i++){
    arr_puzz_enc.push(caesar_cipher(arr_puzzle_dec[i], 7));
}

// **************************************************   Code korrekt eingegeben? Ja, dann wird der Button grün, sonst rot, Enter-Taste oder Button benutzt   *****************
c_btn.addEventListener('click', () => {
    codewort = c_input.value;
    for( let i = 0; i < arr_enc.length; i++){
        if (c_input.value == arr_enc[i]){
            if(i % 2 == 0){
                c_btn.style.backgroundColor = "green";
                setTimeout(function(){
                    c_btn.style.backgroundColor = "#100a25";
                },2000);
                setTimeout(function(){
                    show_infobox((i+2)/2);
                },2000);
                break;
            } else {
                c_btn.style.backgroundColor = "green";
                setTimeout(function(){
                    c_btn.style.backgroundColor = "#100a25";
                },2000);
                setTimeout(function(){
                    show_infobox((i+1)/2);
                },2000);
                break;
            }
        } else {
            c_btn.style.backgroundColor = "red";
            setTimeout(function(){
                c_btn.style.backgroundColor = "#100a25";
            },2000);
        }
    }
    return codewort;
});

c_input.addEventListener('keydown', (e) => {
    codewort = c_input.value;
    if(e.key === 'Enter') {
        for( let i = 0; i < arr_enc.length; i++){
            if (c_input.value == arr_enc[i]){
                if(i % 2 == 0){
                    c_btn.style.backgroundColor = "green";
                    setTimeout(function(){
                        c_btn.style.backgroundColor = "#100a25";
                    },2000);
                    setTimeout(function(){
                        show_infobox((i+2)/2);
                    },2000);
                    break;
                } else {
                    c_btn.style.backgroundColor = "green";
                    setTimeout(function(){
                        c_btn.style.backgroundColor = "#100a25";
                    },2000);
                    setTimeout(function(){
                        show_infobox((i+1)/2);
                    },2000);
                    break;
                }
            } else {
                c_btn.style.backgroundColor = "red";
                setTimeout(function(){
                    c_btn.style.backgroundColor = "#100a25";
                },2000);
            }
        }
    }
    return codewort;
});


// ***************************************************  Ergebnis - Sektion mit Inhalt füllen, orientiert an den Stages der jeweiligen Gruppe ********************************
let new_information_code_puzzle = [
    {
        text : `Sicherheitstest bestanden. Das Puzzlestück lautet:    ${arr_puzz_enc[0]}   . Der Code für Stufe 2 lautet:`,
        newC : arr_enc[2],
        hinweis : `Hinweis j.c-Agency:.....Für alle weiteren Aktivitäten benötigt Ihr Business-Outfit. Also zieht Euren Avatar entsprechend um. 
        Dann stellt Euch als Gruppe im EG zusammen und macht einen Screenshot. Bewahrt diesen auf. Zu gegebener Zeit bekommt Ihr den Hinweis, wohin der Screen shot gesendet werden muss.
        Nach dem Fotoshooting geht zum nächsten Terminal. Es steht im EG, Raum 02.`
    },
    {
        text : `Sicherheitstest bestanden. Das Puzzlestück lautet:    ${arr_puzz_enc[6]}   . Der Code für Stufe 2 lautet:`,
        newC : arr_enc[3],
        hinweis : `Hinweis j.c-Agency:.....Für alle weiteren Aktivitäten benötigt Ihr Business-Outfit. Also zieht Euren Avatar entsprechend um. 
        Dann stellt Euch als Gruppe im EG zusammen und macht einen Screenshot. Bewahrt diesen auf. Zu gegebener Zeit bekommt Ihr den Hinweis, wohin der Screen shot gesendet werden muss.
        Nach dem Fotoshooting geht zum nächsten Terminal.Es steht im EG, Raum 07.`
    },
    {
        text : `Sicherheitstest bestanden. Das Puzzlestück lautet:    ${arr_puzz_enc[1]}   . Der Code für Stufe 3 lautet:`,
        newC : arr_enc[4],
        hinweis : 'Hinweis j.c-Agency:.....Das nächste Terminal ist für Euch offen. Es steht im 1.OG, der orangene Tisch.'
    },
    {
        text : `Sicherheitstest bestanden. Das Puzzlestück lautet:    ${arr_puzz_enc[5]}   . Der Code für Stufe 3 lautet:`,
        newC : arr_enc[5],
        hinweis : 'Hinweis j.c-Agency:.....Das nächste Terminal ist für Euch offen. Es steht im 2.OG, offener Arbeitsbereich, Tischgruppe 1.'
    },
    {
        text : `Sicherheitstest bestanden. Das Puzzlestück lautet:    ${arr_puzz_enc[2]}   . Der Code für Stufe 4 lautet:`,
        newC : arr_enc[6],
        hinweis : 'Hinweis j.c-Agency:.....Unsere Hacker haben Euch ein weiteres Zeitfenster an einem Terminal organisiert. Ihr findet das Terminal im EG, Raum 015.'
    },
    {
        text : `Sicherheitstest bestanden. Das Puzzlestück lautet:    ${arr_puzz_enc[4]}   . Der Code für Stufe 4 lautet:`,
        newC : arr_enc[7],
        hinweis : 'Hinweis j.c-Agency:.....Unsere Hacker haben Euch ein weiteres Zeitfenster an einem Terminal organisiert. Ihr findet das Terminal im 1.OG, blauer Tisch.'
    },
    {
        text : `Sicherheitstest bestanden. Das Puzzlestück lautet:    ${arr_puzz_enc[3]}   . Den Code für Stufe 5 und den Schlüssel`,
        newC : 'hat die andere Gruppe.',
        hinweis : `Hinweis j.c-Agency:.....Auf der Seite "Startcodes" findet Ihr einen zweiten Code und eine Zahl. 
        Die Zahl ist der De-chiffrier-Schlüssel. Nur eine Person pro Gruppe trifft sich mit 
        der Person der anderen Gruppe im Erdgeschoss in einem "privaten" Bereich.
        Tauscht Dort sowohl Code, als auch Schlüssel aus. Anschließend geht zur Verschlüsselungsmaschine im vierten Obergeschoss.
        Gebt den Code ein und den Schlüssel, den Ihr von der anderen Gruppe erhalten habt.
        Das entschlüsselte Wort muss aber mit dem Schlüssel auf Eurer Seite "Startcodes" wieder verschlüsselt werden.
        Nur so könnt Ihr im nächsten Terminal weiter kommen......Ach ja, das neue Terminal steht übrigens im 2.OG, Raum 201.`
    },
    {
        text : `Sicherheitstest bestanden. Das Puzzlestück lautet:    ${arr_puzz_enc[3]}   . Den Code für Stufe 5 und den Schlüssel`,
        newC : 'hat die andere Gruppe.',
        hinweis : `Hinweis j.c-Agency:.....Auf der Seite "Startcodes" findet Ihr einen zweiten Code und eine Zahl. 
        Die Zahl ist der De-chiffrier-Schlüssel. Nur eine Person pro Gruppe trifft sich mit 
        der Person der anderen Gruppe im Erdgeschoss in einem "privaten" Bereich.
        Tauscht Dort sowohl Code, als auch Schlüssel aus. Anschließend geht zur Verschlüsselungsmaschine im vierten Obergeschoss.
        Gebt den Code ein und den Schlüssel, den Ihr von der anderen Gruppe erhalten habt.
        Das entschlüsselte Wort muss aber mit dem Schlüssel auf Eurer Seite "Startcodes" wieder verschlüsselt werden.
        Nur so könnt Ihr im nächsten Terminal weiter kommen......Ach ja, das neue Terminal steht übrigens im EG, Raum 09.`
    },
    {
        text : `Sicherheitstest bestanden. Das Puzzlestück lautet:    ${arr_puzz_enc[4]}   . Der Code für Stufe 6 lautet:`,
        newC : arr_enc[10],
        hinweis : 'Hinweis j.c-Agency:.....Verflixt! Unsere Hacking-Aktion ist aufgeflogen. Wir mussten zwei Teams einsetzen um die Cyber-Security anzulenken. Das hat geklappt und das neue Terminal steht 3.OG in der linken unteren Ecke. '
    },
    {
        text : `Sicherheitstest bestanden. Das Puzzlestück lautet:    ${arr_puzz_enc[2]}   . Der Code für Stufe 6 lautet:`,
        newC : arr_enc[11],
        hinweis : 'Hinweis j.c-Agency:.....Verflixt! Unsere Hacking-Aktion ist aufgeflogen. Wir mussten zwei Teams einsetzen um die Cyber-Security anzulenken. Das hat geklappt und das neue Terminal steht im 1.OG, schwarzer Tisch. '
    },
    {
        text : `Sicherheitstest bestanden. Das Puzzlestück lautet:    ${arr_puzz_enc[5]}   . Der Code für Stufe 7 lautet:`,
        newC : arr_enc[12],
        hinweis : 'Hinweis j.c-Agency:.....Das war jetzt nicht einfach. Die Cyber-Security war fast kaum noch zu umgehen. Dennoch haben wir ein Terminal knacken können. Geht zum grünen Tisch im 1.OG. '
    },
    {
        text : `Sicherheitstest bestanden. Das Puzzlestück lautet:    ${arr_puzz_enc[1]}   . Der Code für Stufe 7 lautet:`,
        newC : arr_enc[13],
        hinweis : 'Hinweis j.c-Agency:.....Das war jetzt nicht einfach. Die Cyber-Security war fast kaum noch zu umgehen. Dennoch haben wir ein Terminal knacken können. Geht zum Tisch in der rechten unteren Ecke im 3.OG.'
    },
    {
        text : `Gratuliere. Ich gebe Euch das letzte Puzzlestück:    ${arr_puzz_enc[6]}   . Ihr habt Euch mein Vertrauen erworben. Naja fast!`,
        newC : `Entschlüsselt noch alle Puzzelstücke. Die vollständig entschlüsselte Lösung 
        schickt Ihr als Screenshot zusammen mit dem Gruppen-Screenshot in Business-Outfit an Eure:n Trainer:in Modul 1 per Webex-Nachricht. 
        Dann verrate ich all meine Geheimnisse in diesem Modul.`,
        hinweis : `Hinweis j.c-Agency:.....Jetzt haben wir den Kerl an der Angel. Zum Entschlüsseln lauft wieder zur Verschlüsselungsmaschine. 
        Unsere Hacker konnten die möglichen Schlüssel eingrenzen. Es sind auf jeden Fall nicht die beiden
        Schlüssel, die Ihr schon kennt. Darüber hinaus halten die Hacker es für sehr wahrscheinlich, dass
        der Schlüssel im einstelligen Bereich liegen muss...für alle Puzzelteile gleich. Viel Glück!.....`
    },
    {
        text : `Gratuliere. Ich gebe Euch das letzte Puzzlestück:    ${arr_puzz_enc[0]}   . Ihr habt Euch mein Vertrauen erworben. Naja fast!`,
        newC : `Entschlüsselt noch alle Puzzelstücke. Die vollständig entschlüsselte Lösung 
        schickt Ihr als Screenshot zusammen mit dem Gruppen-Screenshot in Business-Outfit an Eure:n Trainer:in Modul 1 per Webex-Nachricht.
        Dann verrate ich all meine Geheimnisse in diesem Modul.`,
        hinweis : `Hinweis j.c-Agency:.....Jetzt haben wir den Kerl an der Angel. Zum Entschlüsseln lauft wieder zur Verschlüsselungsmaschine. 
        Unsere Hacker konnten die möglichen Schlüssel eingrenzen. Es sind auf jeden Fall nicht die beiden
        Schlüssel, die Ihr schon kennt. Darüber hinaus halten die Hacker es für sehr wahrscheinlich, dass
        der Schlüssel im einstelligen Bereich liegen muss...für alle Puzzelteile gleich. Viel Glück!.....`
    },
];

// ***************************************************  Verschlüsseln  der Codes mit unterschiedlichen Schlüsseln und  in ein neues Array speichern  **************************

for (let i = 0; i < arr_master.length; i++){
    if(i % 2 == 0){
        arr_enc.push(caesar_cipher(arr_master[i], 9));
        if(i == 6 || i == 7){
            new_information_code_puzzle[i].newC = 'hat die andere Gruppe.';
        } else if(i == 12 || i == 13){
            new_information_code_puzzle[i].newC = `Entschlüsselt noch alle Puzzelstücke. Die vollständig entschlüsselte Lösung 
            schickt Ihr als Screenshot an Eure:n Trainer:in Modul 1 per Webex-Nachricht.
            Dann verrate ich all meine Geheimnisse in diesem Modul.`;
        } else {
            new_information_code_puzzle[i].newC = caesar_cipher(arr_master[i+2], 9);
        }
    } else {
        arr_enc.push(caesar_cipher(arr_master[i], 15));
        if(i == 6 || i == 7){
            new_information_code_puzzle[i].newC = 'hat die andere Gruppe.';
        } else if(i == 12 || i == 13){
            new_information_code_puzzle[i].newC = `Entschlüsselt noch alle Puzzelstücke. Die vollständig entschlüsselte Lösung 
            schickt Ihr als Screenshot an Eure:n Trainer:in Modul 1 per Webex-Nachricht.
            Dann verrate ich all meine Geheimnisse in diesem Modul.`;
        } else {
            new_information_code_puzzle[i].newC = caesar_cipher(arr_master[i+2], 15);
        }
    }
}

// ******************************************** Bei richtiger Antwort neuer Code und ein Stück vom Puzzle, auch als Code ****************************************************
let newCode = () => {
    let ind = arr_enc.indexOf(codewort);
    wrapper1.classList.toggle('hide');
    wrapper2.classList.toggle('hide');
    result.innerHTML = `${new_information_code_puzzle[ind].text}`;
    result_code.innerHTML = `${new_information_code_puzzle[ind].newC}`;
    jc_hint.innerHTML = `${new_information_code_puzzle[ind].hinweis}`;
    if((ind == 12 || ind == 13) && wrapper2.className != 'hide'){
        bild_ende.classList.toggle('hide');
        slider.classList.toggle('hide');
    }
}



// ********************************************************************************** Quiz aktivieren und Durchführen *********************************************************
let start_quiz = (number_question) => {
    let image = document.createElement('img');
    let quest = document.createElement('p');
    let antw1 = document.createElement('p');
    let antw2 = document.createElement('p');
    let antw3 = document.createElement('p');
    let antw4 = document.createElement('p');
    infobox.classList.toggle('hide');
    wrapper1.classList.toggle('hide');
    image.setAttribute("src", arr_icons[number_question - 1]);
    image.classList.toggle('icon_styles');
    quiz_img.appendChild(image);
    quest.innerHTML = `${arr_quiz_fragen[number_question -1]}`;
    quiz.appendChild(quest);
    antw1.innerHTML = `${arr_answers[number_question -1][0].antwort}`;
    antw2.innerHTML = `${arr_answers[number_question -1][1].antwort}`;
    antw3.innerHTML = `${arr_answers[number_question -1][2].antwort}`;
    antw4.innerHTML = `${arr_answers[number_question -1][3].antwort}`;
    btn1.appendChild(antw1);
    btn2.appendChild(antw2);
    btn3.appendChild(antw3);
    btn4.appendChild(antw4);
    btn1.addEventListener('click', () => {
        return (arr_answers[number_question -1][0].res == true)? newCode() : alert_show();
    });
    btn2.addEventListener('click', () => {
        return (arr_answers[number_question -1][1].res == true)? newCode() : alert_show();
    });
    btn3.addEventListener('click', () => {
        return (arr_answers[number_question -1][2].res == true)? newCode() : alert_show();
    });
    btn4.addEventListener('click', () => {
        return (arr_answers[number_question -1][3].res == true)? newCode() : alert_show();
    });
}



// ********************************************************************************   Infobox zeigen mit dem Trainingsinput je nach Stage   ***********************************
let show_infobox = (ammount) => {
    let image = document.createElement('img');
    typewr.style.display = "none";
    c_container.style.display = "none";
    infobox.classList.toggle('hide');
    for(let i = 0; i < ammount; i++){
        arr_steps[i].classList.toggle('active');
        image.setAttribute("src", arr_imgs[i]);
        image.style.borderRadius = '25px';
        info_img.appendChild(image);
    };
    weiter_btn.addEventListener('click', () => start_quiz(ammount));
}
console.log(arr_enc);
console.log(arr_puzz_enc);

// ********************************************************************************  Logg Out **********************************************************************************

let loggoff = () => {
    wrapper2.classList.toggle('hide');
    bild_ende.classList.toggle('hide');
}

logBtn.addEventListener('click', () => loggoff());
