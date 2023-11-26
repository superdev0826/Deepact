/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_APP_WALLET_CONNECT_PROJECTID: process.env.NEXT_APP_WALLET_CONNECT_PROJECTID
  }
}

module.exports = nextConfig
