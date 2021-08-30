---
title: Java Reactive Rest Deployment
date: "2021-08-06T22:40:32.169Z"
description: ""
---

I have returned to the conundrum of getting the templated reactive-rest-service repo from spring-boot deployed to AWS EB. Its proving difficult but educational in the process.

The corretto repo deploys easily to AWS Elastic Beanstalk. The aim of the game has been to merge whatever it is that works in corretto to the reactive-rest-service repo so that it deploys successfully. 

In the course of trying however I've had to disect every part of both repos and have been learning how Java projects and reactive programming in Java is done.

 

pom.xml

The pom.xml file is the package management file in java. The <properties> section stores constant variables used in the pom.xml file. The <artifactId> is the project name and <groupId> is the main library. <packaging> can be 'jar' or 'war'. 'war' projects are hosted via a tomcat server whereas as 'jar' projects seem to be self contained. <dependencies> are external libraries. I'm not too sure on the C# equivalent of <plugins> but I'm speculating they're utilities that are not compiled with the project.

To compile/run a project I have been using the following commands (using gitbash) in vs code:

mvn clean install (builds the project)
mvn clean package (??..tba)
mvn spring-boot:run (to start the project/server)
The corretto sample has more specific commands in it's Buildfile and Procfile:

build: mvn assembly:assembly -DdescriptorId=jar-with-dependencies
web:java -jar target/sample-app-1.0-jar-with-dependencies.jar
 
I'm also experimenting with Intellij and Eclipse but find VS Code is more bare-bones so I can get a clearer picture on what is going on.

 

MVC pattern in reactive-rest-service

The 'reactive' pattern in Java seems similar to the MVC pattern in .Net where convention dictates where the endpoint is routed. A ConfigurableApplicationContext instance handles dependency injection on startup. This DI system must route requests by convention to a specific router (eg GreetingRouter) . The router has a @Bean decorator attribute. I'm not sure on the meaning/purpose. The handler (eg GreetingHandler) object processes the routed request.

 

Deploying to AWS EB

EB can accept .jar files or all the project files in a zip file. If the zip is uploaded then a 'Buildfile' and 'Procfile' is needed with the build and run commands respectively. 

At this stage I can upload the reactive-rest-service using .zip but its not being provisioned with SSL after deployment. I'm looking into this.

 
