import { PlayerStatsPipe } from './player-stats.pipe';

describe('PlayerStatsPipe', () => {
  it('create an instance', () => {
    const pipe = new PlayerStatsPipe();
    expect(pipe).toBeTruthy();
  });
});
