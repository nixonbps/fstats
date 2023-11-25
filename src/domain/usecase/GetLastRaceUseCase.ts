import "reflect-metadata";
import { injectable } from "inversify";
import { Race } from "../model/Race";
import { RaceRepository } from "../repository/RaceRepository";
import container, { TYPES } from "../../../inversify.config";

@injectable()
export class GetLastRaceUseCase {
  private raceRepository: RaceRepository = container.get(TYPES.RaceRepository);

  invoke = async (): Promise<Race> => {
    const result = await this.raceRepository.getLastRace();
    return result;
  };
}
