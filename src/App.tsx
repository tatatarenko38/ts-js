import React, { useState, useEffect } from "react";

import "./App.css";

type AppProps = {
  test?: JSX.Element;
  children: React.ReactElement;
  onClick: React.MouseEventHandler;
};

const App: React.FC<AppProps> = ({ test, children, onClick }) => {
  const [count, setCount] = useState<number>(0);

  //React.MouseEventHandler<HTMLParagraphElement> - тип данних
  //функції handleClick(показує при натисканні на назву функції)
  //писати необов'язково - реакт знає, але якщо треба
  //зазначити якого роду функція потрібна передаватись(наприклад в пропсах), то ...
  const handleClick = (event: React.MouseEvent<Element, MouseEvent>) => {
    setCount((value) => value + 1);
  };

  //буде визивати алерт при зміні count
  useEffect(() => {
    alert(count);
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <p onClick={handleClick}>Count: {count}</p>
        <p>{test}</p>
        {children}
      </header>
    </div>
  );
};

export default App;
