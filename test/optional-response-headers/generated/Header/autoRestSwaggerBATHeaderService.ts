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
import { AutoRestSwaggerBATHeaderServiceContext } from "./autoRestSwaggerBATHeaderServiceContext";

class AutoRestSwaggerBATHeaderService extends AutoRestSwaggerBATHeaderServiceContext {
  // Operation groups
  header: operations.Header;

  /**
   * Initializes a new instance of the AutoRestSwaggerBATHeaderService class.
   * @param [options] The parameter options
   */
  constructor(options?: Models.AutoRestSwaggerBATHeaderServiceOptions) {
    super(options);
    this.header = new operations.Header(this);
  }
}

// Operation Specifications

export {
  AutoRestSwaggerBATHeaderService,
  AutoRestSwaggerBATHeaderServiceContext,
  Models as AutoRestSwaggerBATHeaderServiceModels,
  Mappers as AutoRestSwaggerBATHeaderServiceMappers
};
export * from "./operations";
