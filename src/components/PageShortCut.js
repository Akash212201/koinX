import React, { useState, useRef, useEffect } from 'react';

const PageShortCut = () => {
  const [activeItem, setActiveItem] = useState('Overview');
  const [borderWidth, setBorderWidth] = useState(0);
  const menuItemRef = useRef(null);

  const menuItems = [
    'Overview',
    'Fundamentals',
    'News Insights',
    'Sentiments',
    'Team',
    'Technicals',
    'Tecknomics'
  ];

  useEffect(() => {
    if (menuItemRef.current) {
      setBorderWidth(menuItemRef.current.offsetWidth);
    }
  }, [activeItem]);

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className='mb-10 relative px-2'>
      <div className='relative'>
        <ul className='flex justify-between items-center text-lg font-semibold'>
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href="#!"
                className={activeItem === item ? 'active' : ''}
                onClick={() => handleClick(item)}
                ref={activeItem === item ? menuItemRef : null}
              >
                {item}
              </a>
              {activeItem === item && (
                <span
                  className="bottom-border"
                  style={{ width: `${borderWidth}px` }}
                ></span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <span className=' absolute top-3 left-0 right-0 block border border-[#cdcdcd] w-full my-4'></span>
    </div>
  );
};

export default PageShortCut;
