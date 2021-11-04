#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { TestDevopsStack } from '../lib/test-devops-stack';

const app = new cdk.App();
new TestDevopsStack(app, 'TestDevopsStack');
