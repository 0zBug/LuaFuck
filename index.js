const input = document.getElementById("input")
const output = document.getElementById("output")
const characterAmount = document.getElementById("characterAmount")

const loader = `]]loadstring(_:gsub("..",function(s)a,b=s:byte(1,2)return s.char(16*a+b-16*(a<48 and 33 or 109)-(b<48 and 33 or 109))end))()`

const encodedNumbers = {
  "0": "!",
  "1": "\"",
  "2": "#",
  "3": "$",
  "4": "%",
  "5": "&",
  "6": "'",
  "7": "(",
  "8": ")",
  "9": "*",
  "10": "+",
  "11": ",",
  "12": "-",
  "13": ".",
  "14": "/",
  "15": "|"
}

function encodeNumber(number) {
    return encodedNumbers[Math.floor(number / 16)] + encodedNumbers[number % 16]
}

function encode(text) {
    return text.split("").map((character, index) => encodeNumber(text.charCodeAt(index).toString())).join("")
}

document.getElementById("encode").addEventListener("click", () => {
    output.innerHTML = "_=[[" + encode(input.value) + loader
    characterAmount.innerHTML = output.value.length + " chars"
})
