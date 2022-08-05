var users = {
    user1:
    {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    avatarURL: 'assets/elonmusk.jpg',
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
    avatarURL: 'assets/billgates.jpg',
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

//merge all tweets in 1 array and loop over users and tweets and add the required data into new array
let sortedTweets = [];
function mergeTweet(userData) {
    for (let tweet of userData.tweets) {
        let tweetCont = [];
        tweetCont.push(new Date(tweet.timestamp));
        tweetCont.push(tweet.text);
        tweetCont.push(userData.userName);
        tweetCont.push(userData.displayName);
        tweetCont.push(userData.avatarURL);
        sortedTweets.push(tweetCont);
    }
}
mergeTweet(users.user1)
mergeTweet(users.user2)
//  sort array by b-a new Date(tweet.timestamp)

let newArr = sortedTweets.sort((a, b) => {
    console.log(a[0], b[0]);
    return b[0] - a[0]
});

// const sortedAsc = arr1.sort(
//     (objA, objB) => Number(objA.date) - Number(objB.date),
//   );

let tweetContainer = document.querySelector(".tweet-container");

for (let tweet of sortedTweets) {
    let row = document.createElement("div");
    row.setAttribute("id","tweet");
    row.innerHTML = `
        <div class="tweet-content-left">
            <img class="tweet-profile-picture" src=${tweet[4]}>
        </div>
        <div class="tweet-content-middle">
            <div class="tweet-content-middle-top">
                <h5>${tweet[3]}</h5>
                <h6>${tweet[2].toLowerCase()}</h6>
                <h6 class="timestamp">${tweet[0].toString().slice(0,21)}</h6>
            </div>
            <div class="tweet-content-middle-middle">${tweet[1]}</div>
            <div class="tweet-content-middle-bottom">
                <div><span class="emoji">💬</span><span>5.2K</span></div>
                <div><span class="emoji">🔁</span><span> 7.7k</span></div>
                <div><span class="emoji">♡</span><span> 67.2k</span></div>
            </div>
        </div>
        `
    tweetContainer.appendChild(row)
}