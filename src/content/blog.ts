export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  accent: string;
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "cookieless-future-publisher-strategy",
    title: "The Cookieless Future: A Publisher's Survival Guide",
    excerpt: "With third-party cookies finally gone, publishers need a first-party data strategy. Here's how to build one that lasts.",
    category: "Publishers",
    date: "2025-06-10",
    readTime: "8 min read",
    accent: "#5b8cff",
    content: `The deprecation of third-party cookies is not a future event — it's happening now. Chrome has disabled cookies for a growing percentage of users, Safari has blocked them for years, and Firefox follows suit. For publishers, this means one thing: the era of monetizing anonymous audience data is over.

**The stakes for publishers**

Publishers who have relied on third-party audience segments for programmatic revenue are already seeing CPM pressure. DSPs can no longer accurately identify users, which reduces targeting precision and — ultimately — advertiser willingness to pay.

The good news: publishers who act now have a significant first-mover advantage. First-party data from engaged, known readers is worth 5–10x more than anonymous third-party data.

**What first-party data actually means**

First-party data is any data collected directly from your readers, with their consent. This includes:

- **Declared data**: email address, postal code, profession, interests — collected via registration, newsletter signup, or preference center
- **Behavioral data**: articles read, topics engaged with, scroll depth, time on page
- **Contextual signals**: content categories, semantic topics, brand affinity

The key difference from third-party data: you own it, it doesn't expire with cookies, and it's infinitely more accurate because it comes directly from your readers.

**Building your first-party data stack**

1. **Start with newsletter subscriptions**: Email is the most durable first-party identifier. Even 50k engaged subscribers represent a valuable addressable audience.

2. **Deploy contextual engagement**: Use editorial formats (conversational Q&A, polls, quizzes) that collect declared preferences as part of the reading experience. Readers share information when they see clear value.

3. **Build a consent-first CRM**: Every reader interaction should feed a first-party profile — article reads, interaction events, declared preferences. With proper consent management (IAB TCF 2.x compliant), this data is GDPR-safe and highly durable.

4. **Activate your data**: A first-party data strategy only creates value when activated. Connect your audience profiles to direct advertiser deals, contextual targeting, and lookalike modeling.

**The Collective Audience approach**

Our publisher platform was designed from the ground up for the cookieless era. AudienceCloud's CRM layer captures behavioral and declared signals from every reader interaction. AudienceMatching resolves identities across devices without cookies. And every publisher retains 100% ownership of their data.

The publishers in our network have seen first-party-activated CPMs 3–5x higher than anonymous programmatic. The investment in data infrastructure pays for itself rapidly.

**Conclusion**

The cookieless transition is not a threat — it's an opportunity to build a more sustainable, more valuable audience business. The publishers who emerge strongest will be those who started building first-party data infrastructure before it became an emergency.`,
  },
  {
    slug: "attention-metrics-brand-lift",
    title: "Why Attention Metrics Outperform CTR for Brand Campaigns",
    excerpt: "Click-through rate was never a proxy for brand impact. Attention time, dwell, and interaction tell a much better story.",
    category: "Advertisers",
    date: "2025-05-28",
    readTime: "6 min read",
    accent: "#07e2dc",
    content: `The advertising industry has spent 30 years optimizing for the wrong metric. Click-through rate (CTR) was never a meaningful proxy for brand recall, purchase intent, or business outcomes — yet it became the default measurement for digital campaigns.

The result: an industry that optimized for bots, banner blindness, and accidental clicks, while genuine brand impact went unmeasured.

**What attention actually measures**

Attention metrics measure the cognitive and behavioral engagement of a real user with an ad. The key signals include:

- **Time-in-view**: How long the ad is in the viewport of an engaged user
- **Scroll engagement**: Whether the reader paused while passing the ad
- **Interaction signals**: Cursor movement, hover, click, play events
- **Dwell time**: Time spent on the page after the ad loaded

When combined, these signals create an "attention score" that correlates strongly with brand recall and purchase intent in independent measurement studies.

**The evidence is overwhelming**

Meta-analyses from Lumen Research, Kantar, and WARC consistently show that attention time is the strongest predictor of brand outcomes across formats:

- **2x** the brand recall compared to viewable impressions
- **3x** the purchase intent lift when attention exceeds 5 seconds
- **+40%** brand lift on formats with >1% interaction rate

Our own data across 200+ publishers confirms these findings. The formats that generate 34 seconds of average attention time — our benchmark — consistently deliver +40% brand lift in certified Lucid and Dynata brand lift studies.

**Why CTR became the default (and why it's wrong)**

CTR became dominant because it was measurable, comparable, and actionable. Publishers could optimize for it, agencies could benchmark against it, and advertisers had a clear number to report.

But CTR measures the click — not the brand impression that occurred before the click. For a brand awareness campaign, 34 seconds of engaged reading followed by no click is infinitely more valuable than 0.1 seconds of accidental banner view followed by a misclick.

The IAB's MAKE GOOD initiative, Karen Nelson-Field's attention research, and the growing adoption of attention measurement platforms are finally shifting the industry. Attention is becoming the new viewability.

**Practical implications for media buyers**

1. **Demand attention metrics from publishers**: Ask for average time-in-view, scroll engagement data, and interaction rates alongside traditional reach metrics.

2. **Run certified brand lift studies**: Third-party measurement (Lucid, Dynata, Kantar) is the only way to prove campaign impact vs. control groups.

3. **Evaluate formats by attention potential**: High-attention placements (contextual, premium, conversational) will consistently outperform programmatic open exchange at any CTR level.

4. **Build attention into MMM**: Marketing Mix Models should weight media channels by attention-adjusted impressions, not raw GRPs or impressions.

The shift to attention metrics is not just academic — it changes how budgets should be allocated and how campaigns should be measured.`,
  },
  {
    slug: "audiencecloud-open-platform",
    title: "Introducing AudienceCloud: The Open Web Platform",
    excerpt: "Today we're officially launching AudienceCloud — the unified OS connecting 200+ publishers and 150+ brands.",
    category: "Product",
    date: "2025-05-15",
    readTime: "5 min read",
    accent: "#7b3fff",
    content: `Today marks a significant milestone for Collective Audience and for the open web ecosystem we're building. We're officially launching **AudienceCloud** — our unified platform connecting publishers, advertisers, and audience data into one modular, open OS.

**Why we built AudienceCloud**

The digital advertising ecosystem has a structural problem: publishers monetize audiences they don't know, advertisers reach users they can't identify, and the data that would connect them is locked inside walled gardens.

Collective Audience was built to solve this. AudienceCloud is the infrastructure layer that connects premium publishers with brand advertisers — without cookies, without intermediaries, and without compromising editorial quality.

**The four modules**

AudienceCloud is organized around four integrated modules, each solving a specific part of the publisher-advertiser equation:

**AudienceDesk** is our trading desk layer — a self-serve and managed buying platform for advertisers who want direct access to our publisher network. Campaigns can be set up in minutes, with real-time pacing, contextual targeting, and full transparency.

**AudienceAds** powers every ad format served across our publisher network. From conversational Q&A formats to scroll-triggered video, AudienceAds is the creative engine that generates 34 seconds of average attention time.

**AudienceConnect** handles omnichannel distribution — synchronizing audience segments across display, video, social, email, and push notification channels from a single activation point.

**AudienceMatching** is our cookieless identity layer — the technology that resolves audience identities across devices using first-party signals, without fingerprinting or cookie syncing.

**Open by design**

One of our core architectural decisions: AudienceCloud is fully API-accessible. Publishers can integrate our CRM layer with their existing CMS. Advertisers can connect AudienceDesk to their DSP. Data teams can export audience segments via our GraphQL API.

We believe the future of the open web depends on interoperability — not proprietary lock-in. Every module in AudienceCloud can be used independently or as part of the full stack.

**What's next**

The launch of AudienceCloud marks the beginning of our platform phase. Over the coming months, we'll be opening the self-serve AudienceDesk to direct advertiser access, expanding AudienceMatching to new publisher integrations, and launching our attention measurement certification program.

For publishers and advertisers who want early access, reach out to our team at hello@collectiveaudience.co.`,
  },
  {
    slug: "beop-nyiax-merger-collective-audience",
    title: "From BeOp & NYIAX to Collective Audience",
    excerpt: "The story of how two pioneering companies merged to build the open web platform the industry has been waiting for.",
    category: "Company",
    date: "2025-04-20",
    readTime: "7 min read",
    accent: "#5b8cff",
    content: `Every significant company is the result of timing, people, and a clear-eyed view of where an industry is going. Collective Audience is no different — but our story starts with two companies that each saw part of the picture.

**BeOp: The publisher side**

BeOp was founded in Paris in 2017 with a radical idea: what if advertising could feel like editorial content? Instead of interruptive banners, what if brands could participate in conversations with readers through Q&A formats, polls, and dialogue?

The insight proved correct. BeOp formats consistently outperformed standard display on every engagement metric — time spent, interaction rate, brand recall. By 2023, BeOp had deployed conversational formats on 200+ premium French and European publishers including Le Monde, Les Échos, and HuffPost.

But BeOp's founders saw a ceiling. The conversational format was solving engagement, but not the underlying data infrastructure problem. Publishers needed first-party data tools. Advertisers needed cookieless targeting. The ecosystem needed a layer that BeOp alone couldn't build.

**NYIAX: The marketplace side**

NYIAX (New York Interactive Advertising Exchange) was solving a different problem. Founded on the premise that premium advertising inventory should trade like a financial instrument — with guaranteed delivery, transparent pricing, and clean data — NYIAX built premium audience marketplace infrastructure in the United States.

By 2023, NYIAX had relationships with US premium publishers, institutional advertisers, and a cookieless data infrastructure that complemented BeOp's format layer perfectly.

**The merger**

The combination of BeOp and NYIAX was not a typical tech merger. Both companies shared the same thesis — that the open web deserved better infrastructure — and complementary capabilities that, together, created something neither could build alone.

BeOp brought: 200+ publisher relationships, conversational ad format technology, and deep European market knowledge.

NYIAX brought: premium marketplace infrastructure, cookieless identity technology (what became AudienceMatching), and US market positioning.

The result: Collective Audience — a transatlantic platform with offices in New York (85 Broad St) and Paris (33 rue La Fayette), serving both sides of the publisher-advertiser equation.

**What this means for the open web**

The open web faces an existential threat from walled gardens that capture value at the expense of publishers, readers, and the broader ecosystem. Collective Audience exists to build the infrastructure that keeps the open web viable.

We believe that premium publishers deserve better monetization tools. That advertisers deserve transparent access to engaged audiences. And that readers deserve advertising that respects their attention.

That belief is what brought BeOp and NYIAX together. And it's what drives Collective Audience forward.`,
  },
  {
    slug: "conversational-formats-study",
    title: "Study: Conversational Ad Formats Deliver 3× Brand Attribution",
    excerpt: "New independent research confirms that conversational formats consistently outperform standard display on every brand metric.",
    category: "Research",
    date: "2025-04-05",
    readTime: "10 min read",
    accent: "#07e2dc",
    content: `We commissioned an independent meta-analysis of 50+ campaigns run through our platform, using certified brand lift methodologies from Lucid Research and Dynata. The findings confirm what our clients have been experiencing — and they're significant enough to change how the industry thinks about format selection.

**Key findings**

Conversational ad formats — defined as interactive units requiring at least one reader action (question answer, slider interaction, video play) — outperform standard display on every measured brand metric:

- **+40% brand lift** (vs. +8% for standard display in the same contexts)
- **34 seconds** average attention time (vs. 2 seconds for standard display)
- **3× brand attribution** in post-exposure surveys
- **>1% interaction rate** (vs. 0.1% CTR for standard display)

These figures represent averages across 50+ campaigns and 8 advertiser categories. The effect is consistent across verticals: automotive, beauty, health, retail, finance, and technology all show similar patterns.

**Methodology**

The study used a test/control methodology. Exposed groups saw conversational formats; control groups were shown no advertising. Brand recall, consideration, and purchase intent were measured via online panel surveys (Lucid/Dynata certified) within 72 hours of exposure.

The 50+ campaigns included a total of 12 million exposed users and 4 million control respondents. Statistical significance (p<0.01) was achieved on all primary metrics.

**Why conversational formats outperform**

The research team identified three mechanisms behind the performance gap:

1. **Active processing**: Readers who answer a question or interact with a format process the brand information more deeply than passive viewers. This is consistent with Kahneman's System 2 processing theory.

2. **Voluntary engagement**: Unlike autoplay video or forced interstitials, conversational formats are opt-in. Readers who engage do so voluntarily, which increases both the quality of the engagement and brand sentiment.

3. **Context coherence**: Our formats are deployed inline within relevant editorial content. A format about electric vehicles appearing in an automotive article creates context coherence that increases brand relevance and recall.

**Category breakdown**

Brand lift ranged from +32% (Retail) to +61% (Automotive) across categories. The highest performers were categories where reader intent was well-matched to format context — automotive readers in automotive articles, health readers in health content.

This underscores the importance of contextual targeting: the right format in the right context compounds the attention and recall benefits.

**Implications for media planning**

These findings have practical implications for how media plans should be structured:

- **Quality over reach**: 1M attentive impressions on conversational formats outperform 10M passive display impressions on brand metrics.
- **Context matters as much as format**: The same format in a low-relevance context performs significantly worse.
- **Measure what matters**: Brand lift certification (not CTR) is the only way to accurately evaluate brand campaign performance.

The full study is available on request. Contact research@collectiveaudience.co for the detailed methodology and category-level breakdowns.`,
  },
  {
    slug: "gdpr-first-party-data-compliance",
    title: "GDPR + First-Party Data: How to Stay Compliant at Scale",
    excerpt: "A practical guide to consent management, data governance, and compliant audience building for European publishers.",
    category: "Legal & Compliance",
    date: "2025-03-18",
    readTime: "9 min read",
    accent: "#7b3fff",
    content: `GDPR compliance in digital advertising is not optional — and it's not as complex as many publishers fear. The core requirement is consent: users must actively agree to have their data collected and used for advertising purposes.

The challenge is building a consent architecture that is both legally robust and commercially viable. Here's how European publishers can do it.

**The consent requirement under GDPR**

Article 6 of GDPR requires a legal basis for processing personal data. For advertising, the two relevant bases are:

- **Consent (Art. 6(1)(a))**: The user explicitly opts in to advertising data processing
- **Legitimate interest (Art. 6(1)(f))**: Processing is necessary for legitimate interests, balanced against user rights

For most advertising use cases — particularly behavioral targeting and audience profiling — consent is required. Legitimate interest cannot be used as a shortcut for commercial data processing where consent is feasible.

**IAB TCF 2.x: The industry standard**

The IAB's Transparency and Consent Framework (TCF) version 2.x is the de facto standard for consent management in European advertising. It defines:

- **Purposes**: Specific data processing purposes users can consent to (e.g., "Store and/or access information on a device", "Create profiles for personalised advertising")
- **Vendors**: Registered advertising technology vendors with specific data processing declarations
- **Signals**: Standardized consent strings passed in bid requests

Publishers implementing a CMPs (Consent Management Platform) that is TCF 2.x registered can signal user consent to all downstream advertising partners via standard bid request parameters.

**Choosing and configuring your CMP**

The IAB maintains a list of registered CMPs. Our publisher partners use primarily Didomi and OneTrust — both offer robust TCF 2.x support with high consent rates (typically 65-80% for well-configured banners in France).

Key configuration principles for maximizing consent rates:

1. **Legitimate interest by default, consent on opt-out**: For purposes where legitimate interest applies, configure them as default-on. Users who object can opt out.

2. **Layered consent UI**: Use a two-layer UI — a concise first layer summarizing data usage, a detailed second layer for granular controls. CNIL guidance (France) and ICO guidance (UK) provide jurisdiction-specific requirements.

3. **A/B test your consent banner**: Consent rate is a commercial metric. Test banner copy, button placement, and color schemes to optimize for both compliance and consent rate.

4. **Refresh consent signals appropriately**: Under GDPR, consent must be renewed periodically. Most CMPs handle this automatically.

**First-party data: What requires consent?**

Not all first-party data requires explicit consent. The key distinction:

- **Technical data** (session logs, error tracking, security): Legitimate interest or necessary for contract performance
- **Analytics** (page views, scroll depth, aggregate audience metrics): Legitimate interest in most jurisdictions
- **Profile building** (declared data, behavioral profiles for advertising targeting): Consent required

For publishers building first-party CRM profiles for advertising purposes, consent is mandatory. However, with a well-configured CMP, 65-80% of readers will consent — providing a substantial addressable first-party audience.

**Data governance: the operational layer**

Compliance doesn't end with consent. Publishers must implement:

- **Data minimization**: Collect only what you need for declared purposes
- **Retention limits**: Delete or anonymize data after the retention period (typically 13 months for analytics, 6 months for behavioral profiles)
- **Data subject rights**: Implement processes for access, rectification, erasure, and portability requests
- **Vendor contracts**: Ensure all advertising technology vendors are under DPA (Data Processing Agreement)
- **Breach notification**: 72-hour breach notification to supervisory authority (CNIL in France)

**Practical checklist for publishers**

✓ TCF 2.x registered CMP deployed and configured
✓ Consent banner A/B tested for optimal consent rate
✓ Data processing register (ROPA) maintained
✓ Vendor DPAs in place
✓ Data retention policy implemented
✓ DSR (Data Subject Request) process documented
✓ Privacy policy updated to reflect actual processing
✓ Staff training completed

GDPR compliance is an ongoing operational commitment, not a one-time configuration. Publishers who invest in proper consent infrastructure will be commercially better positioned as the industry shifts to first-party data models.`,
  },
];
