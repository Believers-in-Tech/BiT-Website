const REVUE_TOKEN = process.env.GATSBY_REVUE_TOKEN;
export function authHeader() {

    var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer QtyLnJt7go6BFIRdUwMeBO3LyH__zkJU");
myHeaders.append("Cookie", "ahoy_visitor=f462dc99-28e4-490e-9d53-7e7a31cf1f73; _revue_session=cUM0NS9sdzB4ZmV6b3dWWWlYWWVyVlRodGxTMXlqbmRiWElMVFczZUdvRHRLT0RvTlcxWDdZSUI0dkt6K0JhOHY4aHFKRDFsbktZc09GbUcrc1dMS0d6aFMvNzk4b2p3R2gyQmFCRmJzQ014MGp0QS8zbVNsUEFveFg3enIyMXhveFNmaEVRTmtkOCtyUWpPT29XL0ZZeFpGM00wV1dwVUhNc2lEVTVkMjJ3PS0tano0TUluMlFpVTZxTkJ3Wk5zeEdIdz09--413e87f574ac685a81d1b463ad5860880c4757cf");
    // return {"Authorization": `Token ${REVUE_TOKEN}`}
    return myHeaders
}