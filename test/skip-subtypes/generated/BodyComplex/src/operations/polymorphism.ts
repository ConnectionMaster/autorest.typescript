/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "../models";
import * as Mappers from "../models/polymorphismMappers";
import { AutoRestComplexTestServiceContext } from "../autoRestComplexTestServiceContext";

/** Class representing a Polymorphism. */
export class Polymorphism {
  private readonly client: AutoRestComplexTestServiceContext;

  /**
   * Create a Polymorphism.
   * @param {AutoRestComplexTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestComplexTestServiceContext) {
    this.client = client;
  }

  /**
   * Get complex types that are polymorphic
   * @param [options] The optional parameters
   * @returns Promise<Models.PolymorphismGetValidResponse>
   */
  getValid(options?: coreHttp.RequestOptionsBase): Promise<Models.PolymorphismGetValidResponse>;
  /**
   * @param callback The callback
   */
  getValid(callback: coreHttp.ServiceCallback<Models.FishUnion>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getValid(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.FishUnion>): void;
  getValid(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.FishUnion>, callback?: coreHttp.ServiceCallback<Models.FishUnion>): Promise<Models.PolymorphismGetValidResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getValidOperationSpec,
      callback) as Promise<Models.PolymorphismGetValidResponse>;
  }

  /**
   * Put complex types that are polymorphic
   * @param complexBody Please put a salmon that looks like this:
   * {
   * 'fishtype':'Salmon',
   * 'location':'alaska',
   * 'iswild':true,
   * 'species':'king',
   * 'length':1.0,
   * 'siblings':[
   * {
   * 'fishtype':'Shark',
   * 'age':6,
   * 'birthday': '2012-01-05T01:00:00Z',
   * 'length':20.0,
   * 'species':'predator',
   * },
   * {
   * 'fishtype':'Sawshark',
   * 'age':105,
   * 'birthday': '1900-01-05T01:00:00Z',
   * 'length':10.0,
   * 'picture': new Buffer([255, 255, 255, 255, 254]).toString('base64'),
   * 'species':'dangerous',
   * },
   * {
   * 'fishtype': 'goblin',
   * 'age': 1,
   * 'birthday': '2015-08-08T00:00:00Z',
   * 'length': 30.0,
   * 'species': 'scary',
   * 'jawsize': 5
   * }
   * ]
   * };
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  putValid(complexBody: Models.FishUnion, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param complexBody Please put a salmon that looks like this:
   * {
   * 'fishtype':'Salmon',
   * 'location':'alaska',
   * 'iswild':true,
   * 'species':'king',
   * 'length':1.0,
   * 'siblings':[
   * {
   * 'fishtype':'Shark',
   * 'age':6,
   * 'birthday': '2012-01-05T01:00:00Z',
   * 'length':20.0,
   * 'species':'predator',
   * },
   * {
   * 'fishtype':'Sawshark',
   * 'age':105,
   * 'birthday': '1900-01-05T01:00:00Z',
   * 'length':10.0,
   * 'picture': new Buffer([255, 255, 255, 255, 254]).toString('base64'),
   * 'species':'dangerous',
   * },
   * {
   * 'fishtype': 'goblin',
   * 'age': 1,
   * 'birthday': '2015-08-08T00:00:00Z',
   * 'length': 30.0,
   * 'species': 'scary',
   * 'jawsize': 5
   * }
   * ]
   * };
   * @param callback The callback
   */
  putValid(complexBody: Models.FishUnion, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param complexBody Please put a salmon that looks like this:
   * {
   * 'fishtype':'Salmon',
   * 'location':'alaska',
   * 'iswild':true,
   * 'species':'king',
   * 'length':1.0,
   * 'siblings':[
   * {
   * 'fishtype':'Shark',
   * 'age':6,
   * 'birthday': '2012-01-05T01:00:00Z',
   * 'length':20.0,
   * 'species':'predator',
   * },
   * {
   * 'fishtype':'Sawshark',
   * 'age':105,
   * 'birthday': '1900-01-05T01:00:00Z',
   * 'length':10.0,
   * 'picture': new Buffer([255, 255, 255, 255, 254]).toString('base64'),
   * 'species':'dangerous',
   * },
   * {
   * 'fishtype': 'goblin',
   * 'age': 1,
   * 'birthday': '2015-08-08T00:00:00Z',
   * 'length': 30.0,
   * 'species': 'scary',
   * 'jawsize': 5
   * }
   * ]
   * };
   * @param options The optional parameters
   * @param callback The callback
   */
  putValid(complexBody: Models.FishUnion, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  putValid(complexBody: Models.FishUnion, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        complexBody,
        options
      },
      putValidOperationSpec,
      callback);
  }

  /**
   * Get complex types that are polymorphic, JSON key contains a dot
   * @param [options] The optional parameters
   * @returns Promise<Models.PolymorphismGetDotSyntaxResponse>
   */
  getDotSyntax(options?: coreHttp.RequestOptionsBase): Promise<Models.PolymorphismGetDotSyntaxResponse>;
  /**
   * @param callback The callback
   */
  getDotSyntax(callback: coreHttp.ServiceCallback<Models.DotFishUnion>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getDotSyntax(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.DotFishUnion>): void;
  getDotSyntax(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.DotFishUnion>, callback?: coreHttp.ServiceCallback<Models.DotFishUnion>): Promise<Models.PolymorphismGetDotSyntaxResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getDotSyntaxOperationSpec,
      callback) as Promise<Models.PolymorphismGetDotSyntaxResponse>;
  }

  /**
   * Get complex object composing a polymorphic scalar property and array property with polymorphic
   * element type, with discriminator specified. Deserialization must NOT fail and use the
   * discriminator type specified on the wire.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolymorphismGetComposedWithDiscriminatorResponse>
   */
  getComposedWithDiscriminator(options?: coreHttp.RequestOptionsBase): Promise<Models.PolymorphismGetComposedWithDiscriminatorResponse>;
  /**
   * @param callback The callback
   */
  getComposedWithDiscriminator(callback: coreHttp.ServiceCallback<Models.DotFishMarket>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getComposedWithDiscriminator(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.DotFishMarket>): void;
  getComposedWithDiscriminator(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.DotFishMarket>, callback?: coreHttp.ServiceCallback<Models.DotFishMarket>): Promise<Models.PolymorphismGetComposedWithDiscriminatorResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getComposedWithDiscriminatorOperationSpec,
      callback) as Promise<Models.PolymorphismGetComposedWithDiscriminatorResponse>;
  }

  /**
   * Get complex object composing a polymorphic scalar property and array property with polymorphic
   * element type, without discriminator specified on wire. Deserialization must NOT fail and use the
   * explicit type of the property.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolymorphismGetComposedWithoutDiscriminatorResponse>
   */
  getComposedWithoutDiscriminator(options?: coreHttp.RequestOptionsBase): Promise<Models.PolymorphismGetComposedWithoutDiscriminatorResponse>;
  /**
   * @param callback The callback
   */
  getComposedWithoutDiscriminator(callback: coreHttp.ServiceCallback<Models.DotFishMarket>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getComposedWithoutDiscriminator(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.DotFishMarket>): void;
  getComposedWithoutDiscriminator(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.DotFishMarket>, callback?: coreHttp.ServiceCallback<Models.DotFishMarket>): Promise<Models.PolymorphismGetComposedWithoutDiscriminatorResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getComposedWithoutDiscriminatorOperationSpec,
      callback) as Promise<Models.PolymorphismGetComposedWithoutDiscriminatorResponse>;
  }

  /**
   * Get complex types that are polymorphic, but not at the root of the hierarchy; also have
   * additional properties
   * @param [options] The optional parameters
   * @returns Promise<Models.PolymorphismGetComplicatedResponse>
   */
  getComplicated(options?: coreHttp.RequestOptionsBase): Promise<Models.PolymorphismGetComplicatedResponse>;
  /**
   * @param callback The callback
   */
  getComplicated(callback: coreHttp.ServiceCallback<Models.SalmonUnion>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getComplicated(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.SalmonUnion>): void;
  getComplicated(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.SalmonUnion>, callback?: coreHttp.ServiceCallback<Models.SalmonUnion>): Promise<Models.PolymorphismGetComplicatedResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getComplicatedOperationSpec,
      callback) as Promise<Models.PolymorphismGetComplicatedResponse>;
  }

  /**
   * Put complex types that are polymorphic, but not at the root of the hierarchy; also have
   * additional properties
   * @param complexBody
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  putComplicated(complexBody: Models.SalmonUnion, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param complexBody
   * @param callback The callback
   */
  putComplicated(complexBody: Models.SalmonUnion, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param complexBody
   * @param options The optional parameters
   * @param callback The callback
   */
  putComplicated(complexBody: Models.SalmonUnion, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  putComplicated(complexBody: Models.SalmonUnion, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        complexBody,
        options
      },
      putComplicatedOperationSpec,
      callback);
  }

  /**
   * Put complex types that are polymorphic, omitting the discriminator
   * @param complexBody
   * @param [options] The optional parameters
   * @returns Promise<Models.PolymorphismPutMissingDiscriminatorResponse>
   */
  putMissingDiscriminator(complexBody: Models.SalmonUnion, options?: coreHttp.RequestOptionsBase): Promise<Models.PolymorphismPutMissingDiscriminatorResponse>;
  /**
   * @param complexBody
   * @param callback The callback
   */
  putMissingDiscriminator(complexBody: Models.SalmonUnion, callback: coreHttp.ServiceCallback<Models.SalmonUnion>): void;
  /**
   * @param complexBody
   * @param options The optional parameters
   * @param callback The callback
   */
  putMissingDiscriminator(complexBody: Models.SalmonUnion, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.SalmonUnion>): void;
  putMissingDiscriminator(complexBody: Models.SalmonUnion, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.SalmonUnion>, callback?: coreHttp.ServiceCallback<Models.SalmonUnion>): Promise<Models.PolymorphismPutMissingDiscriminatorResponse> {
    return this.client.sendOperationRequest(
      {
        complexBody,
        options
      },
      putMissingDiscriminatorOperationSpec,
      callback) as Promise<Models.PolymorphismPutMissingDiscriminatorResponse>;
  }

  /**
   * Put complex types that are polymorphic, attempting to omit required 'birthday' field - the
   * request should not be allowed from the client
   * @param complexBody Please attempt put a sawshark that looks like this, the client should not
   * allow this data to be sent:
   * {
   * "fishtype": "sawshark",
   * "species": "snaggle toothed",
   * "length": 18.5,
   * "age": 2,
   * "birthday": "2013-06-01T01:00:00Z",
   * "location": "alaska",
   * "picture": base64(FF FF FF FF FE),
   * "siblings": [
   * {
   * "fishtype": "shark",
   * "species": "predator",
   * "birthday": "2012-01-05T01:00:00Z",
   * "length": 20,
   * "age": 6
   * },
   * {
   * "fishtype": "sawshark",
   * "species": "dangerous",
   * "picture": base64(FF FF FF FF FE),
   * "length": 10,
   * "age": 105
   * }
   * ]
   * }
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  putValidMissingRequired(complexBody: Models.FishUnion, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param complexBody Please attempt put a sawshark that looks like this, the client should not
   * allow this data to be sent:
   * {
   * "fishtype": "sawshark",
   * "species": "snaggle toothed",
   * "length": 18.5,
   * "age": 2,
   * "birthday": "2013-06-01T01:00:00Z",
   * "location": "alaska",
   * "picture": base64(FF FF FF FF FE),
   * "siblings": [
   * {
   * "fishtype": "shark",
   * "species": "predator",
   * "birthday": "2012-01-05T01:00:00Z",
   * "length": 20,
   * "age": 6
   * },
   * {
   * "fishtype": "sawshark",
   * "species": "dangerous",
   * "picture": base64(FF FF FF FF FE),
   * "length": 10,
   * "age": 105
   * }
   * ]
   * }
   * @param callback The callback
   */
  putValidMissingRequired(complexBody: Models.FishUnion, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param complexBody Please attempt put a sawshark that looks like this, the client should not
   * allow this data to be sent:
   * {
   * "fishtype": "sawshark",
   * "species": "snaggle toothed",
   * "length": 18.5,
   * "age": 2,
   * "birthday": "2013-06-01T01:00:00Z",
   * "location": "alaska",
   * "picture": base64(FF FF FF FF FE),
   * "siblings": [
   * {
   * "fishtype": "shark",
   * "species": "predator",
   * "birthday": "2012-01-05T01:00:00Z",
   * "length": 20,
   * "age": 6
   * },
   * {
   * "fishtype": "sawshark",
   * "species": "dangerous",
   * "picture": base64(FF FF FF FF FE),
   * "length": 10,
   * "age": 105
   * }
   * ]
   * }
   * @param options The optional parameters
   * @param callback The callback
   */
  putValidMissingRequired(complexBody: Models.FishUnion, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  putValidMissingRequired(complexBody: Models.FishUnion, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        complexBody,
        options
      },
      putValidMissingRequiredOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const getValidOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "complex/polymorphism/valid",
  responses: {
    200: {
      bodyMapper: Mappers.Fish
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putValidOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/polymorphism/valid",
  requestBody: {
    parameterPath: "complexBody",
    mapper: {
      ...Mappers.Fish,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getDotSyntaxOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "complex/polymorphism/dotsyntax",
  responses: {
    200: {
      bodyMapper: Mappers.DotFish
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getComposedWithDiscriminatorOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "complex/polymorphism/composedWithDiscriminator",
  responses: {
    200: {
      bodyMapper: Mappers.DotFishMarket
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getComposedWithoutDiscriminatorOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "complex/polymorphism/composedWithoutDiscriminator",
  responses: {
    200: {
      bodyMapper: Mappers.DotFishMarket
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getComplicatedOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "complex/polymorphism/complicated",
  responses: {
    200: {
      bodyMapper: Mappers.Salmon
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putComplicatedOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/polymorphism/complicated",
  requestBody: {
    parameterPath: "complexBody",
    mapper: {
      ...Mappers.Salmon,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putMissingDiscriminatorOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/polymorphism/missingdiscriminator",
  requestBody: {
    parameterPath: "complexBody",
    mapper: {
      ...Mappers.Salmon,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Salmon
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putValidMissingRequiredOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/polymorphism/missingrequired/invalid",
  requestBody: {
    parameterPath: "complexBody",
    mapper: {
      ...Mappers.Fish,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
