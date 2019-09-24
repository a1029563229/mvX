import { SyncHook } from 'tapable';

class Observer {
  constructor() {
    this.hooks = {
      update: new SyncHook(['data'])
    }
  }
}

const observer = new Observer();

export default observer;