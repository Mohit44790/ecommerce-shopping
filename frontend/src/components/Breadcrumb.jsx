import React from 'react'
import { Link } from 'react-router-dom';

const Breadcrumb = ({ title }) => {
  return (
    <div className="text-sm text-gray-600 p-4">
      <p>
        <Link to="/" className="text-blue-600 hover:underline">Home</Link> / {title}
      </p>
    </div>
  )
}

export default Breadcrumb
