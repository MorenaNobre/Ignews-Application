import { render, screen } from '@testing-library/react';
import { mocked } from 'jest-mock';
import { useSession } from 'next-auth/react';
import { SignInButton } from '.';

jest.mock('next-auth/react')

describe('SignInButton component', () => {

  it('renders corretly when user is not authenticated', () => {
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValueOnce([null, false] as any);

    render(<SignInButton />)
  
    expect(screen.getByText('Sign in with Github')).toBeInTheDocument();
  })
  
  it('renders corretly when user is authenticated', () => {
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValueOnce(
      {
        data: {
          user: { name: "John Doe", email: "john.doe@example.com" },
          expires: "fake-expires",
        },
      } as any
    );

    render(<SignInButton />)
  
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  })
})