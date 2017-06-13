Creator: Matt Gray
Date: 6/13/17
Public URL: https://artpylon.github.io/brew-scout_front-end/

Public Trello Board:
https://trello.com/b/0Tv7OEmY
Project Planning ppt Deck: https://docs.google.com/presentation/d/1zf3irYzGp55E1a01TVq4eAgiXONZBtBRkT3BtQA8BGg/edit?usp=sharing
Wireframes:
https://drive.google.com/drive/folders/0BxtpRPyddhwRZGMzUUJ5NUFybGs?usp=sharing


USER STORIES:

*AUTH:*

CREATE ACCOUNT:
As a user, I would like to create an account, so that I can login and play the game.
Acceptance criteria:
- Creating an account should also log that user in.

LOGIN:
As a user, I would like to be able to login, so that I can play the game and the results of my games may be tracked and stored with my account.

LOGOUT:
As a user, I would like to logout after completing a session, so that others who use my computer do not play on my account.

CHANGE PASSWORD:
As a user, I would like to be able to change my password, so that I can login using a new password

ADD BEER:
As a user, I would like to be able to save a beer to my own person list, so that I can remember it later.

UPDATE A BEER:
As a user, I would like to be able to update the beers that I have saved, so that I can correct mistakes I may have made.

DELETE A BEER:
As a user, I would like to be able to delete a beer, so that I can remove those that I no longer care for.


--------------

Technologies Used:
- Handlebars
- javascript
- Single page application
- Jquery
- API
- Ajax
- HTML/CSS
- Bootstrap
- git/github
- Ruby on Rails
- Psql
- Heroku
- Lucidchart

*Planning/Process:*
I did a lot of planning for this project before writing a single line of code.
I found this practice to be incredibly helpful in the last project (tic-tac-toe).
First, I came up with the basic concept and the primary functions of the app.
Then, I mapped out the data-model on a white. Then, I used an online flowchart
tool called Lucidchart to create basic wireframes. After that, I outlined the
project in a ppt deck, link included at the top of this file.

I also created a Trello board (linked above) with a basic Kanban format to track
my work. On this board I worked out the order in which I planned to tackle each
part of the code. That was as follows:
1. Setup front end repository
2. Confirm proper deployment to front-end prod enviorment
3. Setup back end reposity
4. Setup heroku
5. Confirm proper deployment to back-end prod environment
6. Create rails backend (scaffold beer table)
7. Test with curl requests
7. Create one to many relationship between users and beers
8. Test with bin/rails console
9. Create basic front-end
10. Create auth functions
11. Test auth with curl requests
12. Create front end for auth
13. Test front end for auth
14. Create functions for beer CRUD actions
14. Create basic front end for beer CRUD actions
15. Test beer front end

After thoroughly testing that I had met the basic requirements, I went on to
update my project with a bootstrap template for the homepage including a carousel.
I also moved all my forms into bootstrap templates.

I also researched a 3rd party API, called brewerydb, and began making successful
curl requests to get beers from their db.

*Biggest issues while build the app:*
I was able to meet basic requirements for the project very quickly, so I spent
most of my time learning bootstrap and handlebars and improving the UI.

My biggest issue was probably traversing the DOM with jquery to find data
attributes. I learned a lot from this. I used what I learned to pre-fill the
fields in the beer update form with the existing values.

*Important skills acquired:*
Much better understanding of jquery, bootstrap, and handlebars.

*Unsolved problems for future iterations*
I would very much like to return to this project and add a beer directory where
the user could find beers in the 3rd party db and add them to their list.
