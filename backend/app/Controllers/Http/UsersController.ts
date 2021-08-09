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
        // linha que retorna no Get de forma verbosa, além do esperado
        // (ainda em análise para saber o porque desse comportamento)
        // const users = await Database.rawQuery( `select * from users;`);

        const users = await Database.query().select("*").from("users");

        return users;
    }

    public async create({ request }: HttpContextContract) {
        const data = request.only(["name", "email", "password"]);

        const user = await User.create(data);

        return user;
    }

    public async showAllUsers({ params }: HttpContextContract) {
        const user = await User.findOrFail(params.id);

        return user;
    }

    public async update({ params, request }: HttpContextContract) {
        const user = await User.findOrFail(params.id);
        const data = request.only(["name", "email", "password"]);

        user.merge(data);

        await user.save();

        return user;
    }

    public async delete({ params }: HttpContextContract) {
        const user = await User.findOrFail(params.id);

        await user.delete();
    }
}
