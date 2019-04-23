var router = require('express').Router();
var path = require("path");
var friends = require("../data/friends");


router.get("/friends", function(req, res) {
    return res.json(friends);
  });
  
// Displays a single character, or returns false
router.get("/friends/:friend", function(req, res) {
var chosen = req.params.friend;

console.log(chosen);

for (var i = 0; i < friends.length; i++) {
    if (chosen === friends[i].routeName) {
    return res.json(friends[i]);
    }
}

return res.json(false);
});

router.post("/friends", function(req, res) {

    var newFriend = req.body;
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

    var matchIndex = findMatch(newFriend);

    friends.push(newFriend);
    res.json(friends[matchIndex]);
});


function findMatch(newFriend) {
  let scoresArray =[];
  let diffArray = [];
  let diffScore = 0;
  let diffIndex = 0;

  for (let s of newFriend.scores) {
    scoresArray.push(parseInt(s))
  }

  for(let f of friends) {
    for(let i = 0; i < f.scores.length; i ++) {
      diffScore += Math.abs(scoresArray[i]-parseInt(f.scores[i]))
    }
    diffArray.push(diffScore);
    diffScore = 0;
  }

  diffIndex = diffArray.reduce((iMin, x, i, arr) => x < arr[iMin] ? i : iMin, 0);
  
  return diffIndex;
}

module.exports = router;