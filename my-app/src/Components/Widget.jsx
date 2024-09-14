import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import '../Components/widget.css';

const Widget = ({ widget, removeWidget }) => {
  return (
    <div className="col-sm-3">
      <div className="card mb-3 widget-card">
        <div className="card-body">
          <h5 className="card-title">{widget.name}</h5>
          <p className="card-text">{widget.text}</p>
          <button className="btn widget-remove-btn " onClick={removeWidget}><IoCloseSharp className='icon'/> </button>
        </div>
      </div>
    </div>
  );
};

export default Widget;

