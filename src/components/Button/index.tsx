import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps {
    children: ReactNode;
    asChild: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp 
            className={clsx(
                "w-full bg-cyan-500 py-3 px-4 font-sans text-sm text-black font-semibold rounded transition-colors hover:bg-cyan-300 focus:ring-2 ring-white",
            )}
        >
            { children }
        </Comp>
    );
}