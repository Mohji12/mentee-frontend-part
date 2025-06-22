import React from 'react'
import Swot_report from '../components/ui5/swot_report'

function swot_report() {
  return (
    <div className="px-6 pt-0 pb-2 bg-gray-100 min-h-screen">
      {/* Mentee Meeting Header */}
      <div className="mb-4">
        <Swot_report /> {/* ✅ Capitalized usage */}
      </div>
    </div>
    
  )
}

export default swot_report