import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
    providers: [
        Providers.Github({
            clientId: process.env.GITHUB_ID,
            clientSecret: GITHUB_SECRET
        })
    ],

    // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
}

export default (req, res) => NextAuth(req, res, options)
