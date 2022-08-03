import React, { Dispatch, SetStateAction } from 'react'

export interface OutputContentProps {
    output: string
    title: string
    label: string
}

export interface InputContentProps {
    placeholder: string
    convertMessage: (message: string) => void
    title: string
    label: string
}

export interface ShareOptionsProps {
  message: string
  setDisplayAlert: Dispatch<SetStateAction<boolean>>
}

export interface FooterProps {
    routeMessage: string
    route: string
}