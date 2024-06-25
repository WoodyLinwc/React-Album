import React from 'react';
import './App.css';
import ThemeChange from './components/ThemeChange';
import ResponsiveCarousel from './components/ResponsiveCarousel';

function App() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost text-xl">Woody's Website</a>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>Album</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li><a href="https://woodylinwc.github.io/photo">More Pictures!</a></li>
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
                src="https://i.imgur.com/5ZOrfhw.jpg"
              />
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a href="https://github.com/WoodyLinwc" className="justify-between">
                GitHub
                <span className="badge">New</span>
              </a>
            </li>
            <li><a href="https://www.linkedin.com/in/woody-lin-32ab48161/">LinkedIn</a></li>
          </ul>
        </div>

        <ThemeChange />
      </div>


      <div >
      <ResponsiveCarousel />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button 
          className="btn"
          onClick={() => window.location.reload()}
        >
          Refresh Page
        </button>
      </div>

    </>
  );
}

export default App;
