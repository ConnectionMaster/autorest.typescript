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
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { StorageManagementClientContext } from "./storageManagementClientContext";


class StorageManagementClient extends StorageManagementClientContext {
  // Operation groups
  storageAccounts: operations.StorageAccounts;
  usage: operations.UsageOperations;

  /**
   * Initializes a new instance of the StorageManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure
   * subscription. The subscription ID forms part of the URI for every service call.
   * @param [options] The parameter options
   */
  constructor(credentials: coreHttp.ServiceClientCredentials | coreHttp.TokenCredential, subscriptionId: string, options?: Models.StorageManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.storageAccounts = new operations.StorageAccounts(this);
    this.usage = new operations.UsageOperations(this);
  }
}

// Operation Specifications

export {
  StorageManagementClient,
  StorageManagementClientContext,
  Models as StorageManagementModels,
  Mappers as StorageManagementMappers
};
export * from "./operations";
