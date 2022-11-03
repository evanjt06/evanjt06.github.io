---
layout: ../../layouts/project.astro
title: SafeTracker
client: Self
publishDate: 2022-06-10 00:00:00
img: https://images.unsplash.com/photo-1595590424283-b8f17842773f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80
description: SafeTracker, an AI-based threat mitigation webapp that aims to make schools safer by recognizing potential threats faster and more efficiently. 
link: https://www.youtube.com/watch?v=RCUOWxz2eRk
tags:
- React.js
- TailwindCSS
- Python
- Tensorflow
- OpenCV
- MySQL
- AWS
---

SafeTracker is an AI-based threat recognition and mitigation app that aims to make schools safer by recognizing potential threats faster and more efficiently. There are three main features: the live feed / webcam analyzer, Discord Bot sentiment and linguistics analyzer, and the Twitter profile feed analyzer.

In the live feed / webcam analyzer, users are able to utilize our real-time object detection livestream feature to be quickly alerted via text message whenever a weapon such as a gun is detected on their preset livestream. This acts as an autonomous security camera that ensures any potential threats can be recognized and the proper authorities be notified within seconds of appearing within the camera's vision. Within the dashboard, users can check the exact date, time, and location of the recognized threat, with a picture of the potential intruder attached taken by the app's camera.

While this is the main feature, users are also able to add a custom-built Discord Bot that uses natural language processing and emotional sentiment to monitor various servers for malicious threats or any messages that encourage violence. Simply by typing in "/profile" and the name of Discord user, the bot will be able to pull up all flagged messages the scanned user has sent as well as a pie chart depicting what his/her relative emotions are, ranging from friendly, anger, fear, and more. Server administrators are also sent hourly updates within their servers with any flagged messages and the general emotional sentiment of all users, to ensure the utmost safety and track down any user who is posting threatening messages.

Lastly, users have the option to scan any Twitter profile and check whether or not they have posted any threatening or malicious messages intending to harm others. Similar to the Discord Bot, it uses an advanced text classification machine learning model, and users are subsequently notified via text message when an online threat is detected. Users can additionally view the exact flagged message, user tag, user name, and a pie chart of the emotional sentiment (friendly, anger, fear, etc...) in the Twitter feed dashboard and are able to contact the proper authorities if necessary.  
