---
title: Java Reactive Rest Deployment
date: "2021-08-06T22:40:32.169Z"
description: ""
---


Minutes before going completely insane, I have successfully deployed the reactive application to Elastic Beanstalk. The missing pieces may have been:

.ebextensions/env.config (as per corretto sample)
application.properties  (containing 'server.port=5000' line)
I was also caught out by the console page showing 'health' as 'severe'. This is probably just a consequence of the home path ('/') not returning any content:


Note the final log specifies the update completed successfully.

I'm not sure why https is not available or configurable. I couldn't find an option in EB, the related EC2 instance or Route53 (DNS config).

EB (other than as a host for Docker) seems to fast becoming out of date. I'll need to get up to speed with Docker ASAP.


The url will be used as the address when the full stack is completed but at the moment the EC2 instance will be stopped as a cost saving measure. 

I was also able to deploy an Auth0 template.

 