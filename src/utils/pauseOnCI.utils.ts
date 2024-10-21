export class PauseOnCI extends Error {
  constructor() {
    super(
      "Pausing is not allowed when running in Continuous Integration mode."
    );
    this.name = "PauseOnCI";
  }
}