/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const accountName: coreHttp.OperationURLParameter = {
  parameterPath: "accountName",
  mapper: {
    required: true,
    serializedName: "accountName",
    defaultValue: '',
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const host: coreHttp.OperationURLParameter = {
  parameterPath: "host",
  mapper: {
    required: true,
    serializedName: "host",
    defaultValue: 'host',
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
