import { SyncHook } from 'tapable';

class Observer {
  constructor() {
    this.hooks = {
      init: new SyncHook(['todoList']),
      add: new SyncHook(['todo']),
      remove: new SyncHook(['index'])
    }
  }
}

const observer = new Observer();

export default observer;