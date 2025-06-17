import { using } from './test-using.js';

async function testUsing() {
    const input = {
        dispose: () => console.log('Disposed!'),
    };

    // this works:
    const p = using(input, async () => {});
    await p;

    // this does not work:
    await using(input, async () => {});
}
