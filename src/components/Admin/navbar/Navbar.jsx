/* eslint-disable react/react-in-jsx-scope */
export default function Navbar() {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 bg-main">
      <div className="relative flex h-16 items-center justify-center">
        <h1 className="text-white text-3xl font-semibold">Connect - With</h1>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          {/* Profile dropdown */}
        </div>
      </div>
    </div>
  );
}
