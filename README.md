# White Label Loyalty AWS CDK Infrastructure Project

We've decided to venture into e-commerce. A software development team has been assembled that'll
soon start working on an e-commerce backend application. 

## Your task
Your task is to have the infrastructure needed to deploy the application ready in AWS. Contained within this repository is some Typescript AWS CDK code with our current stack. Unfortunately it doesn't actually do very much as yet. Your task is to extend this infrastructure code with the following features.

### Features
1. The entire infrastructure should be in a new VPC.
2. The application should be highly available. Therefore, we should be able to replicate the infrastructure (when logical) in two Availability Zones in the future (Hint: This is precisely what you need to do for the Bonus below!). You should setup the networking while keeping this end in mind.
3. The backend team needs an AWS EC2 instance to serve as an application server. This should be publicly accessible via the internet.
4. They also require an RDS instance, but it should be hidden away from public access, with only the application EC2 instance having access to the RDS instance.
5. The team would also need two copies of the same environment, a prod and a staging env.
6. The team thinks they'd probably want to re-use the networking infrastructure for other future projects. They'd also like to re-use the database infrastructure for other applications in the future as well. You should write the CDK templates/code in a way that makes it easy to do this in the future.
7. All the instances should be kept safe behind relevant firewall configs.

#### Bonus (Optional)
1. For enabling high availability, it would be nice to have the EC2 servers set to autoscaling within the two AZ. This may warrant a load balancer.
2. Similarly, it would be nice to have an RDS standby in the other AZ.
3. The team would ideally want the DBs to have one way access to the internet for auto-updates. They aren't sure how to go about doing it since the RDS DB instances shouldn't be public.

## Code

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
