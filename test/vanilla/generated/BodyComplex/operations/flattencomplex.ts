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
import * as Mappers from "../models/flattencomplexMappers";
import { AutoRestComplexTestServiceContext } from "../autoRestComplexTestServiceContext";

/** Class representing a Flattencomplex. */
export class Flattencomplex {
  private readonly client: AutoRestComplexTestServiceContext;

  /**
   * Create a Flattencomplex.
   * @param {AutoRestComplexTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestComplexTestServiceContext) {
    this.client = client;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.FlattencomplexGetValidResponse>
   */
  getValid(options?: coreHttp.RequestOptionsBase): Promise<Models.FlattencomplexGetValidResponse>;
  /**
   * @param callback The callback
   */
  getValid(callback: coreHttp.ServiceCallback<Models.MyBaseTypeUnion>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getValid(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.MyBaseTypeUnion>): void;
  getValid(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.MyBaseTypeUnion>, callback?: coreHttp.ServiceCallback<Models.MyBaseTypeUnion>): Promise<Models.FlattencomplexGetValidResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getValidOperationSpec,
      callback) as Promise<Models.FlattencomplexGetValidResponse>;
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const getValidOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "complex/flatten/valid",
  responses: {
    200: {
      bodyMapper: Mappers.MyBaseType
    },
    default: {}
  },
  serializer
};
