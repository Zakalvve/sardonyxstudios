import useBodyLock from "../../Hooks/UseBodyLock";
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { logo } from "../../Data/data";
import { scrollToTop } from "../UI/Scrolling";

const Loading = () => {
    const [isLoading, setIsLoading] = useState(true);
    const unlock = useBodyLock(isLoading);

    useEffect(() => {
        if (isLoading) scrollToTop();
        setIsLoading(false);
        unlock();
    },[unlock, isLoading]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    animate={{y: '0%'}}
                    exit={{y: '-100%'}}
                    transition={{duration: 0.7, delay: 1}}
                    className='fixed inset-0 z-50 flex items-center justify-center bg-space-500'
                >
                    <motion.div
                        initial={{ opacity: 1, scale: 1 }}
                        exit={{
                            opacity: [1, 0, 0],
                            scale: [1, 0.85, 0.75, 0],
                        }}
                        transition={{ delay: 0.8, duration: 0.4 }}
                        className="animate-pulse"
                    >
                        {logo}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Loading;