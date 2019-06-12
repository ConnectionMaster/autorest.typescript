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
import * as Parameters from "./models/parameters";
import { AutoRestReportServiceContext } from "./autoRestReportServiceContext";

class AutoRestReportService extends AutoRestReportServiceContext {
  /**
   * Initializes a new instance of the AutoRestReportService class.
   * @param [options] The parameter options
   */
  constructor(options?: Models.AutoRestReportServiceOptions) {
    super(options);
  }

  /**
   * Get test coverage report
   * @param [options] The optional parameters
   * @returns Promise<Models.GetReportResponse>
   */
  getReport(options?: Models.AutoRestReportServiceGetReportOptionalParams): Promise<Models.GetReportResponse>;
  /**
   * @param callback The callback
   */
  getReport(callback: coreHttp.ServiceCallback<{ [propertyName: string]: number }>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getReport(options: Models.AutoRestReportServiceGetReportOptionalParams, callback: coreHttp.ServiceCallback<{ [propertyName: string]: number }>): void;
  getReport(options?: Models.AutoRestReportServiceGetReportOptionalParams | coreHttp.ServiceCallback<{ [propertyName: string]: number }>, callback?: coreHttp.ServiceCallback<{ [propertyName: string]: number }>): Promise<Models.GetReportResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      getReportOperationSpec,
      callback) as Promise<Models.GetReportResponse>;
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const getReportOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "report",
  queryParameters: [
    Parameters.qualifier
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Number"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

export {
  AutoRestReportService,
  AutoRestReportServiceContext,
  Models as AutoRestReportServiceModels,
  Mappers as AutoRestReportServiceMappers
};
