import useResizeObserver from '@react-hook/resize-observer';
import { useLayoutEffect, useRef, useState } from 'react';

const useElementSize = () => {
    const target = useRef(null);
    const [size, setSize] = useState({
        width: 0,
        height:0
    });

    const setRoundedSize = ({ width, height }) => {
        setSize({ width: Math.round(width), height: Math.round(height) });
    };

    useLayoutEffect(() => {
        target.current && setRoundedSize(target.current.getBoundingClientRect())
    }, [target]);

    useResizeObserver(target, entry => {
        const { inlineSize: width, blockSize: height } = entry.contentBoxSize[0];
        setRoundedSize({ width, height });
      });


    return [target, size]
}

export default useElementSize;