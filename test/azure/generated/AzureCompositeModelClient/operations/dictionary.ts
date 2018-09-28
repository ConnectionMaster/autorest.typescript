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
import * as Mappers from "../models/dictionaryMappers";
import * as Parameters from "../models/parameters";
import { AzureCompositeModelContext } from "../azureCompositeModelContext";

/** Class representing a Dictionary. */
export class Dictionary {
  private readonly client: AzureCompositeModelContext;

  /**
   * Create a Dictionary.
   * @param {AzureCompositeModelContext} client Reference to the service client.
   */
  constructor(client: AzureCompositeModelContext) {
    this.client = client;
  }

  /**
   * Get complex types with dictionary property
   * @param [options] The optional parameters
   * @returns Promise<Models.DictionaryGetValidResponse>
   */
  getValid(options?: msRest.RequestOptionsBase): Promise<Models.DictionaryGetValidResponse>;
  /**
   * @param callback The callback
   */
  getValid(callback: msRest.ServiceCallback<Models.DictionaryWrapper>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DictionaryWrapper>): void;
  getValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.DictionaryWrapper>): Promise<Models.DictionaryGetValidResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getValidOperationSpec,
      callback) as Promise<Models.DictionaryGetValidResponse>;
  }

  /**
   * Put complex types with dictionary property
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  putValid(options?: Models.DictionaryPutValidOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  putValid(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  putValid(options: Models.DictionaryPutValidOptionalParams, callback: msRest.ServiceCallback<void>): void;
  putValid(options?: Models.DictionaryPutValidOptionalParams, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      putValidOperationSpec,
      callback);
  }

  /**
   * Get complex types with dictionary property which is empty
   * @param [options] The optional parameters
   * @returns Promise<Models.DictionaryGetEmptyResponse>
   */
  getEmpty(options?: msRest.RequestOptionsBase): Promise<Models.DictionaryGetEmptyResponse>;
  /**
   * @param callback The callback
   */
  getEmpty(callback: msRest.ServiceCallback<Models.DictionaryWrapper>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getEmpty(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DictionaryWrapper>): void;
  getEmpty(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.DictionaryWrapper>): Promise<Models.DictionaryGetEmptyResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getEmptyOperationSpec,
      callback) as Promise<Models.DictionaryGetEmptyResponse>;
  }

  /**
   * Put complex types with dictionary property which is empty
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  putEmpty(options?: Models.DictionaryPutEmptyOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  putEmpty(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  putEmpty(options: Models.DictionaryPutEmptyOptionalParams, callback: msRest.ServiceCallback<void>): void;
  putEmpty(options?: Models.DictionaryPutEmptyOptionalParams, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      putEmptyOperationSpec,
      callback);
  }

  /**
   * Get complex types with dictionary property which is null
   * @param [options] The optional parameters
   * @returns Promise<Models.DictionaryGetNullResponse>
   */
  getNull(options?: msRest.RequestOptionsBase): Promise<Models.DictionaryGetNullResponse>;
  /**
   * @param callback The callback
   */
  getNull(callback: msRest.ServiceCallback<Models.DictionaryWrapper>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getNull(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DictionaryWrapper>): void;
  getNull(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.DictionaryWrapper>): Promise<Models.DictionaryGetNullResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getNullOperationSpec,
      callback) as Promise<Models.DictionaryGetNullResponse>;
  }

  /**
   * Get complex types with dictionary property while server doesn't provide a response payload
   * @param [options] The optional parameters
   * @returns Promise<Models.DictionaryGetNotProvidedResponse>
   */
  getNotProvided(options?: msRest.RequestOptionsBase): Promise<Models.DictionaryGetNotProvidedResponse>;
  /**
   * @param callback The callback
   */
  getNotProvided(callback: msRest.ServiceCallback<Models.DictionaryWrapper>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getNotProvided(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DictionaryWrapper>): void;
  getNotProvided(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.DictionaryWrapper>): Promise<Models.DictionaryGetNotProvidedResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getNotProvidedOperationSpec,
      callback) as Promise<Models.DictionaryGetNotProvidedResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/dictionary/typed/valid",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DictionaryWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/dictionary/typed/valid",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      defaultProgram: [
        "options",
        "defaultProgram"
      ]
    },
    mapper: {
      ...Mappers.DictionaryWrapper,
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

const getEmptyOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/dictionary/typed/empty",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DictionaryWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putEmptyOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/dictionary/typed/empty",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      defaultProgram: [
        "options",
        "defaultProgram"
      ]
    },
    mapper: {
      ...Mappers.DictionaryWrapper,
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

const getNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/dictionary/typed/null",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DictionaryWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getNotProvidedOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/dictionary/typed/notprovided",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DictionaryWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
