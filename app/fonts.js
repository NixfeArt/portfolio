import { Bebas_Neue, Roboto } from 'next/font/google'

export const bebas = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas',
  weight: '400',
})

export const roboto400 = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto400',
  weight: '400'
})

export const roboto500 = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto500',
  weight: '500'
})

export const roboto700 = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto700',
  weight: '700'
})

export const roboto900 = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto900',
  weight: '900'
})