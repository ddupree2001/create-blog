import React from 'react'
import {FiChevronDown} from 'react-icons/fi'

const Accordion = ({title, children}) => {
    return (
        <details className="group">
            <summary className="flex items-center justify-between border-b border-gray-200 py-4 px-6 cursor-pointer list-none">
                <span className="text-sm font-semibold capitalize">{title}</span>
                <FiChevronDown className="h-5 w-5 text-gray-400 rotate-90 group-open:rotate-0 transition-transform"/>
            </summary>
            <div className="px-6 py-4 border-b border-gray-200">
                {children}
            </div>
        </details>
    )
}

export default Accordion