/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ServiceClientOptions } from "@azure/core-http";
import * as coreHttp from "@azure/core-http";

/**
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  status?: number;
  message?: string;
}

/**
 * An interface representing AutoRestRenameParameterTestServiceOptions.
 */
export interface AutoRestRenameParameterTestServiceOptions extends ServiceClientOptions {
  /**
   * A query parameter.
   */
  withCredentialsProperty?: string;
  baseUri?: string;
}

/**
 * Optional Parameters.
 */
export interface AutoRestRenameParameterTestServiceGetUsingOptionalOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * A query parameter.
   */
  timeoutParameter?: string;
}
