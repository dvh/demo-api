/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
 * Alle stijlen ophalen
 * Endpoint om alle stijlen op te halen. @TODO: Voeg hier eventueel extra informatie toe over het filteren, pagineren, etc.
 *
 * returns List
 */
// const listStijlen = async () => {
const listStijlen = async (params) => {
  try {
    const mockResult = await Service.applyMock('StijlenService', 'listStijlen', params);
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
 * Stijl ophalen
 * Stijl ophalen
 *
 * id String id
 * returns listBieren_200_response_inner_stijl
 */
// const retrieveStijl = async ({ id }) => {
const retrieveStijl = async (params) => {
  try {
    const mockResult = await Service.applyMock('StijlenService', 'retrieveStijl', params);
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
  listStijlen,
  retrieveStijl,
};
