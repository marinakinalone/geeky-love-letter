import React, { Dispatch, SetStateAction } from 'react'

export interface BinaryContentProps {
    output: string
}

export interface TextContentProps {
    placeholder: string
    convertMessage: (message: string) => void
}

export interface ShareOptionsProps {
  message: string
  setDisplayAlert: Dispatch<SetStateAction<boolean>>
}

export interface FooterProps {
    routeMessage: string
    route: string
}