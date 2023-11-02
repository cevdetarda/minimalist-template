import lume from "lume/mod.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import sitemap from "lume/plugins/sitemap.ts";

const site = lume({
  location: new URL("https://cevdetarda.github.io/minimalist-template/"),
});

import vento from "lume/plugins/vento.ts";
site.use(vento());

site.use(minifyHTML());
site.use(lightningCss());
site.use(sitemap());

site.copy("og.jpg");
site.copy("style.css);

export default site;
