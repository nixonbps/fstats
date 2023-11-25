import "reflect-metadata";
import { injectable } from "inversify";
import { Race } from "../../domain/model/Race";
import { ErgastApi } from "../network/api/ErgastApi";
import { toRace } from "../network/dto/RaceDto";
import container, { TYPES } from "../../../inversify.config";
import { SeasonRepository } from "../../domain/repository/SeasonRepository";
import { Circuit } from "../../domain/model/Circuit";
import { toCircuit } from "../network/dto/CircuitDto";

@injectable()
export class SeasonRepositoryImpl implements SeasonRepository {
  private ergastApi: ErgastApi = container.get(TYPES.ErgastApi);

  getSeason = async (season: number): Promise<Race[]> => {
    const racesDto = await this.ergastApi.getSeason(season);
    return racesDto.map((raceDto) => toRace(raceDto));
  };

  getRaceResults = async (season: number, raceId: number): Promise<Race> => {
    const raceDto = await this.ergastApi.getRaceResults(season, raceId);
    return toRace(raceDto);
  };

  getCircuits = async (season: number): Promise<Circuit[]> => {
    const circuitsDto = await this.ergastApi.getCircuits(season);
    return circuitsDto.map((circuit) => toCircuit(circuit));
  };
}
