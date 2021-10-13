import * as mongoose from 'mongoose';
import { configuration } from 'src/config/configuration';
const { database } = configuration();

//connect mongodb
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        `mongodb://${database.username}:${database.password}@${database.host}:${database.port}/${database.name}?authSource=admin`,
      ),
  },
];
