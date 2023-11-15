import { ComponentPropsWithoutRef, ElementType } from 'react'

import { styled } from 'styled-components'

export const buttonVariant = ['icon', 'link', 'primary', 'secondary', 'tertiary'] as const

export type ButtonVariant = (typeof buttonVariant)[number]

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  variant?: ButtonVariant
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const { as: Component = 'button', fullWidth, variant = 'primary', ...rest } = props

  return <StyledButton as={Component} variant={variant} {...rest} />
}

const StyledButton = styled.button<{ variant: ButtonVariant }>`
  all: unset;

  cursor: pointer;

  box-sizing: border-box;
  padding: 0.5rem 1rem;

  border-radius: 0.25rem;

  &:focus-visible {
    outline: 2px solid lightcoral;
    outline-offset: 2px;
  }

  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return `
          background-color: #00f;
          color: #fff;
        `
      case 'secondary':
        return `
          background-color: #f00;
          color: #fff;
        `
      case 'tertiary':
        return `
          background-color: #fff;
          color: #000;
        `
      case 'icon':
        return `
          background-color: transparent;
          color: #000;
        `
      case 'link':
        return `
          background-color: transparent;
          color: #00f;
        `
    }
  }}
`
