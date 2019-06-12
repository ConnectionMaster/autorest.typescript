/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/xMsClientRequestIdMappers";
import * as Parameters from "../models/parameters";
import { AutoRestAzureSpecialParametersTestClientContext } from "../autoRestAzureSpecialParametersTestClientContext";

/** Class representing a XMsClientRequestId. */
export class XMsClientRequestId {
  private readonly client: AutoRestAzureSpecialParametersTestClientContext;

  /**
   * Create a XMsClientRequestId.
   * @param {AutoRestAzureSpecialParametersTestClientContext} client Reference to the service client.
   */
  constructor(client: AutoRestAzureSpecialParametersTestClientContext) {
    this.client = client;
  }

  /**
   * Get method that overwrites x-ms-client-request header with value
   * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  get(options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  get(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  get(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  get(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getOperationSpec,
      callback);
  }

  /**
   * Get method that overwrites x-ms-client-request header with value
   * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   * @param xMsClientRequestId This should appear as a method parameter, use value
   * '9C4D50EE-2D56-4CD3-8152-34347DC9F2B0'
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  paramGet(xMsClientRequestId: string, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param xMsClientRequestId This should appear as a method parameter, use value
   * '9C4D50EE-2D56-4CD3-8152-34347DC9F2B0'
   * @param callback The callback
   */
  paramGet(xMsClientRequestId: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param xMsClientRequestId This should appear as a method parameter, use value
   * '9C4D50EE-2D56-4CD3-8152-34347DC9F2B0'
   * @param options The optional parameters
   * @param callback The callback
   */
  paramGet(xMsClientRequestId: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  paramGet(xMsClientRequestId: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        xMsClientRequestId,
        options
      },
      paramGetOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const getOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "azurespecials/overwrite/x-ms-client-request-id/method/",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const paramGetOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "azurespecials/overwrite/x-ms-client-request-id/via-param/method/",
  headerParameters: [
    Parameters.xMsClientRequestId,
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
