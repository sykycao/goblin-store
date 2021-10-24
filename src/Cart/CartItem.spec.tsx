import { fireEvent } from '@testing-library/dom';
import React from 'react';
import { Product } from '../shared/types';
import { CartItem } from './CartItem';

const product: Product = {
  name: 'Product Foo',
  price: 100,
  image: '/image/source.png',
};

describe('CartItem', () => {
  it('renders correctly', () => {
    const { container, getByAltText } = renderWithRouter(() => (
      <CartItem product={product} removeFromCart={() => {}} />
    ));

    expect(container.innerHTML).toMatch('Product Foo');
    expect(container.innerHTML).toMatch('100 Zm');
    expect(getByAltText('Product Foo')).toHaveAttribute(
      'src',
      '/image/source.png'
    );
  });

  describe("on 'Remove item' click", () => {
    it('calls passed in function', () => {
      const removeFromCartMock = jest.fn();

      const { getByText } = renderWithRouter(() => (
        <CartItem product={product} removeFromCart={removeFromCartMock} />
      ));

      fireEvent.click(getByText('Remove'));

      expect(removeFromCartMock).toBeCalledWith(product);
    });
  });
});
