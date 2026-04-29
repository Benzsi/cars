import { CreateRentalDto } from './dto/create-rental.dto';
import { UpdateRentalDto } from './dto/update-rental.dto';
export declare class RentalService {
    create(createRentalDto: CreateRentalDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateRentalDto: UpdateRentalDto): string;
    remove(id: number): string;
}
