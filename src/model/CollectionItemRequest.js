/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.0.12
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CollectionItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CollectionItem'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.CollectionItemRequest = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.CollectionItem);
  }
}(this, function(ApiClient, CollectionItem) {
  'use strict';




  /**
   * The CollectionItemRequest model module.
   * @module model/CollectionItemRequest
   * @version 1.0.12
   */

  /**
   * Constructs a new <code>CollectionItemRequest</code>.
   * Request to get the list of collection items
   * @alias module:model/CollectionItemRequest
   * @class
   * @param items {Array.<module:model/CollectionItem>} List of items
   */
  var exports = function(items) {
    var _this = this;

    _this['items'] = items;
  };

  /**
   * Constructs a <code>CollectionItemRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CollectionItemRequest} obj Optional instance to populate.
   * @return {module:model/CollectionItemRequest} The populated <code>CollectionItemRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [CollectionItem]);
      }
    }
    return obj;
  }

  /**
   * List of items
   * @member {Array.<module:model/CollectionItem>} items
   */
  exports.prototype['items'] = undefined;



  return exports;
}));


