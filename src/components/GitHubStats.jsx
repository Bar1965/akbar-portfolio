import { useState, useEffect } from 'react'

export default function GitHubStats({ username = 'Bar1965' }) {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`)
        if (!res.ok) throw new Error('Failed to fetch GitHub data')
        const data = await res.json()
        setStats({
          repos: data.public_repos,
          followers: data.followers,
          gists: data.public_gists,
          avatar: data.avatar_url
        })
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [username])

  if (loading) return <div className="github-stats"><p>Loading GitHub stats...</p></div>
  if (error) return <div className="github-stats"><p style={{ color: 'var(--accent-secondary)' }}>Error: {error}</p></div>

  return (
    <div className="github-stats">
      <div className="stat-card">
        <div className="stat-number">{stats.repos}</div>
        <div className="stat-label">Public Repos</div>
      </div>
      <div className="stat-card">
        <div className="stat-number">{stats.followers}</div>
        <div className="stat-label">Followers</div>
      </div>
      <div className="stat-card">
        <div className="stat-number">{stats.gists}</div>
        <div className="stat-label">Public Gists</div>
      </div>
    </div>
  )
}