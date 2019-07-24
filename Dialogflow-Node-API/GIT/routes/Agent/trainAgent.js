
const express = require('express');
const router = express.Router();
const dialogflow = require('dialogflow').v2beta1;

const googleapi = require('googleapis');
const credentials = require('../../Cred');
async function runSample(req,res) {
    
const agentClient = new dialogflow.AgentsClient(credentials.config);
const projectPath = agentClient.projectPath(credentials.project_id);
const agent = {   
    displayName: 'arpan',
    languageCode : 'en-US',   
};
const trainAgentRequest = {
    parent: projectPath,
    agent : agent
    };
    
const responses = await agentClient.trainAgent(trainAgentRequest);
console.log(responses);

const responsetouser = responses;
  let respData = {
    data: responsetouser
  };
  res.send(respData);
}

module.exports = {
 runSample : runSample 
 }
