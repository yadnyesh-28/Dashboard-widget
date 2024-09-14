import React, { useState } from 'react';
import '../Components/AddWidgetform.css';


const AddWidgetForm = ({ addWidget, categories, onClose }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.name || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (widgetName && widgetText) {
      addWidget(selectedCategory, widgetName, widgetText);
      setWidgetName(''); // Clear form after submission
      setWidgetText('');
      onClose(); // Close sidebar after adding widget
    }
  };

  return (
    <div className="sidebar bg-light p-4">
      <button className="close-btn" onClick={onClose}>Close</button>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Widget Name:</label>
          <input
            type="text"
            className="form-control"
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
            placeholder="Enter widget name"
            required
          />
        </div>
        <div className="form-group">
          <label>Widget Text:</label>
          <textarea
            className="form-control"
            value={widgetText}
            onChange={(e) => setWidgetText(e.target.value)}
            placeholder="Enter widget text"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Select Category:</label>
          <select
            className="form-control"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category, index) => (
              <option key={index} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Add Widget</button>
      </form>
    </div>
  );
};

export default AddWidgetForm;
