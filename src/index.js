import { using, using as asyncUsing } from './test-using.js';

async function testUsing() {
    const input = {
        dispose: () => console.log('Disposed!'),
    };

    // this works:
    const p = using(input, async () => {});
    await p;

    // this also works:
    await asyncUsing(input, async () => {});

    // this does NOT work:
    await using(input, async () => {});
}
