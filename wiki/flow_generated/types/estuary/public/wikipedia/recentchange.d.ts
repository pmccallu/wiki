
// Generated from collection schema estuary/public/wikipedia/recentchange.schema.yaml.
// Referenced from estuary/public/wikipedia/flow.yaml#/collections/estuary~1public~1wikipedia~1recentchange.
export type Document = {
    "$schema"?: string;
    "_meta"?: {
        file: string;
        offset: number;
    };
    bot?: boolean;
    comment?: string;
    id?: number;
    length?: {
        new: number;
        old?: number;
    };
    log_action?: string;
    log_action_comment?: string;
    log_id?: number;
    log_params?: {
        action?: string;
        actions?: string;
        auto?: number;
        count?: Record<string, unknown> | number;
        curid?: string;
        filter?: string;
        flags?: string;
        img_sha1?: string;
        img_timestamp?: string;
        log?: number;
        previd?: string;
        sitewide?: boolean;
        userid?: number;
    } | number | string[];
    log_type?: string;
    meta: {
        domain?: string;
        dt: string;
        id: string;
        offset?: number;
        partition?: number;
        request_id?: string;
        stream: string;
        topic?: string;
        uri?: string;
    };
    minor?: boolean;
    namespace?: number;
    parsedcomment?: string;
    patrolled?: boolean;
    revision?: {
        new: number;
        old?: number;
    };
    server_name?: string;
    server_script_path?: string;
    server_url?: string;
    timestamp?: number;
    title?: string;
    type?: string;
    user?: string;
    wiki?: string;
};


// The collection has one schema, used for both reads and writes.
export type SourceDocument = Document;
export type OutputDocument = Document;
