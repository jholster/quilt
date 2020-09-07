import querystring from 'querystring';

import {Context} from 'koa';

import redirectionPage from './redirection-page';

export default function createTopLevelRedirect(apiKey: string, path: string, host?: string) {
  return function topLevelRedirect(ctx: Context) {
    host = host || ctx.host;
    const {shop} = ctx.query;

    const params = {shop};
    const queryString = querystring.stringify(params);

    ctx.body = redirectionPage({
      origin: shop,
      redirectTo: `https://${host}${path}?${queryString}`,
      apiKey,
    });
  };
}
