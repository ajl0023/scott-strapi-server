'use strict';

/**
 * new-development service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::new-development.new-development');
