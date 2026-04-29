import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { PrismaService } from 'src/prisma.service';
export declare class CarService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createCarDto: CreateCarDto): import("../../generated/prisma/models").Prisma__carsClient<{
        id: number;
        license_plate_number: string | null;
        brand: string | null;
        model: string | null;
        daily_cost: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findAll(): Promise<{
        id: number;
        license_plate_number: string | null;
        brand: string | null;
        model: string | null;
        daily_cost: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }[]>;
    findOne(id: number): string;
    update(id: number, updateCarDto: UpdateCarDto): string;
    remove(id: number): string;
}
