import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  isLoaded = false

  constructor(private storage: Storage) {this.initStorage()}

  async initStorage() {
    if (this.isLoaded) {return}

    const stg = await this.storage.create()
    if (stg) {
      this.isLoaded = true
    } else {
      this.isLoaded = false
    }
  }

  async setItem(key: string, value: string) {
    await this.initStorage()
    return await this.storage.set(key, value);
  }

  async getItem(key: string) {
    await this.initStorage()
    return await this.storage.get(key);
  }
}
