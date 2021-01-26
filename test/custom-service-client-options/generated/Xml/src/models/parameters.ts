/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";

export const comp0: msRest.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'list',
    type: {
      name: "String"
    }
  }
};
export const comp1: msRest.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'properties',
    type: {
      name: "String"
    }
  }
};
export const comp2: msRest.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'acl',
    type: {
      name: "String"
    }
  }
};
export const restype0: msRest.OperationQueryParameter = {
  parameterPath: "restype",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "restype",
    defaultValue: 'service',
    type: {
      name: "String"
    }
  }
};
export const restype1: msRest.OperationQueryParameter = {
  parameterPath: "restype",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "restype",
    defaultValue: 'container',
    type: {
      name: "String"
    }
  }
};