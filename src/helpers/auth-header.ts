const REVUE_TOKEN = process.env.GATSBY_REVUE_TOKEN;
export function authHeader() {
    return { Authorization: `Bearer ${REVUE_TOKEN}` };
}