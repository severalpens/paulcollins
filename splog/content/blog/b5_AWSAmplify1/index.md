---
title: AWS Amplify
date: "2021-08-06T22:40:32.169Z"
description: "amplifydemo.severalpens.com"
---

I've digressed from Java and have been working on redploying some example sites.

One of my examples is from recruitment is https://amplifydemo.severalpens.com/. Re-deploying it was difficult as I'd removed the AWS setup and back end. I also ran into version compatibility that was poorly documented eg 'Error: bindings not accessible from watchpack-chokidar2:fsevents' turned out to be package incompatibility with misleading solutions on StackOverflow. I'm not sure which package. I copied the package.json from a template then added in my custom libraries. After this it deployed successfully.

The reasons I took the site down were cost and security. There is no auth setup so its open to the public so vulnerable to DoS and database storage blowout. I'll need to mitigate these risks so I can leave it up.

In my opinion Amplify along with Google Firebase are valuable developments in client side dev-ops and are worth keeping an eye on. At the moment though, Amplify is still in its infancy so can be difficult to diverge from a templated deployment.

Update: I've added generic auth to the app as a firewall security measure as I couldn't determine how to limit dynamodb collection size without switching from 'on-demand' to a 'provisioned' setup.