export class QuanAn {

  private _giaohang: boolean;
  public get giaohang(): boolean {
    return this._giaohang;
  }
  public set giaohang(v: boolean) {
    this._giaohang = v;
  }

  private _giatoida: number;
  public get giatoida(): number {
    return this._giatoida;
  }
  public set giatoida(v: number) {
    this._giatoida = v;
  }

  private _giatoithieu: number;
  public get giatoithieu(): number {
    return this._giatoithieu;
  }
  public set giatoithieu(v: number) {
    this._giatoithieu = v;
  }

  private _giodongcua: string;
  public get giodongcua(): string {
    return this._giodongcua;
  }
  public set giodongcua(v: string) {
    this._giodongcua = v;
  }

  private _giomocua: string;
  public get giomocua(): string {
    return this._giomocua;
  }
  public set giomocua(v: string) {
    this._giomocua = v;
  }

  private _luotthich: number;
  public get luotthich(): number {
    return this._luotthich;
  }
  public set luotthich(v: number) {
    this._luotthich = v;
  }

  private _tenquanan: string;
  public get tenquanan(): string {
    return this._tenquanan;
  }
  public set tenquanan(v: string) {
    this._tenquanan = v;
  }

  constructor(data?: any) {
    if (data) {
      this.giaohang = data.giaohang;
      this.giatoida = data.giatoida;
      this.giatoithieu = data.giatoithieu;
      this.giodongcua = data.giodongcua;
      this.giomocua = data.giomocua;
      this.luotthich = data.luotthich;
      this.tenquanan = data.tenquanan;
    }
  }

}
