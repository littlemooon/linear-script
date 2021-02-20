#!/usr/bin/env node

import { LinearClient } from "@linear/sdk"

const linearClient = new LinearClient({
  apiKey: ""
})

async function getMyIssues() {
  const me = await linearClient.viewer
  const myIssues = await me?.assignedIssues()

  myIssues?.nodes?.map(issue => {
    console.log(`${me?.displayName} has issue: ${issue?.title}`)
  })

  return myIssues
}

getMyIssues()