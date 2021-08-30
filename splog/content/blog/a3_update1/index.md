---
title: TODO Overload
date: "2021-05-17T22:40:32.169Z"
description: An update on current projects.
---

## TODO Overload
I think I've officially spread myself too thin. I have a limited time left to spend on these projects before they risk being abandoned. It happens but I'll try to persist at getting them done without losing sight of higher priorities.


### severalpens.com
I was talking to [Arc_Anya](https://twitch.tv/arc_anya), a Twitch streamer who is working on an Ethereum project using Vuex(Vue) & Metamask. Seeing as my landing page is sparse and doesn't demo anything at the moment, I've created a Vite(Vue)/Tailwind project to replace the current site. This will be an easy way to integrate/collaborate any of Arc_Anya's projects as well as get some skills in Vue, Tailwind, Metamask, client-side Ethers. The template I have created looks good but I hit a snag with deployment. 

I wanted to deploy it to Amplify but because Amplify requires the use of an 'a-record' and GoDaddy doesn't have these, I'll have to transfer the domain to 'Route 52' on AWS. I'm paranoid about messing this up. It shouldn't be that complex but there's often some weird rules involved with domain name transfers and DNS servers. I'll practice on some other domains first.

### TokenVortex is now TokenTester.com
I'm pretty sure I just didn't check when I chose 'tokenvortex' but tokenvortex.com now costs $6,423 to obtain. Either someone has a lot of faith in me or there are other less narcissistic reasons involved. TokenTester.com was available for $20 so I changed the name.

I've been frozen in DevOps overthink with this project as well. I'm migrating the project from Angular to React. I really like the Auth0 template I deployed to an EC2 VM but I now have the classic DevOps problem of a very manual and error prone deployment for each new release. AWS has a myriad of solutions (see blog - 'Deploying a MERN Stack'). The ideal being Docker containers but I also want to look at Elastic Beanstalk. This might be unnecessary but I'm curious.

Once the deployment pipeline has been established, it should be fairly downhill from there as all that should be needed is to transfer the code from the Angular repo.

### Ethers Tutorials
I was hoping my EthersV5 tutorial might pick up some of the very mild success I had with my original series. The placeholder tutorial is a bit scrappy but I'm still disappointed with it's view count. I want to finish this properly so its at least out of my hands. 

I did the Sequence diagrams in a very 'agile' way and didn't worry about the rules too much before doing them. After some research, what I have is loosely [valid](https://www.youtube.com/watch?v=pCK6prSq8aw&t=315s). I do want to update the arrows to reflect sync/async calls though.

Once the sequence diagrams are up to date, I need to get up to speed with Metamask. This is a tutorial gold mine as front end transactions are poorly explained by both Ethers and Metamask. The Ethers instructions in their current state don't work. This will also help a lot in any collaboration with ArcAnya.


### Sql Server & Python
It seems Sql Server is soon to reenter my life. It'll be good at least to get back to a field where I have more depth of knowledge. Even so I'll need to get up to speed, especially around dates and UTC parsing. 

There's an extensive course on Datacamp I want to complete. Also Datacamp's course on Python had some interesting methods for data cleansing that I think have become industry standard.


### Reality Check
Finishing these projects would be an excellent way to round off my sabbatical. In reality I may have to accept imperfection. I'll probably just find other rabbit holes in the process anyway.

