import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimelineEvent } from '../models/timeline-event';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {
  public localDir = 'assets/data/working-exp.json';
  constructor(private httpClient: HttpClient) { }

  public getWorkingExp() {
    return this.httpClient.get<Array<TimelineEvent>>(this.localDir, { observe: 'response' });
  }
}
