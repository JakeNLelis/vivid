export function SimiuLoader() {
  return (
    <div className="simiu-loader" role="status" aria-live="polite" aria-label="Loading Simiu">
      <div className="simiu-loader__mark" aria-hidden="true">
        <span className="room-mark">“_</span>
      </div>
      <div className="simiu-loader__copy" aria-hidden="true">
        <span className="font-serif">simiu</span>
        <span className="simiu-loader__line" />
      </div>
      <span className="sr-only">Loading Simiu</span>
    </div>
  )
}
