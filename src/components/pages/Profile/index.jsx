import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  // Get initials for fallback avatar
  const getInitials = (name) => {
    if (!name) return 'U';
    const names = name.trim().split(' ');
    if (names.length >= 2) {
      return (names[0][0] + names[names.length - 1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  return (
    isAuthenticated && (
      <div className="max-w-md mx-auto mt-16 bg-white rounded-xl shadow-md p-8 text-center">
        {user.picture ? (
          <img
            src={user.picture}
            alt={user.name}
            className="w-28 h-28 rounded-full mx-auto mb-4 border-2 border-gray-200 object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div
          className="w-28 h-28 rounded-full mx-auto mb-4 bg-purple-600 text-white flex items-center justify-center text-3xl font-semibold"
          style={{ display: user.picture ? 'none' : 'flex' }}
        >
          {getInitials(user.name)}
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-1">{user.name}</h2>
        <p className="text-gray-500 mb-6">{user.email}</p>

        <button
          className="w-full px-6 py-2.5 bg-[#666555] text-white font-medium rounded-lg hover:bg-[#4d4c40]  transition"
          onClick={() =>
            logout({
              logoutParams: { returnTo: window.location.origin },
            })
          }
        >
          Logout
        </button>
      </div>
    )
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});