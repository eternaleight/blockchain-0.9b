import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'rldznehl',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token: 'skjaiyU2csUMTAcL48GaSZE17Wxb7R58uH3FWtjcLg95e0lV8aG54zH8zeKVyVZr0jGxRQQmBCb1g09TqnEzUjiPHxNWbpWoLMSZunN21VsXV9EcBpyfxUl4XJz08XjLwagGnJcSykZ9uJTEShCGZkpLPdqaRtANx35MCCTyuE0qXUpwxKPR',
  useCdn: false,
})