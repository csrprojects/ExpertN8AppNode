const knex = require('../database/knex');

class TagsController {
    async index(req, resp) {
        const { user_id, note_id, name } = req.query;

        try {
            const tags = await knex('movie_tags')
                .where('user_id', 'like', `%${user_id || ''}%`)
                .where('note_id', 'like', `%${note_id || ''}%`)
                .where('name', 'like', `%${name || ''}%`)
                .select('id', 'name', 'user_id', 'note_id');

            return resp.status(200).json(tags);
        } catch (error) {
            throw new Error(error, 500);
        }
    }
}

module.exports = TagsController;
