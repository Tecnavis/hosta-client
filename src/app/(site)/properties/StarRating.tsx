import { cn } from "@/lib/utils"
// import { RatingStars } from "./rating-stars"

export type Breakdown = {
  1: number
  2: number
  3: number
  4: number
  5: number
}

function sum(b: Breakdown) {
  return b[1] + b[2] + b[3] + b[4] + b[5]
}

function average(b: Breakdown) {
  const total = sum(b)
  if (!total) return 0
  return (1 * b[1] + 2 * b[2] + 3 * b[3] + 4 * b[4] + 5 * b[5]) / total
}

function percent(count: number, total: number) {
  return total ? (count / total) * 100 : 0
}

export function RatingBreakdown({
  breakdown,
  className,
  locale = "en-IN",
  showCounts = false,
}: {
  breakdown: Breakdown
  className?: string
  locale?: string
  showCounts?: boolean
}) {
  const total = sum(breakdown)
  const avg = average(breakdown)

  return (
    <section className={cn("w-full", className)} aria-labelledby="ratings-title">
      <h2 id="ratings-title" className="sr-only">
        Ratings and reviews
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] items-center gap-6">
        {/* Left: Average, like Play Store */}
        <div className="flex flex-col items-start md:items-center gap-2">
          <div className="text-5xl font-semibold leading-none">{avg.toFixed(1)}</div>
          {/* <RatingStars readOnly value={avg} size={20} /> */}
          <div className="text-sm text-muted-foreground">{total.toLocaleString(locale)} ratings</div>
        </div>

        {/* Right: Bars 5 -> 1 */}
        <div className="flex flex-col gap-2" aria-label="Rating distribution">
          {[5, 4, 3, 2, 1].map((star) => {
            const c = breakdown[star as 1 | 2 | 3 | 4 | 5]
            const pct = percent(c, total)
            return (
              <div key={star} className="flex items-center gap-3">
                <div className="w-5 shrink-0 text-sm text-muted-foreground">{star}</div>
                <div className="relative h-3 w-full rounded-full bg-gray-700">
                  <div
                    className="absolute left-0 top-0 h-3 rounded-full bg-sky-500"
                    style={{ width: `${pct}%` }}
                    aria-label={`${star} star bar`}
                  />
                </div>
                <div className="w-14 shrink-0 text-right text-xs tabular-nums text-muted-foreground">
                  {Math.round(pct)}%
                </div>
                {showCounts && (
                  <div className="w-24 text-right text-xs tabular-nums text-muted-foreground">
                    {c.toLocaleString(locale)}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
