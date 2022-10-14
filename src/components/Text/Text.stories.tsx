import { Meta, StoryObj } from '@storybook/react';

import { Text, TextProps } from ".";

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Bem vindo Silvio!',
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
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}

export const ParagraphText: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Bem-vindo Silvio!</p>
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