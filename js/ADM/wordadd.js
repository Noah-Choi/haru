let wordlist = [];
loadJSON();

function loadJSON() {

    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '../../js/ADM/wordlist.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            let data = JSON.parse(this.responseText);
            
            for(let i = 0; i<data.length;i++)
                wordlist.push(data[i])
        }
    }
    xobj.send(null);
}


async function saveForm() {
    event.preventDefault();
    let select = document.getElementById("dan").value;
    let test = document.getElementById("test").value;
    let form = document.getElementById("form").value;
    let kanji = document.getElementById("kanji").value;
    let yomi = document.getElementById("yomigana").value;
    let korean = document.getElementById("korean").value;

    let word = {
        select: select,
        test: test,
        form: form,
        kanji: kanji,
        yomi: yomi,
        korean: korean
    };

    wordlist.push(word);
    let data = await saveJSON(wordlist);
    document.getElementById("list").reset();
};

function saveJSON(obj) {
    let strObj = JSON.stringify(obj, "\t");
    let dataUri = "data:application/json;charset=utf-8, " + encodeURIComponent(strObj)
    let link = document.getElementById("down").setAttribute('href', dataUri)
}