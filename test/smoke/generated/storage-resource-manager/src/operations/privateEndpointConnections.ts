/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageManagementClient } from "../storageManagementClient";
import {
  PrivateEndpointConnectionsListResponse,
  PrivateEndpointConnectionsGetResponse,
  PrivateEndpointConnection,
  PrivateEndpointConnectionsPutResponse
} from "../models";

/**
 * Class representing a PrivateEndpointConnections.
 */
export class PrivateEndpointConnections {
  private readonly client: StorageManagementClient;

  /**
   * Initialize a new instance of the class PrivateEndpointConnections class.
   * @param client Reference to the service client
   */
  constructor(client: StorageManagementClient) {
    this.client = client;
  }

  /**
   * List all the private endpoint connections associated with the storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    accountName: string,
    options?: coreHttp.OperationOptions
  ): Promise<PrivateEndpointConnectionsListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options: operationOptions },
      listOperationSpec
    ) as Promise<PrivateEndpointConnectionsListResponse>;
  }

  /**
   * Gets the specified private endpoint connection associated with the storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param privateEndpointConnectionName The name of the private endpoint connection associated with the
   *                                      Storage Account
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    privateEndpointConnectionName: string,
    options?: coreHttp.OperationOptions
  ): Promise<PrivateEndpointConnectionsGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        privateEndpointConnectionName,
        options: operationOptions
      },
      getOperationSpec
    ) as Promise<PrivateEndpointConnectionsGetResponse>;
  }

  /**
   * Update the state of specified private endpoint connection associated with the storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param privateEndpointConnectionName The name of the private endpoint connection associated with the
   *                                      Storage Account
   * @param properties The private endpoint connection properties.
   * @param options The options parameters.
   */
  put(
    resourceGroupName: string,
    accountName: string,
    privateEndpointConnectionName: string,
    properties: PrivateEndpointConnection,
    options?: coreHttp.OperationOptions
  ): Promise<PrivateEndpointConnectionsPutResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        privateEndpointConnectionName,
        properties,
        options: operationOptions
      },
      putOperationSpec
    ) as Promise<PrivateEndpointConnectionsPutResponse>;
  }

  /**
   * Deletes the specified private endpoint connection associated with the storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param privateEndpointConnectionName The name of the private endpoint connection associated with the
   *                                      Storage Account
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    privateEndpointConnectionName: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        privateEndpointConnectionName,
        options: operationOptions
      },
      deleteOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/privateEndpointConnections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnectionListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1
  ],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.privateEndpointConnectionName
  ],
  serializer
};
const putOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.properties1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.privateEndpointConnectionName
  ],
  serializer
};