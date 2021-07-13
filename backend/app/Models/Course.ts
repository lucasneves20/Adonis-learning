import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Users from 'App/Models/User'

export default class Course extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public class_id: string

    @hasOne(() => Users)
    public user_id: HasOne<typeof Users>

    @column()
    public name: string

    @column()
    public description: string

    @column()
    public path_video: string

    @column()
    public path_image: string

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime
}
''
