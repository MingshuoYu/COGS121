
Team Name: Youtuber Hunter

Team Members' Name: Mingshuo Yu, Jiayu Luo, Weilin Liu, Zibin Dong
  
  Jiayu Luo has done a gread job designing and coding the frontend of our application and devoted herself into polishing them as our needs growing.
  Weilin Liu, Zibin Dong, Mingshuo Yu also contributed designing prototype and design core functionality of application.
  Zibin Dong has created ajax interaction between user and our application.
  Mingshuo Yu has created ajax interation between user and our application.
  Weilin Liu connected our website with firebase api to allow user sign up and log in.
  Zibin Dong has connected our website with SQL database to allow our application to access data.
  Mingshuo Yu has connected user input to website url to pass paramater to different website pages.
  All members contributed debuging and refurbishing our project as the class goes.
  
 
File Description:
 
server.js: In this file, the code is mainly for connecting the sqlite database and handle the get requests from other files. We used serveral sql commands to get the data that we want from the database.
     
bookmark.html: In this file, code is designed to display the user's account page and display user's saved youtuber list. This page retrives youtuber list information from user's firebase account to display them using jquery, ajax.
     
home_company.html:	This file is the main page that will list out youtuber list with a default value 100000 for minimum Ksubscriber(which will display nothing, since no youtubers have min 100000k subscribers), and all categories. And using jquery, ajax, with SQL database to allow user input to interact with website to display relevant youtuber list with min Ksubscriber number and category.

login_company.html: This file displays user login interface and implements user login functionality using firebase.
     
signup_company.html: This file displays user sign up interface and implements user sign up functionality using firebase.

youtuber_a.html: This file displays YouTubers' details information and has a save button for users to save YouTuber to My YouTuber Collection. In the file, the code is mainly devided into two portion. The first portion is to handle the save function. In this portion, we use the firebase to save the selected youtuber to the user's profile in the firebase. The second portion is to handle the display the searched the youtuber from the previous page. In this portion, we used ajax call to get the data of searched youtuber from our database and file these data to the webpage.


Google Slide Link: https://docs.google.com/presentation/d/e/2PACX-1vTXfye3WXJ4jfPBdRg5h97aWjHZJ8YHbvjgFFrggCa1XEN_WRBzlSZy6WPQaA-UqKjQZRKf7Kl_RZf7/pub?start=false&loop=false&delayms=3000

Video Link: https://www.youtube.com/watch?v=aPW8VuVaYF8

  
  
  

