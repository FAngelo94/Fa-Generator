import apis from "../config/api-config";
import io from 'socket.io-client';


class WSService {
  constructor() {
    this.ws = io(apis.stations.socketStationsParameter);
  }
}
export default new WSService();
