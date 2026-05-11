---
title: Where are all the Decision Markets?
description: On the practical limitations of decision markets
date: 2026-05-10
tags:
  - forecasting
  - prediction markets
  - futarchy
  - decision markets
  - mechanism design
---

<figure class="image-plate">
  <picture>
    <source srcset="/quaking-aspen.png">
    <img src="/quaking-aspen.png" alt="Quaking aspen trees">
  </picture>
</figure>

Decision markets aim to extend prediction markets from forecasting outcomes to informing decisions. The core idea stems from Robin Hanson's 2000 proposal for [futarchy](https://mason.gmu.edu/~rhanson/futarchy.html). The mechanism: if a company, government, or institution agrees on a metric of success, prediction markets can determine which policy or action is most likely to improve that metric.

It's an elegant idea. If prediction markets are good at aggregating distributed information about future events, they should, in theory, be good at aggregating wisdom about which choices lead to better outcomes.

The past several years have brought a wave of experiments trying to put this into practice. Today, [MetaDAO](https://www.metadao.fi) runs futarchy-style governance for startups, using token price as the performance indicator (proposals only pass when markets predict they'll improve it). [Combinator](https://www.combinator.trade), a decision market infrastructure protocol, operates similarly, letting anyone run these markets for themselves.

After spending significant time in this space, I believe the current implementations of decision markets fail to deliver outside of a few narrow market types, and it comes down to two structural problems: a lack of informed traders and an overly-complicated architecture.

## The trader problem

For a market to generate a useful price signal, you need informed traders. To attract traders, you need to stake enough capital. The [Fifty Cent Dollars piece on Minimum Viable Liquidity](https://fiftycentdollars.substack.com/p/minimum-viable-liquidity) puts a name to this threshold: the MVL is the floor below which a market doesn't attract enough informed trading activity to price accurately.

Classical prediction markets like [Polymarket](https://polymarket.com) and [Kalshi](https://kalshi.com) clear this threshold for major events because the audience is enormous. Millions of people have opinions about who will win a presidential election or whether the Fed will raise rates.

Decision markets, however, tend to only be relevant to the people who are affected by, or informed about, the specific decision. If a company is choosing between two product strategies, the pool of people with meaningful information is small: employees, close advisors, and a handful of competitors who understand the space. Attracting the few traders who can actually price it accurately requires seeding enough capital to make it worth their while. The thinner the market, the higher that bar.

Furthermore, for the traders to accurately price the market, they need context: the company's financials, the competitive landscape, the team's capabilities, the strategic alternatives. At a public company, some of this is available. At a private company or for an individual, almost all of it is private. You'd need to be fully "open book" for the market to function, which, for most decisions worth making, isn't practical.

> The term used in prediction market research for this is **thin markets**: markets where there aren't enough informed participants to drive efficient price discovery, and where even modest capital movements can distort prices.

The unfortunate consequence is that decision markets are hardest to use exactly where they'd be most valuable: at the company or individual level, where decisions are idiosyncratic and private.

That said, decision markets aren't useless at the organizational level. There are two clear cases in practice that have repeatedly attracted enough traders: when you want **aggregated opinions** (which landing page converts better, which feature to prioritize) rather than informational price discovery; or when you want to **distribute trust** rather than optimize a decision (a commitment device where a decision can only execute if the market endorses it).

## The architecture problem

The current approach to decision markets uses a **conditional futures** architecture. You create two conditional markets: "what will the KPI be if we take action A?" and "what will the KPI be if we don't do action A". If these markets are priced correctly, they should reveal whether "action A" will improve KPI and by how much. 

MetaDAO and Combinator both use a version of this, using a crypto protocol's token price as the KPI. The logic: token price aggregates all relevant information about the protocol's health, similar to how equity prices aggregate views about a company's value.

In practice, this gets dicey. A token's price reflects everything the market believes about the protocol: macro sentiment, unrelated news, and general market inefficiency. You might correctly predict that a specific decision will improve fundamentals and still lose money because the token moves against you for reasons entirely unrelated to that decision. This heavily disincentivizes the rational, informed trading the mechanism depends on.

There's also a subtler structural issue worth noting: if you set up a vault where tokens are priced against a KPI and that KPI improves (which is the whole goal), token holders redeem at a higher value. That means the protocol is shorting its own success metric.

Lastly, conditional futures are genuinely novel and can be confusing. There's no clean interface yet, making it a high-friction experience. MetaDAO even had to build a dedicated site, [futarchy.guide](https://futarchy.guide), just to walk people through the basics. Another hurdle for attracting traders.

## Where does this leave decision markets?

I don't think decision markets are fundamentally broken. I think the implementation challenge has been underestimated, and in some cases the wrong tools have been applied to the problem.

Two directions look genuinely promising.

The first is using AI forecasters to reduce the MVL floor. The most expensive part of running any prediction market is attracting informed traders. If AI forecasters can participate as automated market makers, synthesizing available information and providing initial price discovery, the minimum viable threshold drops substantially.

The second is returning to a more classical prediction market structure: rather than conditional futures on a noisy KPI, run combinatorial markets directly on the relevant question. "Will this specific KPI increase if we take this decision?" is a tractable prediction market question. It's less information-dense per market than the conditional futures approach (you give up some precision), but it's legible to traders and sidesteps most of the architecture problems described above.

More on both of these soon.
