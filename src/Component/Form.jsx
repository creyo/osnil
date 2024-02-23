import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [type, setType] = useState('folder');
  const [file, setFile] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here
    console.log('Name:', name);
    console.log('Type:', type);
    console.log('File:', file);
    // Reset the form
    setName('');
    setType('folder');
    setFile(null);
  };

  return (
    <div>
      <h2>File Upload Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="type">Type:</label>
          <select id="type" value={type} onChange={handleTypeChange}>
            <option value="folder">Folder</option>
            <option value="file">File</option>
          </select>
        </div>
        <div>
          <label htmlFor="file">File:</label>
          <input type="file" id="file" onChange={handleFileChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
