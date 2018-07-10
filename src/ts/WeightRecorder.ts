import * as Moment from "moment";

export default class WeightRecorder {
  private records: object[];

  constructor() {
    const storageData = localStorage.getItem("weight-recorder");

    if (storageData) {
      this.records = JSON.parse(storageData);
    } else {
      this.records = [];
    }
  }

  public addRecord(weight: number): void {
    const newRecord = {
      recordedDate: Moment().format("YYYY/MM/DD HH:mm"),
      weight: `${weight}`
    };

    this.records.push(newRecord);
    localStorage.setItem("weight-recorder", JSON.stringify(this.records));
  }

  public getRecord(): object[] {
    return this.records;
  }

  public clearRecord(): void {
    this.records = [];
    localStorage.removeItem("weight-recorder");
  }
}
