import Link from "next/link";

interface ButtonProps {
    element?: 'link' | null;
    href?: URL;
    id?: string;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    children: React.ReactNode;
}

const Button = ({ element, href, id, className, onClick, type, disabled, children }: ButtonProps) => {
    if(element === 'link') {
        return ( 
            <Link href={!disabled ? href! : ""} target="_blank" className={`${className} p-2 md:py-3 md:px-4 ${ !disabled ? 'bg-primary' : 'bg-[rgb(224,139,108)]'} text-white ${ !disabled && 'hover:!bg-primary-dark' } text-sm font-bold h-fit w-fit transition-all duration-200 rounded-full`}
                id={id || ''}
                onClick={onClick}
            >
                {children}
            </Link>
        )
    } else {
        return (
            <button className={`${className} p-2 md:py-3 md:px-4 ${ !disabled ? 'bg-primary' : 'bg-[rgb(224,139,108)]'} text-white ${ !disabled && 'hover:!bg-primary-dark' } text-sm font-bold leading-[1  ] h-fit w-fit transition-all duration-200 rounded-full outline-none`}
                id={id || ''}
                type={type}
                disabled={disabled}
                onClick={onClick}
            >
                {children}
            </button>
        )
    }    
}

export default Button;