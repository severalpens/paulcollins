---
title: AWS Cost Management
date: "2021-08-16T22:40:32.169Z"
description: ""
---

After experimenting with EB for a while I noticed a rise in cost (approx $15) over a week. I took down all EB /EC2 instances. I'll start looking more closely at alternatives. 

I was happy to find that my Amplify applications which run on demand had not generated any costs. If there was a Java option in Amplify, that would be ideal.

Lambda is a serverless option similar to Amplify that can run Java code but it looks like it might be difficult to integrate a reactive api inside an class designed to handle events. That said there was an 'application' version so maybe I was looking at the wrong template.

The only other viable option left is Fargate which automates some aspects of docker container deployment. 

I found some good full stack templates in Auth0 so I might start building these in Docker for now and come back (again) to deployment. If nothing else I can revert to EB if all else fails.
 