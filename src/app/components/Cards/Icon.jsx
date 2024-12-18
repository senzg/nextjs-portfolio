import React from 'react'
import Image from 'next/image'

function Icon({iconPath, iconName}) {
return (
    <div className="container p-1 shadow-lg w-[90px] h-[100px] text-[#ADB7BE] px-2 py-1 text-xl">
        <div className="icon">  
            <Image src={iconPath} alt="Icon" width={80} height={80} />
        </div>
        <div className="text-center text-xs">
            <p>{iconName}</p>
        </div>
    </div>
)
}

export default Icon