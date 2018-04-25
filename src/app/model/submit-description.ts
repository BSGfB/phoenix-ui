export class SubmitDescription {
  constructor(public title: string,
              public categoryId: number,
              public isForSell: boolean,
              public description: string,
              public priceRubles: number,
              public pricePennies: number) {
  }
}
