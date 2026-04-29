import { RentalService } from './rental.service';
import { CreateRentalDto } from './dto/create-rental.dto';
import { UpdateRentalDto } from './dto/update-rental.dto';
export declare class RentalController {
    private readonly rentalService;
    constructor(rentalService: RentalService);
    create(createRentalDto: CreateRentalDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateRentalDto: UpdateRentalDto): string;
    remove(id: string): string;
}
