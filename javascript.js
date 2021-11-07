const quotes = [
    ["That's just, like, your opinion, man.", "The Dude"]
    ["Watch out for crazies!", "Mom"], 
    ["Let your intelligence begin to rule whenever you sit with others using this sane idea: Leave all your cocked guns in a field far from us. One of those damn things might go off!", "Hafiz"],
    ["Excuse me while I kiss the sky!", "Jimi Hendrix"],
    ["Build it and they will come.", "Kevin Costner's character"], 
    ["Let's make some happy little trees!", "Bob Ross"],
    ["Rarfles snarfles!", "Nebula"], 
    ["Meowzas!", "Clam"],
    ["Give me your backpack and stay on my ass, or you're gonna die!!", "Dad"],
    ["He who regards his intellectual knowledge as ignorance has deep insight. \
    He who overrates his intellectual achievement as definite truth is deeply sick. \
    Only when on is sick of this sickness can one cease to be sick.", "Lao Tzu (translation by Hua Ching Ni"],
    ["There is an art of finding one's direction in the lower regions by the memory of what \
    one saw higher up.  When one can no longer see, one can at least still know", "\
    Rene Daumal (translated by Roger Shattuck)"],
    ["Be impeccable with your word. Don't take anything personally. Don't make assumptions. \
    Always do your best.", "Don Miguel Ruiz"],
    ["...it is impossible to reverse the direction of a large group of people all at once, \
    while the small scale is hard to know because in the case of an individual there is just \
    one involved and changes can be made quickly.  This should be given careful consideration", "Miyamoto \
    Musashi (translation by Thomas Cleary)"],
    ["Invincibility is defense.  Vincibility is attack.  Defend and one has a surplus.  \
    Attack and one is insufficient", "Sun Tzu (translation by The Denma Translation Group)"],
    ["In the jingle-jangle morning I'll come following you", "Bob Dylan"]
];
  

// var ogQuote = Math.floor(Math.random() * (quotes.length));
onload = 
document.getElementById('text').innerHTML = '"' + quotes[0][0] + '"';
document.getElementById('author').innerHTML = "- " + quotes[0][1];


  
  
function changeQuotes() {
    var quoteIndex = Math.floor(Math.random() * (quotes.length));
    document.getElementById('text').innerHTML = '"' + quotes[quoteIndex][0] + '"';
    document.getElementById('author').innerHTML = "- " + quotes[quoteIndex][1];
};

// document.onload = changeQuotes();