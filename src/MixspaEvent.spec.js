import MixspaEvent from './MixspaEvent';

describe('MixspaEvent', () => {
  let listenerMock;

  beforeEach(() => {
    listenerMock = jest.fn();
    MixspaEvent.on('test:changed', listenerMock);
  });

  it('should trigger event listener when match the event name', () => {
    MixspaEvent.emit('test:changed', 'Hello Event');
    expect(listenerMock).toHaveBeenCalledWith('Hello Event');
  });

  it('should do not trigger event listener when event name is different', () => {
    MixspaEvent.emit('test:updated', 'Hello Event');
    expect(listenerMock).not.toHaveBeenCalledWith('Hello Event');
  });
});
