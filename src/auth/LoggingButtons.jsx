
import { useAuth0 } from "@auth0/auth0-react";
/**
 * TODO: Ticket 3:
 * Implement authentication and logging functionality using Auth0
 */
export const LoggingButtons = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  // TODO: Replace these with Auth0 functionality

  const handleLogging = () => {
    if (isAuthenticated) {
      logout({ logoutParams: { returnTo: window.location.origin } });
      // TODO: Add Logout functionality here:
    } else {
      loginWithRedirect();
      // TODO: Add Redirect functionality here:
    }
  };

  return (
    <button className='nav-btn  px-4 py-1' onClick={handleLogging}>
      {isAuthenticated ? "Log Out" : "Log In"}
    </button>
  );
};