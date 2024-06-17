import { port } from './application/config/environment';
import { CronJobService } from './domain/services/cronjob/cronjob';
import sequelize from './infrastructure/orm/mysql/mysql';
import http from 'http'

const job = new  CronJobService()

async function main() {
  try {
    sequelize.sync({ alter: true })
    console.log('MySql loaded and connected! ✌️');
  } catch (error) {
    console.error(error)
  }

  job.getCharacter()
  const app = (await import('./application/config/server')).default;

  const httServer = http.createServer(app)

  httServer.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  })
}

main();