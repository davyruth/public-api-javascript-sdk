/**
 * shutterstock
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Shutterstock) {
      root.Shutterstock = {};
    }
    root.Shutterstock.ImageCreateResponse = factory(root.Shutterstock.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ImageCreateResponse model module.
   * @module model/ImageCreateResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ImageCreateResponse</code>.
   * Image upload information
   * @alias module:model/ImageCreateResponse
   * @class
   * @param id {String} 
   */
  var exports = function(id) {
    var _this = this;

    _this['id'] = id;
  };

  /**
   * Constructs a <code>ImageCreateResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImageCreateResponse} obj Optional instance to populate.
   * @return {module:model/ImageCreateResponse} The populated <code>ImageCreateResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;



  return exports;
}));

