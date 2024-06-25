import React, { useMemo } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

// Define a type for the context module
type ContextModule = {
    keys(): string[];
    // id is string and return should be string
    (id: string): string;
    <T>(id: string): T;
};

// Declare the context function to avoid TypeScript errors
declare const require: {
    context(
        directory: string,
        useSubdirectories: boolean,
        regExp: RegExp
    ): ContextModule;
};

const MobileCarousel: React.FC = () => {
    // Dynamically import all modules that match a specific pattern from a directory
    // r is the parameter name
    // : ContextModule specifies that r should be of type ContextModule
    // : string[]:  specifies the return type of the function.
    const importAll = (r: ContextModule): string[] => r.keys().map((key) => r(key) as string);
    
    // Hold an array of imported image modules
    const allImages: string[] = importAll(require.context('../../public/images/', false, /\.(png|JPG|svg)$/));

    // Fisher-Yates shuffle algorithm
    const shuffleArray = (array: string[]): string[] => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    // Use useMemo to shuffle the array only once per render because shuffling is a computationally intensive operation
    const shuffledImages = useMemo(() => shuffleArray(allImages), [allImages]);

    return (
        <div>
            <Slide indicators={true} autoplay={true} pauseOnHover={false}>
                {shuffledImages.map((image, index) => (
                    <div key={index} className="each-slide-effect" style={{ padding: '0 10px' }}>
                        <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default MobileCarousel;