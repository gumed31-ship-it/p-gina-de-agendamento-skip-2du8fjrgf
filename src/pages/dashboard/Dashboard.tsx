import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '@/hooks/use-auth'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import { LogOut, ArrowLeft, Users, Activity, Clock } from 'lucide-react'
import { getAccessStats, type AccessStat, type RecentAccess } from '@/services/access_logs'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

export default function Dashboard() {
  const { signOut } = useAuth()
  const navigate = useNavigate()

  const [stats, setStats] = useState<{ totalVisits: number; todayVisits: number }>({
    totalVisits: 0,
    todayVisits: 0,
  })
  const [chartData, setChartData] = useState<AccessStat[]>([])
  const [recentLogs, setRecentLogs] = useState<RecentAccess[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAccessStats()
        setStats({ totalVisits: data.total, todayVisits: data.today })
        setChartData(data.chart)
        setRecentLogs(data.recent)
      } catch (error) {
        console.error('Failed to fetch access stats', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  const handleLogout = () => {
    signOut()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-slate-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-xl font-semibold tracking-tight text-amber-500">Dashboard</h1>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            className="text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">Total de Acessos</CardTitle>
              <Users className="w-4 h-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-100">
                {isLoading ? '-' : stats.totalVisits}
              </div>
              <p className="text-xs text-slate-500 mt-1">Acessos registrados no total</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">Acessos Hoje</CardTitle>
              <Activity className="w-4 h-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-100">
                {isLoading ? '-' : stats.todayVisits}
              </div>
              <p className="text-xs text-slate-500 mt-1">Visitantes nas últimas 24h</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-slate-100">Acessos nos Últimos 30 Dias</CardTitle>
            <CardDescription className="text-slate-400">
              Visualização de tráfego diário da sua landing page
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              {isLoading ? (
                <div className="w-full h-full flex items-center justify-center text-slate-500 animate-pulse">
                  Carregando dados...
                </div>
              ) : (
                <ChartContainer
                  config={{ visits: { label: 'Acessos', color: '#f59e0b' } }}
                  className="h-full w-full"
                >
                  <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
                    <XAxis
                      dataKey="date"
                      stroke="#94a3b8"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => {
                        const parts = value.split('-')
                        if (parts.length === 3) return `${parts[2]}/${parts[1]}`
                        return value
                      }}
                    />
                    <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="count" fill="var(--color-visits)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ChartContainer>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-slate-100">Atividade Recente</CardTitle>
            <CardDescription className="text-slate-400">
              Últimos 10 acessos registrados
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-4 text-slate-500 animate-pulse">Carregando...</div>
            ) : recentLogs.length === 0 ? (
              <div className="text-center py-4 text-slate-500">Nenhum acesso registrado.</div>
            ) : (
              <div className="space-y-4">
                {recentLogs.map((log) => (
                  <div
                    key={log.id}
                    className="flex items-center justify-between border-b border-slate-800 pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                        <Clock className="w-4 h-4 text-slate-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-200">{log.path || '/'}</p>
                        <p className="text-xs text-slate-500">Página acessada</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-300">
                        {new Date(log.created.replace(' ', 'T')).toLocaleDateString('pt-BR')}
                      </p>
                      <p className="text-xs text-slate-500">
                        {new Date(log.created.replace(' ', 'T')).toLocaleTimeString('pt-BR')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
