import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentNotifyService {
  private readonly connection: Subject<Record<string, any>>;
  private readonly connected: Observable<Record<string, any>>;

  constructor() {
    this.connection = new Subject<Record<string, any>>();
    this.connected = this.connection.asObservable()
  }

  public setConnection(connection: Record<string, any>): void {
    this.connection.next(connection);
  }

  public getComponentNotification(): Observable<Record<string, any>> {
    return this.connected;
  }
}
