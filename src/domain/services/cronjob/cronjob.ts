import { Op } from 'sequelize';
import { CharacterRepository } from '../../../infrastructure/repositories/character.repository';
import { EpisodeRepository } from '../../../infrastructure/repositories/episode.repository';
import { LocationRepository } from '../../../infrastructure/repositories/location.repository';
import { GetRick } from '../../../infrastructure/entry-points/api/lib/rick';
import { CronJob } from 'cron';

const rick = new GetRick;

export class CronJobService {

    characterRepository = new CharacterRepository()
    episodeRepository = new EpisodeRepository();
    locationRepository = new LocationRepository();
    constructor() {
    }

    getCharacter = async () => {
        await this.saveEpisode()
        await this.saveLocation()
        this.saveCharacter()
        const cronJob = new CronJob('0 0 12 * * *', async () => {
            await this.saveEpisode()
            await this.saveLocation()
            this.saveCharacter()
        })

        cronJob.start();
    };

    saveEpisode = async () => {
        let data = await rick.getEpisode(1)
        const length = data.data.episodes.info.pages
        for (let i = 0; i < length; i++) {
            const listEpisodes = data.data.episodes.results
            for (let index of listEpisodes) {
                const save = await this.episodeRepository.saveEpisode(index, { id: index.id })
            }
            data = await rick.getEpisode(i + 2)
        }
    }

    saveLocation = async () => {
        let data = await rick.getLocation(1)
        const length = data.data.locations.info.pages
        for (let i = 0; i < length; i++) {
            const listEpisodes = data.data.locations.results
            for (let index of listEpisodes) {
                const save = await this.locationRepository.saveLocation(index, { id: index.id })
            }
            data = await rick.getLocation(i + 2)
        }
    }

    saveCharacter = async () => {
        let data = await rick.getCharacter(1)
        const length = data.data.characters.info.pages
        for (let i = 0; i < length; i++) {
            const listEpisodes = data.data.characters.results
            for (let index of listEpisodes) {
                const characterData = {
                    id: index.id, name: index.name, status: index.status, species: index.species, type: index.type,
                    gender: index.gender, image: index.image
                }
                const origin = index.origin
                const location = index.location
                const episode = index.episode
                const save = await this.characterRepository.saveCharacter(characterData, { id: index.id }, origin, location, episode)
            }
            data = await rick.getCharacter(i + 2)
        }
    }

}