// alert('yay')

// var firstHref = $("a[href^='http']").eq(0).attr("href");

// console.log(firstHref);

var $titles = $('.s-access-title')

console.log("******************************");
$titles.each(function (i, $el) {
	console.log($(this).text())
})

console.log("******************************");
console.log("*************  addListener  *****************");
console.log("Checking the category");
$('.categoryRefinementsSection li > strong').text()
// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var href = 'https://www.amazon.com' + $('#pagnNextLink').attr('href')

      console.log(href);

      // This line is new!
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": href});
    }
  }
);