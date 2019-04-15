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
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriend = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

    console.log(newFriend);

    friends.push(newFriend);

    res.json(newFriend);
});


module.exports = router;