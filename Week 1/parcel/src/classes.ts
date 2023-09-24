export const Airplane = class Airplanes {
  public pilot: string;
  private code: string;

  constructor(pilot: string) {
    this.pilot = pilot;
    this.code = this.generateCode();
  }

  generateCode() {
    return 'kheavanaekjhk';
  }
};
