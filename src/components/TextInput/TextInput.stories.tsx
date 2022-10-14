import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react';

import { TextInput, TextInputInputProps, TextInputRootProps } from ".";

export default {
    title: 'Components/Text Input',
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>,
            <TextInput.Input placeholder='Digite seu e-mail' />
        ]
    },
    argTypes: {}
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: (
            <TextInput.Input placeholder='Digite seu e-mail' />
        )
    }
}