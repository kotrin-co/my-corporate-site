import { createClient } from 'microcms-js-sdk'

const MICROCMS_SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN ?? ''
const MICROCMS_API_KEY = process.env.MICROCMS_API_KEY ?? ''

export const client = createClient({
  serviceDomain: MICROCMS_SERVICE_DOMAIN,
  apiKey: MICROCMS_API_KEY,
})
