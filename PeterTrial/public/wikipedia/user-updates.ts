import { IDerivation, Document, Register, UserUpdatesSource } from 'flow/PeterTrial/public/wikipedia/userupdates';

// Implementation for derivation flow.yaml#/collections/PeterTrial~1public~1wikipedia~1userupdates/derivation.
export class Derivation implements IDerivation {
    userUpdatesPublish(
        source: UserUpdatesSource,
        _register: Register,
        _previous: Register,
    ): Document[] {
        // let : {user: string, id: number, bot: boolean, timestamp: number}
        let timeStamp = source.timestamp || Date.now();
        let d = new Date(timeStamp);
        const month = d.toLocaleString('default', { month: 'long' })



        // let milliseconds = timeStamp;
        // let updateMonth = 0;
        // if (milliseconds) {
        //     let date = new Date(milliseconds);
        //     updateMonth = date.getMonth();
        // }

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
