import React from 'react';

const Nav = () => {
  const navLinks = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Incidents', path: '/incidents' },
    { name: 'Locations', path: '/locations' },
    { name: 'Activities', path: '/activities' },
    { name: 'Documents', path: '/documents' },
    { name: 'Cypher AI', path: '/cypher-ai' }
  ];

  return (
    <nav className=" p-3 px-24 flex justify-between items-center bg-gray-100 border border-b-2 border-b-gray-200    ">
      <div className=""><img src="/public/LOGOEXPLORATION Search Bar Icon 8.png" alt="" /></div>
      <ul className="flex gap-5 list-none ">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a href={link.path} className="no-underline text-gray-600 text-[14px] ">{link.name}</a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2">
        <div><img src="/public/notification-bing-svgrepo-com 1.png" alt="" /></div>
        <div><img src="/public/Rectangle 5412 (1).png" alt="" /></div>
        <div>
          <span>Usman Zafar</span><br />
          <span>usmanzafar@gmail.com</span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

