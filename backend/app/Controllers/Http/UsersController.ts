import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

/* para usar linhas SQL nativas e mais alguma predefinições feitas pelo Adonis.js*/
/* Docs: https://docs.adonisjs.com/reference/orm/query-builder */
import Database from "@ioc:Adonis/Lucid/Database";

/* para usar das queries pré-definidas do Adonis.js */
/* Docs: https://docs.adonisjs.com/reference/orm/base-model#sidenav-open */
import User from "../../Models/User";

export default class UsersController {
    public async showUser({}: HttpContextContract) {
        const users: User[] = await User.all();

        return users;
    }

    public async showUserNativeSQL({}: HttpContextContract) {
        /* método + ou - nativo que é imune a SQL Injection */
        const users = await Database.query().select("*").from("users");

        return users;
    }

    public async create({ request }: HttpContextContract) {
        const data = request.only(["name", "email", "password", "admin"]);

        const user = await User.create(data);

        return user;
    }

    public async showAllUsersById({ params }: HttpContextContract) {
        const user = await User.findOrFail(params.id);

        return user;
    }

    public async update({ params, request }: HttpContextContract) {
        const user = await User.findOrFail(params.id);
        const data = request.only(["name", "email", "password", "admin"]);

        user.merge(data);

        await user.save();

        return user;
    }

    public async delete({ params }: HttpContextContract) {
        const user = await User.findOrFail(params.id);

        await user.delete();

        return `user ${params.id} deleted`;
    }
}
