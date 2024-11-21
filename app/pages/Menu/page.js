
import Footer from '@/app/component/Footer/page';
import Navbar from '@/app/component/Navbar/page';
import React from 'react';

const Menu = () => {
  const collections = [
    { id: 1, image: '/image/front_medium1.png', title: 'Short Sleeve T-shirts' },
    { id: 2, image: '/image/front_medium2.png', title: 'Short Sleeve T-shirts' },
    { id: 3, image: '/image/front_medium3.png', title: 'Short Sleeve T-shirts' },
    { id: 4, image: '/image/front_medium4.png', title: 'Short Sleeve T-shirts' },
    { id: 5, image: '/image/front_medium1.png', title: 'Short Sleeve T-shirts' },
    { id: 6, image: '/image/front_medium2.png', title: 'Short Sleeve T-shirts' },
    { id: 7, image: '/image/front_medium3.png', title: 'Short Sleeve T-shirts' },
    { id: 8, image: '/image/front_medium4.png', title: 'Short Sleeve T-shirts' },
    { id: 9, image: '/image/front_medium1.png', title: 'Short Sleeve T-shirts' },
    { id: 10, image: '/image/front_medium2.png', title: 'Short Sleeve T-shirts' },
    { id: 11, image: '/image/front_medium3.png', title: 'Short Sleeve T-shirts' },
    { id: 12, image: '/image/front_medium4.png', title: 'Short Sleeve T-shirts' },
    { id: 13, image: '/image/front_medium1.png', title: 'Short Sleeve T-shirts' },
    { id: 14, image: '/image/front_medium2.png', title: 'Short Sleeve T-shirts' },
    { id: 15, image: '/image/front_medium3.png', title: 'Short Sleeve T-shirts' },
    { id: 16, image: '/image/front_medium4.png', title: 'Short Sleeve T-shirts' },
  ];

  return (
    <div className="menuContainer">
      <Navbar/>
      <div className="menuRow">
        {collections.map((e) => (
          <div key={e.id} className="menuCol">
            <div className="menuCardCollection">
              <div className="menuImages">
                <img src={e.image} alt={e.title} />
              </div>
              <h3 className="menuTitle">{e.title}</h3>
            </div>
          </div>
        ))}
      </div>
     <Footer/>
    </div>
  );
}

export default Menu;
