---
title: How AI Will Save Prediction Markets
description: Why prediction markets need AI agents to become useful truth machines.
date: 2026-05-22
alsoOnUrl: https://x.com/0xjaniak/status/2058907417161646186
tags:
  - forecasting
---

<figure class="image-plate image-plate-block">
  <picture>
    <source srcset="/the-epsom-derby.jpg">
    <img src="/the-epsom-derby.jpg" alt="Racehorses galloping across a field in The Epsom Derby by Théodore Géricault">
  </picture>
  <figcaption>Théodore Géricault, <em>The Epsom Derby</em>, 1821.</figcaption>
</figure>

The first fully-developed formulation of general-purpose prediction markets originated with Robin Hanson's [Idea Futures (1990)](https://mason.gmu.edu/~rhanson/ideafutures.html), a technology "intended to aid the evolution of a wide range of ideas, from public policy to the nature of the universe" that "should be able to help us predict and understand our future". Hanson believes that these markets would even be able to solve one of Democracy's greatest weaknesses — "aggregating available information" — via a new type of governance: [Futarchy](https://mason.gmu.edu/~rhanson/futarchy.html)[^futarchy].

Dan Schwarz, writing in [Asterisk](https://asteriskmag.com/issues/14/are-prediction-markets-good-for-anything), puts the optimist's perspective directly:

> "For decades, prediction market optimists — and I count myself among them — have argued that once we build better markets and increase the supply of bettors, accuracy will improve, and we'll all be able to benefit from a new level of societal foresight."

Vitalik Buterin generalized this insight into an emerging category he called [Info Finance](https://vitalik.eth.limo/general/2024/11/09/infofinance.html): any mechanism that uses financial incentives to surface truth. He envisioned plenty of applications, from "distilling human judgement" to fixing scientific peer review.

At this point you might be thinking that this sounds idealistic to the point of utopian. But, compared to other sci-fi technologies — like [Terafab's](https://terafab.ai/) goal to harness the energy of the Earth, Sun, and galaxy — accurate prediction markets on important questions don't seem so lofty.

## The curse of football

Today, there are two multi-billion-dollar companies seriously championing this vision: [Kalshi](https://kalshi.com)[^kalshi] & [Polymarket](https://polymarket.com). Kalshi CEO Tarek Mansour pitches prediction markets as ["quintessential truth machines"](https://x.com/mansourtarek_/status/1906373977515372564). Polymarket CEO Shayne Coplan cites Futarchy as a [direct inspiration](https://nymag.com/intelligencer/article/is-polymarket-legal-politics-betting-shayne-coplan.html) and calls prediction markets ["the most accurate thing we have as mankind right now"](https://www.cbsnews.com/news/polymarket-ceo-shayne-coplan-online-betting-platform-60-minutes-transcript/).

So how's the truth machine doing? Mostly, it's predicting football games. Over the past year, roughly 65% of the volume on both platforms came from sports, and nearly half of *that* accounts for football alone ([Paradigm Predictions Dashboard, 2025](https://predictions.paradigm.xyz/)). And, I don't blame them. Neither does Vitalik:

> "IMO there is nothing fundamentally morally wrong with taking money from people with dumb opinions. But there still is something fundamentally 'cursed' about relying on this too much." — [Vitalik Buterin](https://x.com/VitalikButerin/status/2022669570788487542)

Unfortunately, if you take a scroll through either platform, the other markets aren't very interesting either. The next biggest categories were Crypto and Politics at ~12% each. Only ~1.2% of volume was in STEM markets ([Paradigm Predictions Dashboard, 2025](https://predictions.paradigm.xyz/)). The same pattern showed for open interest[^open-interest], a majority in Sports, Crypto, & Politics with only ~2% in STEM.

Looking at the numbers, it isn't surprising that Nevada's Carson City court [banned Kalshi's sports contracts](https://www.reviewjournal.com/business/casinos-gaming/carson-city-judge-orders-end-to-kalshi-sports-outcome-contracts-in-nevada-3733558/), Arizona [filed 20 criminal charges](https://www.coindesk.com/policy/2026/03/17/arizona-attorney-general-charges-kalshi-with-illegal-gambling-election-betting), and a Utah senator introduced a bill literally titled the ["Prediction Markets Are Gambling Act"](https://cointelegraph.com/features/federal-regulation-looms-states-prediction-markets).

## Markets need marks

> "If you are a bettor, then you can deposit to Polymarket, and for you it's a betting site. If you are not a bettor, then you can read the charts, and for you it's a news site." — [Vitalik Buterin, Info Finance](https://vitalik.eth.limo/general/2024/11/09/infofinance.html)

So why can't either platform just add more interesting markets?

The issue lies in age-old supply & demand. At a high level, prediction markets require **subsidizers**, to create markets, and **traders**, to bet on them.

The traders fall into four categories (adapted from [Whitaker & Mazlish](https://worksinprogress.co/issue/why-prediction-markets-arent-popular/); I added hedgers as a fourth): (1) **sharps**, (2) **gamblers**, (3) **savers**, and (4) **hedgers**.

(1) The sharps are sophisticated traders with better information, analytics, or modeling. They trade to profit from mispricing and push prices toward truth.

(2) The gamblers[^gamblers] trade for entertainment and are usually uninformed.

(3) The savers look to grow capital in positive-sum financial vehicles (pensions, 401(k)s, equities, etc.).

(4) The hedgers look to use the market to offload risk they already have (e.g., a farmer locking in harvest price with corn futures).

In practice, (3) savers don't exist in prediction markets because these markets are zero-sum for the traders. Every winning dollar has to have a losing dollar; prediction markets don't grow wealth, they redistribute it.

The (4) hedgers exist, but only for a narrow set of markets. People want to hedge the consequences of events (e.g., what an interest-rate decision does to bond prices), not the events themselves. And for that narrow set of markets where there is genuine hedging demand, traditional finance has likely already built a better product.[^fed-funds]

That leaves the (1) sharps and (2) gamblers. Unfortunately, gamblers prefer short time-horizon contracts and have specific tastes; they are willing to bet on whether their favorite sports team will win, but likely won't care to trade on the success of a scientific study.

Alas, according to the [no-trade theorem](https://en.wikipedia.org/wiki/No-trade_theorem), sharps won't trade markets without some uninformed participants.

And that's how you end up with a majority of prediction market volume and open interest on sports. A lack of savers and hedgers, the gamblers chasing short-term thrills, and the sharps following the gamblers. Merely opening a market on "Will this clinical trial show >50% efficacy?" will not attract informed traders.

## No free lunch

So what about the subsidizers? Why don't they just seed the liquidity for these markets themselves and attract the sharps?

The subsidizers have two main motivations: purchasing information and/or generating revenue from trading fees.

The former perspective paints subsidizers as ["info-buyers"](https://x.com/VitalikButerin/status/2022669570788487542), willing to pay up to some [value of information](https://en.wikipedia.org/wiki/Value_of_information) (VOI). On the other hand, the market itself requires a [minimum viable liquidity](https://fiftycentdollars.substack.com/p/minimum-viable-liquidity) (MVL) to attract enough informed trading activity to accurately deliver that information.

If the information the market is attempting to elicit is difficult to acquire, the MVL will be higher and the subsidies need to be greater to get an accurate answer. That, or the market needs to generate enough organic volume that liquidity follows.

For example, in early 2026, markets on the timing of US-Israel strikes on Iran [reached around $529 million in volume](https://www.nbcnews.com/business/consumer/insider-trading-prediction-markets-trump-rules-rcna265452). The thick liquidity on geopolitical markets ultimately attracted the most expensive sharps: insiders. Special forces soldier [Gannon Ken Van Dyke](https://www.france24.com/en/economy/20260424-information-leakage-to-our-adversaries-when-prediction-markets-spiral-out-of-control) placed a $30,000 bet on the capture of Venezuelan president Nicolás Maduro and walked away with over $400,000. He was later indicted by the DOJ in April.

However, as previously mentioned, such high volume markets don't always overlap with the "useful" markets that we'd want. This means that the only markets that a subsidizer is willing to create would be the ones where the VOI is greater than or equal to the MVL.

Regrettably, the situation for prediction markets gets dicier. The information elicited from these prediction markets is public, which forms a [free-rider problem](https://en.wikipedia.org/wiki/Free-rider_problem) for subsidizers. That information is also a single point probability (e.g., X% that this event occurs), while most info-buyers want ["pages of analysis"](https://worksinprogress.co/issue/why-prediction-markets-arent-popular/).

Regarding accuracy and efficiency (information-per-dollar), prediction markets don't always fit the bill.

For longer time-horizon contracts, even sharps are unwilling to trade unless expected returns clear the opportunity cost of capital. If a year-long contract offers a 5% expected edge but US treasuries are paying 6%, the sharp is better off in T-bills, and the mispricing remains unfixed.

What was thought to be the ["wisdom of the crowds"](https://en.wikipedia.org/wiki/The_Wisdom_of_Crowds) actually appears to be more of a "wisdom of the informed". [Gomez-Cram et al. (2026)](https://www.coindesk.com/markets/2026/04/26/only-3-of-traders-drive-prediction-markets-accuracy-not-the-crowd-study-finds) analyzed Polymarket's complete transaction history and found that ~3% of accounts qualify as "skilled winners" yet captured more than 30% of the total platform gains.

Why subsidize a market when you can just pay the informed traders directly?[^informed-traders]

## Economic AI agents

> "One technology that I expect will turbocharge info finance in the next decade is AI...many of the most interesting applications of info finance are on 'micro' questions: millions of mini-markets for decisions that individually have relatively low consequence. In practice, markets with low volume often do not work effectively...AI changes that equation completely, and means that we could potentially get reasonably high-quality info elicited even on markets with $10 of volume. Even if subsidies are required, the size of the subsidy per question becomes extremely affordable." — [Vitalik Buterin](https://vitalik.eth.limo/general/2024/11/09/infofinance.html)

Thankfully, there is a path that resolves this mess: the recent accelerated innovations in artificial intelligence are bringing with them a new type of economic agent.

AI agents will[^ai-properties] have various properties that make them interesting in the context of info finance:

* **Lower opportunity cost**: They are clone-able and can be parallelized, greatly reducing a single agent's opportunity cost. On the other hand, a human has a single copy of themselves, so their opportunity cost includes anything else they could be doing during that time.
* **Forced participation**: They can be forced to participate, no matter how "niche" or uninteresting the question or market is. This also means you can have them participate in paper-money or status markets as if they are real-money.
* **Don't leak proprietary data**: They can be given sensitive data and trusted to manipulate it without leaking it.
* **More rational**: While still imperfect, they respond rationally to new information and avoid emotional behavior, such as gambling.
* **Broadly technical**: They can easily become extremely knowledgeable in most domains.
* **Verbose**: They can give detailed reasoning for their predictions.

Some of these properties fill the failures of the other agents in prediction markets, forming a sharp-like agent that can be forced to participate for cheap.

Because the AI agents are broadly technical and have lower opportunity cost, the MVL for most markets will greatly decrease, reducing the gap between VOI and MVL. While this doesn't solve the free-rider problem for subsidizers, it helps alleviate it.

Furthermore, this new agent type opens the door for **private markets**. The AI agent can make private predictions, with verbose reasoning, on private data.

A few companies have tried this. [HP's BRAIN beat official sales forecasts by 40%](https://mason.gmu.edu/~rhanson/press/Business-2-0-Sept-12-06.htm). [Eli Lilly used internal markets to pick winning drug candidates](https://www.cfo.com/news/market-magic/677696/). Google ran [over 100 markets covering 350 predictions, with one-fifth of the company participating](https://asteriskmag.substack.com/p/the-death-and-life-of-prediction). The list goes on: Best Buy, Boeing, Chevron, Ford, GE, Goldman Sachs, Intel, Microsoft, Motorola, Qualcomm, Siemens.

In the end, almost none stuck. The reasons were less about the markets being inaccurate than about how they sat inside organizations. Per [Asterisk's post-mortem](https://asteriskmag.substack.com/p/the-death-and-life-of-prediction), internal champions moved on, managers preferred control and adjustability over raw accuracy, and some divisions actively preferred gatekeeping information. AI agents sidestep this. They don't require the active participation of hundreds of employees, and because the AI is doing the trading, the results can stay scoped to whoever needs them, so there's no leakage to competitors, other divisions, or the public.

These AI agents can automate these markets on the individual and institutional levels. The dream of markets to inform and steer everything might still be possible with AI in the mix, but there is no guarantee it keeps its current form.

A few major questions remain:

What happens when AI agents are the only participants in these markets?
What progress has been done in this direction? What are "AI Forecasters"?
Are markets even needed?
What other financial mechanisms do these AI agents enable?

[^futarchy]: Unfortunately, I think the name makes the idea seem a bit unserious. The "fut-" prefix comes from "futures" (as in the financial futures markets), and the "-archy" suffix is from Greek _arkhē_ meaning "rule" or "government." Literally "rule by futures markets". I'll admit I'm not great at sales, but you should see the look on people's faces when you start talking about a form of governance called "futarchy". We might need to think of something better for Hanson.

[^kalshi]: Literally the Arabic word for "everything" (كل شي).

[^open-interest]: "Open interest is a measure of total prediction market activity. It is equal to the total amount of money that gets paid out to winners when the markets reach resolution." — [Paradigm Predictions Dashboard, 2025](https://predictions.paradigm.xyz/)

[^gamblers]: Also known as "retail", "squares", or just "recreational bettors".

[^fed-funds]: "Kalshi's most popular contracts — Federal Reserve rate cuts — are already able to be traded in financial markets today, known as 'fed funds futures' markets." [Nick Whitaker](https://worksinprogress.co/issue/why-prediction-markets-arent-popular/) & [J Zachary Mazlish](https://worksinprogress.co/issue/why-prediction-markets-arent-popular/)

[^informed-traders]: For conciseness, I'll answer this in another post.

[^ai-properties]: Many of these properties are inherent or being developed for AI agents.
