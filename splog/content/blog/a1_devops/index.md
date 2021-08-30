---
title: Deploying a MERN Stack
date: "2021-04-28T22:40:32.169Z"
description: Deploying a secured MERN Stack App to AWS EC2 - A description of attempted solutions and problems faced.
---

## Background
### Existing Skills
For background my current skillset is programmer centric eg:
  - Full stack javascript development 
  - Git version control
  - Using high level hosting services eg Heroku, AWS Amplify

### Newly Acquired Skills
Some of the DevOps skills I've recently acquired include:
- Docker
  - Creating and running basic Dockerfiles on local machine
  - Creating basic Docker-compose yaml files
  - Deploying to remote repositories eg dockerhub

- Ubuntu
  - Serving nodejs based apps using PM2

- VIM
  - Editing and saving files on the VM eg .env files.

- AWS
  - Using .pem files for remote access.
  

## EC2
I've probably been a bit too rushed when attempting these but I've tried the following:
- Amazon Linux 2 AMI
  - I launched an instance and tried to follow the recommended instructions but constantly ran into errors. I can deploy basic unsecured node apps but run into a lot of problems trying to secure the ports.
  - PM2 would run but I would get no response on the actual page.
- Ubuntu v20
  - Similar to the Amazon image. I'm currently learning how to use Nginx.
  - Let's encrypt doesn't seem to work on EC2 hosted images.

## Elastic Beanstalk
I thought this would be a shortcut to create a secure EC2 VM. It is but on the downside there is limited control. 
- When I remote in it gives a warning that any changes to the VM may be overridden. 
- I've used the provided method of zipping and uploading a node app but this doesn't provide enough control to deploy a MEAN app. 
- I also want to be able to pull the app repo from github rather than zipping and uploading.

## Lightsail & EB Docker Host
I've also done some experimentation around setting up a docker host via EB and AWS Lightsail but haven't spent much time on this.

## AWS Marketplace 3rd Party EC2 Image
I've tried [https://aws.amazon.com/marketplace/pp/B08ZJK8G51](https://aws.amazon.com/marketplace/pp/B08ZJK8G51) but again having trouble securing the ports.

## Conclusion
I'm close on multiple fronts but will currently have to wave the white flag. There seem to be some out-dated or overly broad work instructions from AWS, Nginx etc. There are public tutorials but nothing succinct or relevant enough that I have successfully implemented. Once I have more time and can concentrate on one method I should have some success.










