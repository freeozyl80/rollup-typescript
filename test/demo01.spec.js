describe("Task", function () {
    var task = require("../dist/normal/cjs/demo01.js");
    var exportFn1;
    var exportFn2;

    beforeEach(function () {
        exportFn1 = task.exportFn1;
        exportFn2 = task.exportFn2;
    });

    describe("test exportFn1", function() {
        it("should return hello statement", function() {
            expect(exportFn1("it is ")).toBe("it is hello world!")
        })
    })

    describe("test exportFn2", function() {
        it("should return hello statement", function() {
            expect(exportFn2()).customize(10);
        })
    })
});