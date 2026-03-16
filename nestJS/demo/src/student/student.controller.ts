import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('student')
export class StudentController {
    @Get()
    getAllStudent(): string{
        return "This will return all student list"
    }

    @Get(':id')
    getStudentById(@Param('id') id: number): string{
        return "This will return data of student "+ id
    }

    @Post()
    createStudent(@Body() data: any): any{
        return "This will add student with data "+ JSON.stringify(data);
    }

    @Put(':id')
    updateStudent(@Param('id') id: number, @Body() data: any): string{
        return `This will update student with id ${id} using ${JSON.stringify(data)}`
    }

    @Delete(':id')
    deleteStudent(@Param('id') id: number): string{
        return `This will delete student with id ${id}`
    }
}
