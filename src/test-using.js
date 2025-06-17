export async function using(input, callback) {
    try {
        await callback(input);
    } finally {
        input.dispose();
    }
}