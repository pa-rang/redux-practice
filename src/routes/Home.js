import React, { useState } from 'react'

function Home() {
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(text);
    setText("");
  }

  return (
    <>
      <h1>To Do List</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Write to do" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
    </>
  )
}

export default Home
