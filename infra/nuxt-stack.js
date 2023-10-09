import { LambdaRestApi } from '@aws-cdk/aws-apigateway'
import { Code, Function as LFunction, Runtime } from '@aws-cdk/aws-lambda'
import { Stack } from '@aws-cdk/core'
import { join } from 'path'

export class NuxtStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props)

    const code = Code.fromAsset(join(__dirname, '../dist'))

    new LambdaRestApi(this, 'SampleNuxt', {
      handler: new LFunction(this, 'HomeHandler', {
        runtime: Runtime.NODEJS_12_X,
        code,
        handler: 'handler.render',
      }),
    })
  }
}