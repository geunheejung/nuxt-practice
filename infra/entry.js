#!/usr/bin/env node

import { App } from '@aws-cdk/core'

import { NuxtStack } from './nuxt-stack.js'

const app = new App()

new NuxtStack(app, 'WaniSampleNuxtStack')