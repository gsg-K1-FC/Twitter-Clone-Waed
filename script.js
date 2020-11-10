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

        // Create The Posted Tweet Body
        // Tree Structure: 
        // > article
        //        |> postedDiv  
        //                  |> posted_Div  
        //                             |> posted__Div
        //                                         |> posted___Div
        //                          -- User Profile Image:--    |> posted_Img
        //                                                      |          |> posted__Img
        //                                                      |                      |> posted__Img_a
        //                                                      |                                    |> posted___Img
        //                                                      |                                                 |> posted____Img
        //                                                      |> posted_Content
        //                        -- User Name & Nick Name --                  |> user_name_div
        //                                                                     |             |> user_name__div
        //                                                                     |                            |> user_name____div
        //                                                                     |                                             |> user_name_span
        //                                                                     |                                             |> user_nick_name_span
        //                                                                     |> tweet_content_div
        //                                                 -- Posted Tweet Content --            |> tweet_content__Div
        //                                                                                       |                  |> tweet_content_Span
        //                                                 -- Posted Tweet Icons --              |> tweet_icons_Div
        //                                                                              First Icon: Comment      |> tweet_icons__Div
        //                                                                                                       |                |> tweet_icons___Div
        //                                                                                                       |                                  |> tweet_icons_num_span
        //                                                                              Second Icon: Retweet     |> tweet_icons__Div_retweet
        //                                                                                                       |                        |> tweet_icons___Div_retweet
        //                                                                                                       |                                                  |> tweet_icons_num_span_ret
        //                                                                              Third Icon: Like         |> tweet_icons__Div_like
        //                                                                                                       |                     |> tweet_icons___Div_like
        //                                                                                                       |                                            |> tweet_icons_num_span_like
        //                                                                              Last Icon: Share         |> tweet_icons__Div_share
        //                                                                                                                              |> tweet_icons___Div_share
        //                                                                                                                                                      |> tweet_icons_num_span_share
        let tweetArticle = document.createElement('article');
        tweetArticle.setAttribute('class', 'css-general-class tweets-article');
        mainTweetsDiv.appendChild(tweetArticle);

        let postedDiv = document.createElement('div');
        postedDiv.setAttribute('class', 'css-general-class posted-div');
        tweetArticle.appendChild(postedDiv);

        let posted_Div = document.createElement('div');
        posted_Div.setAttribute('class', 'css-general-class posted--div');
        postedDiv.appendChild(posted_Div);

        let posted__Div = document.createElement('div');
        posted__Div.setAttribute('class', 'css-general-class');
        posted_Div.appendChild(posted__Div);

        let posted___div = document.createElement('div');
        posted___div.setAttribute('class', 'css-general-class posted---div');
        posted__Div.appendChild(posted___div);

        let posted_Img = document.createElement('div');
        let posted_Content = document.createElement('div');
        posted_Img.setAttribute('class', 'css-general-class posted-img');
        posted_Content.setAttribute('class', 'css-general-class posted-Content');
        posted___div.appendChild(posted_Img);
        posted___div.appendChild(posted_Content); 

        // User Image Profile
        let posted__Img = document.createElement('div');
        posted__Img.setAttribute('class', 'css-general-class posted--img');
        posted_Img.appendChild(posted__Img);

        let posted__Img_a = document.createElement('a');
        posted__Img_a.setAttribute('class', 'css-general-class posted--img-a');
        posted__Img.appendChild(posted__Img_a);

        let posted___Img = document.createElement('div');
        posted___Img.setAttribute('class', 'css-general-class posted---img');
        posted__Img_a.appendChild(posted___Img);

        let posted____Img = document.createElement('div');
        posted____Img.setAttribute('class', 'posted----img');
        posted___Img.appendChild(posted____Img);


        // User Name
        let user_name_div = document.createElement('div');
        user_name_div.setAttribute('class', 'css-general-class');
        posted_Content.appendChild(user_name_div);

        let user_name__div = document.createElement('div');
        user_name__div.setAttribute('class', 'css-general-class user-name-div');
        user_name_div.appendChild(user_name__div);

        let user_name___div = document.createElement('div');
        user_name___div.setAttribute('class', 'css-general-class user-name--div');
        user_name__div.appendChild(user_name___div);

        let user_name____div = document.createElement('div');
        user_name____div.setAttribute('class', 'css-general-class user-name---div');
        user_name___div.appendChild(user_name____div);

        // Set User Name
        let user_name_span = document.createElement('span');
        user_name_span.setAttribute('class',  'css-general-class user-name-span');
        // Get User name from HTML span
        let userName = document.getElementById("user-name").innerText;
        let user_name_span_text = document.createTextNode(userName);
        user_name_span.appendChild(user_name_span_text);
        user_name____div.appendChild(user_name_span);


        // Set User Nick Name
        let user_nick_name_span = document.createElement('span');
        user_nick_name_span.setAttribute('class', 'css-general-class user-nick-name-span');
        let userNickName = document.getElementById("user-nick-name").innerText;
        let user_nick_name_span_text = document.createTextNode(userNickName);
        user_nick_name_span.appendChild(user_nick_name_span_text);
        user_name____div.appendChild(user_nick_name_span);

        
        // Tweet Content
        let tweet_content_div = document.createElement('div');
        tweet_content_div.setAttribute('class', 'css-general-class');
        posted_Content.appendChild(tweet_content_div);

        // tweet_content_div contains two childs: tweet_content__div & tweet_icons_div
        // tweet_content__div
        let tweet_content__Div = document.createElement('div');
        tweet_content__Div.setAttribute('class', 'css-general-class');
        tweet_content_div.appendChild(tweet_content__Div);

        let tweet_icons_Div = document.createElement('div');
        tweet_icons_Div.setAttribute('class', 'css-general-class tweets-icon-Div');
        tweet_content_div.appendChild(tweet_icons_Div);

        let tweet_content_Span = document.createElement('span');
        tweet_content_Span.setAttribute('class', 'css-general-class tweet-content-Span');
        let tweetContentTextArea = document.getElementById("tweet-content").value;
        tweet_content_Span.textContent = tweetContentTextArea;
        tweet_content__Div.appendChild(tweet_content_Span);



        // Tweets Icon Div: tweet_icons_Div
        // First Icon: Comment
        let tweet_icons__Div = document.createElement('div');
        tweet_icons__Div.setAttribute('class', 'css-general-class tweets-icon--Div');
        tweet_icons_Div.appendChild(tweet_icons__Div);

        let tweet_icons___Div = document.createElement('div');
        tweet_icons___Div.setAttribute('class', 'css-general-class tweets-icon---Div');
        tweet_icons__Div.appendChild(tweet_icons___Div);

        tweet_icons___Div.innerHTML = '<i class="fa fa-comment-o" aria-hidden="true"></i>';
        let tweet_icons_num_span = document.createElement('span');
        let tweetIconNum = document.createTextNode('1.1K');
        tweet_icons_num_span.appendChild(tweetIconNum);
        tweet_icons___Div.appendChild(tweet_icons_num_span);
        
        
        // Second Icon: Retweet
        let tweet_icons__Div_retweet = document.createElement('div');
        tweet_icons__Div_retweet.setAttribute('class', 'css-general-class tweets-icon--Div-retweet');
        tweet_icons_Div.appendChild(tweet_icons__Div_retweet);

        let tweet_icons___Div_retweet = document.createElement('div');
        tweet_icons___Div_retweet.setAttribute('class', 'css-general-class tweets-icon---Div');
        tweet_icons__Div_retweet.appendChild(tweet_icons___Div_retweet);

        tweet_icons___Div_retweet.innerHTML = '<i class="fa fa-retweet" aria-hidden="true"></i>';
        let tweet_icons_num_span_ret = document.createElement('span');
        let tweetIconNumRet = document.createTextNode('10M');
        tweet_icons_num_span_ret.appendChild(tweetIconNumRet);
        tweet_icons___Div_retweet.appendChild(tweet_icons_num_span_ret);


        // Third Icon: Like
        let tweet_icons__Div_like = document.createElement('div');
        tweet_icons__Div_like.setAttribute('class', 'css-general-class tweets-icon--Div-like');
        tweet_icons_Div.appendChild(tweet_icons__Div_like);

        let tweet_icons___Div_like = document.createElement('div');
        tweet_icons___Div_like.setAttribute('class', 'css-general-class tweets-icon---Div');
        tweet_icons__Div_like.appendChild(tweet_icons___Div_like);

        tweet_icons___Div_like.innerHTML = '<i class="fa fa-heart-o" aria-hidden="true"></i>';
        let tweet_icons_num_span_like = document.createElement('span');
        let tweetIconNumLike = document.createTextNode('100M');
        tweet_icons_num_span_like.appendChild(tweetIconNumLike);
        tweet_icons___Div_like.appendChild(tweet_icons_num_span_like);


        // Last Icon: Share
        let tweet_icons__Div_share = document.createElement('div');
        tweet_icons__Div_share.setAttribute('class', 'css-general-class tweets-icon--Div');
        tweet_icons_Div.appendChild(tweet_icons__Div_share);

        let tweet_icons___Div_share = document.createElement('div');
        tweet_icons___Div_share.setAttribute('class', 'css-general-class tweets-icon---Div');
        tweet_icons__Div_share.appendChild(tweet_icons___Div_share);

        tweet_icons___Div_share.innerHTML = '<i class="fa fa-share-square-o" aria-hidden="true"></i>';
        let tweet_icons_num_span_share = document.createElement('span');
        let tweetIconNumShare = document.createTextNode('1.1K');
        tweet_icons_num_span_share.appendChild(tweetIconNumShare);
        tweet_icons___Div_share.appendChild(tweet_icons_num_span_share);
    }
});