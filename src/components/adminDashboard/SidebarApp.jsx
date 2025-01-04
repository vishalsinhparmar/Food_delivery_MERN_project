import logo from '@assets/png_logo/LOGO_1.png';
import { MdOutlineFastfood, MdOutlineHome } from 'react-icons/md';
import { VscListSelection } from 'react-icons/vsc';
import { BiDetail, BiEditAlt } from 'react-icons/bi';
import { SiSimpleanalytics } from 'react-icons/si';
import { NavLink } from 'react-router-dom';

export default function SidebarApp() {
  const menuItems = [
    { name: 'Dashboard', icon: <MdOutlineHome className="text-2xl" />, path: '/admin/dashboard' },
    { name: 'Order List', icon: <VscListSelection className="text-2xl" />, path: '/admin/order-list' },
    { name: 'Order Detail', icon: <BiDetail className="text-2xl" />, path: '/admin/Product-detail' },
    { name: 'Analytics', icon: <SiSimpleanalytics className="text-2xl" />, path: '/admin/Analytics' },
    { name: 'Reviews', icon: <BiEditAlt className="text-2xl" />, path: '/admin/Reviews' },
    { name: 'Add Food Category', icon: <MdOutlineFastfood className="text-2xl" />, path: '/admin/Foods' },
    { name: 'Manage Food Category', icon: <MdOutlineFastfood className="text-2xl" />, path: '/admin/Managefoodcategory' },
  ];

  return (
    <div className="fixed w-64 h-screen bg-white shadow-lg">
      <aside className="h-full overflow-y-auto scrollbar-thin scrollbar-hide">
        <div className="flex flex-col items-center justify-between h-full py-6">
          {/* Logo */}
          <div className="w-40 mb-10">
            <img src={logo} alt="Admin Logo" />
          </div>

          {/* Navigation Menu */}
          <ul className="flex flex-col w-full px-4">
            {menuItems.map(({ name, icon, path }) => (
              <li key={name} className="my-2">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center px-5 py-2 rounded-lg ${
                      isActive
                        ? 'bg-green-100 text-green-700'
                        : 'hover:bg-gray-100 hover:text-gray-700'
                    }`
                  }
                >
                  <span className="mr-4">{icon}</span>
                  <span>{name}</span>
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Footer */}
          <div className="text-center mt-auto">
            <h1 className="font-semibold text-sm">Order Admin Dashboard</h1>
            <p className="opacity-75 text-xs mt-2">&#169; 2020 All Rights Reserved</p>
          </div>
        </div>
      </aside>
    </div>
  );
}

