'use strict';

/**
 * concierge service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::concierge.concierge');
