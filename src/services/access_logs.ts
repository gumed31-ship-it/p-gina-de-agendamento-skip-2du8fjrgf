import pb from '@/lib/pocketbase/client'
import { format, subDays, startOfDay, endOfDay } from 'date-fns'

export interface AccessStat {
  date: string
  count: number
}

export interface RecentAccess {
  id: string
  path: string
  created: string
}

export const getAccessStats = async () => {
  const today = new Date()
  const thirtyDaysAgo = subDays(today, 30)

  const filter = `created >= "${thirtyDaysAgo.toISOString().replace('T', ' ')}"`

  // Total visits
  const totalResult = await pb.collection('access_logs').getList(1, 1, {})
  const totalVisits = totalResult.totalItems

  // Today's visits
  const todayStart = startOfDay(today).toISOString().replace('T', ' ')
  const todayEnd = endOfDay(today).toISOString().replace('T', ' ')

  const todayResult = await pb.collection('access_logs').getList(1, 1, {
    filter: `created >= "${todayStart}" && created <= "${todayEnd}"`,
  })
  const todayVisits = todayResult.totalItems

  // Recent 10 accesses
  const recentLogsResult = await pb.collection('access_logs').getList(1, 10, {
    sort: '-created',
  })

  const recentLogs: RecentAccess[] = recentLogsResult.items.map((item) => ({
    id: item.id,
    path: item.path,
    created: item.created,
  }))

  // Group by day for the last 30 days
  const logsLast30Days = await pb.collection('access_logs').getFullList({
    filter,
    sort: 'created',
    fields: 'created',
  })

  const dailyStats: Record<string, number> = {}

  for (let i = 29; i >= 0; i--) {
    const d = subDays(today, i)
    dailyStats[format(d, 'yyyy-MM-dd')] = 0
  }

  logsLast30Days.forEach((log) => {
    const dateStr = log.created.includes('T') ? log.created : log.created.replace(' ', 'T')
    const d = format(new Date(dateStr), 'yyyy-MM-dd')
    if (dailyStats[d] !== undefined) {
      dailyStats[d]++
    }
  })

  const chartData: AccessStat[] = Object.entries(dailyStats).map(([date, count]) => ({
    date,
    count,
  }))

  return {
    total: totalVisits,
    today: todayVisits,
    recent: recentLogs,
    chart: chartData,
  }
}
