# Chatty - Real time online chat engine using ExpressJS + Faye + MySQL

I'm new to JS and this is my first exercise to build something simple and working. I have tested it and this works fine :)

# Setup Instructions - Software

0) Install NodeJS - Instructions here : https://nodejs.org/en/download/
1) Install faye - use "npm install faye" (more information here : https://faye.jcoglan.com/download.html)
2) Install ExpressJS - use "npm install express --save"
3) Install Mysql DB (I dont know which OS you are trying it on, so please refer to Mysql installation instructions)
4) Install Mysql Server extension for Node - use "npm install mysql --save"
5) Install nodemon - "npm install -g nodemon" [This helps us not to restart node everytime]

# Setup Instructions - Mysql 

(I have hard coded the MySQL settings for this exercise. So the instructions below are for the same, so that there will no more settings required to change)

0) Configure Mysql with a user "root" and password as EMPTY
1) Start Mysql Instance
2) Create a new database by name "chatty"
3) Import the data dump from the file "chatty_2017-03-18.sql" located under "DB" folder (Command to be used : mysql -u root -p  < chatty_2017-03-18.sql )

# Setup Instructions - NodeJS

0) Copy the source from folder "chatty" (I just setup on my other machine and just copy pasted the whole folder)
1) My project also has package.json with the dependencies listed.
2) Open the file "chatty/routes/chatti.js" and change the Faye server IP on line #42 (Acknowledged,this is bad practice, we need to externalize it)
3) Once done, run the server using "nodemon app.js" (This should be done under the folder "chatty")
4) The server is configured on 8099 (Try accessing the homepage from browser using "http://<<your_IP>>:8099/)

# How to use Chatty:

0) Click on the button "Get you unique private chat room" and generate a unique link and PIN. 
1) Share this with your contact.
2) Your contact - uses the URL and PIN above and your team is all set to talk in private.
3) No history is stored or logged anywhere.
4) You can invite any number of people you want. (all they need is valid URL and Pin generated by chatty)
5) The design is inspired by how WebEx works. 

# Others:

0) For every unique URL and PIN generated from user, we will see an entry on "room" table under the Mysql DB
1) To get an initial glimpse, I have put screenshots under "docs"
2) More documentation and screenshots are under "docs". This file have more information on few assumptions made.
