

// https://developer.wordpress.org/rest-api/

const NAME = `redvirtual`,
    DOMAIN = `https://${NAME}.bid`,//Utilizamos .bid por que puse redvirtual
    SITE = `${DOMAIN}/wp-json`,
    API_WP = `${SITE}/wp/v2`,
    PER_PAGE = 3,
    POSTS = `${API_WP}/posts?_embed&per_page=${PER_PAGE}`,
    POST = `${API_WP}/posts`,
    SEARCH = `${API_WP}/search?_embed&per_page=${PER_PAGE}&search=`;

    let page = 1;

    export default {
      NAME,
      DOMAIN,
      SITE,
      API_WP,
      PER_PAGE,
      POSTS,
      POST,
      SEARCH,
      page
    }
