const input = document.getElementById("input")
const output = document.getElementById("output")
const characterAmount = document.getElementById("characterAmount")

const loader = `return(function(a)local b={["!"]="1",["@"]="2",["#"]="3",["$"]="4",["%"]="5",["^"]="6",["&"]="7",["*"]="8",["("]="9",[")"]="0"}local function c(d)d=d:gsub("|","")local e=""for f=1,#d do local g=d:sub(f,f)local h=b[g]e=e..h end;return e end;local e=""for i in a:gmatch("([^|]+)")do if i then e=e..string.char(tonumber(c(i)))end end;loadstring(e)()end)("`

const encodedNumbers = {
    "1": "!",
    "2": "@",
    "3": "#",
    "4": "$",
    "5": "%",
    "6": "^",
    "7": "&",
    "8": "*",
    "9": "(",
    "0": ")"
}
const separator = "|"

function encodeNumber(number) {
    return number.split("").map(character => encodedNumbers[character]).join("")
}

function encode(text) {
    return text.split("").map((character, index) => encodeNumber(text.charCodeAt(index).toString()) + separator).join("")
}

document.getElementById("encode").addEventListener("click", () => {
    output.innerHTML = loader + encode(input.value) + "\")"
    characterAmount.innerHTML = output.value.length + " chars"
})
