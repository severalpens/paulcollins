---
title: AWS Fargate
date: "2021-08-23T22:40:32.169Z"
description: ""
---
I found a video on AWS Fargate so I have given it a go and successfully deployed an auth0 webflux template.

Fargate is a Docker container deployment service that negates the need for an EC2 instance. Hopefully this will be a lot cheaper. I'd say its also best practice for deploying docker images so if its not too expensive I'll use it from now on.

I also watched a few more docker videos so I think I'm now beyond the basics and should be able to add / edit images, containers, and dockerfiles. The next steps will be learning 'docker compose' then Kubernetes.

 Notes for Fargate Deployment

- Create an ECR repository in AWS with the same name as the repo (auth0-webflux)
- Click 'View push commands' and follow the instructions.
- In AWS, go to ECS and create a task definition. Add the pushed image as a container definition in the task definition.
- Create a cluster in ECS. Got to the Tasks tab in the cluster and click 'Run new Task'
- In the new task, click 'Details' tab and use the public IP to verify successful deployment.