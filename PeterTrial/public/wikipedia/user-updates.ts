import { IDerivation, Document, Register, UserUpdatesSource } from 'flow/PeterTrial/public/wikipedia/wikiUpdatesMonth';

// Implementation for derivation flow.yaml#/collections/PeterTrial~1public~1wikipedia~1wikiUpdates/derivation.
export class Derivation implements IDerivation {
    userUpdatesPublish(
        source: UserUpdatesSource,
        _register: Register,
        _previous: Register,
    ): Document[] {
        let timeStamp = source.timestamp || Date.now();
        let d = new Date(timeStamp);
        const month = d.toLocaleString('default', { month: 'long' })

        let id = source.id;
        let updateId = 0;
        if (id) {
            updateId = id;
        }

        let user = source.user;
        let updateUser = "";
        if (user) {
            updateUser = user;
        }

        let bot = source.bot;
        let updateBot = false;
        if (bot) {
            updateBot = bot;
        }

        let out = {
            timestamp: timeStamp,
            month: month,
            id: updateId,
            user: updateUser,
            bot: updateBot
        }
        return [out];
    }
}
