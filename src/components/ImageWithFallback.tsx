import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    fallbackIcon?: React.ReactNode;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
    src,
    alt,
    className,
    fallbackIcon,
    ...props
}) => {
    const [error, setError] = useState(!src);

    if (error) {
        return (
            <div className={`flex items-center justify-center bg-white/5 border border-white/10 rounded-xl ${className}`}>
                {fallbackIcon || <ImageIcon className="w-8 h-8 text-white/20" />}
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            onError={() => setError(true)}
            {...props}
        />
    );
};

export default ImageWithFallback;
