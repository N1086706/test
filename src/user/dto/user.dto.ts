import { IsNotEmpty, Length, IsString } from 'class-validator'; // 新增
export class UserCreateDto {
    @IsNotEmpty()
    @IsString()
    name: string; // 此欄位不可為空且要為字串

    @IsString()
    @IsNotEmpty()
    password: string; // 此欄位不可為空且要為字串

    @IsString()
    @IsNotEmpty()
    userId: string; // 此欄位不可為空且要為字串

    @IsString()
    @IsNotEmpty()
    @Length(10, 10)
    phone: string; // 此欄位不可為空且要為字串，長度10
}

// 更新
// tslint:disable-next-line: max-classes-per-file
export class UserUpdateDto {
    @IsString()
    @IsNotEmpty()
    name: string; // 此欄位不可為空且要為字串

    @IsString()
    @IsNotEmpty()
    password: string; // 此欄位不可為空且要為字串

    @IsString()
    @IsNotEmpty()
    @Length(10, 10)
    phone: string; // 此欄位不可為空且要為字串，長度10
}
