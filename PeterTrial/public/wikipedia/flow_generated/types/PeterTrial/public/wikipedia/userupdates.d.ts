
// Generated from collection schema flow.yaml?ptr=/collections/PeterTrial~1public~1wikipedia~1userupdates/schema.
// Referenced from flow.yaml#/collections/PeterTrial~1public~1wikipedia~1userupdates.
export type Document = {
    // count: number;
    month: string,
    id: number;
    user: string;
};


// The collection has one schema, used for both reads and writes.
export type SourceDocument = Document;
export type OutputDocument = Document;

// Generated from derivation register schema flow.yaml?ptr=/collections/PeterTrial~1public~1wikipedia~1userupdates/derivation/register/schema.
// Referenced from flow.yaml#/collections/PeterTrial~1public~1wikipedia~1userupdates/derivation.
export type Register = unknown;


// Generated from transform user-updates as a re-export of collection estuary/public/wikipedia/recentchange.
// Referenced from flow.yaml#/collections/PeterTrial~1public~1wikipedia~1userupdates/derivation/transform/user-updates."
import { SourceDocument as UserUpdatesSource } from "./../../../estuary/public/wikipedia/recentchange";
export { SourceDocument as UserUpdatesSource } from "./../../../estuary/public/wikipedia/recentchange";


// Generated from derivation flow.yaml#/collections/PeterTrial~1public~1wikipedia~1userupdates/derivation.
// Required to be implemented by user-updates.ts.
export interface IDerivation {
    userUpdatesPublish(
        source: UserUpdatesSource,
        register: Register,
        previous: Register,
    ): OutputDocument[];
}
