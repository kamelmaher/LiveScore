import axios from "axios"
import { useEffect, useState } from "react"
type league = {
    league_id: string
    season_id: string
    name: string
    rank: string
    points: string
    matches: string
    goal_diff: string
    goals_scored: string
    goals_conceded: string
    lost: string
    drawn: string
    won: string
    team_id: string
    competition_id: string
    group_id: string
    group_name: string
    stage_name: string
    stage_id: string
}
type FootballProps = {
    active: number
}
const Football = ({ active }: FootballProps) => {
    const [league, setLeague] = useState<league[]>([]);
    useEffect(() => {
        axios.get(`https://livescore-api.com/api-client/competitions/standings.json?competition_id=${active + 1}&key=CAuVu56TGE6Hv2n0&secret=v1F0tsNLF5RJa0tNBYJ63Q0Kv6r09P1E`).then(({ data }) => {
            setLeague(data.data.table)
        })
    }, [active])
    return (
        <div className="mt-3 p-3">
            <table className="table text-center">
                <thead>
                    <th>Rank</th>
                    <th>Team</th>
                    <th>Played</th>
                    <th>Win</th>
                    <th>Draw</th>
                    <th>Lose</th>
                    <th>Goals</th>
                    <th>Points</th>
                </thead>
                <tbody>
                    {
                        league.map((e) => {
                            return <tr className="p-3">
                                <td>{e.rank}</td>
                                <td className="fw-semibold">
                                    {e.name}
                                </td>
                                <td>{e.matches}</td>
                                <td className="text-success fw-semibold">{e.won}</td>
                                <td className="text-primary fw-semibold">{e.drawn}</td>
                                <td className="text-danger" fw-semibold>{e.lost}</td>
                                <td>{e.goals_scored}</td>
                                <td>{e.points}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Football
