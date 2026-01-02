
export interface WikiSummary {
  title: string;
  extract: string;
  thumbnail?: {
    source: string;
  };
  content_urls: {
    desktop: {
      page: string;
    };
  };
}

export interface LocationData {
  name: string;
  lat: number;
  lng: number;
  narration: string;
  historicalContext: WikiSummary;
}

export interface PopularDestination {
  name: string;
  query: string;
  icon: string;
}
