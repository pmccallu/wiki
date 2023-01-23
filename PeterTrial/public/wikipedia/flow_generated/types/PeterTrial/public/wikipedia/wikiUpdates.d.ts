
// Generated from collection schema flow.yaml?ptr=/collections/PeterTrial~1public~1wikipedia~1wikiUpdates/schema.
// Referenced from flow.yaml#/collections/PeterTrial~1public~1wikipedia~1wikiUpdates.
export type Document = {
    bot: boolean;
    id: number;
    timestamp: number;
    user: string;
};


// The collection has one schema, used for both reads and writes.
export type SourceDocument = Document;
export type OutputDocument = Document;

// Generated from derivation register schema flow.yaml?ptr=/collections/PeterTrial~1public~1wikipedia~1wikiUpdates/derivation/register/schema.
// Referenced from flow.yaml#/collections/PeterTrial~1public~1wikipedia~1wikiUpdates/derivation.
export type Register = unknown;


// Generated from transform user-updates as a re-export of collection estuary/public/wikipedia/recentchange.
// Referenced from flow.yaml#/collections/PeterTrial~1public~1wikipedia~1wikiUpdates/derivation/transform/user-updates."
import { SourceDocument as UserUpdatesSource } from "./../../../estuary/public/wikipedia/recentchange";
export { SourceDocument as UserUpdatesSource } from "./../../../estuary/public/wikipedia/recentchange";


// Generated from derivation flow.yaml#/collections/PeterTrial~1public~1wikipedia~1wikiUpdates/derivation.
// Required to be implemented by user-updates.ts.
export interface IDerivation {
    userUpdatesPublish(
        source: UserUpdatesSource,
        register: Register,
        previous: Register,
    ): OutputDocument[];
}
