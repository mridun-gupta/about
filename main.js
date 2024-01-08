/* console.log Markings */
console.log("#     #                                          #####\n##   ##  #####   #  #####   #    #  #    #      #     #  #    #  #####   #####    ##\n# # # #  #    #  #  #    #  #    #  ##   #      #        #    #  #    #    #     #  #\n#  #  #  #    #  #  #    #  #    #  # #  #      #  ####  #    #  #    #    #    #    #\n#     #  #####   #  #    #  #    #  #  # #      #     #  #    #  #####     #    ######\n#     #  #   #   #  #    #  #    #  #   ##      #     #  #    #  #         #    #    #\n#     #  #    #  #  #####    ####   #    #       #####    ####   #         #    #    #");

/* Fetch शायरी */
const शायरीList = [
    "मैं हस्ता रहता हूँ, किसी से कुछ नहीं कहता |\nजो भी दर्द मिल रहा है, उसको हस से सहता हूँ |\nक्योंकि जिसके इंतज़ार में बैठा हूँ वो घड़ी जल्द ही आएगी, और मेहनत मेरी जरूर रंग लाएगी |\nतब मेरी किस्मत बदल जाएगी, जिनहोने मुझे छोड़ा था पहले अब वो भी मेरे साथ तुम्हे दिख जाएगी |",
    "खूबसूरत बहुत है रास्ता तू खो जाएगा, जो सोचा है वो मुकाम भी मिल जायेगा |\nअभी जी भर के संघर्ष कर ले, कुछ याद आये ना आये, यह वक्त तुझे जरूर याद आएगा |",
    "दर्द की शाम हों, या सुख का सवेरा हो |\nसब गवारा है मुझे, साथ बस तेरा हो |",
    "यह तो बस शुरुवात है, अभी और भी बड़े बड़े तूफान आएँगे |\nलेकिन तू डटा रह, देख तेरा जनून तूफान भी थम जायेंगे |\nयाद रख इस संगर्ष को, अभी आगे जीत का जश्न इससे को याद रख कर मनाएंगे |",
    "कोशिश जारी रख, जरूर सफल तेरा काम होगा |\nकदमो में तेरे जहान, सबसे ऊपर तेरा नाम होगा |",
    "सफलता के बाद एक डब्बा मिठाई उसके घर भी भेजवानी है, कभी हम उसके थे कल वो हमारी दीवानी है |\nलगता है वो अभी अंजान है, आगे अभी क्या खुश खबरी आनी है |",
    "दिक्कत बहुत है जिंदगी में तो क्या चिंता की बात है |\nलेकिन हम उसकी पर जीत पाने की कोशिश न करें, तो वो गलत बात है |",
    "बरसात मुलाकात यहीं नहीं होती, धरती को धूप में जलना पड़ता है |\nशोरत के शिखर तक पहुंचने के लिए, गुटनो को भी जड़ना पड़ता है |",
    "सोच बदलो, परिस्थितियाँ बदल जाती हैं |\nनजर बदलो, नजर बदल जाती है |\nसोच बदलो, सितारे बदल जाते हैं |\nलेकिन कश्ती बदलने की कोई जरूरत नहीं है, बस कश्ती की दिशा बदल दो, किनारा बदल जाता है |",
    "तुम चलाई गयी, कल तुम्हारी याद आई थी |\nमुझे कामयाब देख, तुम्हारी तरह वो भी बहुत चिल्लाई थी |",
    "वो शाम की माफ़िल ही क्या, जिसमे दिल खाक न हो |\nमज़ा थो तब है चाहत का, जब दिल जले पर राख न हो |",
    "आज की करनी कल पर क्यों छोड़ दू?\nपल दो पल के आलास के लिए, मेरा जो वकत आने वाला है उससे क्यों छोड़ दू |",
    "रास्ते बहुत जरा चलकर तो देख लो,\nबाबू शोना बहुत कर लिया थोड़ा मेहनत भी करके देख लो |",
    "साहिल पर पहुंच से इनकार किसे है, लेकिन तूफानों से लड़ने का मज़ा कोई और ही है |\nकहते है क़िस्मत खुदा लिखते हैं, लेकिन उससे मिटा कर खुद लिखने का मज़ा कुछ और ही है |",
    "हिम्मत मत खोना, अभी बहुत आगे जाना है |\nजिन्होंने कहा था तेरे बस का नहीं, उनको भी करके दिखाना है |",
    "सपना एक देखोगे, मुश्किलें हज़ार आएंगी |\nलेकिन वो मंज़र बड़ा खूबसूरत होगा, जब कामयाबी शोर मचागेगी |",
    "उसका ज़िकर हुआ तो, किस्सा सुना रहे थे हम |\nउस किस्से में भी, उन्हें अपना बता रहे हम |\nवक़्त रहते खुद को, आईना दिखा रहे थे हम |\nकागज़ पर नाम लिखा था उनका, लिख लिख कर खुद ही मिटा रहे थे हम |",
    "बारिश बादलों से होती है, आसमानों में क्या रखा है |\nआग तो चिंगारी से लगती है, सूरज में क्या रखा है |\nदिल बेकाबू होता है मेरा, कयामत में बहुत |\nकयामत तो उसकी ज़ुल्फ़े बिखेरती है जनाब, आँधियो में क्या रखता है |",
    "अंधेरे चारों तरफ साये साये करने लगे, चिराग हाथ में उठा कर दुआए करने लगे |\nतालिका हमने सिखाया था जिनको चलने का, वो लोग आज हमे दये बाये करने लगे |",
    "रूठी है वो इतना कि, हम उससे सच में मना लेंगे |\nइतनी वक्त कौन जाया करे, इतने में तो हम दूसरी पटा लेंगे |",
    "कुछ लोग इतना गिर चुके है हमे गिराने में, कि अब लगता है कुछ गलत नहीं कर रहे है कम्बक्तो गिराने में |",
    "ना हमें उन्से प्यार है, न उन्हें हमारे प्यार की कदर, बकवास छोड़ो और याद करो TWO PARALLEL LINES CAN NEVER INTERSECT EACH OTHER.",
    "खुश रहो, खफा रहो |\nदूर रहो, दफा रहो |"
];

function getशायरी() {
    const randomIndex = Math.floor(Math.random() * शायरीList.length);
    return शायरीList[randomIndex];
};

function updateशायरी() {
    const शायरीDisplay = document.getElementById("शायरीDisplay");

    if (शायरीDisplay) {
        const शायरी = getशायरी();
        शायरीDisplay.innerHTML = शायरी;
    }
}

document.addEventListener("DOMContentLoaded", updateशायरी);

/* redirectWeb Logic */
function redirectWeb() {
    var currentDomain = window.location.hostname;

    if (currentDomain === "www.mridungupta.tech") {
        window.location.href = "https://contact.mridungupta.tech";
    } else if (currentDomain === "www.mridungupta.me") {
        window.location.href = "https://contact.mridungupta.me";
    } else if (currentDomain === "www.mridungupta.eu.org") {
        window.location.href = "https://contact.mridungupta.eu.org";
    } else if (currentDomain === "www.mridungupta.live") {
        window.location.href = "https://contact.mridungupta.live";
    } else if (currentDomain === "www.mridungupta.co") {
        windows.location.href = "https://contact.mridungupta.co";
    } else if (currentDomain === "mridungupta.tech") {
        windows.location.href = "https://contact.mridungupta.tech";
    } else if (currentDomain === "mridungupta.me") {
        window.location.href = "https://contact.mridungupta.me";
    } else if (currentDomain === "mridungupta.eu.org") {
        window.location.href = "https://contact.mridungupta.eu.org";
    } else if (currentDomain === "mridungupta.live") {
        window.location.href = "https://contact.mridungupta.live";
    } else if (currentDomain === "mridungupta.co") {
        windows.location.href = "https://contact.mridungupta.co";
    } else {
        console.log("Sorry! This isn't the real website run by 'Mridun Gupta'. Double check the official website for authenticity.");
    }
}

/* Fetch specialEvents */
document.addEventListener("DOMContentLoaded", function () {
    const eventsDisplay = document.getElementById("special-events");
    const eventsList = [
        "on the smooth landing of LVM3-M4/Chandrayaan-3",
        "on the smooth positioning of PSLV-C57/Aditya L1",
        "for the fastest 5G rollout globally",
        "on the inauguration of the world's largest meditation center - 'Swarved Mahamandir',",
        "on the inauguration of the world's longest river cruise - 'MG Ganga Vilas',",
        "for being the world's fastest-growing major economy,",
        "for being at the top in digital payments globally,",
        "on the inauguration of the world's largest office building - 'Surat Diamond Bourse'"
    ];

    let eventIndex = 0;

    function updateEvent() {
        eventsDisplay.textContent = eventsList[eventIndex];
        eventIndex = (eventIndex + 1) % eventsList.length;
    }

    updateEvent();

    setInterval(updateEvent, 25000);
})