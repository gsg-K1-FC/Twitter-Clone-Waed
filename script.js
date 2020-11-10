// Header Nav Items
document.getElementById("home").focus();

let tweetBtn = document.getElementById("tweet-btn");

// Enable Tweet Btn
document.getElementById("tweet-content").addEventListener('keypress', function(){
    tweetBtn.setAttribute("aria-disabled", "false");
    tweetBtn.setAttribute("style", "opacity: 1;");
    tweetBtn.style.setProperty("cursor", "pointer");
});


tweetBtn.addEventListener('click', function(){

    if(tweetBtn.getAttribute("aria-disabled") == "false"){
        // Remove No Tweets Div
        let noTweetsDiv = document.getElementById("no-content-div");
        noTweetsDiv.parentNode.removeChild(noTweetsDiv);
        console.log(document.getElementById("tweet-content").value);

        let mainTweetsDiv = document.getElementById("tweets-box");
    }
});