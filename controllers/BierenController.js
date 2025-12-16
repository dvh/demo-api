/**
 * The BierenController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/BierenService');

const createBieren = async (request, response) => {
  await Controller.handleRequest(request, response, service.createBieren);
};

const editBier = async (request, response) => {
  await Controller.handleRequest(request, response, service.editBier);
};

const listBieren = async (request, response) => {
  await Controller.handleRequest(request, response, service.listBieren);
};

const removeBier = async (request, response) => {
  await Controller.handleRequest(request, response, service.removeBier);
};

const retrieveBier = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveBier);
};

module.exports = {
  createBieren,
  editBier,
  listBieren,
  removeBier,
  retrieveBier,
};
