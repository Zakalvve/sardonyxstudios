import { useEffect } from 'react';

function useBodyLock(isLocked) {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(
      document.body,
    ).overflow;
    document.body.style.overflow = isLocked ? 'hidden' : originalStyle;

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isLocked]);

  return () => { document.body.classList.remove('fixed') };
}

export default useBodyLock;