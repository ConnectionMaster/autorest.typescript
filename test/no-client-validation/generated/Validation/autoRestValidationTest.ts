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
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as Parameters from "./models/parameters";
import { AutoRestValidationTestContext } from "./autoRestValidationTestContext";

class AutoRestValidationTest extends AutoRestValidationTestContext {
  /**
   * Initializes a new instance of the AutoRestValidationTest class.
   * @param subscriptionId Subscription ID.
   * @param apiVersion Required string following pattern \d{2}-\d{2}-\d{4}
   * @param [options] The parameter options
   */
  constructor(subscriptionId: string, apiVersion: string, options?: Models.AutoRestValidationTestOptions) {
    super(subscriptionId, apiVersion, options);
  }

  /**
   * Validates input parameters on the method. See swagger for details.
   * @param resourceGroupName Required string between 3 and 10 chars with pattern [a-zA-Z0-9]+.
   * @param id Required int multiple of 10 from 100 to 1000.
   * @param [options] The optional parameters
   * @returns Promise<Models.ValidationOfMethodParametersResponse>
   */
  validationOfMethodParameters(resourceGroupName: string, id: number, options?: msRest.RequestOptionsBase): Promise<Models.ValidationOfMethodParametersResponse>;
  /**
   * @param resourceGroupName Required string between 3 and 10 chars with pattern [a-zA-Z0-9]+.
   * @param id Required int multiple of 10 from 100 to 1000.
   * @param callback The callback
   */
  validationOfMethodParameters(resourceGroupName: string, id: number, callback: msRest.ServiceCallback<Models.Product>): void;
  /**
   * @param resourceGroupName Required string between 3 and 10 chars with pattern [a-zA-Z0-9]+.
   * @param id Required int multiple of 10 from 100 to 1000.
   * @param options The optional parameters
   * @param callback The callback
   */
  validationOfMethodParameters(resourceGroupName: string, id: number, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Product>): void;
  validationOfMethodParameters(resourceGroupName: string, id: number, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Product>): Promise<Models.ValidationOfMethodParametersResponse> {
    return this.sendOperationRequest(
      {
        resourceGroupName,
        id,
        options
      },
      validationOfMethodParametersOperationSpec,
      callback) as Promise<Models.ValidationOfMethodParametersResponse>;
  }

  /**
   * Validates body parameters on the method. See swagger for details.
   * @param resourceGroupName Required string between 3 and 10 chars with pattern [a-zA-Z0-9]+.
   * @param id Required int multiple of 10 from 100 to 1000.
   * @param [options] The optional parameters
   * @returns Promise<Models.ValidationOfBodyResponse>
   */
  validationOfBody(resourceGroupName: string, id: number, options?: Models.AutoRestValidationTestValidationOfBodyOptionalParams): Promise<Models.ValidationOfBodyResponse>;
  /**
   * @param resourceGroupName Required string between 3 and 10 chars with pattern [a-zA-Z0-9]+.
   * @param id Required int multiple of 10 from 100 to 1000.
   * @param callback The callback
   */
  validationOfBody(resourceGroupName: string, id: number, callback: msRest.ServiceCallback<Models.Product>): void;
  /**
   * @param resourceGroupName Required string between 3 and 10 chars with pattern [a-zA-Z0-9]+.
   * @param id Required int multiple of 10 from 100 to 1000.
   * @param options The optional parameters
   * @param callback The callback
   */
  validationOfBody(resourceGroupName: string, id: number, options: Models.AutoRestValidationTestValidationOfBodyOptionalParams, callback: msRest.ServiceCallback<Models.Product>): void;
  validationOfBody(resourceGroupName: string, id: number, options?: Models.AutoRestValidationTestValidationOfBodyOptionalParams, callback?: msRest.ServiceCallback<Models.Product>): Promise<Models.ValidationOfBodyResponse> {
    return this.sendOperationRequest(
      {
        resourceGroupName,
        id,
        options
      },
      validationOfBodyOperationSpec,
      callback) as Promise<Models.ValidationOfBodyResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  getWithConstantInPath(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  getWithConstantInPath(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getWithConstantInPath(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getWithConstantInPath(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      getWithConstantInPathOperationSpec,
      callback);
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.PostWithConstantInBodyResponse>
   */
  postWithConstantInBody(options?: Models.AutoRestValidationTestPostWithConstantInBodyOptionalParams): Promise<Models.PostWithConstantInBodyResponse>;
  /**
   * @param callback The callback
   */
  postWithConstantInBody(callback: msRest.ServiceCallback<Models.Product>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  postWithConstantInBody(options: Models.AutoRestValidationTestPostWithConstantInBodyOptionalParams, callback: msRest.ServiceCallback<Models.Product>): void;
  postWithConstantInBody(options?: Models.AutoRestValidationTestPostWithConstantInBodyOptionalParams, callback?: msRest.ServiceCallback<Models.Product>): Promise<Models.PostWithConstantInBodyResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      postWithConstantInBodyOperationSpec,
      callback) as Promise<Models.PostWithConstantInBodyResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const validationOfMethodParametersOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "fakepath/{subscriptionId}/{resourceGroupName}/{id}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.id
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Product
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const validationOfBodyOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "fakepath/{subscriptionId}/{resourceGroupName}/{id}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.id
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  requestBody: {
    parameterPath: [
      "options",
      "body"
    ],
    mapper: Mappers.Product
  },
  responses: {
    200: {
      bodyMapper: Mappers.Product
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getWithConstantInPathOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "validation/constantsInPath/{constantParam}/value",
  urlParameters: [
    Parameters.constantParam
  ],
  responses: {
    200: {},
    default: {}
  },
  serializer
};

const postWithConstantInBodyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "validation/constantsInPath/{constantParam}/value",
  urlParameters: [
    Parameters.constantParam
  ],
  requestBody: {
    parameterPath: [
      "options",
      "body"
    ],
    mapper: Mappers.Product
  },
  responses: {
    200: {
      bodyMapper: Mappers.Product
    },
    default: {}
  },
  serializer
};

export {
  AutoRestValidationTest,
  AutoRestValidationTestContext,
  Models as AutoRestValidationTestModels,
  Mappers as AutoRestValidationTestMappers
};
