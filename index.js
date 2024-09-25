function oatify(){
    
    var userInput = document.getElementById("oatInput").value;
    var userInput = userInput.replaceAll("o","oat");
    var userInput = userInput.replaceAll("O","Oat");
    document.getElementById("oatOutput").value = userInput;
    
};
function changeButton() {
    document.getElementById("copyButton").value = "copy to clipboard";
};
function  copyOut(){
    var copyText = document.getElementById("oatOutput");

    
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
  
     
    navigator.clipboard.writeText(copyText.value);
    document.getElementById("copyButton").value = "copied!";
    setTimeout(changeButton,1000);
};


