
function pairElement(str)
{
    let tempArr = [];
    for (let i = 0; i < str.length; i++){
        tempArr.push(gSelect(str[i]));
    }

    return tempArr;
}

function gSelect(char)
{
    switch(char)
    {
        case 'A':
            return ["A", "T"];
        case 'T':
            return ["T", "A"];
        case 'G':
            return ["G", "C"];
        case 'C':
            return ["C", "G"];
    }
}

console.log(pairElement("CTCTA"));
console.log(pairElement("TTGAG"))
console.log(pairElement("ATCGA"))
console.log(pairElement("GTAC"))