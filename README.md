# Joinin
___
A Social app that allows users to share Blurbs with each other based on location.
Designed and developed over week long sprint.

### URL: [join-in-app.herokuapp.com](https://join-in-app.herokuapp.com/)

### Features
* Full functionality without user accounts
* Users can create new blurbs, delete blurbs, or interact with blurbs without leaving the page
* Full CRUD available for both cities and blurbs, only blurbs CRUDable through website interface
* Responsive display

### Technologies Used
___
|               |            |
|---------------|------------|
|  HTML         |  jQuery    |
|  CSS          |  Ajax      |
|  Bootstrap    |  Node.js   |
|  Handlebars   |  Express   |
|  Javascript   |  Mongoose  |
|  MongoDB      |  Heroku    |

## Planning
___
[User Stories](https://docs.google.com/document/d/1bB7cZLRpcKMa4wOch1ewGnsfvHHRYO0FEFSNpPJChE8/edit?usp=sharing)

[Trello](https://trello.com/b/mpN5bIrC/joinin)

[Wireframes](https://drive.google.com/drive/folders/0B-akLkaoR5tFVXZ6di1qUG03Xzg?usp=sharing)

## Code Examples
___

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

### Future Work
___
* Add user accounts, users can only delete their own posts.
* Design process for creating new cities: users can request new cities and after 10 requests new city is generated
* Add tags to posts
* Develop algorithm to display the lastest/most liked blurbs first

### Screenshots
___
Main Page
[Index](http://i.imgur.com/vwuqST9.png)

City's Posts Page
[City Main](http://i.imgur.com/OSyV3UF.png)
