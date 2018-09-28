/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
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
  getValid(options?: msRest.RequestOptionsBase): Promise<Models.PolymorphismGetValidResponse>;
  /**
   * @param callback The callback
   */
  getValid(callback: msRest.ServiceCallback<Models.FishUnion>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FishUnion>): void;
  getValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.FishUnion>): Promise<Models.PolymorphismGetValidResponse> {
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
   * @returns Promise<msRest.RestResponse>
   */
  putValid(complexBody: Models.FishUnion, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
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
  putValid(complexBody: Models.FishUnion, callback: msRest.ServiceCallback<void>): void;
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
  putValid(complexBody: Models.FishUnion, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putValid(complexBody: Models.FishUnion, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        complexBody,
        options
      },
      putValidOperationSpec,
      callback);
  }

  /**
   * Get complex types that are polymorphic, but not at the root of the hierarchy; also have
   * additional properties
   * @param [options] The optional parameters
   * @returns Promise<Models.PolymorphismGetComplicatedResponse>
   */
  getComplicated(options?: msRest.RequestOptionsBase): Promise<Models.PolymorphismGetComplicatedResponse>;
  /**
   * @param callback The callback
   */
  getComplicated(callback: msRest.ServiceCallback<Models.SalmonUnion>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getComplicated(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SalmonUnion>): void;
  getComplicated(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.SalmonUnion>): Promise<Models.PolymorphismGetComplicatedResponse> {
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
   * @returns Promise<msRest.RestResponse>
   */
  putComplicated(complexBody: Models.SalmonUnion, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param complexBody
   * @param callback The callback
   */
  putComplicated(complexBody: Models.SalmonUnion, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param complexBody
   * @param options The optional parameters
   * @param callback The callback
   */
  putComplicated(complexBody: Models.SalmonUnion, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putComplicated(complexBody: Models.SalmonUnion, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
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
  putMissingDiscriminator(complexBody: Models.SalmonUnion, options?: msRest.RequestOptionsBase): Promise<Models.PolymorphismPutMissingDiscriminatorResponse>;
  /**
   * @param complexBody
   * @param callback The callback
   */
  putMissingDiscriminator(complexBody: Models.SalmonUnion, callback: msRest.ServiceCallback<Models.SalmonUnion>): void;
  /**
   * @param complexBody
   * @param options The optional parameters
   * @param callback The callback
   */
  putMissingDiscriminator(complexBody: Models.SalmonUnion, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SalmonUnion>): void;
  putMissingDiscriminator(complexBody: Models.SalmonUnion, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.SalmonUnion>): Promise<Models.PolymorphismPutMissingDiscriminatorResponse> {
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
   * @returns Promise<msRest.RestResponse>
   */
  putValidMissingRequired(complexBody: Models.FishUnion, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
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
  putValidMissingRequired(complexBody: Models.FishUnion, callback: msRest.ServiceCallback<void>): void;
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
  putValidMissingRequired(complexBody: Models.FishUnion, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putValidMissingRequired(complexBody: Models.FishUnion, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
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
const serializer = new msRest.Serializer(Mappers);
const getValidOperationSpec: msRest.OperationSpec = {
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

const putValidOperationSpec: msRest.OperationSpec = {
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

const getComplicatedOperationSpec: msRest.OperationSpec = {
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

const putComplicatedOperationSpec: msRest.OperationSpec = {
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

const putMissingDiscriminatorOperationSpec: msRest.OperationSpec = {
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

const putValidMissingRequiredOperationSpec: msRest.OperationSpec = {
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