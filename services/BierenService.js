/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
 * Nieuwe bier aanmaken
 * Nieuwe bier aanmaken
 *
 * returns listBieren_200_response_inner
 */
// const createBieren = async () => {
const createBieren = async (params) => {
  try {
    const mockResult = await Service.applyMock('BierenService', 'createBieren', params);
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
 * Bier wijzigen
 * Bier wijzigen
 *
 * id String id
 * returns listBieren_200_response_inner
 */
// const editBier = async ({ id }) => {
const editBier = async (params) => {
  try {
    const mockResult = await Service.applyMock('BierenService', 'editBier', params);
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
 * Alle bieren ophalen
 * Endpoint om alle bieren op te halen. @TODO: Voeg hier eventueel extra informatie toe over het filteren, pagineren, etc.
 *
 * returns List
 */
// const listBieren = async () => {
const listBieren = async (params) => {
  try {
    const mockResult = await Service.applyMock('BierenService', 'listBieren', params);
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
 * Bier verwijderen
 * Bier verwijderen
 *
 * id String id
 * no response value expected for this operation
 */
// const removeBier = async ({ id }) => {
const removeBier = async (params) => {
  try {
    const mockResult = await Service.applyMock('BierenService', 'removeBier', params);
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
 * Bier ophalen
 * Bier ophalen
 *
 * id String id
 * returns listBieren_200_response_inner
 */
// const retrieveBier = async ({ id }) => {
const retrieveBier = async (params) => {
  try {
    const mockResult = await Service.applyMock('BierenService', 'retrieveBier', params);
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
  createBieren,
  editBier,
  listBieren,
  removeBier,
  retrieveBier,
};
