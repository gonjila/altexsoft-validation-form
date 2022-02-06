import "./App.css";

function App() {
  const onFormSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <div className="formWrapper">
        <h1>React Form</h1>
        <form onSubmit={onFormSubmit}>
          <input name="text" type="text" placeholder="Name" />
          <input name="email" type="email" placeholder="Email" />
          <select name="select" id="browsers">
            <option value="Edge">Edge</option>
            <option value="Firefox" selected>
              Firefox
            </option>
            <option value="Chrome">Chrome</option>
            <option value="Opera">Opera</option>
            <option value="Safari">Safari</option>
          </select>
          <input name="number" type="number" placeholder="Age" />

          <button type="submit" disabled={false}>
            click me
          </button>
        </form>
        <div className="errorWrapper">{null}</div>
      </div>
    </div>
  );
}

export default App;
