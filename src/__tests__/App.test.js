import React from 'react'
import reactDom from 'react-dom';
import { getQueriesForElement } from '@testing-library/dom';
import { fireEvent, getByText } from '@testing-library/react';
import App from '../App';

const render = (component) => {
  const root = document.createElement('div')
  reactDom.render(component, root)
  return getQueriesForElement(root)
}

test('Should be able to render the component', () => {
  const { getByText } = render(<App />)

  /* REACT TEST LIBRARY
  expect(getByText('teste')).not.toBeNull()
  expect(getByText('Olá mundo'))*/
})

test('Should have a title called Teste', () => {
  const { getByText } = render(<App />)
  getByText('teste')
})

test('Shoud be able to click in the button', () => {
  const { getByText } = render(<App />)
  const btn = getByText('valor')

  fireEvent.change(btn, { target: { value: 'valor' } })
  fireEvent.click(getByText('valor'))
})

/* JEST
  test('should render the component correctly', () => {
  const root = document.createElement('div')
  ReactDOM.render(<App />, root)
  expect(root.querySelector('p').textContent).toBe('teste')
  expect(root.querySelector('button').textContent).toBe('valor')
  })
  */

