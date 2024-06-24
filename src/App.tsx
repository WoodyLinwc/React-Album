import React from 'react';
import './App.css';
import ThemeChange from './components/ThemeChange';
import ResponsiveCarousel from './components/ResponsiveCarousel';

function App() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost text-xl">My Personal Website</a>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li><a href="#link1">Link 1</a></li>
                  <li><a href="#link2">Link 2</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a href="#profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a href="#settings">Settings</a></li>
            <li><a href="#logout">Logout</a></li>
          </ul>
        </div>

        <ThemeChange />
      </div>


      <div >
      <ResponsiveCarousel />
      </div>

    </>
  );
}

export default App;
