import { render, screen } from '@testing-library/react';
import App from './App';


describe('App tests', () => {
  test('renders learn react link', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Front-End Developer Test Project');
  });
});

