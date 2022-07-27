---
layout: ../../layouts/project.astro
title: Nutrition360
client: Self
publishDate: 2022-06-04 00:00:00
img: https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80
description: Nutrition360, an iOS application for tracking and analyzing nutritional data.
link: https://github.com/evanjt06/NutritionGram
link2: https://youtu.be/X0UeJ3Vvjxg
tags:
- Swift (SwiftUI)
- CreateML
- CoreData
---

Nutrition 360 is an iOS app that tracks the foods you eat and monitors your nutritional intake per meal basis, and presents a thorough consumption trend to give you nutritional insights. It utilizes computer vision to recognize foods based on pictures taken and enables users to enter their foods via voice recognition. Internally, it also uses convolutional neural networks, specifically the Inception v3 model, to process the food image as well as using natural language processing to make it easier for the user to identify food items and get the exact nutritional data needed.

This app provides a simple and fast method to track Meals and view Progress. The Meals Tracking feature allows users to add foods categorized into four meal types: Breakfast, Lunch, Dinner, and Snacks. The user can add foods into their food log by 1) taking a picture of the food and the app will auto recognize it via AI Vision, 2) using voice/speech recognition capabilities to add a food, and 3) using a manual search to add a food. Every food entry also has a picture of the food and nutritional information on its carb, protein, fat, fiber, and calorie amount. The food log has a list of all the foods consumed on a specific day, which its view can be changed by selecting a different day on the calendar. At the bottom of the food log, it shows the total number of calories along with whether or not the user has satisfied the recommended daily calorie intake threshold. The Progress section shows a line chart of the user's calorie intake for each day within a week. It has the option to switch between previous weeks and the following weeks. 


