"use client"

import {SessionProvider} from "next-auth/react"
import { ReactNode } from "react"

type componentProp = {
    children: ReactNode
}

function AuthProvider(props: componentProp) {
    return (
      <SessionProvider>
        {props.children}
      </SessionProvider>
    )
}

export default AuthProvider
