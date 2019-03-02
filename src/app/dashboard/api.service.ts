import {Injectable} from '@angular/core';
import {
  ConnectDevicesRequest,
  ConnectDevicesResponse,
  ConnectionAction,
  ListDevicesRequest,
  ListDevicesResponse
} from 'src/protogen/cgi_definitions_pb';
import {grpc} from 'grpc-web-client';
import {MicroVisionCGI} from 'src/protogen/cgi_service_pb_service';
import {CgiService} from './cgi.service';
import CameraConnection = ConnectDevicesRequest.CameraConnection;
import {IdRequest} from '../../protogen/camera_definitions_pb';
import ControllerConnection = ConnectDevicesRequest.ControllerConnection;
import {ConnectRequest} from '../../protogen/camera_controller_definitions_pb';
import {UnaryMethodDefinition} from 'grpc-web-client/dist/typings/service';
import {ProtobufMessage} from 'grpc-web-client/dist/typings/message';

interface UpdateDeviceListArgs {
  useCache?: boolean;
  cameraServerUrl?: string;
  controllerServerUrl?: string;
}

type action = 'connect' | 'disconnect' | '' | null;

interface ConnectDevicesArgs {
  camera?: {
    action: action,
    id?: string,
  };
  controller?: {
    action: action,
    path?: string,
  };
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  generalUnaryWrapper <
    TRequest extends ProtobufMessage,
    TResponse extends ProtobufMessage,
    M extends UnaryMethodDefinition<TRequest, TResponse>
    >(method: M, request: TRequest): Promise<TResponse> {
    return new Promise((resolve, reject) => {
      grpc.unary(method, {
        host: this.cgiService.cgiUrl,
        request,
        onEnd: output => {
          if (output.status !== grpc.Code.OK) {
            reject(output.statusMessage);
          } else {
            resolve(output.message as TResponse);
          }
        }
      });
    });
  }
  async UpdateDeviceList(request: UpdateDeviceListArgs): Promise<ListDevicesResponse> {
    const req = new ListDevicesRequest();
    req.setCameraUrl(request.cameraServerUrl);
    req.setControllerUrl(request.controllerServerUrl);
    req.setUseCache(request.useCache);
    return this.generalUnaryWrapper(MicroVisionCGI.ListDevices, req);
  }

  async ConnectDevices(request: ConnectDevicesArgs): Promise<ConnectDevicesResponse> {
    const req = new ConnectDevicesRequest();
    if (request) {
      if (request.camera) {
        const cameraConnection = new CameraConnection();
        const idRequest = new IdRequest();

        switch (request.camera.action) {
          case 'connect':
            cameraConnection.setAction(ConnectionAction.CONNECT);
            idRequest.setId(request.camera.id);
            cameraConnection.setConnectionInfo(idRequest);
            break;
          case 'disconnect':
            idRequest.setId(request.camera.id);
            cameraConnection.setConnectionInfo(idRequest);
            cameraConnection.setAction(ConnectionAction.DISCONNECT);
            break;
          default:
            cameraConnection.setAction(ConnectionAction.NO_OP);
            break;
        }
        req.setCameraConnection(cameraConnection);

      }
      if (request.controller) {
        const controllerConnection = new ControllerConnection();
        const connectRequest = new ConnectRequest();

        switch (request.controller.action) {
          case 'connect':
            controllerConnection.setAction(ConnectionAction.CONNECT);
            connectRequest.setPath(request.controller.path);
            controllerConnection.setConnectionInfo(connectRequest);
            break;
          case 'disconnect':
            controllerConnection.setAction(ConnectionAction.DISCONNECT);
            connectRequest.setPath(request.controller.path);
            controllerConnection.setConnectionInfo(connectRequest);
            break;
          default:
            controllerConnection.setAction(ConnectionAction.NO_OP);
            break;
        }
        req.setControllerConnection(controllerConnection);

      }
    }
    return this.generalUnaryWrapper(MicroVisionCGI.ConnectDevices, req);
  }

  constructor(private cgiService: CgiService) {
  }
}
