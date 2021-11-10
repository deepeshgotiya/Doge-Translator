var translateButton = document.getElementById("t-button")
var inputText = document.getElementById("t-input")
var outputText = document.getElementById("t-output")
var url = "https://api.funtranslations.com/translate/doge.json"
function textTranslate(text) {
    return url + "?" + "text=" + text;
}
function errorHandler(error){
    alert("Something Wrong with the server please try again later")
}
function clickEvent (){
    var input = inputText.value ; 
    
    fetch(textTranslate(input))
    .then(response =>response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputText.innerText = translatedText;
    }).catch(errorHandler)
}
translateButton.addEventListener("click", clickEvent)