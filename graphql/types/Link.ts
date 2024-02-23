// /graphql/types/Link.ts
import { builder } from "../builder";

builder.queryField("links", (t) =>
  t.prismaField({
    type: ['Link'],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.link.findMany({ ...query })
  })
)

builder.prismaObject('Link', {
  fields: (t) => ({
    id: t.exposeID('id'),
    title: t.exposeString('title'),
    url: t.exposeString('url'),
    description: t.exposeString('description'),
    imageUrl: t.exposeString('imageUrl'),
    category: t.exposeString('category'),
    users: t.relation('users')
  })
})