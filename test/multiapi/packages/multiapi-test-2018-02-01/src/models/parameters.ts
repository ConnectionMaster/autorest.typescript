/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const acceptLanguage: coreHttp.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const dnsSuffix: coreHttp.OperationURLParameter = {
  parameterPath: "dnsSuffix",
  mapper: {
    required: true,
    serializedName: "dnsSuffix",
    defaultValue: 'host',
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const keyName: coreHttp.OperationURLParameter = {
  parameterPath: "keyName",
  mapper: {
    required: true,
    serializedName: "keyName",
    type: {
      name: "String"
    }
  }
};
export const keyVersion: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "keyVersion"
  ],
  mapper: {
    serializedName: "keyVersion",
    defaultValue: 'v1',
    type: {
      name: "String"
    }
  }
};
export const secret: coreHttp.OperationURLParameter = {
  parameterPath: "secret",
  mapper: {
    required: true,
    serializedName: "secret",
    defaultValue: '',
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const subscriptionId: coreHttp.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    required: true,
    serializedName: "subscriptionId",
    type: {
      name: "String"
    }
  }
};
export const vault: coreHttp.OperationURLParameter = {
  parameterPath: "vault",
  mapper: {
    required: true,
    serializedName: "vault",
    defaultValue: '',
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};