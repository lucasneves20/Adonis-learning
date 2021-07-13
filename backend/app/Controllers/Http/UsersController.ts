import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../../Models/User'

export default class UsersController {
    public async showUser ({}: HttpContextContract) {
        const users = await User.all()

        return users
    }

    public async create ({ request }: HttpContextContract) {
        const data = request.only(['name', 'email', 'password'])

        const user = await User.create(data)

        return user
    }

    public async showAllUsers ({params}: HttpContextContract) {
        const user = await User.findOrFail(params.id)

        return user

    }

    public async update ({params, request}: HttpContextContract) {
        const user = await User.findOrFail(params.id)
        const data = request.only(['name', 'email', 'password'])

        user.merge(data)

        await user.save()

        return user
    }

    public async destroy ({params}: HttpContextContract) {
        const user = await User.findOrFail(params.id)

        await user.delete()
    }
}
