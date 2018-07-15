import WeightRecorder from "@/ts/WeightRecorder";
import * as Moment from "moment";

describe("WeightRecorder", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should set weight record", () => {
    Moment.locale("ja");
    const weight = "80";
    const recorder = new WeightRecorder();
    const record = recorder.addRecord(weight);

    expect(recorder.getRecord().pop()).toEqual(record);
  });

  it("should get existed weight record", () => {
    window.localStorage.setItem(
      "weight-recorder",
      JSON.stringify({ testKey: "test value" })
    );
    const recorder = new WeightRecorder();

    expect(recorder.getRecord()).toEqual({ testKey: "test value" });
  });

  it("should clear weight record in localStorage", () => {
    window.localStorage.setItem(
      "weight-recorder",
      JSON.stringify({ testKey: "test value" })
    );
    const recorder = new WeightRecorder();

    recorder.clearRecord();
    expect(recorder.getRecord()).toEqual([]);
  });
});
