const Player = require('../lib/Player');

test('creates a Player object', () => {
    const player = new Player('Rob');

    expect(player.name).toBe('Rob');
})

jest.mock('../lib/Player');

console.log(new Player());