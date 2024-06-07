import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  onCreated: Promise<any> = this.storage.create()

  constructor(private storage: Storage) {}

  setItem(key: string, value: string) {
    return this.storage.set(key, value);
  }

  getItem(key: string) {
    return this.storage.get(key);
  }
}
