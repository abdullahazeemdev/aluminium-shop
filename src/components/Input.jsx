import React from 'react'

const Input = ({label,name , type, placeholder,handler,icon,value}) => {
    return (
        <div>

            <label className="block text-xs font-medium text-gray-300 mb-1.5">
                {label}
            </label>

            <div className="relative">

                <i className={`${icon} absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 text-sm pointer-events-none`}></i>

                <input
                    name={name}
                    value={value}
                    onChange={handler}
                    type={type}
                    placeholder={placeholder}
                    className="w-full h-11 pl-11 pr-4 bg-[#0c0c0c] border border-white/10 rounded-lg text-sm text-white placeholder-gray-600 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20 transition-all"
                />

            </div>

        </div>
    )
}

export default Input