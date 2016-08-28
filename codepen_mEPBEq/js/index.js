var quotes = [
{
quote:"Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.", author: "Albert Einstein"
},
{
quote: "Everything is theoretically impossible, until it is done.", author:"Robert A. Heinlein"
},
  {
quote:"Science is the systematic classification of experience.",author:" George Henry Lewes"
  },
  {
quote:"The fewer the facts, the stronger the opinion.", author: " Arnold H. Glasow"
  },
  {
quote:"Science is not only a disciple of reason but, also, one of romance and passion.", author: "Stephen Hawking"},];

var displayQuote;
var currentIdx;

function updateQuote() {
  do{
  var idx = Math.floor(Math.random() * quotes.length)}
  while(currentIdx === idx);
  displayQuote = quotes[idx]
  currentIdx = idx;
  console.log(displayQuote)
$('#quote').html(quotes[idx].quote);
 $('#author').html(quotes[idx].author);
  $("#twitter").click(shareTweet);
}

function shareTweet(){
  var quoteToTweet = quotes[currentIdx].quote;
  quoteToTweet = encodeURI(quoteToTweet)
  if(quoteToTweet.length > 100) {
    quoteToTweet= quoteToTweet.substr(0, 100)
  }
  window.open("https://twitter.com/intent/tweet?text="+quoteToTweet);
}
$(function(){
  updateQuote();
  $('.btn1').click(function(){
    updateQuote();
  })
})