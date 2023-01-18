
// Document is a relaxed signature for a Flow document of any kind.
export type Document = unknown;
// Lambda is a relaxed signature implemented by all Flow transformation lambdas.
export type Lambda = (source: Document, register?: Document, previous?: Document) => Document[];

// Import derivation classes from their implementation modules.
import { Derivation as PeterTrialPublicWikipediaUserupdates } from '../../user-updates';

// Build instances of each class, which will be bound to this module's router.
const __PeterTrialPublicWikipediaUserupdates: PeterTrialPublicWikipediaUserupdates = new PeterTrialPublicWikipediaUserupdates();

// Now build the router that's used for transformation lambda dispatch.
const routes: { [path: string]: Lambda | undefined } = {
    '/derive/PeterTrial/public/wikipedia/userupdates/user-updates/Publish': __PeterTrialPublicWikipediaUserupdates.userUpdatesPublish.bind(
        __PeterTrialPublicWikipediaUserupdates,
    ) as Lambda,
};

export { routes };
