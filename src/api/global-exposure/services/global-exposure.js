'use strict';

/**
 * global-exposure service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-exposure.global-exposure');
