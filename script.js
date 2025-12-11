// Rakam → Sembol karşılıkları
const mapEncode = {
    "0": "@",
    "1": "#",
    "2": "$",
    "3": "%",
    "4": "&",
    "5": "*",
    "6": "!",
    "7": "?",
    "8": "+",
    "9": "="
};

// Sembol → Rakam karşılıkları
const mapDecode = {};
for (let key in mapEncode) {
    mapDecode[mapEncode[key]] = key;
}

// Şifreleme
function sifreleMetin() {
    let input = document.getElementById("metin").value;
    let output = "";

    for (let char of input) {

        if (mapEncode[char] !== undefined) {
            // rakam → sembol
            output += mapEncode[char];
        } else {
            // rakam değil → aynen bırak
            output += char;
        }

        output += "*"; // her karakter arasına * koy
    }

    // son * işaretini kaldır
    document.getElementById("sonuc").value = output.slice(0, -1);
}

// Çözme
function cozMetin() {
    let input = document.getElementById("metin").value;
    let parts = input.split("*");
    let output = "";

    for (let p of parts) {
        if (mapDecode[p] !== undefined) {
            // sembol → rakam
            output += mapDecode[p];
        } else {
            // sembol değil → aynen bırak
            output += p;
        }
    }

    document.getElementById("sonuc").value = output;
}
