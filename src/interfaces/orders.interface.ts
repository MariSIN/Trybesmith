export interface IOrder {
  id?: number,
  userId: number,
  productsIds: number[]
}

export interface INewOrder {
  id?: number;
  userId?: number;
  productsIds: number[];
}
