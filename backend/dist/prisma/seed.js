"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const faker_1 = require("@faker-js/faker");
const client_1 = require("../generated/prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    for (let i = 0; i < 15; i++) {
        await prisma.rentals.create({
            data: {
                car_id: faker_1.faker.number.int({ min: 1, max: 11 }),
                start_date: faker_1.faker.date.between({ from: "2000-01-01", to: "2005-01-01" }),
                end_date: faker_1.faker.date.between({ from: "2006-01-01", to: "2010-01-01" })
            }
        });
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
//# sourceMappingURL=seed.js.map