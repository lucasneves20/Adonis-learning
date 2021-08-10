import { DateTime } from "luxon";
import { BaseModel, beforeSave, column } from "@ioc:Adonis/Lucid/Orm";
import Hash from "@ioc:Adonis/Core/Hash";

export default class User extends BaseModel {
    @column({ isPrimary: true })
    public id: number;

    @column()
    public name: string;

    @column()
    public email: string;

    @column()
    public password: string;

    @column()
    public admin: boolean;

    @column.dateTime({ autoCreate: true })
    public created_at: DateTime;

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updated_at: DateTime;

    @beforeSave()
    public static async hashPassword(user: User) {
        if (user.$dirty.password) {
            user.password = await Hash.make(user.password);
        }
    }

    @beforeSave()
    public static async defaultValueAdmin(user: User) {
        if (!user.$dirty.admin) {
            user.admin = false;
        }
    }
}
