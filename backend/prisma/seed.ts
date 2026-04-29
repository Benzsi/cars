import dotenv from 'dotenv';
dotenv.config();
import { faker } from '@faker-js/faker';
import { PrismaClient } from '../generated/prisma/client';

const prisma = new PrismaClient();

async function main() {
    for(let i = 0; i < 15; i++) {
      await prisma.rentals.create({
        data: {
          car_id: faker.number.int({min: 1, max: 11}),
          start_date: faker.date.between({from: "2000-01-01", to: "2005-01-01"}),
          end_date: faker.date.between({from: "2006-01-01", to: "2010-01-01"})

        }
      })
    }
}

main()
  .then(async () => {
    await prisma.$disconnect();

  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });