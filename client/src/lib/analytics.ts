/**
 * Optimized Analytics Utility
 * Uses sendBeacon API for non-blocking tracking
 * Batches events to reduce network requests
 */

interface AnalyticsEvent {
  type: string;
  payload: Record<string, any>;
}

class OptimizedAnalytics {
  private eventQueue: AnalyticsEvent[] = [];
  private batchTimeout: NodeJS.Timeout | null = null;
  private readonly BATCH_DELAY = 5000; // 5 seconds
  private readonly BATCH_SIZE = 10;
  private readonly ENDPOINT = 'https://manus-analytics.com/api/send';

  /**
   * Queue an event for batched sending
   */
  public trackEvent(type: string, payload: Record<string, any> = {}) {
    this.eventQueue.push({ type, payload });

    // Send immediately if batch is full
    if (this.eventQueue.length >= this.BATCH_SIZE) {
      this.flush();
    } else if (!this.batchTimeout) {
      // Schedule batch send after delay
      this.batchTimeout = setTimeout(() => this.flush(), this.BATCH_DELAY);
    }
  }

  /**
   * Flush queued events using sendBeacon (non-blocking)
   */
  private flush() {
    if (this.eventQueue.length === 0) return;

    const events = this.eventQueue.splice(0, this.BATCH_SIZE);

    if (navigator.sendBeacon) {
      // Use sendBeacon for non-blocking, reliable delivery
      try {
        navigator.sendBeacon(
          this.ENDPOINT,
          JSON.stringify({
            type: 'batch',
            events,
            timestamp: new Date().toISOString(),
          })
        );
      } catch (e) {
        console.error('Analytics sendBeacon failed:', e);
      }
    } else {
      // Fallback to fetch with keepalive
      fetch(this.ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'batch',
          events,
          timestamp: new Date().toISOString(),
        }),
        keepalive: true,
      }).catch(e => console.error('Analytics fetch failed:', e));
    }

    // Clear batch timeout
    if (this.batchTimeout) {
      clearTimeout(this.batchTimeout);
      this.batchTimeout = null;
    }
  }

  /**
   * Flush remaining events on page unload
   */
  public flushOnUnload() {
    window.addEventListener('beforeunload', () => {
      if (this.eventQueue.length > 0) {
        this.flush();
      }
    });
  }
}

export const analytics = new OptimizedAnalytics();
analytics.flushOnUnload();
