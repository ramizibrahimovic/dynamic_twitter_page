var users = {
    user1:
    {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    numberTweets: 18600,
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpeg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
},
    user2 : 
    {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    joinedDate: 'July 2009',
    numberTweets: 3964,
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: 'assets/billgates.jpg',
    coverPhotoURL: 'assets/billgates-cover.jpeg',
    tweets: [
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
}};

let formatter = Intl.NumberFormat('en', { notation: 'compact' });

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let user = urlParams.get('user')

//chose which display you want users[0] = Elon, users[1] = bill gates
let data = users[user] || users.user1;


$("h3").text(data.displayName);
$("#tweet-count").text(formatter.format(data.numberTweets) + " Tweets");
$('.banner').attr("src", data.coverPhotoURL);
$('.profile-picture').attr("src", data.avatarURL);

//this part bothers me as its always going back to the above, how can I solve that?
$(".change").click(function(){
    let newUser = user === "user1" ? "user2" : "user1";
    window.location.href = `?user=${newUser}`;
  });

$('#handle').text(data.userName.toLowerCase())
$(".joined").text("📅 Joined " + data.joinedDate)
$(".following").text(data.followingCount)
$(".followers").text(formatter.format(data.followerCount))
let allTweets = data.tweets;

let tweetContainer = document.querySelector(".tweet-container");
for (let tweet of allTweets) {

    let row = document.createElement("div");
    row.setAttribute("id","tweet");

    row.innerHTML = `
        <div class="tweet-content-left">
            <img class="tweet-profile-picture" src=${data.avatarURL}>
        </div>
        <div class="tweet-content-middle">
            <div class="tweet-content-middle-top">
                <h5>${data.displayName}</h5>
                <svg class="verified" width="24" height="24" viewBox="3 -2 25 30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0l-2.138 2.63-3.068-1.441-.787 3.297-3.389.032.722 3.312-3.039 1.5 2.088 2.671-2.088 2.67 3.039 1.499-.722 3.312 3.389.033.787 3.296 3.068-1.441 2.138 2.63 2.139-2.63 3.068 1.441.786-3.296 3.39-.033-.722-3.312 3.038-1.499-2.087-2.67 2.087-2.671-3.038-1.5.722-3.312-3.39-.032-.786-3.297-3.068 1.441-2.139-2.63zm0 15.5c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25zm1-1.038v-7.462h-2v7.462h2z"/></svg>
                <h6>${data.userName.toLowerCase()}</h6>
                <h6 class="timestamp">${tweet.timestamp}</h6>
            </div>
            <div class="tweet-content-middle-middle">${tweet.text}</div>
            <div class="tweet-content-middle-bottom">
                <div><span class="emoji">💬</span><span>5.2K</span></div>
                <div><span class="emoji">🔁</span><span> 7.7k</span></div>
                <div><span class="emoji">♡</span><span> 67.2k</span></div>
            </div>
        </div>
        <div class="tweet-content-right">
        </div>
        `
    tweetContainer.appendChild(row)
}