import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {presentationTool, defineLocations} from 'sanity/presentation'
import {schemaTypes} from './schemaTypes'

const SITE_URL = process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000'

// ─── Team access control ────────────────────────────────────────────────────
// Add each team member's Sanity account email below.
// Marketing → Blog + Gallery only
// Product   → Pages only
// Admins bypass restrictions UNLESS their email appears in a team list,
// which lets you test the feature with your own account.
// Email not in any list = sees everything (safe default for new members).

const MARKETING_EMAILS: string[] = [
  // 'alice@collectiveaudience.co',
]

const PRODUCT_EMAILS: string[] = [
  // 'bob@collectiveaudience.co',
  // 'meugui1412@gmail.com', // ← uncomment to test: you'll see only Pages
]
// ────────────────────────────────────────────────────────────────────────────

export default defineConfig({
  name: 'default',
  title: 'Collective Audience',

  projectId: '2svafw8h',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S, context) => {
        const currentUser = context.currentUser
        const email = currentUser?.email ?? ''

        const inMarketingList = MARKETING_EMAILS.includes(email)
        const inProductList = PRODUCT_EMAILS.includes(email)
        const inAnyList = inMarketingList || inProductList

        // If email is in a team list → restrict to that team only (even admins).
        // If email is in no list → see everything (safe default for unknown/new users).
        const showMarketing = inAnyList ? inMarketingList : true
        const showProduct = inAnyList ? inProductList : true

        const items = []

        if (showMarketing) {
          items.push(
            S.listItem()
              .title('Blog')
              .schemaType('post')
              .child(S.documentTypeList('post').title('Blog Posts')),
            S.listItem()
              .title('Gallery')
              .schemaType('galleryItem')
              .child(S.documentTypeList('galleryItem').title('Gallery Items')),
          )
        }

        if (showMarketing && showProduct) {
          items.push(S.divider())
        }

        if (showProduct) {
          items.push(
            S.listItem()
              .title('Pages (CMS)')
              .schemaType('page')
              .child(S.documentTypeList('page').title('Pages')),
          )
        }

        items.push(
          S.divider(),
          S.listItem()
            .title('Team')
            .schemaType('teamMember')
            .child(
              S.documentTypeList('teamMember')
                .title('Team Members')
                .defaultOrdering([{field: 'group', direction: 'asc'}, {field: 'order', direction: 'asc'}]),
            ),
        )

        return S.list().title('Content').items(items)
      },
    }),
    visionTool(),
    presentationTool({
      previewUrl: {
        origin: SITE_URL,
        preview: '/',
        draftMode: {
          enable: '/api/draft-mode/enable',
          disable: '/api/draft-mode/disable',
        },
      },
      resolve: {
        locations: {
          post: defineLocations({
            select: {title: 'title', slug: 'slug.current'},
            resolve: (doc) => ({
              locations: [
                {
                  title: doc?.title || 'Untitled post',
                  href: `/blog/${doc?.slug}`,
                },
              ],
            }),
          }),
          page: defineLocations({
            select: {title: 'title', slug: 'slug.current'},
            resolve: (doc) => ({
              locations: [
                {
                  title: doc?.title || 'Untitled page',
                  href: doc?.slug ? `/pages-cms/${doc.slug}` : '/',
                },
              ],
            }),
          }),
          galleryItem: defineLocations({
            select: {title: 'name', slug: 'slug.current'},
            resolve: (doc) => ({
              locations: [
                {
                  title: doc?.title || 'Untitled gallery item',
                  href: `/gallery/${doc?.slug}`,
                },
              ],
            }),
          }),
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
