import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      setData(text);
    })();
  });

  return (
    <>
      <div>development</div>
      <div>{data}</div>;
      <div>Hello World</div>;
    </>
  )
}

export default App;
