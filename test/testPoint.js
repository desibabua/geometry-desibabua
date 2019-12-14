const assert = require("chai").assert;
const { Point } = require("../src/point");

describe("Point", function() {
  describe("toString", function() {
    it("should give new point", function() {
      const point = new Point(2, 3);
      assert.strictEqual(point.toString(), "[Point @(2,3)]");
    });
  });

  describe("visit", function() {
    it("should give value of a point with given function reference", function() {
      const point = new Point(2, 3);
      let actualValue = point.visit((x, y) => x + y);
      assert.equal(actualValue, 5);

      actualValue = point.visit((x, y) => x * y);
      assert.equal(actualValue, 6);
      
      actualValue = point.visit((x, y) => x / y);
      assert.approximately(actualValue, 0.66, 0.1);
    });
  });

  describe("isEqualTo", function() {
    it("should validate to other point", function() {
      const point1 = new Point(1, 2);
      const point2 = new Point(1, 2);
      assert.isTrue(point1.isEqualTo(point2));
    });

    it("should invalidate to other point of other instance", function() {
      const point1 = new Point(1, 2);
      const point2 = { x: 1, y: 2 };
      assert.isFalse(point1.isEqualTo(point2));
    });

    it("should invalidate to other point of other instance", function() {
      const point1 = new Point(1, 2);
      const point2 = "";
      assert.isFalse(point1.isEqualTo(point2));
    });
  });
});
