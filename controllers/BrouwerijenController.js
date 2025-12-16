/**
 * The BrouwerijenController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/BrouwerijenService');

const createBrouwerijen = async (request, response) => {
  await Controller.handleRequest(request, response, service.createBrouwerijen);
};

const editBrouwerij = async (request, response) => {
  await Controller.handleRequest(request, response, service.editBrouwerij);
};

const listBrouwerijen = async (request, response) => {
  await Controller.handleRequest(request, response, service.listBrouwerijen);
};

const removeBrouwerij = async (request, response) => {
  await Controller.handleRequest(request, response, service.removeBrouwerij);
};

const retrieveBrouwerij = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveBrouwerij);
};

module.exports = {
  createBrouwerijen,
  editBrouwerij,
  listBrouwerijen,
  removeBrouwerij,
  retrieveBrouwerij,
};
