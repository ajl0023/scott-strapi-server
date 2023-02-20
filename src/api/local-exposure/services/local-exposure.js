'use strict';

/**
 * local-exposure service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::local-exposure.local-exposure');
