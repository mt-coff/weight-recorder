import WeightRecorder from "@/ts/WeightRecorder";
import * as Moment from "moment";

describe("WeightRecorder", () => {
  let store: any = {};

  const mockLocalStorage = {
    getItem: (key: string): string => {
      return key in store ? store[key] : null;
    },

    setItem: (key: string, value: string) => {
      store[key] = value;
    },

    clear: () => {
      store = {};
    },

    removeItem: (key: string) => {
      delete store[key];
    }
  };

  Object.defineProperty(window, "localStorage", { value: mockLocalStorage });

  beforeEach(() => {
    localStorage.clear();
  });

  it("should set weight record", () => {
    Moment.locale("ja");
    const weight = 80;
    const record = [
      {
        recordedDate: Moment().format("YYYY/MM/DD HH:mm"),
        weight: `${weight}`
      }
    ];
    const recorder = new WeightRecorder();

    recorder.addRecord(80);
    expect(recorder.getRecord()).toEqual(record);
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
