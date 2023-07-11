import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
@Injectable({
  providedIn: 'root',
})
export class BotSocketService {
  private socketURL = environment.socket_uri;
  private socket = io.io(this.socketURL);
  constructor() {}

  sendMessage(data: any) {
    this.socket.emit('message', data);
  }

  receivedReply(): Observable<any> {
    return new Observable<any>((observer) => {
      const replyHandler = (data: any) => {
        observer.next(data);
      };

      this.socket.on('reply', replyHandler);
      const cleanup = () => {
        this.socket.off('reply', replyHandler);
        this.socket.disconnect();
      };
      return cleanup;
    });
  }
}
