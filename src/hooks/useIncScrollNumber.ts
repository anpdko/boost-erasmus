import { useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'

const useIncScrollNumber = (num: number): React.RefObject<HTMLElement> => {
   const boxExpRef = useRef<HTMLElement>(null);

   const handleScroll = useCallback(() => {
      const counter = { value: 0 };
      const boxExp = boxExpRef.current;

      if (!boxExp) return;
      if (Number(boxExp.innerText) > 0) return;

      const boxExpPos = boxExp.getBoundingClientRect().bottom - window.innerHeight;
      if (20 >= boxExpPos) {
         gsap.to(counter, {
            value: num,
            duration: 1,
            onUpdate: () => {
               if (boxExp) {
                  boxExp.textContent = counter.value.toFixed(0);
               }
            },
            ease: 'none'
         });
         window.removeEventListener('scroll', handleScroll);
      }
   }, [num]);

   useEffect(() => {
      handleScroll()
      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, [handleScroll]);

   return boxExpRef
};
export default useIncScrollNumber