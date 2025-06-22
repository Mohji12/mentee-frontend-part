import React from 'react'
import Swot_form from '../components/ui6/swot_form'
import SwotForm from '../components/ui6/SwotForm'

function swot_form() {
  return (
    <div className="px-6 pt-0 pb-2 bg-gray-100 min-h-screen">
      {/* Mentee Meeting Header */}
      <div className="mb-4">
        <Swot_form /> {/* ✅ Capitalized usage */}
      </div>
      <div className='mb-4'>
        <SwotForm /> {/* ✅ Capitalized usage */}
      </div>
    </div>
  )
}

export default swot_form