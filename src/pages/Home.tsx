import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to the TherapyOne Website</h1>
      <p className="text-xl mb-8">Manage Your TherapyOne Space</p>
      <Link to="/register" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Start Here
      </Link>
    </div>
  );
};

export default Home;