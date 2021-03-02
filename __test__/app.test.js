import { score } from "../src/client/js/app";
import { handleSubmit } from "../src/client/js/app";

describe("Testing the submit functionality", () => {
    test("Testing the submit functionality", () => {
        expect(handleSubmit).toBeDefined();
      });
    });

describe("test score polarity", () => {
  test("should return true", () => {
    const score_tag = "P+" || "P";
    expect(score(score_tag)).toBe("Positive");
  });
  test("should return true", () => {
    const score_tag = "NEU";
    expect(score(score_tag)).toBe("Neutral");
  });
});
