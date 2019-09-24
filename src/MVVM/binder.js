class Binder {
  constructor(state) {
    this.state = state;
  }

  setViewUpdater(updater) {
    this.viewUpdater = updater;
  }

  setModelUpdater(updater) {
    this.modelUpdater = updater;
  }

  setState(newState) {
    this.state = {
      ...this.state,
      ...newState
    }
    this.updateDOM();
  }

  // 由于检查更新不好做，所以这里直接使用一个更新函数，强制更新
  updateDOM() {
    // 进行 diff 运算，得出新旧 DOM Tree 差异
    if (true) {
      //...
      this.viewUpdater(this.state);
      this.modelUpdater(this.state);
    }
  }
}

const binder = new Binder({});
export default binder;