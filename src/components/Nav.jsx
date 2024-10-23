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
    <nav className="p-3 flex justify-between items-center bg-white">
      <div className="text-2xl font-bold">DisastersIO</div>
      <ul className="flex gap-5 list-none">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a href={link.path} className="no-underline text-black">{link.name}</a>
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

