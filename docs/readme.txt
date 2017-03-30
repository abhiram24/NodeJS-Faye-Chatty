Assumptions:

1) No HTTP sessions used
2) No user authentication is used
3) Private conversation can happen with more than 2 people

Few things about me:

1) This is the first time I'm coding in NodeJS. After some reading I found ExpressJS works fine. (Recent more reading, just revealed to me that I could have build a better solution using http://loopback.io/)
2) I'm not a UI person, I'm a backend guy and my UI knowledge is very limited or basic
3) Few values related to DB and Faye Client have been hard coded. The best practice is to externalize it.

Technologies used:

1) Faye is used as Pub/Sub server. (Info here : https://faye.jcoglan.com/). (Reason: Its light weight and from my reading I found it apt for this MVC)
2) ExpressJS - Node JS is very raw and ExpressJS provides good boiler plate code and good wrappers. 
3) Mysql - As a simple table which stores information related to PIN and URL.

About Chatty:

1) The simple design was inspired on how webex works. (Send URL and PIN).
2) I did a simple load test using Pylot on my localhost (MacOs, 16GB RAM 1600 Mhz DDR3, i7 4 cores) and simulated 350+ time-sliced requests and did not see any performance impacts.
3) Once the above has been setup, just hit localhost:8099/ on you browser and start chatting

Operational setup:

	Assumptions:
	    1) Message site per exchange is assumed at 120 Bytes
	    2) No compression or any technique is used
	    3) No failover mechanism is planned here


