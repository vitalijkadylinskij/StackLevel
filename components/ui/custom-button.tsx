import { ArrowRight } from 'lucide-react'

interface CustomButtonProps {
    text?: string
    color?: 'purple' | 'blue' | 'indigo' | 'violet' | 'custom'
    customColor?: string
    showArrow?: boolean
    onClick?: () => void
    className?: string
    disabled?: boolean
}

export function CustomButton({
                                   text = 'Read More',
                                   color = 'purple',
                                   customColor,
                                   showArrow = true,
                                   onClick,
                                   className = '',
                                   disabled = false,
                               }: CustomButtonProps) {
    const colorClasses = {
        purple: 'bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600',
        blue: 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600',
        indigo: 'bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600',
        violet: 'bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-700 hover:to-violet-600',
        custom: customColor || 'bg-purple-600',
    }

    const baseClasses = 'inline-flex items-center justify-center gap-2 py-3 text-lg text-white font-medium rounded-full transition-all duration-200 ease-out hover:shadow-lg hover:cursor-pointer active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed'

    const buttonColor = colorClasses[color]

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${baseClasses} ${buttonColor} ${className}`}
            aria-label={text}
        >
            {text}
            {showArrow && <ArrowRight size={20} strokeWidth={2.5} />}
        </button>
    )
}
