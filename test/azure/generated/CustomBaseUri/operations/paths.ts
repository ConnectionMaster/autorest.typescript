/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/pathsMappers";
import * as Parameters from "../models/parameters";
import { AutoRestParameterizedHostTestClientContext } from "../autoRestParameterizedHostTestClientContext";

/** Class representing a Paths. */
export class Paths {
  private readonly client: AutoRestParameterizedHostTestClientContext;

  /**
   * Create a Paths.
   * @param {AutoRestParameterizedHostTestClientContext} client Reference to the service client.
   */
  constructor(client: AutoRestParameterizedHostTestClientContext) {
    this.client = client;
  }

  /**
   * Get a 200 to test a valid base uri
   * @param accountName Account Name
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  getEmpty(accountName: string, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param accountName Account Name
   * @param callback The callback
   */
  getEmpty(accountName: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param accountName Account Name
   * @param options The optional parameters
   * @param callback The callback
   */
  getEmpty(accountName: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  getEmpty(accountName: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        accountName,
        options
      },
      getEmptyOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const getEmptyOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "customuri",
  urlParameters: [
    Parameters.accountName,
    Parameters.host
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
