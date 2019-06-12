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
 * An interface representing PetAPTrue.
 */
export interface PetAPTrue {
  id: number;
  name?: string;
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly status?: boolean;
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
}

/**
 * An interface representing CatAPTrue.
 */
export interface CatAPTrue extends PetAPTrue {
  friendly?: boolean;
}

/**
 * An interface representing PetAPObject.
 */
export interface PetAPObject {
  id: number;
  name?: string;
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly status?: boolean;
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
}

/**
 * An interface representing PetAPString.
 */
export interface PetAPString {
  id: number;
  name?: string;
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly status?: boolean;
  /**
   * Describes unknown properties. The value of an unknown property MUST be of type "string". Due
   * to valid TS constraints we have modeled this as a union of `string | any`.
   */
  [property: string]: string | any;
}

/**
 * An interface representing PetAPInProperties.
 */
export interface PetAPInProperties {
  id: number;
  name?: string;
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly status?: boolean;
  additionalProperties?: { [propertyName: string]: number };
}

/**
 * An interface representing PetAPInPropertiesWithAPString.
 */
export interface PetAPInPropertiesWithAPString {
  id: number;
  name?: string;
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly status?: boolean;
  odatalocation: string;
  additionalProperties1?: { [propertyName: string]: number };
  /**
   * Describes unknown properties. The value of an unknown property MUST be of type "string". Due
   * to valid TS constraints we have modeled this as a union of `string | any`.
   */
  [property: string]: string | any;
}

/**
 * An interface representing AdditionalPropertiesClientOptions.
 */
export interface AdditionalPropertiesClientOptions extends ServiceClientOptions {
  baseUri?: string;
}

/**
 * Contains response data for the createAPTrue operation.
 */
export type PetsCreateAPTrueResponse = PetAPTrue & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PetAPTrue;
    };
};

/**
 * Contains response data for the createCatAPTrue operation.
 */
export type PetsCreateCatAPTrueResponse = CatAPTrue & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: CatAPTrue;
    };
};

/**
 * Contains response data for the createAPObject operation.
 */
export type PetsCreateAPObjectResponse = PetAPObject & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PetAPObject;
    };
};

/**
 * Contains response data for the createAPString operation.
 */
export type PetsCreateAPStringResponse = PetAPString & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PetAPString;
    };
};

/**
 * Contains response data for the createAPInProperties operation.
 */
export type PetsCreateAPInPropertiesResponse = PetAPInProperties & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PetAPInProperties;
    };
};

/**
 * Contains response data for the createAPInPropertiesWithAPString operation.
 */
export type PetsCreateAPInPropertiesWithAPStringResponse = PetAPInPropertiesWithAPString & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PetAPInPropertiesWithAPString;
    };
};
