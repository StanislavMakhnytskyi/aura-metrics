import * as React from "react"

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export function Logo({ size = 24, className, ...props }: LogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        {/* Glowing Aura Gradient matching reference image colors */}
        <linearGradient id="auraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />  {/* Purple */}
          <stop offset="40%" stopColor="#3b82f6" /> {/* Blue */}
          <stop offset="70%" stopColor="#2dd4bf" /> {/* Teal/Green */}
          <stop offset="100%" stopColor="#fed7aa" />{/* Soft Orange/Peach */}
        </linearGradient>

        {/* Mask to cut out the pinwheel curves from the gradient background */}
        <mask id="logoMask">
          {/* Default visible area */}
          <rect x="0" y="0" width="32" height="32" fill="#ffffff" />
          
          {/* Black cutout curves with rounded stroke caps */}
          <path
            d="M17 9.5C14.5 10.5 13.5 12.8 14.5 15"
            stroke="#000000"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M18.2 12C16.2 13 15.5 14.8 16.2 16.5C17.5 15.5 18 14 18.2 12Z"
            stroke="#000000"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M15 16.5C13.5 17.5 12 18.5 13 21C14.5 20 16 19.5 17 18.2C15.8 18.2 15.2 17.8 15 16.5Z"
            stroke="#000000"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M11 16.5C12.5 19 14.5 21 17 21"
            stroke="#000000"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M18.8 16.2C19.8 17.5 20.2 19 19.5 21.5"
            stroke="#000000"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M20.8 16C21.8 17.8 22 20 21 22.2"
            stroke="#000000"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />
        </mask>
      </defs>

      {/* Rounded Triangle Base filled with Aura Gradient and masked with Pinwheel cutout */}
      <path
        d="M16 4C18 4 27 15 27 21C27 25.5 22.5 28 16 28C9.5 28 5 25.5 5 21C5 15 14 4 16 4Z"
        fill="url(#auraGradient)"
        mask="url(#logoMask)"
      />
    </svg>
  )
}
