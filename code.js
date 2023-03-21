const jokes =[
     "'What do you call people who pretend to be Irish on St. Patrick's Day? Counterfitz'"
 ,"'What did one wall say to the other wall? I`ll meet you at the corner.'"
    , "'I thought about starting a business selling halos... ...but the cost of overheads was too high.'"
    ,"'What happens if you pass gas in church? You have to sit in your own pew.'"
    ,"'What's a dog's favorite mode of transportation? A waggin'"
    ,"'Why couldn't the melons be together? Everyone knows melons cantaloupe.'"
    ]
    const quots=[
        `"All our dreams can come true; if we have the courage to pursue them."
        – Walt Disney`,
        `“However difficult life may seem, there is always something you can do and succeed at.” 
        – Stephen Hawking`,
        `“People begin to become successful the minute they decide to be.” 
        – Harvey MacKay`,
        `“It always seems impossible until it’s done.” 
        – Nelson Mandela`,
        `“Nothing is impossible, the word itself says ‘I’m possible’!” 
        – Audrey Hepburn`,
        `“Success isn’t overnight. It’s when everyday you get a little better than the day before. It all adds up.” 
        – Dwayne Johnson`,
        `"It does not matter how slowly you go as long as you do not stop.”
        – Confucius`,
        `“The more you praise and celebrate your life, the more there is in life to celebrate.”
         – Oprah Winfrey`,
        `“Do what you can, with what you’ve got, where you are.”
        – Teddy Roosevelt`,
        `“Success consists of going from failure to failure without loss of enthusiasm.” 
        – Winston Churchill`,
        `“Women, like men, should try to do the impossible. And when they fail, their failure should be a challenge to others.”
        – Amelia Earhart`,
        `“Victory is sweetest when you’ve known defeat.” 
        – Malcolm S. Forbes`,
        `“Satisfaction lies in the effort, not in the attainment, full effort is full victory.”
        – Mahatma Gandhi`,
        `“Energy and persistence conquer all things.” 
        – Benjamin Franklin`,
        `“Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.”
        – Thomas A. Edison`,
        `“The only limit to our realization of tomorrow will be our doubts of today.”
        – Franklin D. Roosevelt`,
        `“It is better to fail in originality than to succeed in imitation.” 
        – Herman Melville`,
        `“A man can succeed at almost anything for which he has unlimited enthusiasm.”
        – Charles Schwab`,
        `“In most things success depends on knowing how long it takes to succeed.”
        – Montesquieu`,
        `“There are no limits. There are only plateaus, and you must not stay there you must go beyond them.”
        – Bruce Lee`,
    ]
    let a=parseInt(Math.random()*quots.length)
    document.getElementById("demo").innerHTML=quots[a];
    let b=parseInt(Math.random()*jokes.length)
    document.getElementById("demos").innerHTML=jokes[b];

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("input").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

for (i = 1; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
    }
}