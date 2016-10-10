#Project 1: [Joinin](https://join-in-app.herokuapp.com/)
####Created by Lynette Durán & Brandon Kerr
A Social app that allows users to share Blurbs with each other based on location.

Technologies Used
-----------
| * HTML         | * jQuery    |
| * CSS          | * Ajax      |
| * Bootstrap    | * Node.js   |
| * Handlebars   | * Express   |
| * Javascript   | * Mongoose  |
| * MongoDB      |             |

##Planning:
[User Stories](https://docs.google.com/document/d/1bB7cZLRpcKMa4wOch1ewGnsfvHHRYO0FEFSNpPJChE8/edit?usp=sharing)

[Trello](https://trello.com/b/mpN5bIrC/joinin)

[Wireframes](https://drive.google.com/drive/folders/0B-akLkaoR5tFVXZ6di1qUG03Xzg?usp=sharing)
 

##Use:
![home page](http://i.imgur.com/KaBlhWh.png "Home Page and City Index for SF")


Upon visiting the app, users encounter the home screen which displays all supported cities, and each citie's most recent blurb.

Clicking on a city name takes the user to that city's index page, where all blurbs are displayed. From this page users can create, delete, and +1 Blurbs. 

##Triumphs
* Designing mobile-first
* Completing all server routes successfully
* Learning more advanced Git features
* Designing our own graphics
* Using embedded relationships

##Challenges
* Dealing with overriding Bootstrap
* Time management
* Prioritizing features
* Github conflicts

##Advice
* Prioritize goals early, stay focused on what's most important, what as the biggest impact/implementation time ratio
* Reference trello/wireframes early, focusing on getting out the initial product then work on refinements because they'll never end

##Future Work
Add user accounts, users can only delete their own posts.

Design process for creating new cities: users can request new cities and after 10 requests new city is generated

Add tags to posts

Develop algorithm to display the lastest/most liked blurbs first

##Code Examples

```JavaScript
app.post('/api/cities/:id/blurbs', function blurbsCreate(req, res) {
  var cityId = req.params.id;
  var newBlurb = new db.Blurb({
    poster: req.body.poster,
    textContent: req.body.textContent,
    likes: 0,
    imgPath: req.body.imgPath || ""
  });
  db.City.findOne({
    _id: cityId
  },
    function(err, city) {
      city.blurbs.unshift(newBlurb);
      city.save();
    }
  );
  res.json(newBlurb);
});
```

```Javascript
app.delete('/api/cities/:id/blurbs/:blurbId', function deleteBlurb(req, res) {
  var blurbId = req.params.blurbId;
  var cityId = req.params.id;

  db.City.findOne({
    _id: cityId
  }, 
    function(err, city) {
      city.blurbs = city.blurbs.filter(function(blurb) {
        return blurb._id != blurbId;
      });
      city.save();
    }
  );
  res.send(blurbId);
});
```
