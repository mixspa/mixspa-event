class MixspaEvent {
  static on(type, listener) {
    window.addEventListener(type, (e) => listener(e.detail));
  }

  static emit(type, message) {
    window.dispatchEvent(new CustomEvent(type, {
      detail: message
    }));
  }
}

export default MixspaEvent;
