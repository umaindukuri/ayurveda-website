import { useEffect } from 'react';

export interface AnalyticsEvent {
  type: 'calendar_click' | 'testimonial_view' | 'comparison_chart' | 'faq_search' | 'video_play' | 'booking_complete' | 'newsletter_signup';
  timestamp: number;
  metadata?: Record<string, any>;
}

const ANALYTICS_KEY = 'ayurveda_analytics';

export function useAnalytics() {
  const trackEvent = (eventType: AnalyticsEvent['type'], metadata?: Record<string, any>) => {
    const event: AnalyticsEvent = {
      type: eventType,
      timestamp: Date.now(),
      metadata,
    };

    // Get existing analytics
    const existing = localStorage.getItem(ANALYTICS_KEY);
    const events: AnalyticsEvent[] = existing ? JSON.parse(existing) : [];

    // Add new event
    events.push(event);

    // Keep only last 1000 events
    if (events.length > 1000) {
      events.shift();
    }

    // Save to localStorage
    localStorage.setItem(ANALYTICS_KEY, JSON.stringify(events));

    console.log(`[Analytics] ${eventType}`, metadata);
  };

  const getAnalytics = () => {
    const existing = localStorage.getItem(ANALYTICS_KEY);
    return existing ? JSON.parse(existing) as AnalyticsEvent[] : [];
  };

  const clearAnalytics = () => {
    localStorage.removeItem(ANALYTICS_KEY);
  };

  const getEventCounts = () => {
    const events = getAnalytics();
    const counts: Record<string, number> = {
      calendar_click: 0,
      testimonial_view: 0,
      comparison_chart: 0,
      faq_search: 0,
      video_play: 0,
      booking_complete: 0,
      newsletter_signup: 0,
    };

    events.forEach((event) => {
      if (event.type in counts) {
        counts[event.type]++;
      }
    });

    return counts;
  };

  const getConversionMetrics = () => {
    const events = getAnalytics();
    const counts = getEventCounts();
    
    // Calculate conversion rates
    const totalInteractions = Object.values(counts).reduce((a, b) => a + b, 0);
    const bookingRate = totalInteractions > 0 ? (counts.booking_complete / totalInteractions) * 100 : 0;
    const newsletterRate = totalInteractions > 0 ? (counts.newsletter_signup / totalInteractions) * 100 : 0;

    // Get events from last 7 days
    const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    const recentEvents = events.filter(e => e.timestamp > sevenDaysAgo);

    return {
      totalInteractions,
      bookingRate,
      newsletterRate,
      recentEventsCount: recentEvents.length,
      eventCounts: counts,
    };
  };

  return {
    trackEvent,
    getAnalytics,
    clearAnalytics,
    getEventCounts,
    getConversionMetrics,
  };
}
