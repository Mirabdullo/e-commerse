import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MarketModule } from './market/market.module';
import { BranchesModule } from './branches/branches.module';
import { WorkersModule } from './workers/workers.module';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'MyPassword@12345',
      database: 'e-commerse',
      entities: [],
      synchronize: true,
    }),
    MarketModule,
    BranchesModule,
    WorkersModule,
    ProductsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
