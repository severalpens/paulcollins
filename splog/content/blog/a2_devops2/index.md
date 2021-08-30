---
title: MERN Stack App to AWS EC2 Success!
date: "2021-05-06T22:40:32.169Z"
description: EC2 Deployment finally completed.
---

## Successfully Deployed
This is just a follow up on my last dev-ops post. I successfully deployed an EC2 instance:
[https://paulcollins.dev](paulcollins.dev) mainly thanks to this tutorial: [https://www.youtube.com/watch?v=NjYsXuSBZ5U&t=450s](https://www.youtube.com/watch?v=NjYsXuSBZ5U&t=450s).

Even after I settled down and concentrated on one base level approach, I still had a lot of problems. The .env file worked with the Express API but not the React build. AWS domain address was too long then when I adjusted Nginx I found it was not elligible for a 'let's encrypt' certificate so I had to find a random unused one. My API port was pointing to port 80 instead of 3001 because it was picking up the .env file I thought was not being read. The tutorial recommended putting the .env file in the 'home' folder. I originally put them in the repo but I think I lost them somehow so I'm not sure if this was why. I named the Nginx config file as 'default2' instead of 'paulcollins.dev' as recommended. It might have been a different cause but I suspected the '.dev' extension was causing bugs.

There were lots of other small bugs to contend with. I crawled through the tutorial at a snails pace and triple checked everything as I went. At least I've done it once so I've learnt all the main parts involved. The trickiest and most unexpected was how the api is re-routed. I thought port 3001 would be exposed and would have to have a separate certificate applied but instead Nginx, once configured, routes anything starting with /api to the pm2 instance. I had to rearrange the folder architecture in my repo to comply with this configuration.










