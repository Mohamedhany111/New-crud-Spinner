import { NamesPipe } from './pages/pipe/names.pipe';

describe('NamesPipe', () => {
  it('create an instance', () => {
    const pipe = new NamesPipe();
    expect(pipe).toBeTruthy();
  });
});
