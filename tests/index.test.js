
describe("Check user event", () => {
    const desc = "<p>Check if button was clicked</p>";

    describe(desc, () => {
        it("Check if button was clicked", () => {
            spyOn(console, 'log');
            onClick({
                target: 'button'
            });
            expect(console.log).toHaveBeenCalled();
        });
    });
});
