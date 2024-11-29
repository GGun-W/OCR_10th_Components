// import './App.css';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList'

const filters = ['all', 'active', 'completed'] // 카테고리별로 구분 => 헤더에서 사용

function App() {
  const [filter, setFilter] = useState(filters[0])
  return (
    <>
      <Header filters={filters} filter={filter} onFilterChange={setFilter}/>
      <TodoList filter={filter}/>
    </>
  );
}
export default App;