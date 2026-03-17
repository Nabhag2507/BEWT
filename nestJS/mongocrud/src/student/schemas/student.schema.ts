import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type StudentDocument = Student & Document;

@Schema({ timestamps: true })
export class Student {

    @Prop()
    name?: string;

    @Prop()
    spi?: number;

}

export const StudentSchema = SchemaFactory.createForClass(Student);