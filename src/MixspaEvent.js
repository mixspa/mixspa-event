class MixspaEvent {
  static on(type, listener) {
    window.addEventListener('mixspa:' + type, (e) => listener(e.detail));
  }

  static emit(type, message) {
    window.dispatchEvent(new CustomEvent('mixspa:' + type, {
      detail: message
    }));
  }
}

export default MixspaEvent;
