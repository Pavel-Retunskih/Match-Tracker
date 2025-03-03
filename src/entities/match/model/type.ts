import {Team} from "../../team/model/type.ts";

type MatchStatus  = "Scheduled" | "Ongoing" | "Finished"

export type Match = {
  time: string
  title: string
  homeTeam: Team
  awayTeam: Team
  homeScore:number
  awayScore:number
  status: MatchStatus
}