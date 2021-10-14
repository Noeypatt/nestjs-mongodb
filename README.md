# NestJS & MongoDB (mongoose)

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Mongo

#### Connect database

```bash
#docker-compose.yml (ดูตัวอย่างได้ที่ docker hub)
version: '3.1'

services:
 [image-name]:
    image: mongo:latest
    container_name:
    restart: always
    environment:
      MONGO_INITDB_ROOT_USERNAME:
      MONGO_INITDB_ROOT_PASSWORD:
    ports:
      - ภายนอก:ภายใน # ex. 3001:27017
```

```bash
#docker commands
docker ps
docker imags / docker image ls
docker-compose up -d
docker-compose down
docker exec -it container_name bash
```

## Mongoose

#### Install mongoose

```bash
# install mongoose
$ npm install --save @nestjs/mongoose mongoose
```

```bash
#database configuration
export const configuration = () => ({
  port: parseInt(portNumber) || 3000,
  database: {
    name: 'dbname',
    host: 'localhost',
    port: parseInt(portNumber) || 3000,,
    username: 'root',
    password: 'example',
  },
});
```

```bash
#src/database/database.provider.ts
import * as mongoose from 'mongoose';
import { configuration } from 'src/config/configuration';
const { database } = configuration();

#connect mongodb
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        `mongodb://${database.username}:${database.password}
        @${database.host}:${database.port}/${database.name}
        ?authSource=admin`,
      ),
  },
];
```

```bash
#src/database/database.module.ts
import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
```

```bash
#src/app.module.ts
...

@Module({
  imports:[DatabaseModule]
})

```

_หมายเหตุ_

หากต้องการประกาศ และเรียกใช้งานตัวแปร environments

- ConfigModule

```bash
# install configuration
$ npm i --save @nestjs/config
```

```bash
#src/app.module.ts
import { ConfigModule } from '@nestjs/config';
...

@Module({
  imports:[ConfigModule.forRoot({
      ...
      envFilePath: '.env'
      #ให้ Module อื่นสามารถเรียกใช้งานได้
      isGlobal: true,
      #กรณีต้องการ config ค่าที่ configuration เสร็จก่อน
      load: [configuration],
  })]
})

```

- dotenv
```bash
# install configuration
$ npm install dotenv
```

```bash
#ไฟล์ที่ต้องการใช้งานตัวแปรจาก environments
import * as dotenv from 'dotenv'
dotenv.config()
```
