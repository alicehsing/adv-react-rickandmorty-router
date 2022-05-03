import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('<App />', () => {
  it('renders a list of clickable characters on list view, on click, navigates to the character detail view', async () => {
    // Render the app to the "screen"
    render(
      <MemoryRouter initialEntries={['/characters']}>
        <App />
      </MemoryRouter>
    );

    // Find an element with the text of "Loading..."
    screen.getByText(/loading/i);
    await waitForElementToBeRemoved(await screen.findByText(/loading/i));

    // Find and check for clickable rendered character 'Morty Smith'
    const characterLink = await screen.findByText('Morty Smith');
    userEvent.click(characterLink);

    // on click, find and check for image of Morty Smith rendered on detail page
    await screen.findByAltText('Morty Smith');
  });
});
