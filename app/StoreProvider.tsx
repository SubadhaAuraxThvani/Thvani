"use client";
import { AppStore, makeStore} from '@/store/store';
import React, { ReactNode, useRef } from 'react'
import { Provider } from 'react-redux';

const StoreProvider = ({ children }: { children: ReactNode }) => {
    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore();
    }
    return (
        <Provider store={storeRef.current}>
            {children}
        </Provider>
    )
}

export default StoreProvider;