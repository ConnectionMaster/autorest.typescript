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
import { NetworkManagementClient } from "../networkManagementClient";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  NetworkWatcher,
  NetworkWatchersCreateOrUpdateResponse,
  NetworkWatchersGetResponse,
  TagsObject,
  NetworkWatchersUpdateTagsResponse,
  NetworkWatchersListResponse,
  NetworkWatchersListAllResponse,
  TopologyParameters,
  NetworkWatchersGetTopologyResponse,
  VerificationIPFlowParameters,
  NetworkWatchersVerifyIPFlowResponse,
  NextHopParameters,
  NetworkWatchersGetNextHopResponse,
  SecurityGroupViewParameters,
  NetworkWatchersGetVMSecurityRulesResponse,
  TroubleshootingParameters,
  NetworkWatchersGetTroubleshootingResponse,
  QueryTroubleshootingParameters,
  NetworkWatchersGetTroubleshootingResultResponse,
  FlowLogInformation,
  NetworkWatchersSetFlowLogConfigurationResponse,
  FlowLogStatusParameters,
  NetworkWatchersGetFlowLogStatusResponse,
  ConnectivityParameters,
  NetworkWatchersCheckConnectivityResponse,
  AzureReachabilityReportParameters,
  NetworkWatchersGetAzureReachabilityReportResponse,
  AvailableProvidersListParameters,
  NetworkWatchersListAvailableProvidersResponse,
  NetworkConfigurationDiagnosticParameters,
  NetworkWatchersGetNetworkConfigurationDiagnosticResponse
} from "../models";

/**
 * Class representing a NetworkWatchers.
 */
export class NetworkWatchers {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class NetworkWatchers class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Creates or updates a network watcher in the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the network watcher.
   * @param parameters Parameters that define the network watcher resource.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    networkWatcherName: string,
    parameters: NetworkWatcher,
    options?: coreHttp.OperationOptions
  ): Promise<NetworkWatchersCreateOrUpdateResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkWatcherName,
        parameters,
        options: operationOptions
      },
      createOrUpdateOperationSpec
    ) as Promise<NetworkWatchersCreateOrUpdateResponse>;
  }

  /**
   * Gets the specified network watcher by resource group.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the network watcher.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    networkWatcherName: string,
    options?: coreHttp.OperationOptions
  ): Promise<NetworkWatchersGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, networkWatcherName, options: operationOptions },
      getOperationSpec
    ) as Promise<NetworkWatchersGetResponse>;
  }

  /**
   * Deletes the specified network watcher resource.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the network watcher.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    networkWatcherName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      networkWatcherName,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      deleteOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: deleteOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Updates a network watcher tags.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the network watcher.
   * @param parameters Parameters supplied to update network watcher tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    networkWatcherName: string,
    parameters: TagsObject,
    options?: coreHttp.OperationOptions
  ): Promise<NetworkWatchersUpdateTagsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkWatcherName,
        parameters,
        options: operationOptions
      },
      updateTagsOperationSpec
    ) as Promise<NetworkWatchersUpdateTagsResponse>;
  }

  /**
   * Gets all network watchers by resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<NetworkWatchersListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, options: operationOptions },
      listOperationSpec
    ) as Promise<NetworkWatchersListResponse>;
  }

  /**
   * Gets all network watchers by subscription.
   * @param options The options parameters.
   */
  listAll(
    options?: coreHttp.OperationOptions
  ): Promise<NetworkWatchersListAllResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listAllOperationSpec
    ) as Promise<NetworkWatchersListAllResponse>;
  }

  /**
   * Gets the current network topology by resource group.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the network watcher.
   * @param parameters Parameters that define the representation of topology.
   * @param options The options parameters.
   */
  getTopology(
    resourceGroupName: string,
    networkWatcherName: string,
    parameters: TopologyParameters,
    options?: coreHttp.OperationOptions
  ): Promise<NetworkWatchersGetTopologyResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkWatcherName,
        parameters,
        options: operationOptions
      },
      getTopologyOperationSpec
    ) as Promise<NetworkWatchersGetTopologyResponse>;
  }

  /**
   * Verify IP flow from the specified VM to a location given the currently configured NSG rules.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the network watcher.
   * @param parameters Parameters that define the IP flow to be verified.
   * @param options The options parameters.
   */
  async verifyIPFlow(
    resourceGroupName: string,
    networkWatcherName: string,
    parameters: VerificationIPFlowParameters,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<NetworkWatchersVerifyIPFlowResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      networkWatcherName,
      parameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        NetworkWatchersVerifyIPFlowResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      verifyIPFlowOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: verifyIPFlowOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Gets the next hop from the specified VM.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the network watcher.
   * @param parameters Parameters that define the source and destination endpoint.
   * @param options The options parameters.
   */
  async getNextHop(
    resourceGroupName: string,
    networkWatcherName: string,
    parameters: NextHopParameters,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<NetworkWatchersGetNextHopResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      networkWatcherName,
      parameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        NetworkWatchersGetNextHopResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      getNextHopOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: getNextHopOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Gets the configured and effective security group rules on the specified VM.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the network watcher.
   * @param parameters Parameters that define the VM to check security groups for.
   * @param options The options parameters.
   */
  async getVMSecurityRules(
    resourceGroupName: string,
    networkWatcherName: string,
    parameters: SecurityGroupViewParameters,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<NetworkWatchersGetVMSecurityRulesResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      networkWatcherName,
      parameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        NetworkWatchersGetVMSecurityRulesResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      getVMSecurityRulesOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: getVMSecurityRulesOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Initiate troubleshooting on a specified resource.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the network watcher resource.
   * @param parameters Parameters that define the resource to troubleshoot.
   * @param options The options parameters.
   */
  async getTroubleshooting(
    resourceGroupName: string,
    networkWatcherName: string,
    parameters: TroubleshootingParameters,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<NetworkWatchersGetTroubleshootingResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      networkWatcherName,
      parameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        NetworkWatchersGetTroubleshootingResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      getTroubleshootingOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: getTroubleshootingOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Get the last completed troubleshooting result on a specified resource.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the network watcher resource.
   * @param parameters Parameters that define the resource to query the troubleshooting result.
   * @param options The options parameters.
   */
  async getTroubleshootingResult(
    resourceGroupName: string,
    networkWatcherName: string,
    parameters: QueryTroubleshootingParameters,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<NetworkWatchersGetTroubleshootingResultResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      networkWatcherName,
      parameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        NetworkWatchersGetTroubleshootingResultResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      getTroubleshootingResultOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: getTroubleshootingResultOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Configures flow log and traffic analytics (optional) on a specified resource.
   * @param resourceGroupName The name of the network watcher resource group.
   * @param networkWatcherName The name of the network watcher resource.
   * @param parameters Parameters that define the configuration of flow log.
   * @param options The options parameters.
   */
  async setFlowLogConfiguration(
    resourceGroupName: string,
    networkWatcherName: string,
    parameters: FlowLogInformation,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<NetworkWatchersSetFlowLogConfigurationResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      networkWatcherName,
      parameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        NetworkWatchersSetFlowLogConfigurationResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      setFlowLogConfigurationOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: setFlowLogConfigurationOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Queries status of flow log and traffic analytics (optional) on a specified resource.
   * @param resourceGroupName The name of the network watcher resource group.
   * @param networkWatcherName The name of the network watcher resource.
   * @param parameters Parameters that define a resource to query flow log and traffic analytics
   *                   (optional) status.
   * @param options The options parameters.
   */
  async getFlowLogStatus(
    resourceGroupName: string,
    networkWatcherName: string,
    parameters: FlowLogStatusParameters,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<NetworkWatchersGetFlowLogStatusResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      networkWatcherName,
      parameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        NetworkWatchersGetFlowLogStatusResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      getFlowLogStatusOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: getFlowLogStatusOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Verifies the possibility of establishing a direct TCP connection from a virtual machine to a given
   * endpoint including another VM or an arbitrary remote server.
   * @param resourceGroupName The name of the network watcher resource group.
   * @param networkWatcherName The name of the network watcher resource.
   * @param parameters Parameters that determine how the connectivity check will be performed.
   * @param options The options parameters.
   */
  async checkConnectivity(
    resourceGroupName: string,
    networkWatcherName: string,
    parameters: ConnectivityParameters,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<NetworkWatchersCheckConnectivityResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      networkWatcherName,
      parameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        NetworkWatchersCheckConnectivityResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      checkConnectivityOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: checkConnectivityOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * NOTE: This feature is currently in preview and still being tested for stability. Gets the relative
   * latency score for internet service providers from a specified location to Azure regions.
   * @param resourceGroupName The name of the network watcher resource group.
   * @param networkWatcherName The name of the network watcher resource.
   * @param parameters Parameters that determine Azure reachability report configuration.
   * @param options The options parameters.
   */
  async getAzureReachabilityReport(
    resourceGroupName: string,
    networkWatcherName: string,
    parameters: AzureReachabilityReportParameters,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<NetworkWatchersGetAzureReachabilityReportResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      networkWatcherName,
      parameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        NetworkWatchersGetAzureReachabilityReportResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      getAzureReachabilityReportOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: getAzureReachabilityReportOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * NOTE: This feature is currently in preview and still being tested for stability. Lists all available
   * internet service providers for a specified Azure region.
   * @param resourceGroupName The name of the network watcher resource group.
   * @param networkWatcherName The name of the network watcher resource.
   * @param parameters Parameters that scope the list of available providers.
   * @param options The options parameters.
   */
  async listAvailableProviders(
    resourceGroupName: string,
    networkWatcherName: string,
    parameters: AvailableProvidersListParameters,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<NetworkWatchersListAvailableProvidersResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      networkWatcherName,
      parameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        NetworkWatchersListAvailableProvidersResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      listAvailableProvidersOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: listAvailableProvidersOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Gets Network Configuration Diagnostic data to help customers understand and debug network behavior.
   * It provides detailed information on what security rules were applied to a specified traffic flow and
   * the result of evaluating these rules. Customers must provide details of a flow like source,
   * destination, protocol, etc. The API returns whether traffic was allowed or denied, the rules
   * evaluated for the specified flow and the evaluation results.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the network watcher.
   * @param parameters Parameters to get network configuration diagnostic.
   * @param options The options parameters.
   */
  async getNetworkConfigurationDiagnostic(
    resourceGroupName: string,
    networkWatcherName: string,
    parameters: NetworkConfigurationDiagnosticParameters,
    options?: coreHttp.OperationOptions
  ): Promise<
    LROPoller<NetworkWatchersGetNetworkConfigurationDiagnosticResponse>
  > {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      networkWatcherName,
      parameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        NetworkWatchersGetNetworkConfigurationDiagnosticResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      getNetworkConfigurationDiagnosticOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: getNetworkConfigurationDiagnosticOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  private getOperationOptions<TOptions extends coreHttp.OperationOptions>(
    options: TOptions | undefined,
    finalStateVia?: string
  ): coreHttp.RequestOptionsBase {
    const operationOptions: coreHttp.OperationOptions = options || {};
    operationOptions.requestOptions = {
      ...operationOptions.requestOptions,
      shouldDeserialize: shouldDeserializeLRO(finalStateVia)
    };
    return coreHttp.operationOptionsToRequestOptionsBase(operationOptions);
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkWatcher
    },
    201: {
      bodyMapper: Mappers.NetworkWatcher
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters21,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkWatcher
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName
  ],
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName
  ],
  serializer
};
const updateTagsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkWatcher
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkWatcherListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  serializer
};
const listAllOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/networkWatchers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkWatcherListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  serializer
};
const getTopologyOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/topology",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Topology
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters22,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const verifyIPFlowOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/ipFlowVerify",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.VerificationIPFlowResult
    },
    201: {
      bodyMapper: Mappers.VerificationIPFlowResult
    },
    202: {
      bodyMapper: Mappers.VerificationIPFlowResult
    },
    204: {
      bodyMapper: Mappers.VerificationIPFlowResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters23,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getNextHopOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/nextHop",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.NextHopResult
    },
    201: {
      bodyMapper: Mappers.NextHopResult
    },
    202: {
      bodyMapper: Mappers.NextHopResult
    },
    204: {
      bodyMapper: Mappers.NextHopResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters24,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getVMSecurityRulesOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/securityGroupView",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SecurityGroupViewResult
    },
    201: {
      bodyMapper: Mappers.SecurityGroupViewResult
    },
    202: {
      bodyMapper: Mappers.SecurityGroupViewResult
    },
    204: {
      bodyMapper: Mappers.SecurityGroupViewResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters25,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getTroubleshootingOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/troubleshoot",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.TroubleshootingResult
    },
    201: {
      bodyMapper: Mappers.TroubleshootingResult
    },
    202: {
      bodyMapper: Mappers.TroubleshootingResult
    },
    204: {
      bodyMapper: Mappers.TroubleshootingResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters26,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getTroubleshootingResultOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/queryTroubleshootResult",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.TroubleshootingResult
    },
    201: {
      bodyMapper: Mappers.TroubleshootingResult
    },
    202: {
      bodyMapper: Mappers.TroubleshootingResult
    },
    204: {
      bodyMapper: Mappers.TroubleshootingResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters27,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const setFlowLogConfigurationOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/configureFlowLog",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.FlowLogInformation
    },
    201: {
      bodyMapper: Mappers.FlowLogInformation
    },
    202: {
      bodyMapper: Mappers.FlowLogInformation
    },
    204: {
      bodyMapper: Mappers.FlowLogInformation
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters28,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getFlowLogStatusOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/queryFlowLogStatus",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.FlowLogInformation
    },
    201: {
      bodyMapper: Mappers.FlowLogInformation
    },
    202: {
      bodyMapper: Mappers.FlowLogInformation
    },
    204: {
      bodyMapper: Mappers.FlowLogInformation
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters29,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const checkConnectivityOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/connectivityCheck",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ConnectivityInformation
    },
    201: {
      bodyMapper: Mappers.ConnectivityInformation
    },
    202: {
      bodyMapper: Mappers.ConnectivityInformation
    },
    204: {
      bodyMapper: Mappers.ConnectivityInformation
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters30,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getAzureReachabilityReportOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/azureReachabilityReport",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AzureReachabilityReport
    },
    201: {
      bodyMapper: Mappers.AzureReachabilityReport
    },
    202: {
      bodyMapper: Mappers.AzureReachabilityReport
    },
    204: {
      bodyMapper: Mappers.AzureReachabilityReport
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters31,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listAvailableProvidersOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/availableProvidersList",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AvailableProvidersList
    },
    201: {
      bodyMapper: Mappers.AvailableProvidersList
    },
    202: {
      bodyMapper: Mappers.AvailableProvidersList
    },
    204: {
      bodyMapper: Mappers.AvailableProvidersList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters32,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getNetworkConfigurationDiagnosticOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/networkConfigurationDiagnostic",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkConfigurationDiagnosticResponse
    },
    201: {
      bodyMapper: Mappers.NetworkConfigurationDiagnosticResponse
    },
    202: {
      bodyMapper: Mappers.NetworkConfigurationDiagnosticResponse
    },
    204: {
      bodyMapper: Mappers.NetworkConfigurationDiagnosticResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters33,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkWatcherName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
