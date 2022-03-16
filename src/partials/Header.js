import React from 'react';
import { useHistory } from 'react-router-dom';

// import SearchModal from '../components/ModalSearch';
// import Notifications from '../components/DropdownNotifications';
// import Help from '../components/DropdownHelp';
// import UserMenu from '../components/DropdownProfile';

function Header({ sidebarOpen, setSidebarOpen }) {
  // const [searchModalOpen, setSearchModalOpen] = useState(false);
  const history = useHistory();
  // console.log(history.goBack());
  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            {/* <button
              className="text-gray-500 hover:text-gray-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button> */}
            <button
              className="text-gray-500 hover:text-gray-600 flex items-center"
              onClick={() => history.goBack()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span className="text-sm ml-2">back</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
