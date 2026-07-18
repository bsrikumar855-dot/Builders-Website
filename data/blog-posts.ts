export type BlogCategory = "electrical" | "plumbing" | "maintenance";

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  author: string;
  authorRole: string;
  publishedDate: string; // ISO date
  readTime: number; // minutes
  coverImage: string;
  content: ContentBlock[];
  relatedServiceSlugs: string[];
}

export const posts: Post[] = [
  {
    slug: "mcb-keeps-tripping-causes",
    title: "Why Does My MCB Keep Tripping? 5 Common Causes",
    excerpt:
      "A tripping MCB is your distribution board doing exactly what it's designed to do — but repeated trips point to one of five underlying problems. Here's how to tell them apart before you flip the switch back on again.",
    category: "electrical",
    author: "Ravi Shankar",
    authorRole: "Senior Electrician, Shreekumar Builders",
    publishedDate: "2026-05-12",
    readTime: 6,
    coverImage: "/images/blog/mcb-tripping.svg",
    relatedServiceSlugs: ["distribution-board-upgrade", "wiring-rewiring"],
    content: [
      {
        type: "paragraph",
        text: "A miniature circuit breaker (MCB) trips for one reason: it has detected more current flowing through the circuit than the wiring is rated to carry safely. That's a good thing — it's the difference between a breaker resetting and a fire starting behind your wall. But if the same MCB keeps tripping every day, or every time you switch on a particular appliance, something specific is wrong and it won't fix itself by resetting the switch again.",
      },
      { type: "heading", text: "1. Overloaded Circuit" },
      {
        type: "paragraph",
        text: "The most common cause. Too many high-draw appliances — an AC, a water heater, and an iron, say — sharing one circuit will pull more current than the MCB allows. This usually happens on older installations where a single circuit was designed for lights and fans, then extended over the years to cover sockets that now run heavy appliances. The fix isn't a bigger MCB — it's splitting the load across dedicated circuits.",
      },
      { type: "heading", text: "2. Short Circuit" },
      {
        type: "paragraph",
        text: "A live wire touching a neutral wire — inside a socket, a switch, or an appliance cord — causes current to spike almost instantly, and the MCB trips the moment you switch that circuit on. If the trip happens immediately and consistently at the same point, suspect damaged insulation or a loose terminal rather than overload.",
      },
      { type: "heading", text: "3. Earth Fault (RCCB/ELCB Tripping)" },
      {
        type: "paragraph",
        text: "If it's actually your RCCB or ELCB tripping rather than the MCB, current is leaking to earth somewhere — often through a damp appliance, a geyser with a failing element, or moisture inside an outdoor socket. This is a shock-protection device doing its job; disconnect the suspect appliance and test which circuit clears the fault.",
      },
      { type: "heading", text: "4. A Faulty Appliance" },
      {
        type: "paragraph",
        text: "Washing machines, water heaters, and motors with worn windings are frequent culprits. Unplug everything on the affected circuit, reset the MCB, and reconnect appliances one at a time. The one that trips it again is your problem device — repair or replace it rather than repeatedly resetting the breaker.",
      },
      { type: "heading", text: "5. A Worn-Out or Undersized MCB" },
      {
        type: "paragraph",
        text: "MCBs do wear out, especially cheap unbranded units subjected to years of minor overloads. If a breaker trips well below its rated current or won't hold even a light load, the breaker itself — not your wiring — may be the fault. This is also common when an old fuse-wire board has been retrofitted with mismatched breakers.",
      },
      { type: "heading", text: "When to Call an Electrician" },
      {
        type: "list",
        items: [
          "The same MCB trips more than once a week without an obvious cause",
          "You smell burning or see scorch marks near the switchboard",
          "Resetting the breaker requires real force, or it won't stay on at all",
          "Multiple circuits trip together",
          "Your board still uses rewireable fuses instead of MCBs",
        ],
      },
      {
        type: "paragraph",
        text: "Repeated resets without diagnosis are how minor faults turn into house fires. If your board is more than 15 years old or still uses fuse wire, it's worth having it assessed for a full upgrade rather than chasing individual trips.",
      },
    ],
  },
  {
    slug: "spot-hidden-water-leak",
    title: "How to Spot a Hidden Water Leak Before It Becomes a Flood",
    excerpt:
      "Most serious water damage starts small — a pinhole leak inside a wall or under a slab, invisible for weeks. These are the warning signs that catch it early, before it costs you a wall, a floor, or a ceiling.",
    category: "plumbing",
    author: "Suresh Babu",
    authorRole: "Senior Plumber, Shreekumar Builders",
    publishedDate: "2026-05-26",
    readTime: 5,
    coverImage: "/images/blog/hidden-water-leak.svg",
    relatedServiceSlugs: ["pipe-leak-repair", "water-tank-installation"],
    content: [
      {
        type: "paragraph",
        text: "Concealed plumbing is one of the great conveniences of modern construction — and one of its quiet risks. A leak behind a wall or beneath a slab doesn't announce itself the way a burst tap does. It seeps, slowly, until the damage is already done. Knowing what to look for buys you months of warning.",
      },
      { type: "heading", text: "Your Water Bill Has Crept Up" },
      {
        type: "paragraph",
        text: "If your bill has risen 20–30% without a change in household habits, that's often the first measurable sign. Water usage doesn't lie — a hidden leak running continuously can waste thousands of litres a month without a single visible drop appearing anywhere.",
      },
      { type: "heading", text: "The Meter Test" },
      {
        type: "paragraph",
        text: "Turn off every tap and appliance that uses water in the house, then check your water meter. Note the reading, wait 30 minutes without using any water, and check again. If the number has moved, water is flowing somewhere it shouldn't be.",
      },
      { type: "heading", text: "Damp Patches, Bubbling Paint, or Musty Smell" },
      {
        type: "paragraph",
        text: "A patch of wall or ceiling that stays damp, paint that bubbles or peels in one specific spot, or a persistent musty smell in a room with no obvious source are all signs of moisture trapped behind a surface. These often appear near bathrooms, kitchens, or any wall that shares a plumbing line.",
      },
      { type: "heading", text: "Warm Patches on the Floor" },
      {
        type: "paragraph",
        text: "If your home has concealed hot water pipes under the floor, an unexplained warm patch — especially one that wasn't there before — usually means a hot water line has failed beneath the slab.",
      },
      { type: "heading", text: "The Sound of Running Water With Everything Off" },
      {
        type: "paragraph",
        text: "If you can hear water moving through pipes when no tap, cistern, or appliance is running, trust your ears. This is one of the most reliable early indicators and is often noticed at night when the house is quiet.",
      },
      { type: "heading", text: "Cracked or Lifting Tiles" },
      {
        type: "paragraph",
        text: "Tiles that crack, lift, or feel loose without any impact damage are frequently a sign of water undermining the screed beneath them — very common in bathrooms with ageing shower plumbing.",
      },
      {
        type: "list",
        items: [
          "Rising water bill with no change in usage",
          "Meter still moving with all taps off",
          "Damp patches, bubbling paint, or musty smell",
          "Warm patches on flooring",
          "Sound of running water with everything off",
          "Tiles cracking or lifting without impact",
        ],
      },
      {
        type: "paragraph",
        text: "If two or more of these apply, don't wait for a visible flood. We use pressure testing and acoustic detection to locate the exact point of a hidden leak, so repairs open the smallest possible section of wall or floor.",
      },
    ],
  },
  {
    slug: "signs-home-needs-rewire",
    title: "Signs Your Home Needs a Rewire (Not Just a Repair)",
    excerpt:
      "Not every electrical fault calls for a full rewire — but some symptoms mean the wiring itself, not any single fixture, is the problem. Here's how to tell the difference before you spend money on repeated call-outs.",
    category: "electrical",
    author: "Ravi Shankar",
    authorRole: "Senior Electrician, Shreekumar Builders",
    publishedDate: "2026-06-08",
    readTime: 6,
    coverImage: "/images/blog/home-rewire-signs.svg",
    relatedServiceSlugs: ["wiring-rewiring", "distribution-board-upgrade"],
    content: [
      {
        type: "paragraph",
        text: "Homeowners often call us to fix 'one more thing' — a flickering light here, a warm switch there — for months before realising every one of those call-outs traces back to the same cause: wiring that has reached the end of its safe life. Knowing the difference between a local repair and a symptom of system-wide wear saves you money and, more importantly, risk.",
      },
      { type: "heading", text: "Your Wiring Is Aluminium, or Over 25 Years Old" },
      {
        type: "paragraph",
        text: "Aluminium wiring, common in older constructions, expands and contracts more than copper and loosens at connection points over time — a known fire risk. Even copper insulation degrades past 25–30 years, becoming brittle and prone to cracking when disturbed.",
      },
      { type: "heading", text: "You've Called an Electrician for the Same Type of Fault More Than Twice" },
      {
        type: "paragraph",
        text: "One socket failing is a repair. The same room's sockets failing every few months, or the same breaker tripping regardless of what's plugged in, means the underlying cable or connection is failing — not the accessory attached to it.",
      },
      { type: "heading", text: "Switch Plates and Sockets Feel Warm or Are Discoloured" },
      {
        type: "paragraph",
        text: "A warm faceplate under normal load, or a socket with a brownish scorch mark around the pins, indicates resistive heating at a loose or corroding connection — a precursor to arcing. This is not cosmetic; it needs attention immediately.",
      },
      { type: "heading", text: "You Don't Have Enough Sockets for How You Actually Live" },
      {
        type: "paragraph",
        text: "Homes wired decades ago were designed around one or two appliances per room. If every room now relies on extension boards and multi-plug adaptors permanently plugged in, the circuit design — not just the socket count — needs revisiting.",
      },
      { type: "heading", text: "There's No Earthing, or It's Inconsistent" },
      {
        type: "paragraph",
        text: "Many older homes were wired before earthing was standard practice, or have earthing only on some circuits. This is a serious shock hazard that a like-for-like repair cannot fix — it requires re-wiring the affected circuits with a proper earth conductor throughout.",
      },
      { type: "heading", text: "Frequent Flickering Across Multiple Rooms" },
      {
        type: "paragraph",
        text: "Flickering confined to one bulb is usually the bulb or fitting. Flickering that follows you from room to room, especially when a large appliance switches on, points to a loose connection somewhere upstream in the circuit — often at the board itself.",
      },
      {
        type: "list",
        items: [
          "Aluminium wiring or wiring over 25 years old",
          "Repeated faults of the same type in the same area",
          "Warm or discoloured switch plates and sockets",
          "Chronic reliance on extension boards for basic needs",
          "Missing or inconsistent earthing",
          "Flickering that follows load across multiple rooms",
        ],
      },
      {
        type: "paragraph",
        text: "A full rewire is disruptive, but so is losing a wall's worth of finish to fix the same fault every year. A proper survey will tell you honestly whether you need a rewire or simply a board upgrade — we never recommend one when the other will do.",
      },
    ],
  },
  {
    slug: "diy-vs-emergency-plumber",
    title: "DIY vs Calling a Plumber: When It's Actually an Emergency",
    excerpt:
      "Some plumbing problems are a five-minute fix with a bucket and a spanner. Others can flood a floor in the time it takes to find your phone. Here's how to tell which is which — before you decide to wait until morning.",
    category: "maintenance",
    author: "Suresh Babu",
    authorRole: "Senior Plumber, Shreekumar Builders",
    publishedDate: "2026-06-19",
    readTime: 5,
    coverImage: "/images/blog/diy-vs-plumber.svg",
    relatedServiceSlugs: ["pipe-leak-repair", "drain-cleaning", "bathroom-kitchen-plumbing"],
    content: [
      {
        type: "paragraph",
        text: "Every household plumbing problem feels urgent when it's happening. Most aren't. Knowing which few genuinely are — and what to do in the first five minutes — is the difference between a minor inconvenience and a five-figure repair bill.",
      },
      { type: "heading", text: "Safe to Handle Yourself" },
      {
        type: "list",
        items: [
          "A slow-draining sink — try a plunger or a drain-cleaning tool before calling anyone",
          "A running toilet cistern — usually a worn flapper valve, an inexpensive fix",
          "A dripping tap — tighten the fixture or replace the washer; rarely urgent",
          "A clogged toilet with no overflow risk — a plunger resolves most single blockages",
          "Low water pressure at one fixture only — often just a clogged aerator, unscrew and clean it",
        ],
      },
      { type: "heading", text: "Actually an Emergency — Call Immediately" },
      {
        type: "paragraph",
        text: "A handful of situations can cause real structural or water damage within minutes, not days. These share one thing in common: water is either escaping faster than it can be contained, or it's contaminated.",
      },
      {
        type: "list",
        items: [
          "A burst pipe or fitting spraying water — shut off the main stopcock immediately",
          "Sewage backing up into a sink, tub, or floor drain — a health hazard, not just an inconvenience",
          "No water shutoff valve responding — meaning you cannot isolate an active leak yourself",
          "Water pooling near an electrical point, socket, or distribution board",
          "A geyser making unusual noise, leaking, or showing signs of pressure buildup",
          "Multiple fixtures backing up at once — usually a main line blockage, not a single-fixture issue",
        ],
      },
      { type: "heading", text: "What to Do in the First Five Minutes" },
      {
        type: "paragraph",
        text: "Locate and shut the main stopcock before anything else — every household should know exactly where it is before an emergency, not during one. If water is anywhere near electrical fittings, do not touch them; switch off the mains breaker from a dry location if it's safe to reach, and call us immediately.",
      },
      {
        type: "paragraph",
        text: "The rule of thumb: if stopping the water yourself would take longer than it takes water to reach a wall, a ceiling below, or an electrical point, it's not a DIY situation. Same-day emergency attendance is available for exactly these cases.",
      },
    ],
  },
  {
    slug: "understanding-earthing-not-optional",
    title: "Understanding Earthing: Why It's Not Optional",
    excerpt:
      "Earthing is the one part of an electrical installation you never see working — until the day it prevents a fatal shock. Here's what it actually does, and why 'the pipe is earthed enough' is a dangerous myth.",
    category: "electrical",
    author: "Ravi Shankar",
    authorRole: "Senior Electrician, Shreekumar Builders",
    publishedDate: "2026-07-02",
    readTime: 6,
    coverImage: "/images/blog/earthing-explained.svg",
    relatedServiceSlugs: ["earthing-lightning-protection", "wiring-rewiring"],
    content: [
      {
        type: "paragraph",
        text: "Ask most homeowners what earthing does and you'll get a vague answer about safety. That vagueness is exactly the problem — earthing is the single component standing between a faulty appliance and a fatal shock, and it's routinely treated as an afterthought.",
      },
      { type: "heading", text: "What Earthing Actually Does" },
      {
        type: "paragraph",
        text: "Every appliance with a metal body — a washing machine, a geyser, a refrigerator — can develop a fault where the live wire touches the metal casing. Without an earth connection, that casing becomes live, and the first path to ground the current finds may be a person touching it. An earth conductor gives that fault current a much lower-resistance path to ground, tripping the breaker instantly instead of waiting for a person to complete the circuit.",
      },
      { type: "heading", text: "The 'Water Pipe as Earth' Myth" },
      {
        type: "paragraph",
        text: "Older installations sometimes used a metal water pipe as an informal earth point. This is unreliable and, in many cases now, actively dangerous: modern plumbing increasingly uses non-conductive CPVC or UPVC piping, meaning what looks like an earth connection is doing nothing at all. A dedicated earth electrode, sized and tested to IS 3043, is the only reliable method.",
      },
      { type: "heading", text: "What 'Good Earthing' Actually Means" },
      {
        type: "paragraph",
        text: "It's not enough for an earth wire to simply exist — it needs sufficiently low resistance to actually carry fault current away effectively. IS 3043 recommends an earth resistance below 1 ohm for most installations. We measure this with a calibrated earth tester, not a visual check, because a corroded or poorly buried electrode can look fine and still measure unsafe.",
      },
      { type: "heading", text: "Earthing and Your RCCB Work Together" },
      {
        type: "paragraph",
        text: "An RCCB (residual current circuit breaker) detects an imbalance between live and neutral current and trips the circuit — but it relies on a proper earth path to do this reliably and quickly. Good earthing and a working RCCB are a pair, not alternatives to each other.",
      },
      { type: "heading", text: "Earthing and Lightning Protection" },
      {
        type: "paragraph",
        text: "During Coimbatore's thunderstorm season, a building's earthing system also has to safely dissipate a lightning strike's current if a protection system is fitted — which is why earthing design and lightning protection are usually assessed together, not separately.",
      },
      { type: "heading", text: "How Often Should It Be Tested?" },
      {
        type: "paragraph",
        text: "IS 3043 recommends annual testing for industrial premises and at least every three years for residential ones — sooner if you notice recurring shocks from taps, appliance casings, or switches, which is never something to ignore or explain away.",
      },
      {
        type: "paragraph",
        text: "If you've never had your home's earth resistance actually measured — as opposed to assumed — it's worth a half-hour site visit to find out where you stand.",
      },
    ],
  },
  {
    slug: "choosing-the-right-water-heater",
    title: "How to Choose the Right Water Heater for Your Home",
    excerpt:
      "Storage or instant? What capacity? Which safety features actually matter? A practical guide to choosing a geyser that fits your household, not just your budget.",
    category: "plumbing",
    author: "Suresh Babu",
    authorRole: "Senior Plumber, Shreekumar Builders",
    publishedDate: "2026-07-14",
    readTime: 5,
    coverImage: "/images/blog/water-heater-guide.svg",
    relatedServiceSlugs: ["water-heater-installation", "bathroom-kitchen-plumbing"],
    content: [
      {
        type: "paragraph",
        text: "Water heater installations go wrong in two places: choosing the wrong unit for the household, and installing the right unit unsafely. Getting the first decision right makes the second one far easier.",
      },
      { type: "heading", text: "Storage vs Instant" },
      {
        type: "paragraph",
        text: "Instant (tankless) heaters warm water on demand, take up little wall space, and use less standby energy — ideal for a single bathroom or lower, more intermittent demand. Storage heaters keep a tank of water hot and ready, which suits households needing hot water at multiple points simultaneously, or where incoming water pressure is inconsistent.",
      },
      { type: "heading", text: "Sizing by Household" },
      {
        type: "list",
        items: [
          "1–2 people, single bathroom: 6–10 L instant, or a 15–25 L storage unit",
          "3–4 people, one bathroom: 25 L storage, or a higher-flow instant unit",
          "Family with multiple bathrooms: consider a storage unit per bathroom or a centralised system with recirculation",
          "Kitchen-only use: a compact 1–3 L instant unit under the sink is usually enough",
        ],
      },
      { type: "heading", text: "Energy Rating Matters More Than You'd Think" },
      {
        type: "paragraph",
        text: "A 5-star BEE-rated storage heater loses significantly less standby heat than a 2-star unit of the same capacity, which adds up over years of continuous use. For a heater that stays switched on for long periods, the rating difference is worth paying for upfront.",
      },
      { type: "heading", text: "Safety Features That Are Not Optional" },
      {
        type: "list",
        items: [
          "A dedicated circuit with its own ELCB — never share a geyser circuit with other sockets",
          "A pressure relief valve with a properly routed drain pipe, not one left to spray inside a cupboard",
          "Proper earth bonding of both the unit and any connected metal pipework",
          "A thermostat with a reliable cut-off, especially on units used by children or elderly residents",
        ],
      },
      { type: "heading", text: "One Common Mistake" },
      {
        type: "paragraph",
        text: "Buying a unit based purely on litre capacity or price, then having it installed on a shared circuit without an ELCB, is how a convenience becomes a hazard. The unit matters less than the installation — a mid-range geyser installed correctly is safer than a premium one wired incorrectly.",
      },
      {
        type: "paragraph",
        text: "If you're replacing a unit that keeps tripping its breaker, don't just reset it and move on — that's almost always an element fault or an undersized circuit, and it's worth having checked before it fails in a way that isn't just inconvenient.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: BlogCategory): Post[] {
  return posts.filter((p) => p.category === category);
}

export function getPostsByServiceSlug(serviceSlug: string): Post[] {
  return posts.filter((p) => p.relatedServiceSlugs.includes(serviceSlug));
}

export function getRelatedPosts(post: Post, limit = 3): Post[] {
  return posts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, limit);
}
