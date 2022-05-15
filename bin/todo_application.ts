#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { TodoApplicationStack } from '../lib/todo_application-stack';

const app = new cdk.App();
new TodoApplicationStack(app, 'TodoApplicationStack', {
  env: { account: '318944023972', region: 'us-east-1' }
});
