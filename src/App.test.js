import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

beforeEach(() => { window.scrollTo = jest.fn(); });
function show(path = '/') {
  return render(<MemoryRouter initialEntries={[path]}><App /></MemoryRouter>);
}
test('homepage offers research navigation, résumé, and email contact', () => {
  show();
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Learning geometry.');
  expect(screen.getByRole('link', { name: /view academic cv/i })).toHaveAttribute('href', 'resume.pdf');
  expect(screen.getByRole('link', { name: /samundra@iastate.edu/i })).toHaveAttribute('href', 'mailto:samundra@iastate.edu');
  fireEvent.click(screen.getByRole('link', { name: /explore my research/i }));
  expect(screen.getByRole('heading', { level: 1, name: 'Publications' })).toBeInTheDocument();
});
test('mobile navigation closes after selecting a route', () => {
  show();
  fireEvent.click(screen.getByRole('button', { name: /menu/i }));
  expect(screen.getByRole('button', { name: /close/i })).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(within(screen.getByRole('navigation')).getByRole('link', { name: 'Projects' }));
  expect(screen.getByRole('button', { name: /menu/i })).toHaveAttribute('aria-expanded', 'false');
  expect(screen.getByRole('heading', { level: 1, name: 'Projects' })).toBeInTheDocument();
});
test.each([['/lr', 'Experience'], ['/experience', 'Experience'], ['/blogs', 'Blogs'], ['/references', 'Reference'], ['/missing', 'Page not found']])('%s resolves to %s', (path, title) => {
  show(path);
  expect(screen.getByRole('heading', { level: 1, name: title })).toBeInTheDocument();
});
test('gallery navigation wraps in both directions', () => {
  show('/hobbies');
  expect(screen.getByRole('heading', { name: 'Japan' })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Previous photo' }));
  expect(screen.getByRole('heading', { name: 'Vancouver' })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Next photo' }));
  expect(screen.getByRole('heading', { name: 'Japan' })).toBeInTheDocument();
});

test('skip link focuses content without changing the hash route', () => {
  Element.prototype.scrollIntoView = jest.fn();
  show('/projects');
  fireEvent.click(screen.getByRole('link', { name: 'Skip to content' }));
  expect(screen.getByRole('main')).toHaveFocus();
  expect(screen.getByRole('heading', { level: 1, name: 'Projects' })).toBeInTheDocument();
});
