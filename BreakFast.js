import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Breakfast = () => {
    const navigate = useNavigate();
        const handleClick = (item) => {
            navigate(`/${item.toLowerCase()}`);
        };
  const items = [
    {
      name: 'Masala Dosa',
      desc: 'Crispy rice crepe filled with spicy potato filling.',
      img: 'https://images.pexels.com/photos/12392915/pexels-photo-12392915.jpeg?auto=compress&cs=tinysrgb&w=600',
      price : '₹50',
    },
    {
      name: 'Poha',
      desc: 'Flattened rice cooked with spices, onions, and peanuts.',
      img: 'https://images.pexels.com/photos/30769669/pexels-photo-30769669/free-photo-of-traditional-indian-poha-breakfast-dish.jpeg?auto=compress&cs=tinysrgb&w=600',
      price : '₹40',
    },
    {
      name: 'Idli Sambar',
      desc: 'Steamed rice cakes served with spicy lentil soup.',
      img: 'https://images.pexels.com/photos/14831540/pexels-photo-14831540.jpeg?auto=compress&cs=tinysrgb&w=600',
        price : '₹60',
    },
    {
      name: 'Paratha',
      desc: 'Stuffed flatbread served with curd and pickle.',
      img: 'https://images.pexels.com/photos/10810650/pexels-photo-10810650.jpeg?auto=compress&cs=tinysrgb&w=600',
        price : '₹70',
    },
    {
      name: 'Upma',
      desc: 'Savory semolina porridge with mustard seeds and veggies.',
      img: 'https://images.pexels.com/photos/20408458/pexels-photo-20408458/free-photo-of-indian-round-dish-with-spices-and-sauces-on-the-side.jpeg?auto=compress&cs=tinysrgb&w=600',
        price : '₹50',
    },
    {
      name: 'Chole Bhature',
      desc: 'Spicy chickpeas served with deep-fried bread.',
      img: 'https://images.pexels.com/photos/11818239/pexels-photo-11818239.jpeg?auto=compress&cs=tinysrgb&w=600',
        price : '₹80',
    },
  ];

  return (
    <div className="breakfast-section">
      <style>{`
      html, body {
    margin: 0;
    padding: 0;
  }
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Georgia&display=swap');

.header {
  background-color: #B22222;
  padding: 20px;
  color: #f5f5dc;
  margin-top: 0; /* You already have this */
  position: sticky; /* Or fixed, depending on your desired behavior */
  top: 0;
  z-index: 10; /* Ensure it's above other content if needed */
}

        .header h1 {
          font-family: 'Georgia', serif;
          font-weight: bold;
          font-size: 2.5rem;
          margin-left: 20px;
        }

        .nav-link {
          color: #e6d8b4 !important;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #fff5cc !important;
        }


        .breakfast-section {
          background: url('https://www.transparenttextures.com/patterns/paper-fibers.png');
          background-color: #fdf6e3;
          padding: 60px 20px;
          text-align: center;
        }

        .breakfast-title {
          font-family: 'Pacifico', cursive;
          font-size: 3rem;
          color: #B22222;
          margin-bottom: 40px;
        }

        .breakfast-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .breakfast-card {
          background-color: #fff5cc;
          border: 1px solid #e6d8b4;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0,0,0,0.08);
          transition: transform 0.2s;
        }

        .breakfast-card:hover {
          transform: translateY(-5px);
        }

        .breakfast-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .breakfast-card h3 {
          font-family: 'Georgia', serif;
          color: #1a1a1a;
          font-size: 1.4rem;
          margin: 10px 0 5px;
        }

        .breakfast-card p {
          font-size: 0.95rem;
          color: #4a4a4a;
          padding: 0 10px 15px;
        }
          .breakfast-card .price {
            display: block;
             margin-top: 5px;
              font-size: 1rem;
               color: #8B4513;
                 font-weight: bold;
}

        @media (max-width: 768px) {
          .breakfast-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 500px) {
          .breakfast-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      
      {/* Header */}
      <div className="header">
        <h1>DaaWat Co.</h1>
        <ul className="nav justify-content-end">
          <li className="nav-item">
          <Link className="nav-link" to="/home">Home</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/menu">Menu</Link>
            
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/lunch">Lunch</Link>
          
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/dinner">Dinner</Link>
            
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/dessert">dessert</Link>
            
          </li>
        </ul>
      </div>

      <h1 className="breakfast-title">BreakFeast!</h1>
      <div className="breakfast-grid">
        {items.map((item, index) => (
         <div className="breakfast-card" key={index}>
         <img src={item.img} alt={item.name} />
         <h3>{item.name}</h3>
         <p>{item.desc}</p>
         <span className="price">{item.price}</span>
       </div>
       
          
          
        ))}
        
      </div>
    </div>
  );
};

export default Breakfast;
