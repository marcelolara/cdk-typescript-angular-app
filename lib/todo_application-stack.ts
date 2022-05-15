import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3Deploy from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';

export class TodoApplicationStack extends cdk.Stack {
  constructor( scope: Construct, id: string, props?: cdk.StackProps ) {
    super(scope, id, props);

    const frontendBucket = new s3.Bucket(this, 'TodoApplicationFrontend', {
      websiteIndexDocument: 'index.html',
      publicReadAccess: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true
    });

    const bucketDeployment = new s3Deploy.BucketDeployment(this, 'DeployTodoApplicationFrontend', {
      sources: [s3Deploy.Source.asset(`application/frontend/dist/todo-application`)],
      destinationBucket: frontendBucket
    });
    bucketDeployment.node.addDependency(frontendBucket);
  }
}

