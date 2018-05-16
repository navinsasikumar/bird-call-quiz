/**
 * Calls.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: { type: 'string', required: true  },
    path: { type: 'string', required: true  },
    type: { type: 'string', required: true  },
    direction: { type: 'string', required: true  },
    length: { type: 'string', required: true  },
    pitch: { type: 'string', required: true  }
  }
};

