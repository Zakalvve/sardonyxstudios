import React, {useEffect} from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import { Paragraph } from './UI/Text';

const UnityGameEmbed = ({config, className, children}) => {
    const { unityProvider, isLoaded, loadingProgression, requestFullscreen, unload } = useUnityContext(config);
    const loadingPercentage = Math.round(loadingProgression * 100);

    const toggleFullscreen = () => {
        requestFullscreen(true);
    }

    useEffect(() => {        
        return () => {            
            if (isLoaded) unload();
        }
    }, [unload, isLoaded]);

    return (
        <>
            {!isLoaded && (
                // We'll conditionally render the loading overlay if the Unity
                // Application is not yet loaded.
                <div className="absolute inset-0 z-50 flex flex-col justify-center">
                    <Paragraph className='text-white'>Loading... ({loadingPercentage}%)</Paragraph>
                </div>
            )}
            <Unity className={className} unityProvider={unityProvider} />
            <button onClick={toggleFullscreen} className='absolute rounded-md right-4 bottom-4 w-10 h-10 z-50 bg-black/70'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="w-[70%] h-[70%] hover:scale-110 transition-all mx-auto" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
                </svg>
            </button>
            {children}
        </>
    );
}

export default UnityGameEmbed;