import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'f1sc0lhg',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token: 'skzSrcWWbe9LAIFfWlhKCQpm9h6gRVVPdK5NFREq5xlB8X7m8LBu2DkD0bXsCKL9aYbY7ddVN6rmLrGNmWq6Ixirt1RqHIKhqUNQMe38L5SOT2AZs25OE2PPvyuljzkeTKZDj7kAIVhMkAIlF1n4jFN2Crd5bB5YMVIUt4BlFdalh2RV7QnZ',
  useCdn: false,
})