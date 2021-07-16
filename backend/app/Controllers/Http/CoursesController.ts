import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Course from 'App/Models/Course'


export default class CoursesController {

    public async showByIndex ({ params }: HttpContextContract) {
        const courses = await Course.find(params.id)

        return courses
    }

    public async showByIndexForUser ({ params }: HttpContextContract) {
        const courses = await Course.find(params.user_id)

        return courses
    }

    public async showByIndexForCourse ({ params }: HttpContextContract) {
        const courses = await Course.find(params.class_id)

        return courses
    }

    public async show({  }: HttpContextContract) {
        const courses = await Course.all()

        return courses
    }

    public async createCourses({ request, params }: HttpContextContract) {
        const user = request.only([ "user_id" ])
        const data = await Course.first(params.id)

        return user
    }
}
