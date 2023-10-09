import React from 'react';
import { Link } from 'react-router-dom';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="ml-60 mt-5">
      <button
        className={`p-2 mx-1 bg-black text-white ${filter === 'All' ? 'active' : ''}`}
        onClick={() => setFilter('All')}
      >
        <Link to="/">Todas as Tarefas</Link>
      </button>
      <button
        className={`p-2 mx-1 bg-black text-white ${filter === 'Completed' ? 'active' : ''}`}
        onClick={() => setFilter('Completed')}
      >
        <Link to="/completed">Tarefas Completas</Link>
      </button>
      <button
        className={`p-2 mx-1 bg-black text-white ${filter === 'Incompleted' ? 'active' : ''}`}
        onClick={() => setFilter('Incompleted')}
      >
        <Link to="/incomplete">Tarefas Incompletas</Link>
      </button>
    </div>
  );
};

export default Filter;
