import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Homelink',
    short_name: 'Homelink',
    description: 'Your iOT devices',
    start_url: '/',
  }
}
