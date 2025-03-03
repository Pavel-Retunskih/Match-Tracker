import {PlayerType} from "../../player/model/type.ts";

export type Team = {
  name: string
  players: PlayerType[]
  points: number
  place: number
  total_kills: number
}