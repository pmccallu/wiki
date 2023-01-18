import { IDerivation, Document, Register, UserUpdatesSource } from 'flow/PeterTrial/public/wikipedia/userupdates';

// Implementation for derivation flow.yaml#/collections/PeterTrial~1public~1wikipedia~1userupdates/derivation.
export class Derivation implements IDerivation {
    userUpdatesPublish(
        source: UserUpdatesSource,
        _register: Register,
        _previous: Register,
    ): Document[] {
        let count = 0;

        return [{ id: source.id || 0, user: source.user || '', count }]
    }
}
