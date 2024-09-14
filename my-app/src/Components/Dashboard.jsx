import React, { useState } from 'react';
import AddWidgetForm from './AddWidgetForm';
import Widget from './Widget';
import dashboardData from '../Data/dashboard.json'; 
import '../Components/dashboard.css';


const Dashboard = () => {
  const [categories, setCategories] = useState(dashboardData.categories);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const addWidget = (categoryName, widgetName, widgetText) => {
    const newWidget = {
      id: Date.now(),
      name: widgetName,
      text: widgetText
    };

    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.name === categoryName
          ? { ...category, widgets: [...category.widgets, newWidget] }
          : category
      )
    );
  };

  const removeWidget = (categoryName, widgetId) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.name === categoryName
          ? { ...category, widgets: category.widgets.filter((widget) => widget.id !== widgetId) }
          : category
      )
    );
  };

  return (
    <div className="container">
      <div className='widget-header'>
      <h3 className="text-start my-4 ">Widget Dashboard</h3>

      {/* Add Widget Button */}
      <button className="btn  btn-success mb-4 add-widget-btn" onClick={() => setIsSidebarOpen(true)}>
        + Add Widget
      </button>
      </div>

      {/* Sidebar Form for Adding Widgets */}
      {isSidebarOpen && (
        <AddWidgetForm
          addWidget={addWidget}
          categories={categories}
          onClose={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Render Categories and Widgets */}
      {categories.map((category, index) => (
        <div key={index} className="mb-5 category-container">
          <h4 className="category-name">{category.name}</h4>
          <div className="row">
            {category.widgets.length === 0 ? (
              <p className="text-start">No widgets available</p>
            ) : (
              category.widgets.map((widget) => (
                <Widget
                  key={widget.id}
                  widget={widget}
                  removeWidget={() => removeWidget(category.name, widget.id)}
                />
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
