const quotes = [
    ["Watch out for crazies!", "Mom"], 
    ["Let your intelligence begin to rule whenever you sit with others using this sane idea: Leave all your cocked guns in a field far from us. One of those damn things might go off!", "Hafiz"],
    ["Excuse me while I kiss the sky!", "Jimi Hendrix"],
    ["Build it and they will come.", "Kevin Costner's character"], 
    ["Let's make some happy little trees!", "Bob Ross"],
    ["Rarfles snarfles!", "Nebula"], 
    ["Meowzas!", "Clam"]
];
  
var ogQuote = Math.floor(Math.random() * (quotes.length));
document.getElementById('text').innerHTML = '"' + quotes[ogQuote][0] + '"';
document.getElementById('author').innerHTML = "- " + quotes[ogQuote][1];
  
  
function changeQuotes() {
    var quoteIndex = Math.floor(Math.random() * (quotes.length));
    document.getElementById('text').innerHTML = '"' + quotes[quoteIndex][0] + '"';
    document.getElementById('author').innerHTML = "- " + quotes[quoteIndex][1];
};