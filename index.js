function oatify(){
    alert("hi");
    var userInput = document.getElementById("oatInput").value;
    var userInput = userInput.replaceAll("o","oat")
    var userInput = userInput.replaceAll("O","Oat")
    
    alert(userInput);
};