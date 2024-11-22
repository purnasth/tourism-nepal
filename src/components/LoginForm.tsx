import React from 'react';

const LoginForm: React.FC = () => {
  const handleGoogleSignUp = () => {
    alert('Google Sign-Up is clicked. Connect to your backend here!');
    // Integrate Firebase, OAuth, or a backend Google Auth API here
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert('Form submitted. Handle authentication logic here!');
    // Handle login logic (validate email/password or API request)
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 z-50">
      <div className="w-full max-w-md rounded-md bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-700">
          Welcome Back!
        </h2>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              placeholder="Enter your password"
              className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-2 font-medium text-white transition hover:bg-blue-700"
          >
            Log In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">Or</p>
          <button
            onClick={handleGoogleSignUp}
            className="mt-2 flex w-full items-center justify-center rounded-md border border-blue-700/50 bg-white py-2 text-blue-700 transition"
          >
            <img
              src="https://th.bing.com/th/id/R.0fa3fe04edf6c0202970f2088edea9e7?rik=joOK76LOMJlBPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-open-2000.png&ehk=0PJJlqaIxYmJ9eOIp9mYVPA4KwkGo5Zob552JPltDMw%3d&risl=&pid=ImgRaw&r=0"
              alt="Google Logo"
              className="mr-2 size-5 object-contain"
            />
            Login with Google
          </button>
        </div>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
