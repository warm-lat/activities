import type { RoboRequest } from '@robojs/server'

export default async (req: RoboRequest) => {
  const userId = req.params.id
  const response = await fetch(`https://api.warm.lat/playing/${userId}`, {
    method: 'GET',
    headers: {
      'Authorization': req.headers.get('authorization') || 'canister-dipped-expletive-dab-slug-lustiness',
      'Content-Type': 'application/json'
    }
  })

  const data = await response.json()
  return data
} 
