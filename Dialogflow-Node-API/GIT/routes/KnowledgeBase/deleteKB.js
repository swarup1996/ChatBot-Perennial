const express = require('express')
const router  = express.Router();
const dialogflow = require('dialogflow').v2beta1
//const cors = require('cors')
const credentials = require ('../../Cred');
//DELETES ONLY THOSE KNOWLEDGE BASES THAT DO NOT HAVE A DOCUMENT
//SHOWS ERROR: THE KNOWLEDGE BASE HAS A DOCUMENT IN IT. IF YOU STILL WANT TO, AND THE TERMINATES
async function deleteKnowledgeBase(req,res)

    // Instantiate a DialogFlow client.
    
 
    // Instantiate a DialogFlow KnowledgeBasesClient.
    const client = new dialogflow.KnowledgeBasesClient(credentials.config,credentials.project_id);
    const knowledgeBaseFullName = 'projects/credetials.project_id';

    const [result] = await client.deleteKnowledgeBase({
      name: knowledgeBaseFullName,
    });

    console.log('knowledge Base Deleted');
    res.send('knowledge Base Deleted');
    //console.log(`Knowledge Base deleted`);
    
    // [END dialogflow_delete_knowledge_base]


  module.exports = {
    deleteKnowledgeBase: deleteKnowledgeBase
}
