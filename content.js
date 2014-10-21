

chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
	switch(message.type) {
		case "colors-div":
      console.log("context select is happening.");
			var whole_doc = document.getElementsByTagName("html")[0].innerHTML;
      console.log("here comes whole_doc");
      // alert(encodeURIComponent(whole_doc));
      var bcRequest = new XMLHttpRequest();
      alert(document.URL);
      console.log(whole_doc);
      

			var divs = document.querySelectorAll("div");
			if(divs.length === 0) {
				alert("There are no any divs in the page.");
			} else {
				for(var i=0; i<divs.length; i++) {
					divs[i].style.backgroundColor = message.color;
				}
			}
		break;
	}
});

