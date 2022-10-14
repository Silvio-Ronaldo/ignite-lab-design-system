import { Meta, StoryObj } from '@storybook/react';

import { Heading, HeadingProps } from ".";

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Esse é um texto em H2',
        size: 'md'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomHeading: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Este é um texto em H1!</h1>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    }
}