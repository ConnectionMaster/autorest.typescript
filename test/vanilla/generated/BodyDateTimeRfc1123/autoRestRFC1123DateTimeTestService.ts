/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { AutoRestRFC1123DateTimeTestServiceContext } from "./autoRestRFC1123DateTimeTestServiceContext";

class AutoRestRFC1123DateTimeTestService extends AutoRestRFC1123DateTimeTestServiceContext {
  // Operation groups
  datetimerfc1123: operations.Datetimerfc1123;

  /**
   * Initializes a new instance of the AutoRestRFC1123DateTimeTestService class.
   * @param [options] The parameter options
   */
  constructor(options?: Models.AutoRestRFC1123DateTimeTestServiceOptions) {
    super(options);
    this.datetimerfc1123 = new operations.Datetimerfc1123(this);
  }
}

// Operation Specifications

export {
  AutoRestRFC1123DateTimeTestService,
  AutoRestRFC1123DateTimeTestServiceContext,
  Models as AutoRestRFC1123DateTimeTestServiceModels,
  Mappers as AutoRestRFC1123DateTimeTestServiceMappers
};
export * from "./operations";
