const testService = require('../services/submissionService');

async function pingRequest(req, res) {

    console.log(this.testService);

    const responce  = await this.testService.pingCheck();
    return res.send({data : responce});
}


//TODO
async function createSubmission(req,res) {
    console.log(req.body);
    const responce = await this.submissionService.addSubmission(req.body);
    return res.status(201).send({
        error: {},
        data: responce,
        success: true,
        message: 'Created Submission Successfully'
    })
}

module.exports = {
    pingRequest,
    createSubmission
};
