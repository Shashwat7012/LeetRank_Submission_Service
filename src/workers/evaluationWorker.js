// import { Worker } from "bullmq";
const { Worker } = require('bullmq');
const redisConnection =  require('../config/redisConfig');
const axios = require('axios');

function evaluationWorker(queue){
   new Worker('EvaluationQueue',async job =>{
        if(job.name === 'EvaluationJob'){
            
            try {
                const responce = await axios.post('http://localhost:3004/sendPayload', 
                    {
                    userId: job.data.userId,
                    payload: job.data
                    }
                )
                console.log(responce);
                console.log(job.data);
            } catch (error) {
                console.log(error);
            }


           
        }
    },{
        connection: redisConnection
    });
}
  

module.exports = evaluationWorker;