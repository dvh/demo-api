/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
 * Nieuwe brouwerij aanmaken
 * Nieuwe brouwerij aanmaken
 *
 * returns listBrouwerijen_200_response_inner
 */
// const createBrouwerijen = async () => {
const createBrouwerijen = async (params) => {
  try {
    const mockResult = await Service.applyMock('BrouwerijenService', 'createBrouwerijen', params);
    if (mockResult !== undefined) {
      if (mockResult.action === 'reject') {
        throw mockResult.value;
      }
      return mockResult.value;
    }
    return Service.successResponse(params);
  } catch (e) {
    const status = typeof e.status === 'number' && e.status > 0 ? e.status : 400;
    const message = e && e.message ? e.message : 'Er is een fout opgetreden.';
    throw Service.rejectResponse({
      message,
      detail: e.detail || message,
    }, status);
  }
};

/**
 * Brouwerij wijzigen
 * Brouwerij wijzigen
 *
 * id String id
 * returns listBrouwerijen_200_response_inner
 */
// const editBrouwerij = async ({ id }) => {
const editBrouwerij = async (params) => {
  try {
    const mockResult = await Service.applyMock('BrouwerijenService', 'editBrouwerij', params);
    if (mockResult !== undefined) {
      if (mockResult.action === 'reject') {
        throw mockResult.value;
      }
      return mockResult.value;
    }
    return Service.successResponse(params);
  } catch (e) {
    const status = typeof e.status === 'number' && e.status > 0 ? e.status : 400;
    const message = e && e.message ? e.message : 'Er is een fout opgetreden.';
    throw Service.rejectResponse({
      message,
      detail: e.detail || message,
    }, status);
  }
};

/**
 * Alle brouwerijen ophalen
 * Endpoint om alle brouwerijen op te halen. @TODO: Voeg hier eventueel extra informatie toe over het filteren, pagineren, etc.
 *
 * type String  (optional)
 * returns List
 */
// const listBrouwerijen = async ({ type }) => {
const listBrouwerijen = async (params) => {
  try {
    const mockResult = await Service.applyMock('BrouwerijenService', 'listBrouwerijen', params);
    if (mockResult !== undefined) {
      if (mockResult.action === 'reject') {
        throw mockResult.value;
      }
      return mockResult.value;
    }
    return Service.successResponse(params);
  } catch (e) {
    const status = typeof e.status === 'number' && e.status > 0 ? e.status : 400;
    const message = e && e.message ? e.message : 'Er is een fout opgetreden.';
    throw Service.rejectResponse({
      message,
      detail: e.detail || message,
    }, status);
  }
};

/**
 * Brouwerij verwijderen
 * Brouwerij verwijderen
 *
 * id String id
 * no response value expected for this operation
 */
// const removeBrouwerij = async ({ id }) => {
const removeBrouwerij = async (params) => {
  try {
    const mockResult = await Service.applyMock('BrouwerijenService', 'removeBrouwerij', params);
    if (mockResult !== undefined) {
      if (mockResult.action === 'reject') {
        throw mockResult.value;
      }
      return mockResult.value;
    }
    return Service.successResponse(params);
  } catch (e) {
    const status = typeof e.status === 'number' && e.status > 0 ? e.status : 400;
    const message = e && e.message ? e.message : 'Er is een fout opgetreden.';
    throw Service.rejectResponse({
      message,
      detail: e.detail || message,
    }, status);
  }
};

/**
 * Brouwerij ophalen
 * Brouwerij ophalen
 *
 * id String id
 * returns listBrouwerijen_200_response_inner
 */
// const retrieveBrouwerij = async ({ id }) => {
const retrieveBrouwerij = async (params) => {
  try {
    const mockResult = await Service.applyMock('BrouwerijenService', 'retrieveBrouwerij', params);
    if (mockResult !== undefined) {
      if (mockResult.action === 'reject') {
        throw mockResult.value;
      }
      return mockResult.value;
    }
    return Service.successResponse(params);
  } catch (e) {
    const status = typeof e.status === 'number' && e.status > 0 ? e.status : 400;
    const message = e && e.message ? e.message : 'Er is een fout opgetreden.';
    throw Service.rejectResponse({
      message,
      detail: e.detail || message,
    }, status);
  }
};

module.exports = {
  createBrouwerijen,
  editBrouwerij,
  listBrouwerijen,
  removeBrouwerij,
  retrieveBrouwerij,
};
