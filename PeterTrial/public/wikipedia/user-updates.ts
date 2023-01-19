import { timeStamp } from 'console';
import { IDerivation, Document, Register, UserUpdatesSource } from 'flow/PeterTrial/public/wikipedia/userupdates';
import { stringify } from 'querystring';

// Implementation for derivation flow.yaml#/collections/PeterTrial~1public~1wikipedia~1userupdates/derivation.
export class Derivation implements IDerivation {
    userUpdatesPublish(
        source: UserUpdatesSource,
        _register: Register,
        _previous: Register,
    ): Document[] {
        // let : {user: string, id: number, bot: boolean, timestamp: number}
        let timeStamp = source.timestamp
        let milliseconds = timeStamp;
        let updateMonth = "";
        if (milliseconds) {
            let date = new Date(milliseconds);
            updateMonth = date.toLocaleString('default', { month: 'long' });
        }
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
            timeStamp,
            month: updateMonth,
            id: updateId,
            user: updateUser,
            bot: updateBot
        }
        return [out];
    }
}
