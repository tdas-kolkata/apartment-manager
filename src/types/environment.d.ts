declare global{
    namespace NodeJS{
        interface ProcessEnv{
            GOOGLE_OAUTH_CLIENTID: string
            GOOGLE_OAUTH_CLIENT_SECRET: string
        }
    }
}

export {}