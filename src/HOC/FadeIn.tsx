import React, { FC, ReactNode, useEffect, useState } from 'react';
import { FadeInContainer } from './styles';

export const FadeIn: FC<{ children: ReactNode }> = ({ children }) => {
    const [isAppear, setIsAppear] = useState<boolean>(false);
    
    useEffect(() => {
        setIsAppear(true);
    }, [])
  return (
    <FadeInContainer $isAppear={isAppear}>
        { children }
    </FadeInContainer>
  )
}
