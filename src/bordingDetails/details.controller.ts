import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { CreateDetailsDto } from './dto/create-details.dto';
import { DetailsService } from './details.service';
import { Details } from './entity/details.entity';
import { UpdateDetailsDto } from './dto/update-details.dto';

@Controller('details')
export class DetailsController {
  constructor(private detailsService: DetailsService) {}

  @Get('/:id')
  getDetailsById(@Param('id') id: string | number) {
    return this.detailsService?.getDetailsById(id);
  }

  @Post()
  createDetails(@Body() createDetailsDto: CreateDetailsDto) {
    return this.detailsService.createDetails(createDetailsDto);
  }

  @Delete('/:id')
  deleteDetails(@Param('id') id: any) {
    return this.detailsService.deleteDetails(id);
  }

  @Get()
  getAllDetails() {
    return this.detailsService.getAllDetails();
  }
  @Patch('/:id/update')
  updateDetailsStatus(
    @Param('id') id: string,
    @Body() updateDetailsDto: UpdateDetailsDto,
  ): Promise<Details> {
    const { name, website, registrationNumber, address, industry } =
      updateDetailsDto;
    return this.detailsService.updateDetailsStatus(
      id,
      name,
      website,
      registrationNumber,
      address,
      industry,
    );
  }
}
