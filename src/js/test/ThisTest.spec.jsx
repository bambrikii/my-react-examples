describe("This test", () => {
    it("should nested object be this", () => {
        let obj1 = {
            prop1: {
                prop2: function () {
                    return this;
                }
            }
        };

        expect(obj1.prop1.prop2()).toBe(obj1.prop1);
    });
    it("should detached function return this", () => {
        let func1 = function () {
            return this;
        }

        let obj1 = {
            prop1: {
                prop2: func1
            }
        }

        expect(obj1.prop1.prop2()).toBe(obj1.prop1);
    });

    it("should change function context", () => {
        var obj = {
            method: function () {
                return this;
            }
        };

        var sec_obj = {
            method: obj.method
        };

        expect(sec_obj.method()).toBe(sec_obj);
    });
});
