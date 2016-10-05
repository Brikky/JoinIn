var db = require("./models");

//use JoinIn
//db.dropDatabase();

var SanFrancisco = {
    location: {
        lat: 1,
        lng: 1
    },
    name: "San Francisco",
    logo: "/images/logo.svg", //url to image

    blurbs: [{
        poster: "Brandon",
        textContent: "This app is bae.",
        likes: 100,
        imgPath: ""
    }, {
        poster: "Lynette",
        textContent: "I'm gonna bake you a cookie",
        likes: 101,
        imgPath: ""
    }, {
        poster: "Ilias",
        textContent: "Theo, drop it!",
        likes: 1,
        imgPath: ""
    }]
}

var NewYorkCity = {
    location: {
        lat: 1,
        lng: 1
    },
    name: "New York City",
    logo: "/images/logo.svg", //url to image

    blurbs: [{
        poster: "Claire",
        textContent: "Bananas overtake world",
        likes: 10,
        imgPath: ""
    }, {
        poster: "Nathan",
        textContent: "Is that a !@$% trailing whitespace?!",
        likes: 1,
        imgPath: ""
    }, {
        poster: "Theo",
        textContent: "Bark.",
        likes: 10000,
        imgPath: ""
    }]
}

var Seattle = {
    location: {
        lat: 1,
        lng: 1
    },
    name: "Seattle",
    logo: "/images/logo.svg", //url to image

    blurbs: [{
        poster: "Neda",
        textContent: "Where's Theo?",
        likes: 9,
        imgPath: ""
    }, {
        poster: "Teddy",
        textContent: "I could really use a Noah's Bagel right about now",
        likes: 55,
        imgPath: ""
    }, {
        poster: "Lily",
        textContent: "I'm blue bob a deeb ah buh bye.",
        likes: 10,
        imgPath: ""
    }]
}

db.City.create(SanFrancisco, function(err, city) {
    if (err) {
        return console.log("Error!", err);
    }
    console.log("new city", city)
});

db.City.create(NewYorkCity, function(err, city) {
    if (err) {
        return console.log("Error!", err);
    }
    console.log("new city", city)
});

db.City.create(Seattle, function(err, city) {
    if (err) {
        return console.log("Error!", err);
    }
    console.log("new city", city)
});
