import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//     name: string;
// };

import url from "url";

const previewHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Please set the NEXT_EXAMPLE_CMS_DATOCMS_PREVIEW_SECRET env variable
  // on Vercel/Netlify, or everyone will be able to enter Preview Mode and
  // see draft content!

  const secret = process.env.DATOCMS_PREVIEW_SECRET;

  // // Check the secret and next parameters
  if (secret && req.query.secret !== secret) {
    return res.status(401).json({ message: "Invalid token" });
  }

  // // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  const uri = url.parse((req.query.page as any) || req.query.slug || "/", true);
  const sanitizedUrl = `${uri.pathname}${uri.search || ""}`;

  res.redirect(sanitizedUrl);
  // res.setPreviewData({});
  // res.writeHead(307, { Location: '/' });
  // res.end();
};

export default previewHandler;
