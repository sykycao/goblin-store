import { Product } from '../shared/types';
import { getOrder, getProducts, postCheckout } from './api';
const globalAny: any = global;

describe('API', () => {
  describe('getOrder', () => {
    describe('with successful response', () => {
      it.todo('returns order info');
    });

    describe('with http error code', () => {
      it.todo('returns error info');
    });
  });

  describe('getProducts', () => {
    const products: Product[] = [
      {
        name: 'Product foo',
        price: 0,
        image: 'image.jpg',
      },
    ];

    globalAny.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(products),
      })
    );
    describe('with successful response', () => {
      it('returns products list', async () => {
        const listProducts = await getProducts();
        expect(listProducts).toEqual(products);
      });
    });

    describe('with http error code', () => {
      it('returns error info', async () => {
        globalAny.fetch.mockImplementationOnce(() =>
          Promise.reject('API is down')
        );
        const listProducts = await getProducts();
        expect(listProducts).toEqual(undefined);
      });
    });
  });

  describe('submitCheckout', () => {
    describe('with successful response', () => {
      it.todo('returns object with order id');
    });

    describe('with http error code', () => {
      it.todo('returns error info');
    });
  });
});
