---
layout: post
title: "A few notes on query engines"
tags: [research]
description: "Some scattered thoughts on how modern query engines trade off flexibility and speed."
---

One thing I keep coming back to in my research is how much of a query engine's design is really about deciding *where* to spend flexibility, and where to spend speed.

A few recurring themes:

1. **Vectorized execution** trades a bit of per-row flexibility for enormous throughput gains, by processing batches of rows through tight, branch-predictable loops instead of one row at a time.
2. **Late materialization** delays actually constructing wide rows until as late as possible in the plan, so intermediate operators only touch the columns they need.
3. **Adaptive execution** pushes some of these decisions to runtime — the engine watches how data actually behaves and re-plans instead of committing everything at compile time.

None of these ideas are new, but the interesting part (to me) is how differently each system chooses to combine them depending on its workload assumptions — OLAP systems, streaming engines, and HTAP systems all end up in different corners of this space even when they share a lot of the same building blocks.

```sql
-- a toy example of a query that stresses late materialization
SELECT customer_id, SUM(amount)
FROM orders
WHERE order_date > '2026-01-01'
GROUP BY customer_id;
```

More on this soon — I'm planning a short series digging into specific systems.

> This is a placeholder post generated while setting up the blog. Feel free to edit or delete it.
